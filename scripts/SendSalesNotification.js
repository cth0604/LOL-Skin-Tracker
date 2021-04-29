require("dotenv").config();

const nodemailer = require("nodemailer");

const User = require("../models/user");
const Champion = require("../models/champion");
const Skin = require("../models/skin");

exports.sendEmails = async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: "hotmail",
      auth: {
        user: "lol-skin-tracker@outlook.com", // generated ethereal user
        pass: "Cth0604cth.", // generated ethereal password
      },
    });
    const sendPromises = [];
    const [users, saleChampions, saleSkins] = await Promise.all([
      User.find({}).exec(),
      Champion.find({ saleRP: { $ne: null } }).exec(),
      Skin.find({ saleRP: { $ne: null } }).exec(),
    ]);
    for (let i = 0; i < users.length; i++) {
      const currentUser = users[i];
      const wishlistItemsOnSale = [];
      saleChampions.forEach((saleChampion) => {
        if (
          currentUser.wishlist.champions.some(
            (el) => el.toString() === saleChampion.id
          )
        ) {
          wishlistItemsOnSale.push(saleChampion);
        }
      });
      saleSkins.forEach((saleSkin) => {
        if (
          currentUser.wishlist.skins.some((el) => el.toString() === saleSkin.id)
        ) {
          wishlistItemsOnSale.push(saleSkin);
        }
      });
      if (wishlistItemsOnSale.length !== 0) {
        const options = {
          from: "lol-skin-tracker@outlook.com",
          to: currentUser.email,
          subject: "Skins and Champions in your wishlist are now on sale!",
          text: wishlistItemsOnSale.map((el) => el.name).toString(),
        };
        sendPromises.push(transporter.sendMail(options));
      }
    }
    await Promise.all([...sendPromises]);
    console.log("done sending emails");
  } catch (err) {
    console.error(err);
  }
};
