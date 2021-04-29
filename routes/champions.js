const express = require("express");
const router = express.Router();

const champions_controller = require("../controllers/championsController");

router.get("/:championID", champions_controller.getChampion);

router.get("/sales", champions_controller.getSales);

router.get("/", champions_controller.getChampions);

module.exports = router;
