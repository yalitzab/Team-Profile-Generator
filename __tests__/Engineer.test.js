const { expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer")

test('testing Engineer constructor', () => {
    const engineer = new Engineer("Jack", 3, "jack@gmail.com", "jackgithub");
    
    // test name, id, email
    expect(engineer.name).toEqual(expect.any(String))
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));

    // test to get name, id, email, github
    expect(engineer.getName()).toEqual("Jack")
    expect(engineer.getId()).toEqual(3);
    expect(engineer.getEmail()).toEqual("jack@gmail.com");
    expect(engineer.getGitHub()).toEqual("jackgithub");
  });