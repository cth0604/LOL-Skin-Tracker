var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SkinSchema = new Schema({
  name: { type: String, required: true, maxlength: 100 },
  skinNumber: { type: Number, required: true },
  imageURL: { type: String, required: true },
  releaseDate: { type: Date, maxlength: 100 },
  originalRP: { type: Number },
  saleRP: { type: Number },
  champion: { type: Schema.Types.ObjectId, required: true, ref: "Champion" },
});

//Export model
module.exports = mongoose.model("Skin", SkinSchema);
