const express = require("express");
const Adminuser = require("../../../models/Admin/Adminuser");
const router = express.Router();


router.post("/", async (req, res) => {
  const { code, name, address, email, te, ae, twc } = req.body;
  const adminuserField = {};
   if(code) adminuserField.code =code ;
   if(name) adminuserField.name =name ;
   if(address) adminuserField.address= address;
   if(email) adminuserField.email =email ;
   if(te) adminuserField.te = te;
   if(ae) adminuserField.ae =ae ;
   if(twc) adminuserField.twc =twc ;
  const enquiry = new Adminuser(adminuserField);

  try {
    await adminuser.save();
    return res.json({ adminuser });
  } catch (err) {
    return res.status(500).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const result = await Adminuser.find();
    return res.json(result);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
