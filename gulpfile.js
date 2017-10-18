'use strict';

var config = require('./build/build.config.js');
var karmaConfig = require('./build/karma.config.js');
var protractorConfig = require('./build/protractor.config.js');
var gulp = require('gulp');
var exec = require('gulp-exec');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var pkg = require('./package');
var karma = require('karma').server;
var del = require('del');
var _ = require('lodash');
/* jshint camelcase:false*/
var webdriverStandalone = require('gulp-protractor').webdriver_standalone;
var webdriverUpdate = require('gulp-protractor').webdriver_update;
var connect = require('connect');
var serveStatic = require('serve-static');

//update webdriver if necessary, this task will be used by e2e task
gulp.task('webdriver:update', webdriverUpdate);

// run unit tests and watch files
gulp.task('tdd', function(cb) {
  karma.start(_.assign({}, karmaConfig, {
    singleRun: false,
    action: 'watch',
    browsers: ['PhantomJS']
  }), cb);
});

// run unit tests with travis CI
gulp.task('travis', ['build'], function(cb) {
  karma.start(_.assign({}, karmaConfig, {
    singleRun: true,
    browsers: ['PhantomJS']
  }), cb);
});

// optimize images and put them in the dist folder
gulp.task('images', function() {
  return gulp.src(config.images)
    .pipe($.imagemin({
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest(config.dist + '/assets/images'))
    .pipe($.size({
      title: 'images'
    }));
});

//generate angular templates using html2js
gulp.task('templates', function() {
  return gulp.src(config.tpl)
    .pipe($.changed(config.tmp))
    .pipe($.html2js({
      outputModuleName: 'templates',
      base: 'client',
      useStrict: true
    }))
    .pipe($.concat('templates.js'))
    .pipe(gulp.dest(config.tmp))
    .pipe($.size({
      title: 'templates'
    }));
});

//generate css files from scss sources
gulp.task('sass', function() {
  return gulp.src(config.mainScss)
    .pipe($.sass())
    .on('error', $.sass.logError)
    .pipe(gulp.dest(config.tmp))
    .pipe($.size({
      title: 'sass'
    }));
});

//build files for creating a dist release
//right now not using jshint or test:unit
gulp.task('build:dist', ['clean'], function(cb) {
  runSequence(['build', 'copy', 'copy:assets', 'copy:node_modules', 'images'], 'html', cb);
});

//build files for development
gulp.task('build', ['clean'], function(cb) {
  runSequence(['sass', 'templates'], cb);
});

//generate a minified css files, 2 js file, change their name to be unique, and generate sourcemaps
gulp.task('html', function() {
  var assets = $.useref.assets({
    searchPath: '{build,client}'
  });

  return gulp.src(config.index)
    .pipe(assets)
    .pipe($.sourcemaps.init())
    .pipe($.if('**/*main.js', $.ngAnnotate()))
    .pipe($.if('*.js', $.uglify({
      mangle: false,
    })))
    .pipe($.if('*.css', $.csso()))
    .pipe($.if(['**/*main.js', '**/*main.css'], $.header(config.banner, {
      pkg: pkg
    })))
    .pipe($.rev())
    .pipe(assets.restore())
    .pipe($.useref())
    .pipe($.revReplace())
    .pipe($.if('*.html', $.minifyHtml({
      empty: true
    })))
    .pipe(gulp.dest(config.dist))
	.pipe($.sourcemaps.write())
    .pipe($.size({
      title: 'html'
    }));
});

//copy assets to dist folder
gulp.task('copy:assets', function() {
  return gulp.src(config.assets, {
      dot: true
    }).pipe(gulp.dest(config.dist + '/assets'))
    .pipe($.size({
      title: 'copy:assets'
    }));
});

//copy code to dist folder
gulp.task('copy', function() {
  return gulp.src([
      config.base + '/**/*'
    ]).pipe(gulp.dest(config.dist))
    .pipe($.size({
      title: 'copy'
    }));
});

//copy node_modules to dist folder
//the four recursive copies under gulp.src does NOT recursively copy,
//so an extra gulp-exec was added to make sure all node_modules are copied
//to build/dist/node_modules.  Notice the "." at the end of the source node_modules,
//this handles hidden files and folders.
//The exec is only expected to work on a Linux
//server because the src/dest copy works fine in a Windows environment (a bug in gulp?)
//so when erroring out in Windows, that is ok
gulp.task('copy:node_modules', function() {
return gulp.src([
      'node_modules/**/*',
      'node_modules/**/.*',
      'node_modules/.**/*',
      'node_modules/.**/.*'
  ],{base:'.'})
  .pipe(gulp.dest(config.dist + '/node_modules/'))
  .pipe(exec('cp -R node_modules/. build/dist/node_modules/', function
              (err, stdout, stderr) {
                console.log(stdout);
                console.log(stderr);
              }))
      ;
});

//clean temporary directories
gulp.task('clean', del.bind(null, [config.dist, config.tmp]));

//lint files
gulp.task('jshint', function() {
  return gulp.src(config.js)
    .pipe(reload({
      stream: true,
      once: true
    }))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

/* tasks supposed to be public */


//default task
gulp.task('default', ['serve', 'ngdocs'], function (cb){
  var app = connect().use(serveStatic('./client/docs'));
  app.listen(8000);
  cb();
  console.log('Server started on http://localhost:8000');
}); //

//run unit tests and exit
gulp.task('test:unit', ['build'], function(cb) {
  karma.start(_.assign({}, karmaConfig, {
    singleRun: true
  }), cb);
});

// Run e2e tests using protractor, make sure serve task is running.
gulp.task('test:e2e', ['webdriver:update'], function() {
  return gulp.src(protractorConfig.config.specs)
    .pipe($.protractor.protractor({
      configFile: 'build/protractor.config.js'
    }))
    .on('error', function(e) {
      throw e;
    });
});

//run the server,  watch for file changes and redo tests.
gulp.task('serve:tdd', function(cb) {
  runSequence(['serve', 'tdd'], cb);
});

//run the server after having built generated files, and watch for changes
gulp.task('serve', ['build'], function() {
  browserSync({
    notify: false,
    logPrefix: pkg.name,
    ghostMode: false,
    server: ['build/dist', 'client'],
    browser: ['google chrome']
  });

  gulp.watch(config.html, reload);
  gulp.watch(config.scss, ['sass', reload]);
  gulp.watch(config.js, ['jshint']);
  gulp.watch(config.tpl, ['templates', reload]);
  gulp.watch(config.assets, reload);
});

//run the app packed in the dist folder
gulp.task('serve:dist', function() {
  browserSync({
    notify: false,
    ghostMode: false,
    server: [config.dist]
  });
});

//ngdocs gulp task
gulp.task('ngdocs', [], function () {
  var gulpDocs = require('gulp-ngdocs');
  var options = {
    startPage: '/api',
    title: "Codelab Docs",
    titleLink: "/api"
  };
  return gulp.src('client/src/app/**/*.js')
   .pipe(gulpDocs.process(options))
   .pipe(gulp.dest('./client/docs'));
});
