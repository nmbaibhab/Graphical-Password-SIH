const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please provide an password"],
    },
  },
  { timestamps: true }
);

const AlphabetSchema = new mongoose.Schema({
  letter: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  id: {
    type: String,
    required: [true, "Please provide an password"],
    unique: true,
  },
});

const User = mongoose.model("User", UserSchema);
const Alphabet = mongoose.model("Alphabet", AlphabetSchema);

module.exports = { User, Alphabet };
