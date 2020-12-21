const express = require("express");
const auth = require("../../../middleware/auth");
const router = express.Router();
const Enquiry = require("../../../models/User/Enquiry");

//post enquires

router.post("/", auth, async (req, res) => {
  const { name, location, lat, long, estimate, addstatus } = req.body;
  const enquiryField = {};

  enquiryField.user = req.user.id;
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

router.get("/", auth, async (req, res) => {
  try {
    const result = await Enquiry.find();
    return res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
