const { User } = require("../models");

// GET all users
module.exports = {
  getAllUsers(req, res) {
    User.find()
      .then((allUsers) => res.json(allUsers))
      .catch((err) => {
        res.status(500).json(err);
      });
  },
};
// GET a single user by its _id and populated thought and friend data

// POST a new user:

// PUT to update a user by its _id

// DELETE to remove user by its _id
