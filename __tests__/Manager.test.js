const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('Test manager object', () => {
    const manager = new Manager('Bella');
});

test('Test constructor', () => {
    const testValue = 100;
    const email = new Manager('Santiago', 1, 'bella@company.com', testValue);
    expect(email.telephoneNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 100;
    const email = new Manager('Santiago', 1, 'bella@company.com', testValue);
    expect(email.getTelephoneNumber()).toBe(testValue);
});

// Test if the getRole() value is Manager
test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const email = new Manager('Santiago', 1, 'bella@company.com', 100);
    expect(email.getRole()).toBe(testValue);
});