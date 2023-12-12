const router = require("express").Router();
const { sendEmail } = require("../lib/email/index");

let emails = [];

router.get("/", async (req, res) => {
  res.json(emails);
});

router.post("/", async (req, res) => {
  const { email, subject, message } = req.body;

  emails.push({ email, subject, message });

  await sendEmail(
    process.env.TARGET_EMAIL,
    subject,
    `From: ${email}, Message: ${message}`
  );

  res.send("Email sent successfully");
});

router.delete("/:email", (req, res) => {
  const { email } = req.params;
  const index = emails.findIndex((e) => e.email === email);

  if (index > -1) {
    emails.splice(index, 1);
    res.send(`Email with address ${email} deleted successfully.`);
  } else {
    res.status(404).send("Email not found.");
  }
});

module.exports = router;
