 const Engineer = require("../lib/Engineer");

 test('Can you set the GitHub via constructor',() => {
    const testGithub = 'githubuser'
    const e = new Engineer('ashley', 1, 'ashley@email.com', testGithub)
    expect(e.gitHub).toBe(testGithub);

 });

 test('getRole() returns Engineer', () =>{
     const testRole = 'Engineer'
     const e = new Engineer('ashley', 1, 'ashley@email.com', 'githubuser')
     expect(e.getRole()).toBe(testRole)
 });

 test('Get the githubusername vis getHub()', () =>{
     const testUsername = 'githubusername'
     const e = new Engineer('ashley', 1, 'ashley@email.com', testUsername)
     expect(e.getGitHub()).toBe(testUsername)
 });