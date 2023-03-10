// Employee constructor
const cardEmployee = require("./Employee");

// Constructor extends employee constructor
class Engineer extends cardEmployee {
  constructor(name, id, email, github) {
    // Employee constructor
    super(name, id, email);

    this.github = github;
  }

  // returning github from input
  getGithub() {
    return this.github;
  }

  // Employee role to engineer
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
