#! /uer/bin/env node

import inquirer from "inquirer";
// 1. computer will generate a random number
// 2. user input gor guessingf number
// 3. compare user input of guessing number 
const randomNumber = Math.floor(Math.random() * 6 +1);
const answers = await inquirer.prompt([{
name :"userGuessedNumber",
type:"number",
message:"Please guess number between 1 to 6", 
} ,
])
if(answers.userGuessedNumber=== randomNumber){
    console.log("Congtratulation you guessed right number");
    
} else{
    console.log("You guessed wrong number");
    
}