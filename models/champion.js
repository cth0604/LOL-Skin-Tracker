var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ChampionSchema = new Schema({
  name: { type: String, required: true, maxlength: 100, unique: true },
  championID: { type: String, required: true, unique: true },
  releaseDate: { type: Date, maxlength: 100 },
  originalRP: { type: Number },
  saleRP: { type: Number },
  imageURL: { type: String, required: true },
  skins: [{ type: Schema.Types.ObjectId, ref: "Skin" }],
});

//Export model
module.exports = mongoose.model("Champion", ChampionSchema);
