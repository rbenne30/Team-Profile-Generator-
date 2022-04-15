const generateTeam = (team) => {

    // generates manager cards for html
    const generateManager = (manager) => {
        return `
        <div>${manager.getName}</div>
    
        <div>${manager.getId}</div>;
        <div>${manger.getEmail}</div>;
        <div>${manger.getOfficenumber}</div>`;
    }


    // generates intern cards for html. Create generateIntern fucntion like above
    const generateIntern = (intern) => {
        return `
        <div>${intern.getName}</div>
        <div>${intern.getId}</div>;
        <div>${intern.getEmail}</div>;
        <div>${intern.getSchool}</div>`;
    }

    // generates engineer cards for html, Create like above
    const generteEngineer = (engineer) => {
        return `
        <div>${engineer.getName}</div>
        <div>${engineer.gerId}</div>;
        <div>${engineer.getEmail}</div>;
        <div>${engineer.getGithub}</div>`
    }

    let html = [];

    //filters the teamArray for all managers and creates html for them
    html.push(team.filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager)))

    // create filter for intern as well
    html.push(team.filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern)))

    //create filter for engineer
    html/push(team.filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer)))

    return html;
}