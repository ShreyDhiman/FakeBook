const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const res = require("express/lib/response");

const userSchema = new mongoose.Schema({
  Fname: {
    type: String,
    required: true,
    trim: true,
  },
  Lname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    index: { unique: true },
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Invalid email");
      }
    },
  },
  Phone: {
    type: Number,
    index: { unique: true },
    required: true,
  },
  Dob: {
    type: Date,
  },
  Gender: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 8,
    trim: true,
    validate(value) {
      if (value.toLowerCase().includes("password")) {
        throw new Error('Password cannot contain "password"');
      }
    },
  },
});

// userSchema.static.findByCred = async (email, password) => {
//   const user = await User.findOne({ email });
//   if (!user) {
//     res.send("no user found");
//   } else {
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       throw new Error("Wrong Credentials");
//     }
//     return user;
//   }
// };

// // pass hashing
// userSchema.pre("save", async (next) => {
//   if (this.isModified("password")) {
//     this.password = await bcrypt.hash(this.password, 8);
//   }
// });

const User = mongoose.model("User", userSchema);

module.exports = {
  User: User,
};
