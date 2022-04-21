const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const fs = require("fs");
// double check this
const { generateTeam } = require('./src/generate-page');

let teamArray = [];

// TODO: Create a function to initialize app
function build() {

  console.log("generating index.html")
  fs.writeFileSync("dist/index.html", generateTeam(teamArray ))

}
//creating the function
const start = () => {
  managerInq();
}


const promptUser = () => {
  inquirer.prompt([
    {
      type: "list",
      name: "userChoice",
      message: "would you like to add another member?",
      choices: [
        "engineer",
        "intern",
        "done"
      ]
    }
  ]).then(answers => {
    console.log(answers)
    switch (answers.userChoice) {
      case "engineer":
        engineerInq();
        break;
      case "intern":
        internInq();
        break;
      default:
        build();

    }
  })
}

 




const managerInq = () => {
  console.log("please build your team starting with the manager")
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the manager's name?"
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the manager's Id?"
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is your manager's email?"
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "what is the manager's officenumber?"
    }

  ]).then((managerAnswers) => {
    console.log("All the answers", managerAnswers);
    const manager = new Manager(managerAnswers.managerName, managerAnswers.managerId, managerAnswers.managerEmail, managerAnswers.managerOfficeNumber);
    console.log(manager);
    teamArray.push(manager);
    promptUser();
  })
}

// create engineerInc AND internInc like above 
const engineerInq = () => {
  console.log("Next add an Intern to your team")
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?"
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's Id?"
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's Email?"
    },
    {
      type: "input",
      name: "engineerSchool",
      message: "what is the engineer's Github username?"
    },
  ]).then((engineerAnswers) => {
    console.log("All the answers", engineerAnswers);
    const engineer = new Engineer(engineerAnswers.engineerName, engineerAnswers.engineerid, engineerAnswers.engineerEmail, engineerAnswers.engineerGithub);
    console.log(engineer);
    teamArray.push(engineer);
    promptUser();
  })
}
const internInq = () => {
  console.log("Next add an Intern to your team")
  inquirer.prompt([
    {
      type: "input",
      name: "internName",
      message: "What is the intern's name?"
    },
    {
      type: "input",
      name: "internId",
      message: "What id the intern's Id?"
    },
    {
      type: "input",
      name: "internEmail",
      message: "What is the intern's Email?"
    },
    {
      type: "input",
      name: "internSchool",
      message: "what school does the intern attend?"
    },
  ]).then((internAnswers) => {
    console.log("All the answers", internAnswers);
    const intern = new Intern(internAnswers.internName, internAnswers.internId, internAnswers.internEmail, internAnswers.internSchool);
    console.log(intern);
    teamArray.push(intern);
    promptUser();
  })
}

//managerInq()
//engineerInq()
//internInq()

//calling the function
start();