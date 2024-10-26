const express = require("express");
const { register, getAllUser } = require("../Controller/user.controller");

const router = express.Router();

router.post("/register", register);
router.get("/get", getAllUser);

module.exports = router;
