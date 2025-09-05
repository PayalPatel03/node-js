const express = require("express");
const { getSignup, postSignup, getLogin, postLogin, dashboard, logout } = require("../controllers");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  
  if (req.isAuthenticated()) {
    res.redirect("/dashboard");
  } else {
    res.redirect("/login");
  }
});

// Signup
router.get("/signup", getSignup);
router.post("/signup", postSignup);

// Login
router.get("/login", getLogin);
router.post("/login", postLogin);

// Dashboard
router.get("/dashboard", dashboard);

// Logout
router.get("/logout", logout);

module.exports = router;
