const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const User = require("../../../models/User/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Vendor = require("../../../models/Admin/Vendor");
const { check, validationResult } = require("express-validator");

router.get("/", auth, async (req, res) => {
  try {
    //res.send("hi");
    const user = await User.findById(req.user.id).select(-"password");
    if (user) {
      return res.json(user);
    } else {
      const vendor = await Vendor.findById(req.user.id);
      return res.json(vendor);
    }
  } catch (err) {
    return res.status(500).send("server errpor");
  }
});

module.exports = router;
router.post(
  "/",
  [
    //validators
    // check("name", "name is required").not().isEmpty(),
    check("email", "enter the valid email").isEmail(),
    check("password", "enter proper password").isLength({ min: 6 }),
  ],

  async (req, res) => {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //check user already exits or not
      let user = await User.findOne({ email });
      let vendor = await Vendor.findOne({ vendorEmail: email });
      if (!user && !vendor) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid user not found" }] });
      }

      if (!user) {
        payload = {
          user: {
            id: vendor.id,
          },
        };
      } else {
        payload = {
          user: {
            id: user.id,
          },
        };
      }
      //jwt method

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          return res.json({ token }); //it will gives a token
        }
      );

      //console.log(req.body);
      //res.send("user registered");
    } catch (err) {
      console.log(err.message);
      return res.status(500).send("server error");
    }
  }
);

module.exports = router;
