// Call on the Employee lib file + Extends
const Employee = require('./Employee');


class Manager extends Employee {
    // Manager Constructor Extended
    constructor(name, id, email, telephoneNumber) {
        super(name, id, email);
        this.telephoneNumber = telephoneNumber;
    }

    getTelephoneNumber() {
        return this.telephoneNumber;
    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;