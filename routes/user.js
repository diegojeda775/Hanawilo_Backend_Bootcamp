const express = require("express");
const adminValidator = require("../middlewares/utils/validators");
const {
  getUsers,
  postUser,
  deleteUsers,
  getUser,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/userController");
const protectedRoute = require("../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(protectedRoute, adminValidator, getUsers)
  .post(postUser)
  .delete(protectedRoute, deleteUsers);

router.route("/login").post(login);

router
  .route("/:userId")
  .get(getUser)
  .put(protectedRoute, updateUser)
  .delete(protectedRoute, deleteUser);

module.exports = router;
