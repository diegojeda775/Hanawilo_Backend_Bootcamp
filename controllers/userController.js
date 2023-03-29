const User = require("../models/User");

const getUsers = async (req, res, next) => {
  const filter = {};
  const options = {};
  if (Object.keys(req.query).length) {
    const { userName, age, sortByAge, limit } = req.query;

    if (userName) filter.userName = userName;
    if (age) filter.age = age;

    if (limit) options.limit = limit;
    if (sortByAge)
      options.sort = {
        age: sortByAge === "asc" ? 1 : -1,
      };
  }

  try {
    const users = await User.find({}, filter, options);

    res.status(200).setHeader("Content-Type", "application/json").json(users);
  } catch (err) {
    next(err);
  }
};

const postUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);

    res.status(201).setHeader("Content-Type", "application/json").json(newUser);
  } catch (err) {
    next(err);
  }
};

const deleteUsers = async (req, res, next) => {
  try {
    const users = await User.deleteMany();

    res
      .status(200) //Usually its 204 but for dev we use 200 to get a response message
      .setHeader("Content-Type", "application/json")
      .json(users);
  } catch (err) {
    next(err);
  }
};

const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);

    res.status(200).setHeader("Content-Type", "application/json").json(user);
  } catch (err) {
    next(err);
  }
};
const updateUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.userId, req.body, {
      new: true,
    });

    res.status(200).setHeader("Content-Type", "application/json").json(user);
  } catch (err) {
    next(err);
  }
};
const deleteUser = async (req, res, next) => {
  try {
    const user = await User.findByIdAndDelete(req.params.userId);

    res.status(200).setHeader("Content-Type", "application/json").json(user);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUsers,
  postUser,
  deleteUsers,
  getUser,
  updateUser,
  deleteUser,
};
