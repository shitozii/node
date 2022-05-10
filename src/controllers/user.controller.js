const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { userService } = require("../services");
const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = await User.create({ ...req.body, password: hash });
    res.status(200).json({
      status: "success",
      data: { user },
    });
  } catch (error) {
    res.json(error);
  }
};
const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new Error(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
};
const getUsers = async (req, res) => {
  const users = await userService.getAllUser();
  console.log(users);
  res.status(200).send(users);
};
const updateUser = async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.send(user);
};

const deleteUser = async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
