require("dotenv").config({ path: "./.env" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const { mailer } = require('./controllers/mailer');

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

//Python Job Scheduler
const CronJob = require('cron').CronJob;
const { spawn } = require('child_process');

const JobSchedular = new CronJob({
  // Run at 06:00am Indian Standard time, everyday
  cronTime: '*/20 * * * *',
  onTick: function() {
      // Run whatever you like here..
      let error = 'No Error Found !!';
      const childP = spawn('python', [path.resolve("Job Schedular","languageGenerator.py")]);
      childP.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`);
      });
      childP.stderr.on('data', (data) => {
          error = data
      });
      childP.on('close', async (code) => {
          console.log(`Job Schedular error: ${error}`);
          console.log(`Job Schedular exited with code: ${code}`);
          if (code) {
              var mailOptions = {
                  from: process.env.EMAIL_FROM,
                  to: process.env.EMAIL_TO,
                  cc: process.env.EMAIL_CC,
                  subject: 'Job Schedular Report Status',
                  html: `
                  <h3>Job Scheduler</h3>
                  <p>Job Scheduler Status: <strong>${error}</strong></p>
                  <p>Job Scheduler Exited With Status Code: <strong>${code}</strong></p>
                  `
                  };
              await mailer(mailOptions);
          }
      });
  },
  start: true,
  timeZone: 'Asia/Kolkata'
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
