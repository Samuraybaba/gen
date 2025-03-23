const fs = require("fs");
const discord = require("discord.js")
module.exports = {
    name: "stock",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
      //disney
      let disney = fs.readFileSync("disney+.txt").toString('utf-8');
      let disney1 = disney.split("\n");
      let disneyStock = disney1.length - 1; //disney
      if (disney1.length == 1 && disney.length > 0) disneyStock = 1;
      if (disney1.length == 1 && disney.length == 0) disneyStock = 0;
       //crunchy
      let c = fs.readFileSync("crunchyroll.txt").toString('utf-8');
      let c1 = c.split("\n");
      let cStock = c1.length - 1;
      if (c1.length == 1 && c.length > 0) cStock = 1;
      if (c1.length == 1 && c.length == 0) cStock = 0;
      //buffalo
      let g = fs.readFileSync("buffalo.txt").toString('utf-8');
      let g1 = g.split("\n");
      let gStock = g1.length - 1;
      if (g1.length == 1 && g.length > 0) gStock = 1;
      if (g1.length == 1 && g.length == 0) gStock = 0;
      //fumination
      let f = fs.readFileSync("fum.txt").toString('utf-8');
      let f1 = f.split("\n");
      let fStock = f1.length - 1;
      if (f1.length == 1 && f.length > 0) fStock = 1;
      if (f1.length == 1 && f.length == 0) fStock = 0;
      //hbomax
      let hbomax = fs.readFileSync("hbomax.txt").toString('utf-8');
      let hbomax1 = hbomax.split("\n");
      let hbomaxStock = hbomax1.length - 1;
      if (hbomax.length == 1 && hbomax.length > 0) hbomaxStock = 1;
      if (hbomax1.length == 1 && hbomax.length == 0) hbomaxStock = 0;
   //paramount
      let paramount = fs.readFileSync("paramount.txt").toString('utf-8');
      let paramount1 = paramount.split("\n");
      let paramountStock = paramount1.length - 1; //vrv
      if (paramount.length == 1 && paramount.length > 0) paramountStock = 1;
      if (paramount1.length == 1 && paramount.length == 0) paramountStock = 0;
       //onlyfansmix
      let steam= fs.readFileSync("steam.txt").toString('utf-8');
      let steam1 = steam.split("\n");
      let steamStock = steam.length - 1; //vrv
      if (steam.length == 1 && steam.length > 0) steamStock = 1;
      if (steam.length == 1 && steam.length == 0) steamStock = 0;
       //fox
      let fox = fs.readFileSync("fox.txt").toString('utf-8');
      let fox1 = fox.split("\n");
      let foxStock = fox1.length - 1; //vrv
      if (fox.length == 1 && fox.length > 0) foxStock = 1;
      if (fox1.length == 1 && fox.length == 0) foxStock = 0;
       //epic
      let epic = fs.readFileSync("epic.txt").toString('utf-8');
      let epic1 = epic.split("\n");
      let epicStock = epic1.length - 1; //vrv
      if (epic.length == 1 && epic.length > 0) epicStock = 1;
      if (epic1.length == 1 && epic.length == 0) epicStock = 0;
       //hulu
      let val = fs.readFileSync("val.txt").toString('utf-8');
      let val1 = val.split("\n");
      let valStock = val1.length - 1; //vrv
      if (val.length == 1 && val.length > 0) valStock = 1;
      if (val1.length == 1 && val.length == 0) valStock = 0;
       //shudder
       //dazn
      let tiktok = fs.readFileSync("tiktok.txt").toString('utf-8');
      let tiktok1 = tiktok.split("\n");
      let tiktokStock = tiktok1.length - 1; //vrv
      if (tiktok.length == 1 && tiktok.length > 0) tiktokStock = 1;
      if (tiktok1.length == 1 && tiktok.length == 0) tiktokStock = 0;
      //directtv
      let netflix = fs.readFileSync("netflix.txt").toString('utf-8');
      let netflix1 = netflix.split("\n");
      let netflixStock = netflix1.length - 1; //vrv
      if (netflix.length == 1 && netflix.length > 0) netflixStock = 1;
      if (netflix1.length == 1 && netflix.length == 0) netflixStock = 0;
       //geoguessr
      let geoguessr = fs.readFileSync("geoguessr.txt").toString('utf-8');
      let geoguessr1 = geoguessr.split("\n");
      let geoguessrStock = geoguessr1.length - 1; //vrv
      if (geoguessr.length == 1 && geoguessr.length > 0) geoguessrStock = 1;
      if (geoguessr1.length == 1 && geoguessr.length == 0) geoguessrStock = 0;
      let embed = new discord.MessageEmbed()
       .setTitle("Stock")
       .addField("Crunchyroll", cStock + " hesap", true)
       .addField("Funimation", fStock + " hesap", true)
       .addField("Disney+", disneyStock + " hesap", true)
       .addField("BuffaloWildWings", gStock + " hesap", true)
       .addField("Hbomax", hbomaxStock + " hesap", true)
       .addField("Paramount", paramountStock + " hesap", true)
       .addField("steam", steamStock + " hesap", true)
       .addField("fox", foxStock + " hesap", true)
       .addField("epic", epicStock + " hesap", true)
       .addField("val", valStock + " hesap", true)
       .addField("tiktok", tiktokStock + " hesap", true)
       .addField("Netflix", netflixStock + " hesap", true)
       .addField("GeoGuesser", geoguessrStock + " hesap", true)

       .setFooter("Master Gen<3", message.guild.iconURL)
       .setTimestamp()
       .setColor("RANDOM")
       message.channel.send(embed);
    }
}