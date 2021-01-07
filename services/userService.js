const User = require("./../models/userModel");

class userService {
  getUserByName(name) {
    const query = User.findOne({ name: name }).exec();
    return query;
  }
}

module.exports = userService;