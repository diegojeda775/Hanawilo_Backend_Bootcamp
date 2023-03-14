const express = require("express");
const {
  getSongs,
  postSong,
  deleteSongs,
} = require("../controllers/songController");

const router = express.Router();

router.route("/").get(getSongs).post(postSong).delete(deleteSongs);

module.exports = router;
