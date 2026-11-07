import { test, expect, type Page } from '@playwright/test';

// Decline analytics up front so the consent banner does not change the page under test.
test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    try { localStorage.setItem('sd-analytics-consent', 'denied'); } catch {}
  });
});

/** Records every request URL the page makes. */
function track(page: Page) {
  const urls: string[] = [];
  page.on('request', (r) => urls.push(r.url()));
  return urls;
}

/** Cumulative layout shift observed so far (Chromium only; other engines return null). */
async function cls(page: Page): Promise<number | null> {
  return page.evaluate(
    () =>
      new Promise<number | null>((resolve) => {
        if (!PerformanceObserver.supportedEntryTypes?.includes('layout-shift')) return resolve(null);
        let sum = 0;
        new PerformanceObserver((l) => {
          for (const e of l.getEntries() as PerformanceEntry[] & { value: number; hadRecentInput: boolean }[]) if (!e.hadRecentInput) sum += e.value;
        }).observe({ type: 'layout-shift', buffered: true });
        setTimeout(() => resolve(sum), 300);
      }),
  );
}

/** Scrolls down in steps with standard DOM scrolling (mouse wheel events do not exist in mobile Safari). */
async function scrollDown(page: Page, px: number) {
  for (let y = 0; y < px; y += 600) {
    await page.evaluate(() => window.scrollBy(0, 600));
    await page.waitForTimeout(60);
  }
}

/** Phone-sized viewport (tablets legitimately get larger files for their larger, high-density screens). */
const isPhone = (page: Page) => (page.viewportSize()?.width ?? 1000) < 600;

const hasTestPage = async (page: Page) => (await page.goto('/dev/media/'))?.ok() ?? false;

test('pages are visually stable and the headline is visible immediately', async ({ page }) => {
  for (const path of ['/', '/destinations/fiji/', '/blog/maldives-vs-bali-luxury-surf-dive/', '/compare/maldives-vs-bali/']) {
    await page.goto(path);
    // The LCP headline must not start invisible (an opacity animation delays LCP).
    const opacity = await page.locator('h1').first().evaluate((el) => getComputedStyle(el).opacity);
    expect(Number(opacity), `${path} h1 opacity at load`).toBeGreaterThan(0.5);
    await scrollDown(page, 3000);
    await page.waitForTimeout(600);
    const shift = await cls(page);
    if (shift !== null) expect(shift, `${path} CLS`).toBeLessThan(0.1);
  }
});

test('every image reserves its space and only the LCP image is high priority', async ({ page }) => {
  for (const path of ['/', '/destinations/fiji/', '/blog/maldives-vs-bali-luxury-surf-dive/']) {
    await page.goto(path);
    const imgs = await page.locator('img').evaluateAll((els) =>
      els.map((i) => ({ w: i.getAttribute('width'), h: i.getAttribute('height'), lazy: i.loading === 'lazy', high: i.getAttribute('fetchpriority') === 'high' })),
    );
    for (const i of imgs) expect(i.w && i.h, `${path} image dimensions`).toBeTruthy();
    expect(imgs.filter((i) => i.high).length, `${path} priority images`).toBeLessThanOrEqual(1);
    for (const i of imgs.filter((x) => x.high)) expect(i.lazy).toBe(false);
  }
});

test('phones never download desktop-sized images', async ({ page }) => {
  test.skip(!isPhone(page), 'phone-only check');
  const urls = track(page);
  await page.goto('/destinations/fiji/');
  await page.waitForLoadState('load');
  await scrollDown(page, 6000);
  await page.waitForTimeout(800);
  const big = urls.filter((u) => /\/_media\/.*-(1600|2000)\.(avif|webp|jpg|png)$/.test(u));
  expect(big, 'no 1600px+ files on a phone').toEqual([]);
});

test('below-the-fold images are lazy and the hero is not', async ({ page }) => {
  await page.goto('/destinations/fiji/');
  const hero = page.locator('.hero img').first();
  if (await hero.count()) {
    expect(await hero.getAttribute('loading')).toBe('eager');
    expect(await hero.getAttribute('fetchpriority')).toBe('high');
  }
  const lazy = await page.locator('main img[loading="lazy"]').count();
  const all = await page.locator('main img').count();
  expect(lazy).toBeGreaterThanOrEqual(Math.max(0, all - 1));
});

test('analytics never loads before consent', async ({ page }) => {
  await page.addInitScript(() => localStorage.removeItem('sd-analytics-consent'));
  const urls = track(page);
  await page.goto('/');
  await page.waitForTimeout(1000);
  expect(urls.filter((u) => u.includes('googletagmanager'))).toEqual([]);
});

test('destination filters work from the URL and on change', async ({ page }) => {
  await page.goto('/destinations/?region=Indian%20Ocean');
  await expect(page.locator('#result-count')).toHaveText(/\d+ of \d+ destinations match/);
  await page.locator('select[name="region"]').selectOption('');
  await expect(page.locator('#result-count')).toHaveText(/Showing all \d+ destinations/);
  await page.locator('select[name="month"]').selectOption('january');
  await expect(page.locator('#result-count')).toHaveText(/\d+ of \d+ destinations match/);
});

test.describe('media components', () => {
  test('gallery loads thumbnails first and one large image on open', async ({ page }) => {
    const urls = track(page);
    test.skip(!(await hasTestPage(page)), 'build with MEDIA_TEST_PAGE=1 and fixtures');
    const gallery = page.locator('[data-sd-gallery]');
    await gallery.scrollIntoViewIfNeeded();
    await page.waitForTimeout(500);
    // Thumbnails are sized for the grid: never the large files a full-screen view needs.
    const before = urls.filter((u) => /fiji-0\d/.test(u) && /-(1600|2000|2600)\./.test(u));
    expect(before, 'no large gallery files before opening').toEqual([]);

    const seen = urls.length;
    await gallery.locator('.thumb').first().click();
    const dialog = gallery.locator('dialog');
    await expect(dialog).toBeVisible();
    await expect(dialog.locator('img')).toHaveJSProperty('complete', true, { timeout: 10_000 });
    const opened = urls.slice(seen).filter((u) => /fiji-0\d/.test(u));
    expect(new Set(opened.map((u) => u.replace(/-\d+\.\w+$/, ''))).size, 'opening loads only the viewed photo').toBeLessThanOrEqual(1);

    await page.keyboard.press('ArrowRight');
    await expect(dialog.locator('.count')).toHaveText(/^2 \//);
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
    await expect(gallery.locator('.thumb').first()).toBeFocused();
  });

  test('player video loads nothing until play, then a rendition that fits', async ({ page }) => {
    const urls = track(page);
    test.skip(!(await hasTestPage(page)), 'build with MEDIA_TEST_PAGE=1 and fixtures');
    const player = page.locator('[data-sd-video="player"]');
    await player.scrollIntoViewIfNeeded();
    await page.waitForTimeout(300);
    expect(urls.filter((u) => u.includes('/videos/reef-drift'))).toEqual([]);
    await player.locator('.play').click();
    await expect(player.locator('video source')).not.toHaveCount(0);
    const src = await player.locator('video source').first().getAttribute('src');
    if (isPhone(page)) expect(src, 'phone gets ≤720p').toMatch(/\/(480|720)\./);
  });

  test('background video respects reduced motion', async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: 'reduce' });
    const page = await ctx.newPage();
    const urls = track(page);
    test.skip(!(await hasTestPage(page)), 'build with MEDIA_TEST_PAGE=1 and fixtures');
    await page.waitForTimeout(800);
    expect(urls.filter((u) => u.includes('/videos/'))).toEqual([]);
    await ctx.close();
  });

  test('YouTube and map embeds load only on request', async ({ page }) => {
    const urls = track(page);
    test.skip(!(await hasTestPage(page)), 'build with MEDIA_TEST_PAGE=1 and fixtures');
    await scrollDown(page, 8000);
    await page.waitForTimeout(500);
    expect(urls.filter((u) => /youtube|ytimg|openstreetmap/.test(u))).toEqual([]);
    await expect(page.locator('iframe')).toHaveCount(0);
    await page.locator('[data-sd-vembed] .play').click();
    await expect(page.locator('[data-sd-vembed] iframe')).toHaveAttribute('src', /youtube-nocookie\.com\/embed\//);
    await page.locator('[data-sd-embed] button').click();
    await expect(page.locator('[data-sd-embed] iframe')).toHaveAttribute('src', /openstreetmap/);
  });

  test('affiliate links work without JavaScript', async ({ browser }) => {
    const ctx = await browser.newContext({ javaScriptEnabled: false });
    const page = await ctx.newPage();
    test.skip(!(await hasTestPage(page)), 'build with MEDIA_TEST_PAGE=1 and fixtures');
    const links = page.locator('a[data-affiliate]');
    expect(await links.count()).toBeGreaterThan(0);
    for (const l of await links.all()) {
      expect(await l.getAttribute('href')).toMatch(/^https:\/\//);
      expect(await l.getAttribute('rel')).toContain('sponsored');
    }
    await ctx.close();
  });
});
