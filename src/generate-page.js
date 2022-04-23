const generateTeam = (team) => {
    console.log(team);
    // generates manager cards for html
    const generateManager = (manager) => {
        return `
        <div>${manager.getName()}</div>
    
        <div>${manager.getId()}</div>;
        <div>${manager.getEmail()}</div>;
        <div>${manager.getOfficeNumber()}</div>
        
        `;
    }

    // generates intern cards for html. Create generateIntern fucntion like above
    const generateIntern = (intern) => {
        return `
        <div>${intern.getName()}</div>
        <div>${intern.getId()}</div>;
        <div>${intern.getEmail()}</div>;
        <div>${intern.getSchool()}</div>`;
    }

    // generates engineer cards for html, Create like above
    const generateEngineer = (engineer) => {
        return `
        <div>${engineer.getName()}</div>
        <div>${engineer.getId()}</div>;
        <div>${engineer.getEmail()}</div>;
        <div>${engineer.getGithub()}</div>`
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


    employeeCards.push("Hey, Im just another string element, but because Im a string, Im allowed to be another element!");

    console.log(employeeCards);
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


           ${employeeCards} 
       </body>
       </html>`;//add the actual html format in front of this back tick at the end 
}
module.exports = { generateTeam }