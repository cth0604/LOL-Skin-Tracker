const Skin = require("../models/skin");

exports.getSkins = function (req, res, next) {
  Skin.find({}, "name imageURL").exec((err, skins) => {
    if (err) {
      return next(err);
    }
    res.json(skins);
  });
};

exports.getSkin = function (req, res, next) {
  Skin.findOne({ name: req.params.skinName })
    .populate("champion")
    .exec((err, skin) => {
      if (err || skin === null) {
        return next(err);
      }
      res.json(skin);
    });
};

exports.getSales = function (req, res, next) {
  Skin.find({ saleRP: { $ne: null } }).exec((err, sales) => {
    if (err) {
      return next(err);
    }
    res.json(sales);
  });
};
