module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '/job-listings-app/' : '/',
    css: {
      loaderOptions: {
        scss: {
          additionalData: `@import "~@/main.scss";`
        },
      }
    }
  }