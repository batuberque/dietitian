const router = require("express").Router();
const { sendEmail } = require("../lib/email/index");

let emails = [];

router.get("/contact", (req, res) => {
  res.json(emails);
});

router.post("/contact", async (req, res) => {
  const { email, subject, message } = req.body;

  emails.push({ email, subject, message });

  await sendEmail(
    "your-email@gmail.com",
    subject,
    `From: ${email}, Message: ${message}`
  );

  res.send("Email sent successfully");
});

module.exports = router;
