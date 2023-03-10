//  Employee constructor
const cardEmployee = require("./Employee");

// Constructor extends employee constructor
class Intern extends cardEmployee {
  constructor(name, id, email, school) {
    // Employee constructor
    super(name, id, email);

    this.school = school;
  }

  // returning school from input
  getSchool() {
    return this.school;
  }

  // Employee role to intern
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
