module.exports = {
    publicPath: '/job-listings-app/',
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/main.scss";`
        },
      }
    }
  }