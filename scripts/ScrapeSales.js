const axios = require("axios");
const cheerio = require("cheerio");
require("dotenv").config();

const Champion = require("../models/champion");
const Skin = require("../models/skin");

const url = "https://leagueoflegends.fandom.com/wiki/Sales";

const removePreviousSales = async () => {
  try {
    const [champions, skins] = await Promise.all([
      Champion.find({ saleRP: { $ne: null } }).exec(),
      Skin.find({ saleRP: { $ne: null } }).exec(),
    ]);
    const championPromises = [];
    const skinPromises = [];
    champions.forEach((champion) => {
      champion.saleRP = null;
      championPromises.push(champion.save());
    });
    skins.forEach((skin) => {
      skin.saleRP = null;
      skinPromises.push(skin.save());
    });
    await Promise.all([...champions, ...skins]);
    console.log("done removing sales");
  } catch (err) {
    console.log(err);
  }
};

const addCurrentSales = async () => {
  try {
    const response = await axios(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const sales = $(".centered-grid-icon");
    const savePromises = [];

    for (let i = 0; i < sales.length; i++) {
      const el = sales[i];
      const championName = $(el).children().first().data("champion");
      const skinName = $(el).children().first().data("skin");
      const skinFullName = $(el).find(".mw-redirect").text();
      const saleRP = Number($(el).find("span > b").text());
      if (skinName === "") {
        const champion = await Champion.findOne({ name: championName }).exec();
        if (champion === null) {
          console.error("Champion not found: " + championName);
        } else {
          champion.saleRP = saleRP;
          savePromises.push(champion.save());
        }
      } else {
        const skin = await Skin.findOne({ name: skinFullName }).exec();
        if (skin === null) {
          console.error("Champion not found: " + championName);
        } else {
          skin.saleRP = saleRP;
          savePromises.push(skin.save());
        }
      }
    }

    // sales.each(async (i, el) => {
    //   const championName = $(el).children().first().data("champion");
    //   const skinName = $(el).children().first().data("skin");
    //   const skinFullName = $(el).find(".mw-redirect").text();
    //   const saleRP = Number($(el).find("span > b").text());
    //   if (skinName === "") {
    //     const champion = await Champion.findOne({ name: championName }).exec();
    //     if (champion === null) {
    //       console.error("Champion not found: " + championName);
    //     } else {
    //       champion.saleRP = saleRP;
    //       savePromises.push(champion.save());
    //     }
    //   } else {
    //     const skin = await Skin.findOne({ name: skinFullName }).exec();
    //     if (skin === null) {
    //       console.error("Champion not found: " + championName);
    //     } else {
    //       skin.saleRP = saleRP;
    //       savePromises.push(skin.save());
    //     }
    //   }
    // });
    await Promise.all([...savePromises]);
    console.log("done adding sales");
  } catch (err) {
    console.error(err);
  }
};

exports.updateSales = async () => {
  await removePreviousSales();
  await addCurrentSales();
  console.log("done sales");
};
