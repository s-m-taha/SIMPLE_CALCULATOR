#! /usr/bin/env node 
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "ENTER YOUR FIRST NUMBER :",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "ENTER YOUR SECOND NUMBER :",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "SELECT ONE OF THE OPERATOR TO PERFORM TASK :",
        type: "list",
        name: "operation",
        choices: ["addition", "substraction", "division", "multiplication"],
    }
]);
if (answer.operation === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operation === "substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operation === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.operation === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else {
    console.log("please enter valid option");
}
