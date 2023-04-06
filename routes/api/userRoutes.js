const router = require("express").Router();
const {
  getAllUsers,
  getSingleUser,
  createNewUser,
  deleteUser,
  updateUser,
} = require("../../controllers/user");

// /api/users
router.route("/").get(getAllUsers).post(createNewUser);

// /api/users/:userID
router.route("/:userID").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
