#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold.blue(`\tWelcome to our simple calculator.\t`));

const answer = await inquirer.prompt([
  { message: "Enter Your First Number", type: "number", name: "firstNumber" },
  { message: "Enter Your Second Number", type: "number", name: "secondNumber" },
  {
    message: chalk.bold.bgBlue("Select any of the operator to perform operations."),
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);
// Conditional Statement
if (answer.operator === "Addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log(chalk.bold.red`Please Enter Valid Operator.`);
}//if select other than these operators ,so this print
console.log(chalk.bold.green`Thank You.`);

