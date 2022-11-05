const CracoAlias = require("craco-alias");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "@components": "./src/components",
          "@pages": "./src/pages",
          "@utils": "./src/utils",
          "@assets": "./src/assets",
          "@hooks": "./src/hooks",
          "@stores": "./src/stores",
        },
      },
    },
  ],
};
