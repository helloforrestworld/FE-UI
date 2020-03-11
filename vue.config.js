module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? 'https://helloforrestworld.github.io/FE-UI/dist/' : '',
  pages: {
    index: {
      entry: 'examples/main.js'
    }
  },
  productionSourceMap: false
}
