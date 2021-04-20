const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        super(name, id, email); // this sets the name id email that was in the Employee class, so we don't have to rewrite it
        this.gitHub = gitHub;
    }
    getGitHub(){
        return this.gitHub;
    }
    //this is how we override methods inherited from the parent class
    getRole() {
        return "Engineer";
    }
}