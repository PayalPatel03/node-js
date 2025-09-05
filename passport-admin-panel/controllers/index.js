const User = require("../models/userModel");
const passport = require("passport");


exports.getSignup = (req, res) => {
  res.render("pages/signup");
};


exports.postSignup = async (req, res) => {
  try {
    const { username, password } = req.body;
    let user = await User.findOne({ username });
    if (user) return res.send("User already exists!");

    user = new User({ username, password });
    await user.save();
    res.redirect("/login");
  } catch (err) {
    res.send("Error signing up: " + err.message);
  }
};


exports.getLogin = (req, res) => {
  res.render("pages/login");
};


exports.postLogin = passport.authenticate("local", {
  successRedirect: "/dashboard",
  failureRedirect: "/login",
});


exports.dashboard = (req, res) => {
  if (req.isAuthenticated()) {
    return res.render("pages/index", { user: req.user });
  }
  res.redirect("/login");
};


exports.logout = (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect("/login");
  });
};
