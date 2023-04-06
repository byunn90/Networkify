// Thoughts
// getAllThoughts

const { Thought } = require("../models");

module.exports = {
  // getAllThoughts
  getAllThoughts(req, res) {
    Thought.find()
      .then(() => res.json())
      .catch((err) => res.status(500).json(err));
  },
  // getSingle
  getSingleThought() {},
  // createThought
  createThought() {},
  // updateThought
  updateThought() {},
  // deleteThought
  deleteThought() {},
};
