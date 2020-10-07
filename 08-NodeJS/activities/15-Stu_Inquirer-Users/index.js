var inquirer = require("inquirer");
var fs = require("fs")
inquirer
    .prompt([{
            type: "input",
            message: "What is your user name?",
            name: "username"
        },
        {
            type: "checkbox",
            message: "What lenguages do you speak?",
            choices: ["english", "spanish"],
            name: "lenguages"
        },
        {
            type: "input",
            message: "What is your prefered lenguage?",
            name: "communication"
        }
    ])
    .then(function(response) {
        console.log(response)



        fs.writeFile("./new.JSON", JSON.stringify(response, null, 4), function(err) {
            if (err) {
                return console.log(err);
            }

            return inquirer;
        })


    });