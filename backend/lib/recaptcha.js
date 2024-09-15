const axios = require("axios");

const verifyRecaptcha = async (req, res, next) => {
  const { captchaToken } = req.body;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  try {
    const response = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      {},
      {
        params: {
          secret: secretKey,
          response: captchaToken,
        },
      }
    );

    if (response.data.success) {
      next();
    } else {
      console.log("reCAPTCHA doğrulama başarısız:", response.data);
      res.status(400).json({
        message: "reCAPTCHA doğrulama başarısız. Lütfen tekrar deneyiniz.",
      });
    }
  } catch (error) {
    console.error("reCAPTCHA doğrulama sırasında bir hata oluştu:", error);
    res.status(500).json({
      message: "reCAPTCHA doğrulama sırasında bir hata oluştu.",
      error: error.message,
    });
  }
};

module.exports = { verifyRecaptcha };
