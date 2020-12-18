const mongoose = require("mongoose");

const AdminUserschema = new mongoose.Schema({
    code:{
        type: String,
        required: true,
    },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  te: {
    type: String,
    required: true,
  },
  ae: {
    type: String,
    required: true,
  },
  twc: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = AdminUser = mongoose.model("adminuser", AdminUserschema);
