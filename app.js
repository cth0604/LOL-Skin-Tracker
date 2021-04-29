var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
require("dotenv").config();

var championsRouter = require("./routes/champions");
var skinsRouter = require("./routes/skins");
var wishlistRouter = require("./routes/wishlist");

var mongoose = require("mongoose");

var mongoDB = process.env.DB_KEY;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
var corsOptions = {
  credentials: true,
};
app.use(cors(corsOptions));

app.use("/api/champions", championsRouter);
app.use("/api/skins", skinsRouter);
app.use("/api/wishlist", wishlistRouter);
if (
  process.env.NODE_ENV === "production" ||
  process.env.NODE_ENV === "staging"
) {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

// catch 404 and forward to error handler
app.use("*", function (req, res, next) {
  next(createError(404));
});

// error handler
app.use((error, req, res, next) => {
  if (!error.statusCode) error.statusCode = 500;

  if (error.statusCode === 301) {
    return res.status(301).redirect("/error");
  }

  return res.status(error.statusCode).json({ error: error.toString() });
});

module.exports = app;
