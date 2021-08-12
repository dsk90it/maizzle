// Production config : https://maizzle.com/docs/environments/#production

module.exports = {
  build: {
    templates: {
      destination: {
        path: "build_production",
      },
    },
  },
  inlineCSS: true,
  removeUnusedCSS: true,
};
