const express = require("express");
const router = express.Router();
const User = require("../models/user");

// Register
router.get("/register", async (req, res) => {
  res.render("users/register", {
    newUser: new User(),
    messages: req.flash("messages"),
  });
});

router.post(
  "/",
  async (req, res, next) => {
    req.newUser = new User();
    next();
  },
  singUp()
);

function singUp() {
  return async (req, res) => {
    let user = req.newUser;
    user.username = req.body.username;
    user.pw = req.body.pw;
    user.email = req.body.email;
    try {
      user = await user.save();
      res.redirect("/");
    } catch (e) {
      let messages = [];
      let userDb = await User.findOne({ username: user.username }).then(
        (username) => {
          if (username) return true;
        }
      );
      let emailDb = await User.findOne({ email: user.email }).then((email) => {
        if (email) return true;
      });
      if (e) {
        if (userDb) {
          messages.push("Username already exist!");
        }
        if (emailDb) {
          messages.push("Email already exist!");
        }
        return req.flash("messages", messages), res.redirect("/users/register");
      }
    }
  };
}

// Login

router.get("/login", (req, res) => {
  res.send("login");
});

router.post("/", (req, res) => {});

module.exports = router;
