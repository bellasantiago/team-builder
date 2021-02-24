const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('Test new engineer object', () => {
    const engineer = new Engineer('Bella');
});

test('test constructor', () => {
    const testValue = 'git';
    const email = new Engineer('Santiago', 1, 'bella@company.com', testValue);
    expect(email.git).toBe(testValue);
})

test('Test getGithub() method', () => {
    const testValue = 'git';
    const email = new Engineer('Foo', 1, 'bella@company.com', testValue);
    expect(email.getGit()).toBe(testValue);
});

// Test if the getRole() value is Engineer
test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const email = new Engineer('Santiago', 1, 'bella@company.com', 'git');
    expect(email.getRole()).toBe(testValue);
});