class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //these methods are classed Getter funstions
    getName() {
        return this.name;
    }

    getID() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;