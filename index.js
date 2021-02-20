// Require dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const path = require('path');

// Constructors
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

//Empty Arrays
const teamArray = [];
const idArray = [];

// A function containing all of the other functions
function start() {
    console.log("Let's build your team!")

    // First the user is prompted with the questions to add a manager to the team
    function manager() {
        inquirer.prompt([{
            type: "input",
            name: "nameManager",
            message: "Please enter Manager's FIRST and LAST name.",
            default: "John Appleseed",
            validate: answer => {
                if (answer === "") {
                    return "Nothing entered. Please enter Manager's FIRST and LAST name."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "idManager",
            message: "Please enter Manager's ID.",
            default: "XXXXX",
            validate: answer => {
                if (answer === "") {
                    return "Nothing entered. Please enter Manager's 5 digit ID number."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "emailManager",
            message: "Please enter Manager's EMAIL address.",
            default: "john@company.com",
            validate: answer => {
                if (answer === "") {
                    return "Nothing entered. Please enter Manager's EMAIL address."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "telephoneManager",
            message: "Please enter Manager's TELEPHONE number.",
            default: "08 8123 1234",
            validate: answer => {
                if (answer === "") {
                    return "Nothing entered. Please enter Manager's TELEPHONE number."
                } else {
                    return true;
                }
            }
        }, ]).then(answers => {
            const manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.telephoneManager);
            teamArray.push(manager);
            idArray.push(answers.idManager);
            newMember();
        });
    };

    // After the Manager has been added, user needs a dropdown list of other types of team members to add
    function newMember() {
        inquirer.prompt([{
            type: "list",
            name: "employeeChoices",
            message: "Select what type of team member you'd like to add next:",
            choices: [
                "Engineer",
                "Intern",
                "Finish adding"
            ]
        }]).then(userAnswers => {
            switch (userAnswers.employeeChoices) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    generateHTML();
            }
        });
    }

    // If Engineer is selected, run this function
    function addEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "nameEngineer",
            message: "Please enter the Engineer's name.",
            default: "John Appleseed",
            validate: answer => {
                if (answer === "") {
                    return "No input. Please enter the Engineer's name."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "idEngineer",
            message: "Please enter the Engineer's ID number.",
            default: "XXXXX",
            validate: answer => {
                if (answer === "") {
                    return "No input. Please enter the Engineer's 5 digit ID number."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "emailEngineer",
            message: "Please enter the Engineer's EMAIL address.",
            default: "john@company.com",
            validate: answer => {
                if (answer === "") {
                    return "No input. Please enter the Engineer's EMAIL address."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "gitEngineer",
            message: "Please enter the Engineer's GITHUB username.",
            default: "johnappleseed",
            validate: answer => {
                if (answer === "") {
                    return "No input. Please enter the Engineer's GITHUB username."
                } else {
                    return true;
                }
            }
        }]).then(answers => {
            const engineer = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.gitEngineer);
            teamArray.push(engineer);
            idArray.push(answers.idEngineer);
            newMember();
        })
    }

    // If Inter is selected, run this function
    function addIntern() {
        inquirer.prompt([{
            type: "input",
            name: "nameIntern",
            message: "Please enter the Intern's NAME.",
            default: "John Appleseed",
            validate: answer => {
                if (answer === "") {
                    return "No input. Please enter the Intern's NAME."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "idIntern",
            message: "Please enter the Intern's ID number.",
            default: "XXXXX",
            validate: answer => {
                if (answer === "") {
                    return "No input. Please enter the Intern's ID number."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "emailIntern",
            message: "Please enter the Intern's EMAIL address.",
            default: "john@company.com",
            validate: answer => {
                if (answer === "") {
                    return "No input. Please enter the Intern's EMAIL address."
                } else {
                    return true;
                }
            }
        }, {
            type: "input",
            name: "schoolIntern",
            message: "Please enter the Intern's SCHOOL NAME.",
            default: "Harvard",
            validate: answer => {
                if (answer === "") {
                    return "Please enter the Intern's SCHOOL NAME."
                } else {
                    return true;
                }
            }
        }]).then(answers => {
            const intern = new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern);
            teamArray.push(intern);
            idArray.push(answers.idIntern);
            newMember();
        })
    }

    //Directory for output files
    const DIST_DIR = path.resolve(__dirname, 'dist')
    const outputPath = path.join(DIST_DIR, 'index.html');

    const render = require('./src/display.js');

    // After all members have been added, generate HTML file with information
    function generateHTML() {
        console.log("The computer elfs are creating your HTML file..... they like to place it in the dist folder")
        fs.writeFileSync(outputPath, render(teamArray));
    }
    manager();
}

start();