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
  getSongRating,
  updateSongRating,
  deleteSongRating,
} = require("../controllers/songController");

const router = express.Router();

router.route("/").get(getSongs).post(postSong).delete(deleteSongs);

router.route("/:songId").get(getSong).put(updateSong).delete(deleteSong);

router
  .route("/:songId/ratings")
  .get(getSongRatings)
  .post(createSongRating)
  .delete(deleteSongRatings);

router
  .route("/:songId/ratings/:ratingId")
  .get(getSongRating)
  .put(updateSongRating)
  .delete(deleteSongRating);

module.exports = router;
