const passport = require("passport");
const User = require("../models/userAuth");
const localStrategy = require("passport-local").Strategy;

passport.use(
  new localStrategy(async (name, password, done) => {
    try {
      let user = await User.findOne({ name });
      if (user) {
        if (user.password == password) {
          return done(null, user);
          
        } else {
          return done(null, false);
        }
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

passport.serializeUser((User, done) => {
  return done(null, User.id);
});

passport.deserializeUser(async (id, done) => {
  let User = await user.findById(id);
  return done(null, User);
});
