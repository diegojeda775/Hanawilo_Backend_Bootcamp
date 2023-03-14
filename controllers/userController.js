const getUsers = (req, res, next) => {
  res.status(200).setHeader("Content-Type", "application/json").json({
    message: "Success: We got all Users!",
  });
};

const postUser = (req, res, next) => {
  res.status(201).setHeader("Content-Type", "application/json").json({
    message: "Success: We created a User!",
  });
};

const deleteUsers = (req, res, next) => {
  res
    .status(200) //Usually its 204 but for dev we use 200 to get a response message
    .setHeader("Content-Type", "application/json")
    .json({
      message: "Success: We deleted Users!",
    });
};

module.exports = {
  getUsers,
  postUser,
  deleteUsers,
};
