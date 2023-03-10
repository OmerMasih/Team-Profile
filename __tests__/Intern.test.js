//Intern constructor
const Intern = require("../lib/Intern");

// Sitting intern object
test("creates an Intern object", () => {
  const objintern = new Intern("Masihullah", 90, "masihomer123@gmail", "SFSU");

  expect(objintern.school).toEqual(expect.any(String));
});

// Getting school from getSchool()
test("gets employee school", () => {
  const Elintern = new Intern("Nicole", 90, "masihomer123@gmail", "SFSU");

  expect(Elintern.getSchool()).toEqual(
    expect.stringContaining(Elintern.school.toString())
  );
});

// Getting role from getRole()
test("gets role of employee", () => {
  const getintern = new Intern(
    "Masihullah",
    90,
    "masihomer123@gmail.com",
    "SFSU"
  );

  expect(getintern.getRole()).toEqual("Intern");
});
