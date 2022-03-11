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
  alphabet: {
    type: String,
    required: true,
    unique: true,
  },
  previous: {
    type: String,
    unique: true,
  },
  current: {
    type: String,
    required: true,
    unique: true,
  },
  previoustimestamp: {
    type: String,
    unique: true,
  },
  currenttimestamp: {
    type: String,
    required: true,
    unique: true,
  },
},
{ collection: 'grammar' });

const User = mongoose.model("user", UserSchema);
const Alphabet = mongoose.model("grammar", AlphabetSchema);

module.exports = { User, Alphabet };
