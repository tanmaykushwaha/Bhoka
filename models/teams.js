const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const team = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

const Team = mongoose.model("team", team);
module.exports = Team;
