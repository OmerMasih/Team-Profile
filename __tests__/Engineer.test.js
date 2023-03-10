// Engineer constructor
const Engineer = require("../lib/Engineer");

// Sitting engineer object
test("creates an Engineer object", () => {
  const objEngineer = new Engineer(
    "Masihullah",
    90,
    "masihomer123@gmail",
    "OmerMasih"
  );

  expect(objEngineer.github).toEqual(expect.any(String));
});

// Getting github from getGithub()
test("gets engineer github value", () => {
  const githubengineer = new Engineer(
    "Masihullah",
    90,
    "masihomer123@gmail",
    "OmerMasih"
  );

  expect(githubengineer.getGithub()).toEqual(
    expect.stringContaining(githubengineer.github.toString())
  );
});

// Getting role from getRole()
test("gets role of employee", () => {
  const engineer = new Engineer(
    "Masihullah",
    90,
    "masihomer123@gmail",
    "OmerMasih"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
