// Base :: Verify :: Dependencies
'use strict';

var gulp = require('gulp');
var isOnline = require('is-online');
var runSequence = require('run-sequence');

gulp.task('verify-dependencies', function(callback) {
  console.log('Verifying dependencies!');
  isOnline(function(err, online) {
    if (online) {
      runSequence(
        'verify-bundler',
        'verify-gems',
        'verify-npm',
        'verify-bower',
        callback
      );
    }
    else {
      runSequence(
        'verify-skipped',
        callback
      );
    }
  });
});
