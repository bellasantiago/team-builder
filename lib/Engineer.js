// Call on the Employee lib file + Extends
const Employee = require('./Employee');


class Engineer extends Employee {
    // Engineer Constructor Extended
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getGitHub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;