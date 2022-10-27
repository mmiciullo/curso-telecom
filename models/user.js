const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      require: [true, "username is required"],
      lowercase: true,
    },
    pw: {
      type: String,
      require: [true, "Password is required"],
    },
    email: {
      type: String,
      unique: true,
    },
    // userAvatar: { type: String },
  },
  { versionKey: false }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("pw")) next();
  this.pw = await bcrypt.hash(this.pw, 10);
  return next();
});

userSchema.methods.comparePassword = function (passw, cb) {
  bcrypt.compare(passw, this.password, function (err, isMatch) {
    if (err) {
      return cb(err, false);
    }
    return cb(null, isMatch);
  });
};
module.exports = mongoose.model("User", userSchema);
