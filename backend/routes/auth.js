const express = require("express");
const router = express.Router();
const { generateToken } = require("../lib/auth");

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.USERNAME && password === process.env.PASSWORD) {
    const token = generateToken({ username: username, role: process.env.ROLE });
    res.json({ accessToken: token });
  } else {
    res.status(401).send("Kullanıcı adı veya şifre hatalı");
  }
});

module.exports = router;
