const router = require("express").Router();
const apiRoutes = require("./api");

// Include the entire "api" module under the "/api" base URL
router.use("/api", apiRoutes);

// If none of the above routes match, send an error response
router.use((req, res) => res.send("Wrong route!"));

module.exports = router;
