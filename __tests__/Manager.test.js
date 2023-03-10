// Sitting Manager constructor
const Manager = require("../lib/Manager");

// Manager object
test("creates an Manager object", () => {
  const mngrObject = new Manager("Masihullah", 90, "masihomer123@gmail.com", 4);

  expect(mngrObject.officeNumber).toEqual(expect.any(Number));
});

// Getting role from getRole()
test("gets role of employee", () => {
  const empRole = new Manager("Masihullah", 90, "masihomer123@gmail.com");

  expect(empRole.getRole()).toEqual("Manager");
});
