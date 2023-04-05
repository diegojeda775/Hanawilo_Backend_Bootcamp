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

const router = express.Router();

router.route("/").get(getArtists).post(postArtist).delete(deleteArtists);

router
  .route("/:artistId")
  .get(getArtist)
  .put(updateArtist)
  .delete(deleteArtist);

router.route("/:artistId/image").post(postArtistImage);

module.exports = router;
