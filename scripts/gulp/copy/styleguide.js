// Copy :: Fonts
'use strict';

var gulp = require('gulp');
var options = {
};

gulp.task('copy-styleguide', function() {
  gulp.src([
    'node_modules/styleguide/src/_includes/**/*'
  ]).pipe(gulp.dest('src/_includes', options));

  gulp.src([
    'node_modules/styleguide/src/_plugins/**/*'
  ]).pipe(gulp.dest('src/_plugins', options));

  gulp.src([
      'node_modules/styleguide/src/_templates/**/*'
    ]).pipe(gulp.dest('src/_templates', options));

  gulp.src([
    'node_modules/styleguide/src/images/**/*'
  ]).pipe(gulp.dest('src/images', options));

  gulp.src([
    'node_modules/styleguide/src/js/**/*'
  ]).pipe(gulp.dest('src/js', options));
});
