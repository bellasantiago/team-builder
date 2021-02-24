const Employee = require('../lib/Employee');

test('Test if new employee object is created', () => {
    const employee = new Employee('Bella');
});

test('Test email', () => {
    const testValue = 'bella@email.com';
    const emp = new Employee('Santiago', 1, testValue);
    expect(emp.email).toBe(testValue);
});

test('Test constructor', () => {
    const testValue = 101;
    const emp = new Employee('Santiago', testValue);
    expect(emp.id).toBe(testValue);
});

// Test if the getRole() value is Employee
test('getRole() return Employee', () => {
    const testValue = 'Employee';
    const emp = new Employee('Bella', 1, 'bella@email.com');
    expect(emp.getRole()).toBe(testValue);
});