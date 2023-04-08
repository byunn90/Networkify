const { Reaction } = require("../models");

module.exports = {
  getSingleReaction(req, res) {
    Reaction.findOne({ _id: req.params.reactionId })
      .then((reaction) => {
        if (!reaction) {
          res.status(404).json({ message: "No reaction with that ID" });
        } else {
          res.json(reaction);
        }
      })
      .catch((err) => res.status(500).json(err));
  },
  createReaction(req, res) {
    Reaction.create(req.body)
      .then((reaction) => {
        res.json(reaction);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  deleteReaction(req, res) {
    Reaction.findByIdAndRemove(req.params.reactionId)
      .then((deletedReaction) => {
        if (!deletedReaction) {
          return res.status(404).json({ message: "No reaction with that ID" });
        }
        res.json({ message: "Reaction deleted!" });
      })
      .catch((err) => res.status(500).json(err));
  },
};
