'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.red('TypeScript-Angular SPA') + ' generator!'
    ));

    // var prompts = [{
    //   type: 'confirm',
    //   name: 'someAnswer',
    //   message: 'Would you like to enable this option?',
    //   default: true
    // }];

    // this.prompt(prompts, function (props) {
    //   this.props = props;
    //   // To access props later use this.props.someAnswer;

    //   done();
    // }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('home.html'),
      this.destinationPath('home.html')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
