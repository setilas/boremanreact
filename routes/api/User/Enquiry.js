const express = require("express");
const auth = require("../../../middleware/auth");
const router = express.Router();
const Enquiry = require("../../../models/User/Enquiry");
const { check, validationResult } = require("express-validator");
const User = require("../../../models/User/User");
const Vendor = require("../../../models/Admin/Vendor");

//post enquires
router.post("/", auth, async (req, res) => {
  const { name, location, lat, long, estimate, addstatus } = req.body;
  const enquiryField = {};

  const total = await User.findOneAndUpdate(
    { _id: req.user.id },
    { $inc: { totalEnquiry: 1 } },
    { new: true }
  );

  if (total) {
    enquiryField.totalEnquiry = total.totalEnquiry;
  } else {
    const total = await Vendor.findOneAndUpdate(
      { _id: req.user.id },
      { $inc: { totalEnquiry: 1 } },
      { new: true }
    );
    enquiryField.totalEnquiry = total.totalEnquiry;
  }
  enquiryField.user = req.user.id;
  if (name) enquiryField.name = name;
  if (location) enquiryField.location = location;
  if (lat) enquiryField.lat = lat;
  if (long) enquiryField.long = long;
  if (estimate) enquiryField.estimate = estimate;
  if (addstatus) enquiryField.addstatus = addstatus;

  const enquiry = new Enquiry(enquiryField);
  try {
    const result = await enquiry.save();
    return res.json(result);
  } catch (err) {
    res.status(500).send("server error");
  }
});

//route to get enquires by id
router.get("/:id", auth, async (req, res) => {
  try {
    const result = await Enquiry.find({ user: req.params.id });
    return res.json(result);
  } catch (err) {
    console.log(err);
  }
});

//route to get all enquires
router.get("/", async (req, res) => {
  try {
    const result = await Enquiry.find();
    return res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
