'use strict';

var baseDir = 'client';

module.exports = {

  //This is the list of file patterns to load into the browser during testing.
  files: [
    baseDir + '/src/vendor/angular/angular.js',
    baseDir + '/src/vendor/angular-mocks/angular-mocks.js',
    baseDir + '/src/vendor/angular-ui-router/release/angular-ui-router.js',
    baseDir + '/src/vendor/angular-bootstrap/ui-bootstrap.min.js',
    baseDir + '/src/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
    baseDir + '/src/vendor/angular-translate/angular-translate.js',
    baseDir + '/src/vendor/angular-translate-loader-partial/angular-translate-loader-partial.js',
    baseDir + '/src/vendor/lodash/lodash.js',
	baseDir + '/src/app/**/*.module.js',
    baseDir + '/src/app/**/*.js',
    baseDir + '/src/app/app.js',
    baseDir + '/src/**/*.html',
    baseDir + '/test/unit/**/*.spec.js'
  ],

  //used framework
  frameworks: ['jasmine'],

  plugins: [
    'karma-chrome-launcher',
    'karma-phantomjs-launcher',
    'karma-jasmine',
    'karma-coverage',
    'karma-html-reporter',
    'karma-mocha-reporter',
    'karma-ng-html2js-preprocessor'
  ],

  preprocessors: {
    '**/client/src/app/**/*.js': 'coverage',
    '**/client/src/**/*.html': ['ng-html2js']
  },

  reporters: ['mocha', 'html', 'coverage'],

  coverageReporter: {
    type: 'html',
    dir: baseDir + '/test/unit-results/coverage',
    file: 'coverage.html'
  },

  htmlReporter: {
    outputDir: baseDir + '//test/unit-results/html'
  },

  ngHtml2JsPreprocessor: {
    moduleName: 'templates',
    cacheIdFromPath : function(filepath) {
      return filepath.substr(filepath.indexOf("appname")+8);
    }
  },

  logLevel: 'info',

  urlRoot: '/__test/',

  //used browsers (overriding in some gulp task)
  browsers: ['PhantomJS']
};
