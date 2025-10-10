const jwt = require("jsonwebtoken");

const authorization = (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(401).json({ message: "Please login first" });
  }

  try {
    let decoded = jwt.verify(token, "private-key");

    if (decoded.role === "admin") {
      req.user = decoded; 
      return next();
    }

    return res.status(403).json({ message: "You are not authorized" });
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

module.exports = authorization;
