const Ticket = require("../models/ticket.model");
const { ticketService } = require("../services");

const getAllTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.find({});
    res.status(200).json({
      status: "success",
      data: { ticket },
    });
  } catch (error) {
    next(error);
  }
};

const createTicket = async (req, res, next) => {
  const ticket = await ticketService.createTicket(req.body);
  if (!ticket) {
    throw new Error("Ticket is not found");
  }
  res.send(ticket);
};
const updateTicket = async (req, res, next) => {
  try {
    const { ticketId } = req.params;
    console.log(ticketId);
    const ticket = await Ticket.findByIdAndUpdate(ticketId, { ...req.body }, { new: true, runValidator: true });
    res.status(200).json({
      status: "success",
      data: { ticket },
    });
  } catch (error) {
    next(error);
  }
};
const deleteTicket = async (req, res, next) => {
  try {
    const { ticketId } = req.params;
    await Ticket.findByIdAndDelete(ticketId);
    res.status(200).json({
      status: "success",
      messgage: "The ticket have been deleted",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllTicket,
  createTicket,
  updateTicket,
  deleteTicket,
};
