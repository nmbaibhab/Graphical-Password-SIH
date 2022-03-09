require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// const multer = require("multer");
// const path = require("path");

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(cors());

app.use("/", require("./routes/authRoute"));

const CONNECTION_URL = process.env.DB_URL;
const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
//stop server crashing even if db connection failed
process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});

//db connection
mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connection successful");
  })
  .catch((err) => {
    console.log(err);
  });
// mongoose.set("useFindAndModify", false);
// mongoose.set("useCreateIndex", true);
