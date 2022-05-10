const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  id: {
    type: Number,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  maintanance: {},
  feedback: {},
  rating: {},
});
const Game = mongoose.model("Game", gameSchema);
module.exports = Game;
