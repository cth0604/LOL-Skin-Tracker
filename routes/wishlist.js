const express = require("express");
const router = express.Router();

const wishlist_controller = require("../controllers/wishlistController");

router.get("/get/:email", wishlist_controller.getWishlist);

router.get("/champion/wishlisted/:championName/:email", wishlist_controller.checkChampionWishlisted);

router.post("/champion/add", wishlist_controller.addChampion);

router.post("/champion/remove", wishlist_controller.removeChampion);

router.get("/skin/wishlisted/:skinName/:email", wishlist_controller.checkSkinWishlisted);

router.post("/skin/add", wishlist_controller.addSkin);

router.post("/skin/remove", wishlist_controller.removeSkin);


module.exports = router;
