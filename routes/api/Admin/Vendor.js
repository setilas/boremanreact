const express = require("express");
const Vendor = require("../../../models/Admin/Vendor");
const User = require("../../../models/User/User");
const router = express.Router();
const Enquiry = require("../../../models/Admin/Vendor");
const jwt = require("jsonwebtoken");
const config = require("config");

const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator/check");
router.post(
  "/",
  [
    check("firstname", "Name is required").not().isEmpty(),
    check("vendorLastName", "Lastname is required").not().isEmpty(),
    check("vendorAddress", "enter the valid Address").not().isEmpty(),
    check("vendorPhone", "enter the valid Phone").not().isEmpty(),
    check("vendorEmail", "enter the valid Email").isEmail(),
    check("password", "enter proper password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const {
      firstname,
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
    if (firstname) vendorField.firstname = firstname;
    if (vendorLastName) vendorField.vendorLastName = vendorLastName;
    if (vendorAddress) vendorField.vendorAddress = vendorAddress;
    if (vendorPhone) vendorField.vendorPhone = vendorPhone;
    if (vendorEmail) vendorField.vendorEmail = vendorEmail;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      vendorField.password = await bcrypt.hash(password, salt);
    }

    try {
      let vendor = await Vendor.findOne({ vendorEmail });
      let user = await User.findOne({ email: vendorEmail });
      if (vendor || user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Vendor already present" }] });
      }
      vendor = new Vendor(vendorField);
      await vendor.save();
      const payload = {
        user: {
          id: vendor.id,
        },
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token }); //it will gives a token
        }
      );
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

router.get("/", async (req, res) => {
  try {
    const vendor = await Vendor.find();
    if (!vendor) {
      res.status(400).send("not found");
    }
    res.status(201).json(vendor);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
