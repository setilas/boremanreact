const express = require("express");
const router = express.Router();
const Enquiry = require("../../../models/User/Enquiry");

router.post("/addEnquiry", async (req, res) => {
  const { name, sitelocation, sitelps, phone } = req.body;
  const enquiryField = {};

  if (name) enquiryField.name = name;
  if (sitelocation) enquiryField.sitelocation = sitelocation;
  if (sitelps) enquiryField.sitelps = sitelps;
  if (phone) enquiryField.phone = phone;
  const enquiry = new Enquiry(enquiryField);

  try {
    await enquiry.save();
    return res.json(enquiry);
  } catch (err) {
    res.status(500).send(err);
  }
});
module.exports = router;
