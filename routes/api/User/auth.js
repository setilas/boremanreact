const express = require("express");
const router = express.Router();
const auth = require("../../../middleware/auth");
const User = require("../../../models/User/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const Vendor = require("../../../models/Admin/Vendor");
const { check, validationResult } = require("express-validator");
const { getMaxListeners } = require("../../../models/User/User");

router.get("/", auth, async (req, res) => {
  try {
    //res.send("hi");
    if ((req.user.id = "admin")) {
      return res.json("admin");
    }

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

    //admin access
    if (email == "admin@gmail.com" && password == "admin1111") {
      const payload = {
        user: {
          id: "admin",
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
    }

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email });
      let vendor = await Vendor.findOne({ vendorEmail: email });
      if (!user && !vendor) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid user not found" }] });
      }

      const isMatch = await bcrypt.compare(password, vendor.password);
      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: "invalid creadential" }] });
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

      console.log(user);
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
