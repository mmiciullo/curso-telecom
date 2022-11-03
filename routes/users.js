const express = require("express");
const router = express.Router();
const passport = require("passport");

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
router.get("/login", (req, res) => res.render("users/login"));

// router.post("/login", (req, res) => {
//   passport.authenticate("local", {
//     successRedirect: "/",
//     failureRedirect: "/users/login",
//   })(req, res);
// });

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/users/login",
    failureFlash: true,
  })
);

// router.post("/", (req, res) => {}, singIn());

// function singIn() {
//   return async (req, res) => {
//     await User.findOne({ username: req.body.username }, (err, userDB) => {
//       if (err) {
//         return res.status(500).json({
//           err: err,
//         });
//       }
//       // Verifica que exista un usuario con el USERNAME en bd
//       if (!userDB) {
//         return (
//           req.flash("messages", "Username or password incorrect."),
//           res.status(400),
//           res.redirect("/users/login")
//         );
//       }
//       //  Comprar la contraseña ingresada por el usuario con el hash de bd
//       if (!bcrypt.compare(req.body.pw, userDB.pw)) {
//         return (
//           req.flash("User or password incorrect."),
//           res.status(500),
//           res.redirect("/users/login")
//         );
//       }
//     });
//   };
// }

module.exports = router;
