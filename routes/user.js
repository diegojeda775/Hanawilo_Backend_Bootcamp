const express = require("express");
const {
  getUsers,
  postUser,
  deleteUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

router.route("/").get(getUsers).post(postUser).delete(deleteUsers);

router.route("/:userId").get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
