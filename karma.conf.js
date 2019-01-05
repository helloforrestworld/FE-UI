module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon-chai'],

    client: {
      chai: {
        includeStack: true
      }
    },

    files: [
      'dist/**/*.test.js',
      'dist/**/*.test.css'
    ],

    exclude: [],

    preprocessors: {},

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['Chrome'],

    singleRun: false,

    concurrency: Infinity
  })
}