const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  pages: {
    index: {
      entry: "examples/main.ts",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  //新增一个~指向components目录，方便示例代码中使用
  chainWebpack: (config) => {
    config.resolve.alias.set("~", path.resolve("components"));
  },
});
