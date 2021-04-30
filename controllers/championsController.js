const Champion = require("../models/champion");
const async = require("async");

exports.getChampions = function (req, res, next) {
  Champion.find({}, "name imageURL championID").exec((err, champions) => {
    if (err) {
      return next(err);
    }
    res.json(champions);
  });
};

exports.getChampion = function (req, res, next) {
  Champion.findOne({
    championID: req.params.championID,
  })
    .populate("skins")
    .exec((err, champion) => {
      if (err || champion === null) {
        return next(err);
      }
      res.json(champion);
    });
};

exports.getSales = function (req, res, next) {
  Champion.find({ saleRP: { $ne: null } }).exec((err, sales) => {
    if (err) {
      return next(err);
    }
    res.json(sales);
  });
};
