const { model, Schema } = require("mongoose");

const filmsSchema = Schema({
  title: {
    type: String,
    required: [true, "db: Title is required"],
  },
  director: {
    type: String,
    default: "Martin Scorcese",
  },
  rating: {
    type: Number,
    default: 0.0,
  },
  year: {
    type: Number,
    required: [true, "db: Year is required"],
  },
});

module.exports = model("films", filmsSchema);
