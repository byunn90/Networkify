const { User } = require("../models");

// GET all users
module.exports = {
  // Get all User's
  getAllUsers(req, res) {
    User.find()
      .then((allUsers) => res.json(allUsers))
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  // Get a single user By userName
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userID })
      .select("-__v")
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "No user with that ID" });
        } else {
          res.json(user);
        }
      })
      .catch((err) => res.status(500).json(err));
  },

  createNewUser(req, res) {
    User.create(req.body)
      .then((newUser) => res.json(newUser))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  // delete User by ID
  deleteUser(req, res) {
    User.findByIdAndDelete(req.params.userID)
      .then((deletedUser) => {
        if (!deletedUser) {
          return res.status(404).json({ message: "No user with that ID" });
        }
        return Thought.deleteMany({ _id: { $in: deletedUser.thoughts } }).then(
          () => {
            return res.json({
              message: "User and associated thoughts deleted!",
            });
          }
        );
      })
      .catch((err) => res.status(500).json(err));
  },

  // update user by its id
  updateUser(req, res) {
    const userId = req.params.id;
    const updatedUserData = req.body;
    User.findByIdAndUpdate(
      userId,
      { $set: updatedUserData },
      { runValidators: true, new: true }
    )
      .then((updatedUser) => {
        if (!updatedUser) {
          return res.status(404).json({ message: "No user with that ID" });
        }
        res.json(updatedUser);
      })
      .catch((err) => res.status(500).json(err));
  },
};
