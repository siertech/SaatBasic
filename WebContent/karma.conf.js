//Configurações do Karma para utilização na Integração contínua

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
     'bower_components/jquery/jquery.min.js',   
     'bower_components/angular/angular.min.js',   
     'bower_components/angular-animate/angular-animate.min.js',     
     'bower_components/angular-aria/angular-aria.min.js',   
     'bower_components/angular-cookies/angular-cookies.min.js',   
     'bower_components/angular-messages/angular-messages.min.js',   
     'bower_components/angular-mocks/angular-mocks.js',  
     'bower_components/angular-route/angular-route.min.js',  
     'bower_components/angular-sanitize/angular-sanitize.min.js',    
     'bower_components/angular-material/angular-material.min.js',     
     'bower_components/stapiweb/js/st-api-lib-base.js',
     'bower_components/stapiweb/js/st-api.js',
     'bower_components/stapiweb/js/st-api-templates.js',
     'bower_components/angular-mocks/angular-mocks.js',
     'dev/app-config.js',
     'dev/app/**/*.js',
     "dev/**/*.html",
   
    ],
    
    // list of files to exclude
    exclude: [
    	  'bower_components/**/index.js',
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    	'dev/**/*.html': ['ng-html2js']
    	
     },
     
     
     ngHtml2JsPreprocessor: {
    	 stripPrefix: 'dev/',
         moduleName: 'adm.templates',
      
       },
     
    plugins: [
              'karma-jasmine',
              'karma-chrome-launcher',
              'karma-spec-reporter',
              'karma-ng-html2js-preprocessor',
              'karma-browserifast'
          ],


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    //
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    captureTimeout: 60000,
    

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  })
}
