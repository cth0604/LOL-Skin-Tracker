const User = require("../models/user");
const Champion = require("../models/champion");
const Skin = require("../models/skin");

exports.checkChampionWishlisted = function (req, res, next) {
  User.findOne({ email: req.params.email }, "wishlist")
    .populate("wishlist.champions")
    .exec((err, user) => {
      if (err || user === null) {
        return next(err);
      }
      return res.send(
        user.wishlist.champions.some(
          (champion) => champion.name === req.params.championName
        )
      );
    });
};

exports.addChampion = function (req, res, next) {
  async.parallel(
    {
      user: function (cb) {
        User.findOne({ email: req.body.email }, "wishlist")
          .populate("wishlist.champions")
          .exec(cb);
      },
      champion: function (cb) {
        Champion.findOne({ name: req.body.name }, cb);
      },
    },
    (err, results) => {
      const { user, champion } = results;
      if (err || user === null || champion === null) {
        return next(err);
      }
      if (
        !user.wishlist.champions.some(
          (champion) => champion.name === req.body.name
        )
      ) {
        user.wishlist.champions.push(champion._id);
        user.save((err) => {
          if (err) {
            return next(err);
          }
          return res.json({
            message: "Added successsfully.",
            champion: champion.name,
          });
        });
      } else {
        return res.json({
          message: "Champion already added.",
          champion: champion.name,
        });
      }
    }
  );
};

exports.removeChampion = function (req, res, next) {
  async.parallel(
    {
      user: function (cb) {
        User.findOne({ email: req.body.email }, "wishlist")
          .populate("wishlist.champions")
          .exec(cb);
      },
      champion: function (cb) {
        Champion.findOne({ name: req.body.name }, cb);
      },
    },
    (err, results) => {
      const { user, champion } = results;
      if (err || user === null || champion === null) {
        return next(err);
      }
      if (
        user.wishlist.champions.some(
          (champion) => champion.name === req.body.name
        )
      ) {
        user.wishlist.champions = user.wishlist.champions.filter(
          (champion) => champion.name !== req.body.name
        );
        user.save((err) => {
          if (err) {
            return next(err);
          }
          return res.json({
            message: "Champion removed successfully.",
            champion: champion.name,
          });
        });
      } else {
        return res.json({
          message: "Champion initially not wishlisted.",
          champion: champion.name,
        });
      }
    }
  );
};

exports.checkSkinWishlisted = function (req, res, next) {
  User.findOne({ email: req.params.email }, "wishlist")
    .populate("wishlist.skins")
    .exec((err, user) => {
      if (err || user === null) {
        return next(err);
      }
      return res.send(
        user.wishlist.skins.some((skin) => skin.name === req.params.skinName)
      );
    });
};

exports.addSkin = function (req, res, next) {
  async.parallel(
    {
      user: function (cb) {
        User.findOne({ email: req.body.email }, "wishlist")
          .populate("wishlist.skins")
          .exec(cb);
      },
      skin: function (cb) {
        Skin.findOne({ name: req.body.name }, cb);
      },
    },
    (err, results) => {
      const { user, skin } = results;
      if (err || user === null || skin === null) {
        return next(err);
      }
      if (!user.wishlist.skins.some((skin) => skin.name === req.body.name)) {
        user.wishlist.skins.push(skin._id);
        user.save((err) => {
          if (err) {
            return next(err);
          }
          return res.json({
            message: "Added successsfully.",
            skin: skin.name,
          });
        });
      } else {
        return res.json({
          message: "Skin already added.",
          skin: skin.name,
        });
      }
    }
  );
};

exports.removeSkin = function (req, res, next) {
  async.parallel(
    {
      user: function (cb) {
        User.findOne({ email: req.body.email }, "wishlist")
          .populate("wishlist.skins")
          .exec(cb);
      },
      skin: function (cb) {
        Skin.findOne({ name: req.body.name }, cb);
      },
    },
    (err, results) => {
      const { user, skin } = results;
      if (err || user === null || skin === null) {
        return next(err);
      }
      if (user.wishlist.skins.some((skin) => skin.name === req.body.name)) {
        user.wishlist.skins = user.wishlist.skins.filter(
          (skin) => skin.name !== req.body.name
        );
        user.save((err) => {
          if (err) {
            return next(err);
          }
          return res.json({
            message: "Skin removed successfully.",
            skin: skin.name,
          });
        });
      } else {
        return res.json({
          message: "Skin initially not wishlisted.",
          skin: skin.name,
        });
      }
    }
  );
};

exports.getWishlist = function (req, res, next) {
  User.findOne({ email: req.params.email }, "wishlist")
    .populate("wishlist.champions")
    .populate("wishlist.skins")
    .exec((err, user) => {
      if (err || user === null) {
        return next(err);
      }
      return res.json(user.wishlist);
    });
};
