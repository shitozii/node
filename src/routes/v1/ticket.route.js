const express = require("express");
const { getAllTicket, createTicket, updateTicket, deleteTicket } = require("../../controllers/ticketController");
const auth = require("../../middlewares/auth");

const router = express.Router();
router.get("/", auth.verifyStaff, getAllTicket);
router.post("/", createTicket);
router.put("/:ticketId", auth.verifyStaff, updateTicket);
router.delete("/:ticketId", auth.verifyStaff, deleteTicket);
module.exports = router;
