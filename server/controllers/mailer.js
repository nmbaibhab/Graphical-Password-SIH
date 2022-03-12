var nodemailer = require('nodemailer');
require("dotenv").config();

/**
 * @DESC To trigger a mail middleware
 */
 const mailer = async mailOptions => {
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
    });

    await transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent to '+ mailOptions.to +': ' + info.response);
    }
    });
}


module.exports = {mailer}