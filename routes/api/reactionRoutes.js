const router = require("express").Router();
const {
  getSingleReaction,
  createReaction,
  deleteReaction,
} = require("../../controllers/reaction");

// POST /api/thoughts/:thoughtId/reactions - create a reaction for a thought
router.post("/:thoughtId/reactions", createReaction);

// GET /api/thoughts/:thoughtId/reactions/:reactionId - get a single reaction for a thought
// DELETE /api/thoughts/:thoughtId/reactions/:reactionId - delete a reaction for a thought
router
  .route("/:thoughtId/reactions/:reactionId")
  .get(getSingleReaction)
  .delete(deleteReaction);

module.exports = router;
