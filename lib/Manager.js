// Importing Employee profile
const CardEmployee = require("./Employee");

//  Employee constructor
class Manager extends CardEmployee {
  constructor(name, id, email, officeNumber) {
    // calling employee constructor
    super(name, id, email);

    this.officeNumber = officeNumber;
  }

  // override employee role to manager
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
