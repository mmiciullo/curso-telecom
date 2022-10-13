const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/register", (req, res) => {
  res.render("users/register", { user: new User() });
});

router.post(
  "/register",
  async (req, res, next) => {
    req.user = new User();
    next();
  },
  register("register")
);

// Save new usuer

function register(path) {
  return async (req, res) => {
    let user = req.user;
    user.user = req.body.user;
    user.password = req.body.password;
    user.email = req.body.email
    try {
      user = await user.save();
      res.redirect("/");
    } catch (e) {
      console.log(e);
    }
  };
}

module.exports = router;
