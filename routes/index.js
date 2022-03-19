const router = require("express").Router();

const { router: homeRoutes } = require("./web/home-routes");

router.use(homeRoutes);

module.exports = router;
