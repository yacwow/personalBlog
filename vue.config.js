// vue-cli的配置文件
module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://127.0.0.1:7000",
      },
    },
  },
  configureWebpack: require("./webpack.config"),
};
