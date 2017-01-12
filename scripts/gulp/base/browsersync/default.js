// Base :: BrowserSync :: Default
'use strict';

var gulp = require('gulp');
var bsWatch = require('./watch');

gulp.task('browsersync', function() {
  global.browserSync.init({
    notify: false,
    open: false,
    port: global.config.port,
    server: {
      baseDir: './'
    }
  });

  // Watch
  bsWatch();
});
