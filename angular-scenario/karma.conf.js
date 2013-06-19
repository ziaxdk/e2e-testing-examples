
module.exports = function(karma) {
  karma.configure({
    //frameworks: ['ng-scenario'],
    frameworks: ['ng-scenario'],

    files: [
      'spec/*.test.js'
    ],

    urlRoot: '/__karma/',

    autoWatch: true,

    proxies: {
      '/': 'http://localhost:8080/'
    },

    browsers: ['Chrome', 'Firefox'],

    reporters: ['junit', 'progress'],

    junitReporter: {
      // will be resolved to basePath (in the same way as files/exclude patterns)
      outputFile: 'test/test-results.xml'
    },

    //transports: ['websocket', 'flashsocket', 'htmlfile', 'xhr-polling', 'jsonp-polling'],
    transports: ['websocket', 'htmlfile', 'xhr-polling', 'jsonp-polling'],

    singleRun: true,

    plugins: [
      'karma-ng-scenario',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      //'karma-ie-launcher',

      'karma-junit-reporter'
    ]
  });
};