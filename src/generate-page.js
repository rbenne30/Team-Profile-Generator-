const generateTeam = (team) => {
    console.log(team);
    // generates manager cards for html
    const generateManager = (manager) => {
        return `
        <div class = card>${manager.getRole()}
        <h4>${manager.getName()}</h4>;
    
        <li class = "Id" >${manager.getId()}</li>;
        <li class = "email">${manager.getEmail()}</li>;
        <li class = "office number">${manager.getOfficeNumber()}</li>
        </div>`;
    }

    // generates intern cards for html. Create generateIntern fucntion like above
    const generateIntern = (intern) => {
        return `
        <div class = card>${intern.getRole()}
        <h4>${intern.getName()}</h4>;
        <li>${intern.getId()}</li>;
        <li>${intern.getEmail()}</li>;
        <li>${intern.getSchool()}</li>
        </div>`;
    }

    // generates engineer cards for html, Create like above
    const generateEngineer = (engineer) => {
        return `
        <div class = card>${engineer.getRole()}
        <h4>${engineer.getName()}</h4>
        <li>${engineer.getId()}</li>;
        <li>${engineer.getEmail()}</li>;
        <li>${engineer.getGithub()}</li>
        </div>`;
    }

    let employeeCards = [];

    //let filteredManagers = team.filter(employee => employee.getRole() === "Manager");
    //let formatedManager = filteredManagers.map(generateManager(manager));

    //filters the teamArray for all managers and creates employeeCards for them
    employeeCards.push(
        team.filter(employee => employee.getRole() === "Manager")
            .map(manager => generateManager(manager))
    )

    // create filter for intern as well
    employeeCards.push(team.filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)))

    //create filter for engineer
    employeeCards.push(team.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)))

    //include "my team" banner before the employee cards
    return `<!DOCTYPE html>
       <html lang="en">
       <head>
           <meta charset="UTF-8">
           <meta http-equiv="X-UA-Compatible" content="IE=edge">
           <meta name="viewport" content="width=device-width, initial-scale=1.0">
           <title>TeamProfile Generator</title>
           <link rel="stylesheet" type="text/css" href="./style.css">
       </head>
       <body>
    <header> "MY TEAM" </header>

           ${employeeCards}
        
       </body>
       </html>`;//add the actual html format in front of this back tick at the end 
}
module.exports = { generateTeam }