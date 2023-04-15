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
const protectedRoute = require("../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(getSongs)
  .post(protectedRoute, postSong)
  .delete(protectedRoute, deleteSongs);

router
  .route("/:songId")
  .get(getSong)
  .put(protectedRoute, updateSong)
  .delete(protectedRoute, deleteSong);

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
