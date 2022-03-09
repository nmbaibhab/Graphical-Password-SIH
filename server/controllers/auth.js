const User = require("../models/User");

//Register Route
exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  try {
    await User.User.create(
      {
        username,
        email,
        password,
      },
      function (err, Data) {
        console.log(err);
        if (err) return res.status(404).json(err);
        else return res.status(200).json(Data); // saved!
      }
    );
  } catch (error) {
    console.log(error);
  }
};

//Register Route
exports.login = async (req, res) => {
  try {
    const user = await User.User.findOne({ email: req.body.email });
    !user && res.status(404).json("user not found");

    if (req.body.password == user.password) {
      res.status(200).json(user);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
