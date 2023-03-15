const getSongs = (req, res, next) => {
  res.status(200).setHeader("Content-Type", "application/json").json({
    message: "Success: We got all songs!",
  });
};

const postSong = (req, res, next) => {
  res.status(201).setHeader("Content-Type", "application/json").json({
    message: "Success: We created a song!",
  });
};

const deleteSongs = (req, res, next) => {
  res
    .status(200) //Usually its 204 but for dev we use 200 to get a response message
    .setHeader("Content-Type", "application/json")
    .json({
      message: "Success: We deleted songs!",
    });
};

const getSong = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({
      message: `Success: Show me song with song ID of ${req.params.songId}!`,
    });
};
const updateSong = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({
      message: `Success: Updated song with song ID of ${req.params.songId}!`,
    });
};
const deleteSong = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({
      message: `Success: Deleted song with song ID of ${req.params.songId}!`,
    });
};

module.exports = {
  getSongs,
  postSong,
  deleteSongs,
  getSong,
  updateSong,
  deleteSong,
};
