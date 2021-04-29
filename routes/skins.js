const express = require("express");
const router = express.Router();

const skins_controller = require("../controllers/skinsController");

router.get("/:skinName", skins_controller.getSkin);

router.get("/sales", skins_controller.getSales);

router.get("/", skins_controller.getSkins);

module.exports = router;