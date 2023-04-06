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
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        if (!thought) {
          res.status(404).json({ message: "No thought with that ID" });
        } else {
          res.json(thought);
        }
      })
      .catch((err) => res.status(500).json(err));
  },

  // createThought
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought by ID
  deleteThought(req, res) {
    Thought.findByIdAndDelete(req.params.thoughtId)
      .then((deletedThought) => {
        if (!deletedThought) {
          return res.status(404).json({ message: "No thought with that ID" });
        }
        res.json({ message: "Thought deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },

  // Update a thought by ID
  updateThought(req, res) {
    Thought.findByIdAndUpdate(
      req.params.thoughtId,
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((updatedThought) => {
        if (!updatedThought) {
          return res.status(404).json({ message: "No thought with that ID" });
        }
        res.json(updatedThought);
      })
      .catch((err) => res.status(500).json(err));
  },
};
