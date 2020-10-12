const { expect } = require("@jest/globals");
const Employee = require("../lib/employee")

test('testing employee constructor', () => {
    const employee = new Employee("Amy", 1, "amy@gmail.com");
  
    // test name, id, email
    expect(employee.name).toEqual(expect.any(String))
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

    // test to get name, id, email
    expect(employee.getName()).toEqual("Amy")
    expect(employee.getId()).toEqual(1);
    expect(employee.getEmail()).toEqual("amy@gmail.com");
  
  });