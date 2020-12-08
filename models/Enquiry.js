const mongoose = require("mongoose");

const Enquiryschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sitelocation: {
    type: String,
    required: true,
  },
  sitelps: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

module.exports = Enquiry = mongoose.model("enquiry", Enquiryschema);
