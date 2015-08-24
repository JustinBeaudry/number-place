'use strict';

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var sourcemaps = require('gulp-sourcemaps');
var gutil = require('gulp-util');
var path = require('path');

module.exports = function(gulp, config) {

  gulp.task('browserify', function() {
    var b = browserify({
      entries: path.resolve(config.bundle.entry),
    })
  });
};

