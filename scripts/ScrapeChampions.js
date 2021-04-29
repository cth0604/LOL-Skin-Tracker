const axios = require("axios");
const cheerio = require("cheerio");
const Champion = require("../models/champion");
require("dotenv").config();

const url = "https://leagueoflegends.fandom.com/wiki/List_of_champions";

const addChampions = async (version) => {
  try {
    const res = await axios.get(
      `http://ddragon.leagueoflegends.com/cdn/${version}/data/en_US/champion.json`
    );
    const championsData = res.data.data;
    const savePromises = [];
    for (const championDataKey in championsData) {
      const championData = championsData[championDataKey];
      const champion = await Champion.findOne({
        championID: championData.id,
      }).exec();
      if (champion === null) {
        const champion = new Champion({
          name: championData.name,
          championID: championData.id,
          imageURL: `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${championData.id}_0.jpg`,
        });
        savePromises.push(champion.save());
      }
    }
    await Promise.all([...savePromises]);
    console.log("done adding champions");
  } catch (err) {
    console.error(err);
  }
};

const scrapeChampionInfo = async () => {
  try {
    const res = await axios(url);
    const html = res.data;
    const $ = cheerio.load(html);
    const champions = $(".article-table > tbody > tr");
    const savePromises = [];

    for (let i = 1; i < champions.length; i++) {
      const el = champions[i];
      const championInfos = $(el).find("td");
      let championName = null;
      let originalRP = null;
      let releaseDate = null;
      championInfos.each((i, el) => {
        switch (i) {
          case 0:
            championName = $(el).attr("data-sort-value");
            break;
          case 2:
            releaseDate = new Date(
              $(el)
                .text()
                .replaceAll(" ", "")
                .replace(/(\r\n|\n|\r)/gm, "")
            );
            break;
          case 5:
            originalRP = Number(
              $(el)
                .text()
                .replaceAll(" ", "")
                .replace(/(\r\n|\n|\r)/gm, "")
            );
        }
      });
      const champion = await Champion.findOne({ name: championName }).exec();
      if (champion === null) {
        console.error("Error, champion not found: " + championName);
      } else {
        champion.originalRP = originalRP;
        champion.releaseDate = releaseDate;
        savePromises.push(champion.save());
      }
    }

    // champions.each(async (i, el) => {
    //   if (i === 0) {
    //     return;
    //   }
    //   const championInfos = $(el).find("td");
    //   let championName = null;
    //   let originalRP = null;
    //   let releaseDate = null;
    //   championInfos.each((i, el) => {
    //     switch (i) {
    //       case 0:
    //         championName = $(el).attr("data-sort-value");
    //         break;
    //       case 2:
    //         releaseDate = new Date(
    //           $(el)
    //             .text()
    //             .replaceAll(" ", "")
    //             .replace(/(\r\n|\n|\r)/gm, "")
    //         );
    //         break;
    //       case 5:
    //         originalRP = Number(
    //           $(el)
    //             .text()
    //             .replaceAll(" ", "")
    //             .replace(/(\r\n|\n|\r)/gm, "")
    //         );
    //     }
    //   });
    //   const champion = await Champion.findOne({ name: championName }).exec();
    //   if (champion === null) {
    //     console.error("Error, champion not found: " + championName);
    //   } else {
    //     champion.originalRP = originalRP;
    //     champion.releaseDate = releaseDate;
    //     savePromises.push(champion.save());
    //   }
    // });
    await Promise.all([...savePromises]);
    console.log("done updating champions");
  } catch (err) {
    console.error(err);
  }
};

exports.updateChampions = async () => {
  try {
    const res = await axios.get(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );
    const version = res.data[0];
    await addChampions(version);
    await scrapeChampionInfo();
    console.log("done champions");
  } catch (err) {
    console.error(err);
  }
};
