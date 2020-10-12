const { expect } = require("@jest/globals");
const Intern = require("../lib/intern")

test('testing intern constructor', () => {
    const intern = new Intern("Bill", 4, "bill@gmail.com", "UCLA");
  
    // test name, id, email
    expect(intern.name).toEqual(expect.any(String))
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));

    // test to get name, id, email, office number
    expect(intern.getName()).toEqual("Bill")
    expect(intern.getId()).toEqual(4);
    expect(intern.getEmail()).toEqual("bill@gmail.com");
    expect(intern.getSchool()).toEqual("UCLA");
  });