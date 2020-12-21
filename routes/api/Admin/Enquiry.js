const express = require("express");
const router = express.Router();
const Enquiry = require("../../../models/User/Enquiry");
import auth from "../../../middleware/auth";

router.get("/", auth, async (req, res) => {
  try {
    const enquiry = await Enquiry.find();
    if (!enquiry) {
      return res.status(400).send("not found");
    }
    return res.json(enquiry);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
