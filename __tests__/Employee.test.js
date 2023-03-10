// Employee constructor
const Employee = require("../lib/Employee");

// Employee object
test("creates an employee object", () => {
  const employeeEL = new Employee("Masihullah", 90, "masihomer123@gmail.com");

  expect(employeeEL.name).toEqual(expect.any(String));
  expect(employeeEL.id).toEqual(expect.any(Number));
  expect(employeeEL.email).toEqual(expect.any(String));
});

// Getting id from getId()
test("gets employee name", () => {
  const employee = new Employee("Masihullah", 90, "masihomer123@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// Getting id from getId()
test("gets employee ID", () => {
  const employee = new Employee("Masihullah", 90, "masihomer123@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// Getting emails from getEmail()
test("gets employee email", () => {
  const employee = new Employee("Masihullah", 90, "masihomer123@gmail.com");

  expect(employee.getEmail()).toEqual(
    expect.stringContaining(employee.email.toString())
  );
});

// Getting role from getRole()
test("gets role of employee", () => {
  const employee = new Employee("Masihullah", 90, "masihomer@gmail.com");

  expect(employee.getRole()).toEqual("Employee");
});
