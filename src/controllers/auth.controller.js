const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/user.model");
// const httpStatus=require("http-status")
const config = require("../config/config");
// const emailService=require('./../services/email.service')
/*
const register = async (req, res, next) => {
  const user = await User.create(req.body);
  // const token=jwt.sign({adminId :admin._id},process.env.APP_SECRET)
  res.status(200).json({
    status: "success",
    data: { loginName: user.loginName },
  });
};
*/

const login = async (req, res, next) => {
  const user = await User.findOne({ loginName: req.body.loginName });
  if (!user) {
    const err = new Error("Login name is not correct");
    err.statusCode = 400;
    return next(err);
  }
  if (bcrypt.compareSync(req.body.password, user.password)) {
    const token = jwt.sign({ userId: user._id, role: user.role }, config.jwt.secret);
    res.status(200).json({
      status: "success",
      data: {
        token,
        userName: user.userName,
      },
    });
  } else {
    const err = new Error("Password is not correct");
    err.statusCode = 400;
    return next(err);
  }
};

/*
const sendVerificationEmail =async(req,res)=>{
    const {email}=req.body;
    //console.log(req.body)
    await emailService.sendEmail(email);
    res.status(httpStatus.NO_CONTENT).send();
}
*/
module.exports = {
  login,
  // register,
};
