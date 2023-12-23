const jwt = require("jsonwebtoken");

/**
 * Kullanıcı bilgileri alınarak JWT token oluşturulur.
 * @param {Object} user - Kullanıcı bilgilerini içeren nesne.
 * @returns {String} Oluşturulan JWT token.
 */
const generateToken = (user) => {
  return jwt.sign(user, process.env.JWT_TOKEN, { expiresIn: "1h" });
};

/**
 * Gelen isteklerde JWT token'ın doğrulanmasını sağlayan middleware.
 * @param {Object} req - İstek nesnesi.
 * @param {Object} res - Yanıt nesnesi.
 * @param {Function} next - Sonraki middleware'e geçişi sağlayan fonksiyon.
 */
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.JWT_TOKEN, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
};

module.exports = { generateToken, authenticateToken };
