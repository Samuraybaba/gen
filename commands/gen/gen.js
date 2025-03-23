const fs = require("fs");
const discord = require("discord.js");
const db = require("quick.db");
const Canvas = require("canvas");
const cooldown = new Set();
module.exports = {
  name: "gen",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    function replyEmbed() {
      let embed = new discord.MessageEmbed()
        .setAuthor(
          `requested by ${message.author.tag}`,
          message.author.displayAvatarURL({
            dynamic: true
          })
        )
        .setColor("#0091ff")
        .setTimestamp()
        .setDescription("**DM'i Kontrol Et!**")
        .setFooter(`Craze Gen`)
        .setThumbnail(
          "https://i.imgur.com/b5MVGYq.png"
        );
      return message.channel.send(embed);
    }
    if (message.channel.id !== "1353390243847344209")
      return message.channel.send(
        "This isn't the gen channel, gen at <#1353390243847344209>"
      );
    if (args[0] == null) {
      return message.channel.send(
        "Lütfen istediğiniz hesap türünü belirtin!"
      );
    }
    if (
      args[0].toLowerCase() !== "geoguessr" &&
      args[0].toLowerCase() !== "tiktok" &&
      args[0].toLowerCase() !== "netflix" &&
      args[0].toLowerCase() !== "val" &&
      args[0].toLowerCase() !== "fox" &&
      args[0].toLowerCase() !== "epic" &&
      args[0].toLowerCase() !== "paramount" &&
      args[0].toLowerCase() !== "hbomax" &&
      args[0].toLowerCase() !== "steam" &&
      args[0].toLowerCase() !== "crunchyroll" &&
      args[0].toLowerCase() !== "bww" &&
      args[0].toLowerCase() !== "buffalowildwings" &&
      args[0].toLowerCase() !== "buffalo" &&
      args[0].toLowerCase() !== "disney" &&
      args[0].toLowerCase() !== "disney+" &&
      args[0].toLowerCase() !== "funimation" &&
      args[0].toLowerCase() !== "hulumix" 
    ) {
      return message.channel.send(
        "Hesap ismi yanlış, lütfen yazınızı kontrol edin, veya listeye bakıp yeniden yazın, lütfen stoğu kontol edin."
      );
    }
    if (cooldown.has(message.author.id)) {
      //console.log("yes lol");
      let embed = new discord.MessageEmbed()
        .setAuthor(
          `requsted by ${message.author.tag}`,
          message.author.displayAvatarURL({ dynamic: true })
        )
        .setTitle("Hey!")
        .setDescription("Bekleme süresindesin, lütfen bekle.")
        .setTimestamp()
        .setColor("RED")
        .setImage(
          "https://ak.picdn.net/shutterstock/videos/32435008/thumb/1.jpg"
        )
        .setThumbnail(
          "https://lh3.googleusercontent.com/proxy/MYtbg-Hy30gpNDT4ZOXYx6-I4tg8BppdaN_8MivwuoQQ05ii97kW36gbJZb2hNiUuvvFbA-XsttFwgqsrHs5tm0V"
        );
      return message.channel.send(embed);
    }
    if (
      args[0].toLowerCase() !== "geoguessr" &&
      args[0].toLowerCase() == "tiktok" ||
      args[0].toLowerCase() == "netflix" ||
      args[0].toLowerCase() == "steam" ||
      args[0].toLowerCase() == "fox" ||
      args[0].toLowerCase() == "epic" ||
      args[0].toLowerCase() == "paramount" ||
      args[0].toLowerCase() == "hbomax" ||
      args[0].toLowerCase() == "val" ||
      args[0].toLowerCase() == "crunchyroll" ||
      args[0].toLowerCase() == "bww" ||
      args[0].toLowerCase() == "buffalowildwings" ||
      args[0].toLowerCase() == "buffalo" ||
      args[0].toLowerCase() == "disney" ||
      args[0].toLowerCase() !== "disney+" &&
      args[0].toLowerCase() == "funimation" ||
      args[0].toLowerCase() !== "hulumix" 
     ) {
      if (!cooldown.has(message.author.id)) {
        //db.set(`cooldown_${message.author.id}`, true);
        cooldown.add(message.author.id);
        //console.log("added cooldown");
        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 120000);
      }
    }
    if (args[0].toLowerCase() == "val") {
      let val = fs.readFileSync("val.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let valStock = val.split("\n").length;
      if (valStock == 1 && val.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin."
        );
      replyEmbed();
      if (val.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(val.split("\n").slice(0, 1));
      let finalvar = val.split("\n");
      finalvar.shift();
      finalvar = finalvar.join("\n");
      fs.writeFileSync("val.txt", finalvar);

      //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
      //fs.writeFile("hulu.txt", linesExceptFirst);
    }
    if (
      args[0].toLowerCase() == "buffalowildwings" ||
      args[0] == "buffalo" ||
      args[0] == "bww"
    ) {
      let g = fs.readFileSync("buffalo.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let gStock = g.split("\n").length;
      if (gStock == 1 && g.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed(); //buff
      if (g.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(g.split("\n").slice(0, 1));
      let finalvar = g.split("\n");
      finalvar.shift();
      finalvar = finalvar.join("\n");
      fs.writeFileSync("buffalo.txt", finalvar);

      //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
      //fs.writeFile("hulu.txt", linesExceptFirst);
    }
    if (args[0].toLowerCase() == "crunchyroll") {
      let c = fs.readFileSync("crunchyroll.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let cStock = c.split("\n").length;
      if (cStock == 1 && c.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (c.split("\n").slice(0, 1) === null) return message.author.send(0, 2);
      message.author.send(c.split("\n").slice(0, 1));
      let finalvar = c.split("\n");
      finalvar.shift();
      finalvar = finalvar.join("\n");
      fs.writeFileSync("crunchyroll.txt", finalvar);

      //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
      //fs.writeFile("hulu.txt", linesExceptFirst);
    }
    if (args[0].toLowerCase() == "disney+" || args[0] == "disney") {
      let disney = fs.readFileSync("disney+.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let disneyStock = disney.split("\n").length;
      if (disneyStock == 1 && disney.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (disney.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(disney.split("\n").slice(0, 1));
      let finalvar = disney.split("\n");
      finalvar.shift(); //disney
      finalvar = finalvar.join("\n");
      fs.writeFileSync("disney+.txt", finalvar);

      //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
      //fs.writeFile("hulu.txt", linesExceptFirst);
    }
  
    if (args[0].toLowerCase() == "funimation") {
      let fum = fs.readFileSync("fum.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let fumStock = fum.split("\n").length;
      if (fumStock == 1 && fum.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (fum.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(fum.split("\n").slice(0, 1));
      let finalvar = fum.split("\n");
      finalvar.shift(); //disney
      finalvar = finalvar.join("\n");
      fs.writeFileSync("fum.txt", finalvar);
   //hbomax-------------------------------------------------------------
    }

    if (args[0].toLowerCase() == "hbomax") {
      let hbomax = fs.readFileSync("hbomax.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let hbomaxStock = hbomax.split("\n").length;
      if (hbomaxStock == 1 && hbomax.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (hbomax.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(hbomax.split("\n").slice(0, 1));
      let finalvar = hbomax.split("\n");
      finalvar.shift(); //disney
      finalvar = finalvar.join("\n");
      fs.writeFileSync("hbomax.txt", finalvar);
      
    //paramount-------------------------------------------------------------
    }

    if (args[0].toLowerCase() == "paramount") {
      let paramount = fs.readFileSync("paramount.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let paramountStock = paramount.split("\n").length;
      if (paramountStock == 1 && paramount.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (paramount.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(paramount.split("\n").slice(0, 1));
      let finalvar = paramount.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("paramount.txt", finalvar);
 //fox-------------------------------------------------------------
    }

    if (args[0].toLowerCase() == "fox") {
      let fox = fs.readFileSync("fox.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let foxStock = fox.split("\n").length;
      if (fox == 1 && fox.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (fox.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(fox.split("\n").slice(0, 1));
      let finalvar = fox.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("fox.txt", finalvar);
       //epic-------------------------------------------------------------
    }

    if (args[0].toLowerCase() == "epic") {
      let epic = fs.readFileSync("epic.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let epicStock = epic.split("\n").length;
      if (epicStock == 1 && epic.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (epic.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(epic.split("\n").slice(0, 1));
      let finalvar = epic.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("epic.txt", finalvar);

       //steam-------------------------------------------------------------
    }

    if (args[0].toLowerCase() == "steam") {
      let steam = fs.readFileSync("steam.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let steamStock = steam.split("\n").length;
      if (steamStock == 1 && steam.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (steam.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(steam.split("\n").slice(0, 1));
      let finalvar = steam.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("steam.txt", finalvar);
       //dazn-------------------------------------------------------------
    }

    if (args[0].toLowerCase() == "tiktok") {
      let tiktok = fs.readFileSync("tiktok.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let tiktokStock = tiktok.split("\n").length;
      if (tiktokStock == 1 && tiktok.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (tiktok.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(tiktok.split("\n").slice(0, 1));
      let finalvar = tiktok.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("tiktok.txt", finalvar);
       //dazn-------------------------------------------------------------
    }
    
    if (args[0].toLowerCase() == "tubitv") {
      let tubitv = fs.readFileSync("tubitv.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let tubitvStock = tubitv.split("\n").length;
      if (tubitvStock == 1 && tubitv.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (tubitv.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(tubitv.split("\n").slice(0, 1));
      let finalvar = tubitv.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("tubitv.txt", finalvar);
      
      //netflix-------------------------------------------------------------
       }

    if (args[0].toLowerCase() == "netflix") {
      let netflix = fs.readFileSync("netflix.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let netflixStock = netflix.split("\n").length;
      if (netflixStock == 1 && netflix.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (netflix.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(netflix.split("\n").slice(0, 1));
      let finalvar = netflix.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("netflix.txt", finalvar);
       //geoguessr-------------------------------------------------------------
    }

    if (args[0].toLowerCase() == "geoguessr") {
      let geoguessr = fs.readFileSync("geoguessr.txt").toString("utf-8");
      //hulu = hulu.split("\n");
      let geoguessrStock = geoguessr.split("\n").length;
      if (geoguessrStock == 1 && geoguessr.length == 0)
        return message.channel.send(
          "Belirttiğiniz hesap türü stockta yok! Lütfen başka birini deneyin!"
        );
      replyEmbed();
      if (geoguessr.split("\n").slice(0, 1) === null)
        return message.author.send(0, 2);
      message.author.send(geoguessr.split("\n").slice(0, 1));
      let finalvar = geoguessr.split("\n");
      finalvar.shift(); //vrv
      finalvar = finalvar.join("\n");
      fs.writeFileSync("geoguessr.txt", finalvar);
      
      //var linesExceptFirst = hulu.split('\n').slice(1).join('\n');
      //fs.writeFile("hulu.txt", linesExceptFirst);
    }

    //very end any other code goes above this line
  }
};
