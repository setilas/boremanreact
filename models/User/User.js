const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Userschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  role: {},
  totalEnquiry: {
    type: Number,
    default: 0,
  },
  activeEnquiry: {
    type: Number,
    default: 0,
  },
});

module.exports = User = mongoose.model("user", Userschema);
