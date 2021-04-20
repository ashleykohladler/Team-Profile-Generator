//*****CLOBAL VARIABLES */

const fs = require('fs');

const generateHTML = require('./src/generateHTML');

const inquirer = require('inquirer');

const Manager = require("./lib/Manager");

const teamMembers = [];

const questionsManager = [{
    type:"input",
    name:"name",
    message: "What is the team manager's name?",
},{
    type:"input",
    name:"id",
    message: "What is the team manager's id?",
},{
    type:"input",
    name:"email",
    message: "What is the team manager's email?",
},{
    type:"input",
    name:"number",
    message: "What is the team manager's office number?",
},{
    type:"list",
    name:"members",
    message: "Do you want to add a team member? If yes, select their role.",
    choices: ["Engineer", "Intern", "I'm done."],
}]

/** Function Declarations */

const askEngineer =() =>{
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?",
        },{
            type: "input",
            name: "id",
            message: "What is your engineer's id?",
        },{
            type: "input",
            name: "email",
            message: "What is your engineer's email?",
        },{
            type: "input",
            name: "GitHub",
            message: "What is your engineer's GitHub user name?",
        },{
            type:"list",
            name:"members",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm done."],
        }

    ])
}

const askIntern = () =>{
    inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?",
        },{
            type: "input",
            name: "id",
            message: "What is your intern's id?",
        },{
            type: "input",
            name: "email",
            message: "What is your intern's email?",
        },{
            type: "input",
            name: "school",
            message: "What is your intern's school?",
        },{
            type:"list",
            name:"members",
            message: "Which type of team member would you like to add?",
            choices: ["Engineer", "Intern", "I'm done."],
        }

    ])

}

const init = () => {

    inquirer.prompt(questionsManager).then((data) =>{

        teamMembers.push(new Manager(data.name, data.id, data.email, data.officeNumber))
        if(data.members === "engineer"){
            askEngineer();
        }
        else if(data.members === "Intern"){
            askIntern();
        }
        else{
            //end function here and generateHTML
            generateHTML(teamMembers);
        }
    })
}
 

/**Function Calls */
init();