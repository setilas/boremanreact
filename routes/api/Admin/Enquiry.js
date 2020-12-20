const express = require("express");
const router = express.Router();
const Enquiry = require("../../../models/User/Enquiry");

router.get("/", async (req, res) => {
  try {
    const enquiry = await Enquiry.find();
    if (!enquiry) {
      res.status(400).send("not found");
    }
    res.status(201).json(vendor);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
