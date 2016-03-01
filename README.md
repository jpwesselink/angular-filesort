# angular-filesort

> Automatically sort AngularJS app files depending on module definitions and usage.

CLI tool based on the excellent [gulp-angular-filesort](https://www.npmjs.com/package/gulp-angular-filesort).

## Why?

If you'd like to sort your angular files on the command line rather than using Gulp,
you might want to give this a try.

## How?

Under the hood it uses `gulp-angular-filesort`, why reinvent the wheel?

## Installation

```
npm install -g angular-filesort
```

> On some setups you might have to prefix with `sudo`.

## Usage

### Specification


```
$ angular-filesort '{glob}'
```

> Yes, quote your glob using a globbing to prevent shells to expand the globs.

### Example

```
$ pwd
/Users/you/angular-project
$ angular-filesort './app/**/!(*spec).js'
/Users/you/angular-project/app/my-module.js
/Users/you/angular-project/app/z.js
/Users/you/angular-project/app/foo-service.js
```
