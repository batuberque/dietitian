const router = require("express").Router();
const { sendEmail } = require("../lib/email/index");
const { verifyRecaptcha } = require("../lib/recaptcha");

let emails = [];

router.get("/", async (req, res) => {
  res.json(emails);
});

router.post("/", verifyRecaptcha, async (req, res) => {
  const { email, subject, message, captchaToken } = req.body;

  if (!email || !subject || !message || !captchaToken) {
    return res
      .status(400)
      .json({ message: "Eksik veri! Lütfen tüm alanları doldurun." });
  }

  emails.push({ email, subject, message });

  try {
    await sendEmail(
      process.env.TARGET_EMAIL,
      subject,
      `\nKimden: ${email}, \nMesaj İçeriği: ${message}`
    );
    res.json({ message: "Email successfully sent!" });
  } catch (error) {
    console.error("Email gönderilirken bir hata oluştu: " + error);
    res
      .status(500)
      .json({ message: "Failed to send email", error: error.message });
  }
});

router.delete("/:email", (req, res) => {
  const { email } = req.params;
  const index = emails.findIndex((e) => e.email === email);

  if (index > -1) {
    emails.splice(index, 1);
    res.json({ message: `Email with address ${email} deleted successfully.` });
  } else {
    res.status(404).json({ message: "Email not found." });
  }
});

module.exports = router;
