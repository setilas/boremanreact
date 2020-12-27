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
    check("lastname", "Lastname is required").not().isEmpty(),
    check("address", "enter the valid Address").not().isEmpty(),
    check("phone", "enter the valid Phone").not().isEmpty(),
    check("email", "enter the valid Email").isEmail(),
    check("password", "enter proper password").isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { firstname, lastname, address, phone, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const vendorField = {};
    if (firstname) vendorField.firstname = firstname;
    if (lastname) vendorField.lastname = lastname;
    if (address) vendorField.address = address;
    if (phone) vendorField.phone = phone;
    if (email) vendorField.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      vendorField.password = await bcrypt.hash(password, salt);
    }

    try {
      let vendor = await Vendor.findOne({ email });
      let user = await User.findOne({ email: email });
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
