const axios = require("axios");
const cheerio = require("cheerio");
const Skin = require("../models/skin");
const Champion = require("../models/champion");
require("dotenv").config();

const url =
  "https://leagueoflegends.fandom.com/wiki/List_of_champion_skins_(League_of_Legends)";

const addSkins = async (version) => {
  try {
    const champions = await Champion.find({}).exec();
    const savePromises = [];
    for (let i = 0; i < champions.length; i++) {
      const champion = champions[i];
      const championID = champion.championID;
      const res = await axios.get(
        `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion/${championID}.json`
      );
      const championSkinsData = res.data.data[championID].skins;
      for (let j = 0; j < championSkinsData.length; j++) {
        const skinData = championSkinsData[j];
        const skinName =
          skinData.name === "default"
            ? `Original ${champion.name}`
            : skinData.name;
        const skin = await Skin.findOne({ name: skinName }).exec();
        if (skin === null) {
          const skin = new Skin({
            name: skinName,
            skinNumber: skinData.num,
            imageURL: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championID}_${skinData.num}.jpg`,
            champion: champion._id,
          });
          await skin.save();
          champion.skins.push(skin._id);
          savePromises.push(champion.save());
        }
      }
    }
    await Promise.all([...savePromises]);
    console.log("done adding skins");
  } catch (err) {
    console.error(err);
  }
};

const scrapeSkinInfo = async () => {
  try {
    const res = await axios(url);
    const html = res.data;
    const $ = cheerio.load(html);
    const skins = $(".article-table > tbody > tr");
    const savePromises = [];
    for (let i = 1; i < skins.length; i++) {
      const el = skins[i];
      const skinInfos = $(el).find("td");
      let skinName = null;
      let originalRP = null;
      let releaseDate = null;
      skinInfos.each((i, el) => {
        switch (i) {
          case 1:
            skinName = $(el).text();
            break;
          case 3:
            releaseDate = new Date($(el).attr("data-sort-value"));
            break;
          case 4:
            originalRP =
              $(el).attr("data-sort-value") === "special"
                ? 0
                : Number($(el).attr("data-sort-value"));
        }
      });
      const skin = await Skin.findOne({ name: skinName }).exec();
      if (skin === null) {
        console.log("Unreleased Skin: " + skinName);
      } else {
        skin.originalRP = originalRP;
        skin.releaseDate = releaseDate;
        savePromises.push(skin.save());
      }
    }
    await Promise.all([...savePromises]);
    console.log("done updating skins");
  } catch (err) {
    console.error(err);
  }
};

exports.updateSkins = async () => {
  try {
    const res = await axios.get(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const version = res.data[0];
    await addSkins(version);
    await scrapeSkinInfo();
    console.log("done skins");
  } catch (err) {
    console.error(err);
  }
};
