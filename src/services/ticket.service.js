const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const { Ticket } = require("../models");

const getAllTicket = async () => Ticket.find({});
const createTicket = async ticketBody => {
  const ticket = await Ticket.create(ticketBody);
  return ticket;
};
/*
const getUserById = async id => {
  const user = await User.findById(id);
  return user;
};
const getUserByLoginName = async loginName => {
  User.findOne({ loginName });
};
const updateUserById = async (userId, updateBody) => {
  const user = await getUserById(userId);
  const updateContent = updateBody;
  if (!user) {
    throw new Error(httpStatus.NOT_FOUND, "User not found");
  }
  if (updateBody.password) {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(updateBody.password, salt);
    updateContent.password = hash;
  }
  Object.assign(user, updateContent);
  await user.save();
  return user;
};
const deleteUserById = async userId => {
  const user = await getUserById(userId);
  if (!user) {
    throw new Error(httpStatus.NOT_FOUND, "User not found");
  }
  await user.remove();
  return user;
};
*/
module.exports = {
  createTicket,
  getAllTicket,
};
