const express= require("express");
const { RegisterTeam, getdata, verifyadmin } = require("../controller/UserController");

const router= express.Router();

router.route("/register").post(RegisterTeam);
router.route("/getdata").get(getdata);
router.route("/verify").post(verifyadmin);
module.exports=router