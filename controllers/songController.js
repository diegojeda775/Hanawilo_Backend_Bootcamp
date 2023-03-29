const Song = require("../models/Song.js");

const getSongs = async (req, res, next) => {
  const filter = {};
  const options = {};

  if (Object.keys(req.query).length) {
    const { songTitle, artist, genre, limit, sortByArtist } = req.query;

    if (songTitle) filter.songTitle = songTitle;
    if (artist) filter.artist = artist;
    if (genre) filter.genre = genre;

    if (limit) options.limit = limit;
    if (sortByArtist)
      options.sort = {
        artist: sortByArtist === "asc" ? 1 : -1,
      };
  }

  try {
    const songs = await Song.find({}, filter, options);

    res.status(200).setHeader("Content-Type", "application/json").json(songs);
  } catch (err) {
    next(err);
  }
};

const postSong = async (req, res, next) => {
  try {
    const newSong = await Song.create(req.body);

    res.status(201).setHeader("Content-Type", "application/json").json(newSong);
  } catch (err) {
    next(err);
  }
};

const deleteSongs = async (req, res, next) => {
  try {
    const songs = await Song.deleteMany();

    res
      .status(200) //Usually its 204 but for dev we use 200 to get a response message
      .setHeader("Content-Type", "application/json")
      .json(songs);
  } catch (err) {
    next(err);
  }
};

const getSong = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.songId);

    res.status(200).setHeader("Content-Type", "application/json").json(song);
  } catch (err) {
    next(err);
  }
};

const updateSong = async (req, res, next) => {
  try {
    const song = await Song.findByIdAndUpdate(req.params.songId, req.body, {
      new: true,
    });

    res.status(200).setHeader("Content-Type", "application/json").json(song);
  } catch (err) {
    next(err);
  }
};

const deleteSong = async (req, res, next) => {
  try {
    const song = await Song.findByIdAndDelete(req.params.songId);

    res.status(200).setHeader("Content-Type", "application/json").json(song);
  } catch (err) {
    next(err);
  }
};

const getSongRatings = async (res, req, next) => {
  try {
    const song = await Song.findById(req.params.songId);

    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(song.ratings);
  } catch (err) {
    next(err);
  }
};

const createSongRating = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.songId);
    song.ratings.push(req.body);
    await song.save();

    res.status(201).setHeader("Content-Type", "application/json").json(song);
  } catch (err) {
    next(err);
  }
};

const deleteSongRatings = async (req, res, next) => {
  try {
    const song = await Song.findById(req.params.songId);
    song.ratings = [];
    await song.save();

    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json({
        message: `Ratings deleted for song with id: ${req.params.songId}`,
      });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getSongs,
  postSong,
  deleteSongs,
  getSong,
  updateSong,
  deleteSong,
  getSongRatings,
  createSongRating,
  deleteSongRatings,
};
