// Copy :: Fonts
'use strict';

var gulp = require('gulp');

gulp.task('copy-fonts', function() {
  return gulp.src([
      global.config.src + '/fonts/**/*'
    ])
    .pipe(gulp.dest(global.config.dest + '/fonts/'));
});
