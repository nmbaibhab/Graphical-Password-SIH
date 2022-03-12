const User = require("../models/User");
const bcrypt = require("bcryptjs");

//Register Route
async function grammarDecoder(password) {
  const alphabet = await User.Alphabet.find({});
  let currentIds = {};
  let previousIds = {};
  userPassword = "";
  alphabet.forEach((record) => {
    currentIds[record["current"]] = record["alphabet"];
    previousIds[record["previous"]] = record["alphabet"];
  });
  let letters = [];
  if (password.includes(alphabet[0]["currenttimestamp"])) {
    letters = password.split(alphabet[0]["currenttimestamp"]);
    letters.forEach((id) => {
      if (!currentIds[id]) return false;
      else userPassword += currentIds[id];
    });
  } else if (
    alphabet[0]["previoustimestamp"] &&
    password.includes(alphabet[0]["previoustimestamp"])
  ) {
    letters = password.split(alphabet[0]["previoustimestamp"]);
    letters.forEach((id) => {
      if (!previousIds[id]) return false;
      else userPassword += previousIds[id];
    });
  } else return false;
  return userPassword;
}

exports.register = async (req, res) => {
  let { username, email, password } = req.body;
  password = await grammarDecoder(password);
  if (!password) return res.status(500).json("Password verification failed !!");

  // Get the hashed password
  password = await bcrypt.hash(password, 12);

  try {
    User.User.create(
      {
        username,
        email,
        password,
      },
      function (err, user) {
        if (err) return res.status(404).json(err);
        else return res.status(200).json(user);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Register Route
exports.login = async (req, res) => {
  try {
    let { email, password } = req.body;
    password = await grammarDecoder(password);
    if (!password)
      return res.status(500).json("Password varification failed !!");

    const user = await User.User.findOne({ email: email });
    if (!user) return res.status(404).json("user not found");

    let isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return res.status(200).json(user);
    }
  } catch (err) {
    return res.status(500).json(err);
  }
};

//Grammar varify
exports.grammar = async (req, res) => {
  try {
    let alphabet = await User.Alphabet.find({});
    if (!alphabet) return res.status(404).json("Grammar not found !!");
    let response = { timestamp: "", data: {} };
    response["timestamp"] = alphabet[0]["currenttimestamp"];
    alphabet.forEach((record) => {
      response["data"][record["alphabet"]] = record["current"];
    });
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
  }
};
