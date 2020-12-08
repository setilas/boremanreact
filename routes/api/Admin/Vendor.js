const express = require("express");
const Vendor = require("../../../models/Admin/Vendor");
const router = express.Router();
const Enquiry = require("../../../models/Admin/Vendor");

router.post("/addVendor", async (req, res) => {
  const { name, address, phone } = req.body;
  const vendorField = {};

  if (name) vendorField.name = name;
  if (address) vendorField.address = address;
  if (phone) vendorField.phone = phone;
  const vendor = new Vendor(vendorField);

  try {
    await vendor.save();
    return res.json(vendor);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
