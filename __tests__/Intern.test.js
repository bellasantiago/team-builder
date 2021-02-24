const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('Test intern object', () => {
    const intern = new Intern('Bella');
});

test('Test constructor', () => {
    const testValue = 'MIT';
    const email = new Intern('Santiago', 1, 'bella@company.com', testValue);
    expect(email.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'Harvard';
    const email = new Intern('Santiago', 1, 'bella@company.com', testValue);
    expect(email.getSchool()).toBe(testValue);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const email = new Intern('Santiago', 1, 'bella@company.com', 'MIT');
    expect(email.getRole()).toBe(testValue);
});