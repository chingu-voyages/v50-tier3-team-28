const mongoose = require('mongoose');
const User = require('../models/User');
const Request = require('../models/Request');

class DbContext {
  constructor() {
    this.User = User;
    this.Request = Request;
  }
}

module.exports = new DbContext();
