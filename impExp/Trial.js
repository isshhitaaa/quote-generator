const chalk= require("chalk");
const validator = require("validator");
// console.log("hello ");
// console.log(chalk.bgGreen("success"));
const res= validator.isEmail("ishu")
console.log(res);