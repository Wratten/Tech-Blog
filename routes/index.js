const router = require("express").Router();

const { router: homeRoutes } = require("./web/home-routes");
const { router: dashboardRoutes } = require("./web/dashboard-routes");

router.use(homeRoutes);
router.use(dashboardRoutes);

module.exports = router;
