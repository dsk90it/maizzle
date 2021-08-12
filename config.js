// Development config : https://maizzle.com/docs/environments/#local

module.exports = {
  build: {
    browsersync: {
      open: true,
    },
    templates: {
      source: "src/templates",
      destination: {
        path: "build_local",
      },
      assets: {
        source: "src/images",
        destination: "images",
      },
    },
  },
};
