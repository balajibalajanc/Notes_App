//Module Intialization
const gh=require('./utils');
const chalk=require('chalk');
const validator = require('validator');
const fs =require('fs');

const { connected } = require('process');
const { get_note } = require('./utils');


const rae = gh.get_note();
console.log(rae);

// console.log(validator.isEmail('balajibalajanci@gmail.com'))
// console.log(chalk.blue(validator.isURL('www.npm.com')));
// console.log(gh.get_note,validator.isEmail(gh.get_note)

// console.log(chalk.green.bold.inverse(gh.get_note()))

// console.log(process.argv[2])