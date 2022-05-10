const nodemailer = require("nodemailer");
const config = require("../config/config");

const transport = nodemailer.createTransport({
  ...config.email.smtp,
  secure: config.email.smtp.port === 465,
});
transport
  .verify()
  .then(() => console.log("Connected to email service"))
  .catch(() => console.log("Unable to connect to email service. Make sure you have configured the SMTP options in .env"));
const sendEmail = async (to) => {
  const msg = {
    from: config.email.smtp.auth.user,
    to,
    text: `Thank you for register our event.Hope you have much fun with your children in TinkerBellGarden`,
    subject: `Thank for register event`,
  };
  await transport.sendMail(
    msg
    /* 
   msg, (err) => {
    
    if (err) {
      return res.json({
        message: "Error",
        err,
      });
    }
    return res.json({
      message: `Sent successfully to ${msg.to}`,
    });
  } */
  );
};
module.exports = {
  transport,
  sendEmail,
};
