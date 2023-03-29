const express = require("express");
const {
  getSongs,
  postSong,
  deleteSongs,
  getSong,
  updateSong,
  deleteSong,
  getSongRatings,
  createSongRating,
  deleteSongRatings,
} = require("../controllers/songController");

const router = express.Router();

router.route("/").get(getSongs).post(postSong).delete(deleteSongs);

router.route("/:songId").get(getSong).put(updateSong).delete(deleteSong);

router
  .route("/:songId/ratings")
  .get(getSongRatings)
  .post(createSongRating)
  .delete(deleteSongRatings);

module.exports = router;
