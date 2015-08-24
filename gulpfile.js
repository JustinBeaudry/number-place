'use strict';

var _ = require('lodash');
var gulp = require('gulp');
var path = require('path');
var config = require('./config');

// combine all the gulp tasks
var tasks = require('indeks').index(path.join(__dirname, 'gulp'));

_.values(tasks).forEach(function(task) {
  task(gulp, config);
});

process.on('uncaughtException', function(err) {
  console.log(err);
  console.log('\nStacktrace:\n');
  console.log(err.stack);
  process.exit(1);
});

process.on('exit', function() {
  if (gulp.fail) {
    // return non-zero exit code
    process.exit(1);
  }
});
