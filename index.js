#!/usr/bin/env node

var angularFilesort = require('gulp-angular-filesort');
var path = require('path');

var yargsInstance = require('yargs')
  .usage('Usage: $0 <command> [options]')
  .demand(1)
  .example('$0 ./src/**/*.js', 'Sort all angular files')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2016');

var argv = yargsInstance.argv;
var g = path.resolve(argv._[0]);

var vfs = require('vinyl-fs');
var through2 = require('through2');

function logFile() {

  return through2.obj(function (file, enc, done) {
    console.log(file.path);
    this.push(file);
    done();
  });
}

vfs.src([g])
  .pipe(angularFilesort())
  .pipe(logFile());
