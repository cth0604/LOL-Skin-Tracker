var mongoose = require("mongoose");
var bcrypt = require("bcrypt");

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: { type: String, required: true, maxlength: 100, unique: true },
  password: { type: String, required: true, maxlength: 100 },
  wishlist: {
    champions: [{ type: Schema.Types.ObjectId, ref: "Champion" }],
    skins: [{ type: Schema.Types.ObjectId, ref: "Skin" }],
  },
});

UserSchema.pre("save", function (next) {
  if (this.isNew || this.isModified("password")) {
    const document = this;
    bcrypt.hash(document.password, 10, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};

//Export model
module.exports = mongoose.model("User", UserSchema);
