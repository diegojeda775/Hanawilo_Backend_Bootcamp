const Artist = require("../models/Artist");
const path = require("path");

const getArtists = async (req, res, next) => {
  const filter = {};
  const options = {};
  if (Object.keys(req.query).length) {
    const { firstName, lastName, genre, limit, sortByGenre } = req.query;

    if (firstName) filter.firstName = firstName;
    if (lastName) filter.lastName = lastName;
    if (genre) filter.genre = genre;

    if (limit) options.limit = limit;
    if (sortByGenre)
      options.sort = {
        genre: sortByGenre === "asc" ? 1 : -1,
      };
  }

  try {
    const artists = await Artist.find({}, filter, options);

    res.status(200).setHeader("Content-Type", "application/json").json(artists);
  } catch (err) {
    next(err);
  }
};

const postArtist = async (req, res, next) => {
  try {
    const newArtist = await Artist.create(req.body);

    res
      .status(201)
      .setHeader("Content-Type", "application/json")
      .json(newArtist);
  } catch (err) {
    next(err);
  }
};

const deleteArtists = async (req, res, next) => {
  try {
    const deletedArtists = await Artist.deleteMany();

    res
      .status(200) //Usually its 204 but for dev we use 200 to get a response message
      .setHeader("Content-Type", "application/json")
      .json(deletedArtists);
  } catch (err) {
    next(err);
  }
};

const getArtist = async (req, res, next) => {
  try {
    const artist = await Artist.findById(req.params.artistId);

    res.status(200).setHeader("Content-Type", "application/json").json(artist);
  } catch (err) {
    next(err);
  }
};

const updateArtist = async (req, res, next) => {
  try {
    const updatedArtist = await Artist.findByIdAndUpdate(
      req.params.artistId,
      req.body,
      { new: true }
    );

    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(updatedArtist);
  } catch (err) {
    next(err);
  }
};

const deleteArtist = async (req, res, next) => {
  try {
    const deletedArtist = await Artist.findByIdAndDelete(req.params.artistId);

    res
      .status(200)
      .setHeader("Content-Type", "application/json")
      .json(deletedArtist);
  } catch (err) {
    next(err);
  }
};

const postArtistImage = async (req, res, next) => {
  try {
    const err = { message: `Missing Image` };

    if (!req.files) next(err);

    const file = req.files.file;

    if (!file.mimetype.startsWith("image"))
      next((err.message = "Please upload image file type"));
    if (file.size > process.env.MAZ_FILE_SIZE)
      next(
        (err.message = `Image exceeds size of ${process.env.MAZ_FILE_SIZE}`)
      );

    file.name = `photo_${req.params.artistId}${path.parse(file.name).ext}`;

    const filePath = process.env.FILE_UPLOAD_PATH + file.name;

    file.mv(filePath, async (err) => {
      await Artist.findByIdAndUpdate(req.params.artistId, { image: file.name });

      res
        .status(200)
        .setHeader("Content-Type", "application/json")
        .json({ message: "Image successfully uploaded" });
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getArtists,
  postArtist,
  deleteArtists,
  getArtist,
  updateArtist,
  deleteArtist,
  postArtistImage,
};
