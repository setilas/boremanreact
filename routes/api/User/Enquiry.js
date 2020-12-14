const express = require("express");
const router = express.Router();
const Enquiry = require("../../../models/User/Enquiry");

router.post("/", async (req, res) => {
  const { name, location, lat, long, estimate, addstatus } = req.body;
  const enquiryField = {};

  if (name) enquiryField.name = name;
  if (location) enquiryField.location = location;
  if (lat) enquiryField.lat = lat;
  if (long) enquiryField.long = long;
  if (estimate) enquiryField.estimate = estimate;
  if (addstatus) enquiryField.addstatus = addstatus;
  const enquiry = new Enquiry(enquiryField);

  try {
    await enquiry.save();
    return res.json({ enquiry });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Enquiry.find();
    return res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
