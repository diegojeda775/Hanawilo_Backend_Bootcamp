const express = require("express");
const {
  getUsers,
  postUser,
  deleteUsers,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getUsers).post(postUser).delete(deleteUsers);

module.exports = router;
