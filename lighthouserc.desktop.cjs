// Lighthouse CI, desktop preset. Same pages and thresholds as lighthouserc.cjs.
const { urls, assertions } = require('./lighthouserc.cjs');

module.exports = {
  ci: {
    collect: { staticDistDir: './dist', url: urls, numberOfRuns: 3, settings: { preset: 'desktop' } },
    assert: {
      assertMatrix: [
        { matchingUrlPattern: '.*', assertions },
        { matchingUrlPattern: '^(?!.*/dev/).*$', assertions: { 'categories:seo': ['error', { minScore: 0.95 }] } },
      ],
    },
    upload: { target: 'filesystem', outputDir: './.lighthouseci/desktop' },
  },
};
