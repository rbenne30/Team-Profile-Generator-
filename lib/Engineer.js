const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name,id,email,github){
        super(name,id,email)
        this.github =github;
        
    }
    getName = () => this.name; 
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => "Engineer";
    getGithub = () => this.github;
   

};

module.exports = Engineer;