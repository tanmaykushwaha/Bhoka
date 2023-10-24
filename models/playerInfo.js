const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerInfo = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    player_type: {
      type: String,
      trim: true,
    },
    strike_rate: {
      type: Number,
    },
    player_total_run: {
      type: Number,
    },
    match_played: {
      type: Number,
    },
    innings_played: {
      type: Number,
    },
    played_on: {
      type: Array,
    },
    status: {
      type: Number,
      default: 1,
    },
    Current_form: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const PlayerInfo = mongoose.model("cities", playerInfo);
module.exports = PlayerInfo;
