const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: `//internoProject`,
  transpileDependencies: true
});
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/styles/_vars.scss";`
      },
    }
  }
}
