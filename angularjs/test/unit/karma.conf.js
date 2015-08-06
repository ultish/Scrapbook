// Karma configuration
// Generated on Thu Jul 02 2015 13:35:53 GMT+0900 (JST)

module.exports = function(config) {
  config.set({

    //preproessors: {
    //  '../src/scripts/controllers/**/*.ts': ['typescript'],
    //  '../src/scripts/*.ts': ['typescript'],
    //  '*.ts': ['typescript']
    //},
    //typescriptPreprocessor: {
    //  // options passed to the typescript compiler
    //  options: {
    //    sourceMap: false, // (optional) Generates corresponding .map file.
    //    target: 'ES5', // (optional) Specify ECMAScript target version: 'ES3' (default), or 'ES5'
    //    module: 'amd', // (optional) Specify module code generation: 'commonjs' or 'amd'
    //    noImplicitAny: true, // (optional) Warn on expressions and declarations with an implied 'any' type.
    //    noResolve: true, // (optional) Skip resolution and preprocessing.
    //    removeComments: true // (optional) Do not emit comments to output.
    //  },
    //  // extra typing definitions to pass to the compiler (globs allowed)
    //  typings: [
    //    '../src/scripts/vendor_def/tsd.d.ts'
    //  ],
    //  // transforming the filenames
    //  transformPath: function(path) {
    //    return path.replace(/\.ts$/, '.js');
    //  }
    //},

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/scripts/vendor_js/angular.js',
      'src/scripts/vendor_js/angular-mocks.js',
      'src/scripts/vendor_js/jquery.js',
      'src/scripts/vendor_js/angular-sanitize.js',
      'src/scripts/vendor_js/ui-bootstrap-tpls.js',
      'src/scripts/vendor_js/angular-ui-router.js',
      'src/scripts/vendor_js/*.js',
      'dist/assets/scripts/stanby-app.js',
      'dist/assets/scripts/user-page.js',


      //'dist/assets/scripts/signup-page.js',
      //'dist/assets/scripts/stanby-app.js',
      //'../src/scripts/controllers/**/*.ts',
      //'../src/scripts/stanby-app.ts',
      'test/unit/**/*Spec.js'
    ],


    // list of files to exclude
    exclude: [
      'src/scripts/vendor_js/*.min.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
      exitOnResourceError: true
    }


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: true
  })
}
