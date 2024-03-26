#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first Number", type: "number", name: "firstnumber" },
    { message: "Enter Second Number", type: "number", name: "Secondnumber" },
    {
        message: "select one of the operation to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "subtraction", "multiplication", "dividision"],
    },
]);
//condition statment
if (answer.operator === "Addition") {
    console.log(answer.firstnumber + answer.Secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.Secondnumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnumber * answer.Secondnumber);
}
else if (answer.operator === "dividision") {
    console.log(answer.firstnumber / answer.Secondnumber);
}
else
    (console.log("Please valid operator"));
