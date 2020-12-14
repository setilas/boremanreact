const mongoose = require("mongoose");

const Enquiryschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  lat: {
    type: String,
    required: true,
  },
  long: {
    type: String,
    required: true,
  },
  estimate: {
    type: String,
    required: true,
  },
  addstatus: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Enquiry = mongoose.model("enquiry", Enquiryschema);
