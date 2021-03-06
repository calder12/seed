// Watch :: Jekyll
'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');
var gutil = require('gulp-util');
var options = require('./_options');
var path = require('path');

gulp.task('watch-jekyll', function () {
  gulp.watch([
    '_config.yml',
    'prod-config/_config.yml',

    global.config.src + '/**/*.{html,md,xml}',

    '!' + global.config.src + '/.jekyll-metadata',
    '!.jekyll-metadata'
  ], options, ['build-jekyll-incremental'])
  .on('change', function(event) {
    var file = event.path
      .replace(global.path, '')
      .replace('/src', '');
    gutil.log(file + ' was', gutil.colors.green('updated'));
  });
});
