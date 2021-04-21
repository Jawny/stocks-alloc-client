// https://stackoverflow.com/a/63605572/14258624

const path = require("path");

module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@src/*": path.resolve(__dirname, "src/"),
      "@api": path.resolve(__dirname, "src/api"),
      "@api/*": path.resolve(__dirname, "src/api/*"),
      "@components": path.resolve(__dirname, "src/components"),
      "@components/*": path.resolve(__dirname, "src/components/*"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@contexts/*": path.resolve(__dirname, "src/contexts/*"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@providers/*": path.resolve(__dirname, "src/providers/*"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@utils/*": path.resolve(__dirname, "src/utils/*"),
    },
  };

  return config;
};
