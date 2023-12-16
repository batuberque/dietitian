const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  logger: true,
  debug: true,
  auth: {
    user: process.env.TARGET_EMAIL,
    pass: process.env.TARGET_EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: true,
  },
});
async function sendEmail(fromEmail, subject, userMessage) {
  let emailContent = `Alıcı: ${fromEmail}\nMesaj: ${userMessage}`;

  let mailOptions = {
    from: process.env.TARGET_EMAIL,
    to: process.env.TARGET_EMAIL,
    subject: subject,
    text: emailContent,
  };

  try {
    let info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email: " + error);
  }
}

module.exports = { sendEmail };
