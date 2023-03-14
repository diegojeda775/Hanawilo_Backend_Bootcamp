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

module.exports = {
  getSongs,
  postSong,
  deleteSongs,
};
