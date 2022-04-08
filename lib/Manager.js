const Employee = require("./Employee");

class Manager extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber =officeNumber;
        
    }
    getName = () => this.name; 
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => "Manager";
    getOfficeNumber = () => this.officeNumber;
   
    
}
module.exports = Manager;
