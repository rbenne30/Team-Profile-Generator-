const Employee = require("./Employee")

class Intern extends Employee{
    constructor(name,id,email,school){
        super(name,id,email);
        this.school =school;
    };
    getName = () => this.name; 
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => "Intern";
    getSchool = () => this.school
};

module.exports = Intern;