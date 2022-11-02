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

// userSchema.pre("save", async function (next) {
//   if (!this.isModified("pw")) next();
//   this.pw = await bcrypt.hash(this.pw, 10);
//   return next();
// });

userSchema.methods.encrypPassword = async (pw) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(pw, salt);
};

userSchema.methods.matchPassword = async function (pw) {
  return await bcrypt.compare(pw, this.pw);
};

module.exports = mongoose.model("User", userSchema);
