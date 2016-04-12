# generator-typescript-angular-spa [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A template for an Angular-TypeScript single-page application.

## Installation

First, install [Yeoman](http://yeoman.io) and generator-typescript-angular-spa using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-typescript-angular-spa
```

Then generate your new project:

```bash
yo typescript-angular-spa
```

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## GulpJS
This project uses [GulpJS](https://gulpjs.com) to handle build tasks such as the compilation of TypeScript to JavaScript and to minify/uglify JavaScript.
To reinstall the Gulp dependencies, run `npm install` from your terminal or command line. This will download all dependecies listed in `package.json` to a `node_modules` directory. 
You will need to run `npm install` in both the root of the Yeomen generator directory and in the `generators/app/` directory.

### Gulp Tasks
Gulp tasks are located in the root `gulpfile.js` and the `generators/app/gulpfile.js` files. The first is for the Yeoman project, the latter for the TypeScript-Angular project.
```
gulp ts // compiles TypeScript in ts dir

gulp min // uglifies and combines all JavaScript files into www/js dir
``` 

## License

MIT © [John Bonfardeci](https://github.com/jbonfardeci)


[npm-image]: https://badge.fury.io/js/generator-typescript-angular-spa.svg
[npm-url]: https://npmjs.org/package/generator-typescript-angular-spa
[travis-image]: https://travis-ci.org/jbonfardeci/generator-typescript-angular-spa.svg?branch=master
[travis-url]: https://travis-ci.org/jbonfardeci/generator-typescript-angular-spa
[daviddm-image]: https://david-dm.org/jbonfardeci/generator-typescript-angular-spa.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jbonfardeci/generator-typescript-angular-spa
