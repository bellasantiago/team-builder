// Call on the Employee lib file + Extends
const Employee = require('./Employee');


class Manager extends Employee {
    // Manager Constructor Extended
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

}

module.exports = Manager;