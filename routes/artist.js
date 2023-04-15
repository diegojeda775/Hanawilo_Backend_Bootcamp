const express = require("express");
const {
  getArtists,
  postArtist,
  deleteArtists,
  getArtist,
  updateArtist,
  deleteArtist,
  postArtistImage,
} = require("../controllers/artistController");
const protectedRoute = require("../middlewares/auth");

const router = express.Router();

router
  .route("/")
  .get(getArtists)
  .post(protectedRoute, postArtist)
  .delete(protectedRoute, deleteArtists);

router
  .route("/:artistId")
  .get(getArtist)
  .put(protectedRoute, updateArtist)
  .delete(protectedRoute, deleteArtist);

router.route("/:artistId/image").post(protectedRoute, postArtistImage);

module.exports = router;
