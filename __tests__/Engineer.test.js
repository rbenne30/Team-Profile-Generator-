class Engigner extends Employee{
    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber =officeNumber;
        
    }
    getName = () => this.name; 
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => "Employee";