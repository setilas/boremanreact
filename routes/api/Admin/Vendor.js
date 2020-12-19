const express = require("express");
const Vendor = require("../../../models/Admin/Vendor");
const router = express.Router();
const Enquiry = require("../../../models/Admin/Vendor");
const { check, validationResult } = require("express-validator/check");
router.post(
  "/",
  [
    check("vendorName", "Name is required").not().isEmpty(),
    check("vendorLastName", "Lastname is required").not().isEmpty(),
    check("vendorAddress", "enter the valid Address"),
    check("vendorPhone", "enter the valid Phone"),
    check("vendorEmail", "enter the valid Email").isEmail(),
    check("password", "enter proper password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const {
      vendorName,
      vendorLastName,
      vendorAddress,
      vendorPhone,
      vendorEmail,
      password,
    } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const vendorField = {};
    if (vendorName) vendorField.vendorName = vendorName;
    if (vendorLastName) vendorField.vendorLastName = vendorLastName;
    if (vendorAddress) vendorField.vendorAddress = vendorAddress;
    if (vendorPhone) vendorField.vendorPhone = vendorPhone;
    if (vendorEmail) vendorField.vendorEmail = vendorEmail;
    if (password) vendorField.password = password;
    const vendor = new Vendor(vendorField);

    try {
      await vendor.save();
      return res.json(vendor);
    } catch (err) {
      res.status(500).send(err);
    }
  }
);

router.get("/:id", async (req, res) => {
  try {
    const vendor = await Vendor.findOne({
      _id: req.params.id,
    });
    if (!vendor) {
      res.status(400).send("not found");
    }
    res.status(201).json(vendor);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
