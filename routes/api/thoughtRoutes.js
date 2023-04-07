const router = require("express").Router();
const {
  getAllThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  updateThought,
} = require("../../controllers/thought");

// /api/thoughts
router.route("/").get(getAllThoughts).post(createThought);

// /api/thoughts/:thoughtId
router
  .route("/:thoughtId")
  // get single thought
  .get(getSingleThought)
  // create a single thought
  .put(updateThought)
  // create a thought
  .delete(deleteThought);
// delete a thought at one end point
module.exports = router;
