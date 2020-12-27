const mongoose = require("mongoose");

const Vendorschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  vendorLastName: {
    type: String,
    required: true,
  },
  vendorAddress: {
    type: String,
    required: true,
  },
  vendorPhone: {
    type: String,
    required: true,
  },
  vendorEmail: {
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
});

module.exports = Vendor = mongoose.model("vendor", Vendorschema);
