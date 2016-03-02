#!/usr/bin/env node

var gulpAngularFilesort = require('gulp-angular-filesort');

var argv = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .demand(1)
  .example('$0 \'./src/**/*.js\'', 'Sort all Angular files (yes, in quotes)')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2016')
  .argv;

var vfs = require('vinyl-fs');
var through2 = require('through2');

vfs.src(argv._[0])
  .pipe(gulpAngularFilesort())
  .pipe(function () {
    return through2.obj(function (file, enc, done) {
      process.stdout.write(file.path + '\n');
      this.push(file);
      done();
    });
  }());
