//Import the necessasry modules and routes

const router= require("express").Router();
const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");

//Route Set Up //

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

// Export the router here //
module.exports= router;
