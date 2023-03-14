const express = require("express");
const {
  getArtists,
  postArtist,
  deleteArtists,
} = require("../controllers/artistController");

const router = express.Router();

router.route("/").get(getArtists).post(postArtist).delete(deleteArtists);

module.exports = router;
