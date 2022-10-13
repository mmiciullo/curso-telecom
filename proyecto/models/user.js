const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const SALT_WORK_FACTOR = 10;
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});


userSchema.pre("save", function (next) {
  let user = this;

  // Se hashea la contraseña si ha sido modificada o es nueva
  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    // Hash de contraseña usando nuevo  salt
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);
      // Reemplazar la contraseña por un hash
      user.password = hash;
      next();
    });
  });
});

userSchema.method.comparePassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};




module.exports = mongoose.model("User", userSchema);
