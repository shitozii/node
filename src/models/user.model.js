const mongoose = require("mongoose");
const validator = require("validator");

const roles = ["staff", "admin"];
const userSchema = mongoose.Schema({
  email: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  loginName: {
    type: String,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  role: {
    type: String,
    enum: roles,
    default: "staff",
  },
});
/*
userSchema.statics.isEmailTaken = async (loginName, excludeUserId) => {
  const user = await this.findOne({ loginName, _id: { $ne: excludeUserId } });
  return !!user;
};
*/
const User = mongoose.model("user", userSchema);
module.exports = User;
