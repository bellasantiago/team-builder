// Call on the Employee lib file + Extends
const Employee = require('./Employee');


class Engineer extends Employee {
    // Engineer Constructor Extended
    constructor(name, id, email, git) {
        super(name, id, email);
        this.git = git;
    }

    getGit() {
        return this.git;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;