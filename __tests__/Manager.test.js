const Manager = require("../lib/manager")

test('testing Manager constructor', () => {
    const manager = new Manager("Bob", 2, "bob@gmail.com", 12);
  
    // test name, id, email
    expect(manager.name).toEqual(expect.any(String))
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));

    // test to get name, id, email, office number
    expect(manager.getName()).toEqual("Bob")
    expect(manager.getId()).toEqual(2);
    expect(manager.getEmail()).toEqual("bob@gmail.com");
    expect(manager.getOfficeNumber()).toEqual(12);
  });