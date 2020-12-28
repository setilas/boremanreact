const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Enquiryschema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },

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
  totalEnquiry: {
    type: Number,
  },
});

module.exports = Enquiry = mongoose.model("enquiry", Enquiryschema);
