const express = require("express");

const router = express.Router();
// const auth=require('../../middlewares/auth')
const { authController } = require("../../controllers");

router.post("/login", authController.login);

// router.post('/send-email',sendVerificationEmail)
module.exports = router;
