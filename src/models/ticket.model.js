const mongoose = require("mongoose");

const ticketSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: () => this.type === 1 || this.type === 2,

      trim: true,
    },
    phoneNumber: {
      type: String,
      required: () => this.type === 1 || this.type === 2,
      trim: true,
    },
    type: {
      type: Number,
      required: true,
      enum: [1, 2, 3],
      default: 1,
    },
    quantity: {
      type: Number,
      required: true,
      trim: true,
    },
    cost: {
      type: Number,
    },
  },
  {
    timestamps: () => this.type === 1,
  }
);
const Ticket = mongoose.model("Ticket", ticketSchema);
module.exports = Ticket;
