const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

//  User model
const User = require("../models/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "pw",
    },
    async (username, pw, done) => {
      // Match username
      const user = await User.findOne({ username });
      if (!user) {
        return done(null, false, { message: "Not user Found" });
      } else {
        // Match password
        const match = await user.matchPassword(pw);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

