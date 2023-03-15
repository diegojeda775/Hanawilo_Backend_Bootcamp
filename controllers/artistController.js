const getArtists = (req, res, next) => {
  if (Object.keys(req.query).length) {
    const { firstName, lastName, genre } = req.query;
    const filter = [];

    if (firstName) filter.push(firstName);
    if (lastName) filter.push(lastName);
    if (genre) filter.push(genre);

    for (query of filter) {
      console.log(`Searching artist by: ${query}`);
    }
  }
  res.status(200).setHeader("Content-Type", "application/json").json({
    message: "Success: We got all Artists!",
  });
};

const postArtist = (req, res, next) => {
  res.status(201).setHeader("Content-Type", "application/json").json({
    message: "Success: We created an Artist!",
  });
};

const deleteArtists = (req, res, next) => {
  res
    .status(200) //Usually its 204 but for dev we use 200 to get a response message
    .setHeader("Content-Type", "application/json")
    .json({
      message: "Success: We deleted Artists!",
    });
};

const getArtist = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({
      message: `Success: Show me artist with artist ID of ${req.params.artistId}!`,
    });
};
const updateArtist = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({
      message: `Success: Updated artist with artist ID of ${req.params.artistId}!`,
    });
};
const deleteArtist = (req, res, next) => {
  res
    .status(200)
    .setHeader("Content-Type", "application/json")
    .json({
      message: `Success: Deleted artist with artist ID of ${req.params.artistId}!`,
    });
};

module.exports = {
  getArtists,
  postArtist,
  deleteArtists,
  getArtist,
  updateArtist,
  deleteArtist,
};
