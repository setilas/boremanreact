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
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  totalEnquiry: {
    type: Number,
    default: 0,
  },
  activeEnquiry: {
    type: Number,
  },
  completedEnquiry: {
    type: Number,
  },
  role: {},
  activate: false,
});

module.exports = User = mongoose.model("user", Userschema);
