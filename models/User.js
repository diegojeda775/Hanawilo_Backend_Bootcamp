const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    userName: {
      type: String,
      unique: true,
      required: true,
      maxLength: 10,
    },
    gender: {
      type: String,
      required: true,
      enum: ["Male", "Female", "male", "female"],
    },
    age: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      validate: (email) => validator.isEmail(email),
    },
    password: {
      type: String,
      required: true,
      validate: (password) => validator.isStrongPassword(password),
    },
    firstName: {
      type: String,
      required: true,
      maxLength: 10,
    },
    lastName: {
      type: String,
      required: true,
      maxLength: 10,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  this.userName = this.userName.trim();
  this.firstName = this.firstName.trim();
  this.lastName = this.lastName.trim();
  next();
});

UserSchema.post("save", function (next) {
  this.gender = this.gender.toUpperCase();
});

module.exports = mongoose.model("User", UserSchema);
