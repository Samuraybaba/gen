const discord = require("discord.js");
const prefix = ".";
let c = "```";
module.exports = {
  name: "geninfo",
  category: "info",
  description: "Returns latency and API ping",
  run: async (client, message, args) => {
    let embed = new discord.MessageEmbed()
      .setTitle("Gen access Info")
      .setTimestamp()
      .setColor("RANDOM")
      .setFooter("Loading<3")
      .setThumbnail(client.user.displayAvatarURL()).setDescription(`

**HOW TO GET ACCESS TO THE GEN**


The generator costs 1 invites, or you can boost the server for instant access.


**HOW TO USE THE GENERATOR**


- Make sure to use the correct prefix, our prefix is the . symbol 

- Do " .stock " to see what's currently available in stock.

- Do ".gen (Account Service) to generate the type of account you want. 96% of the accounts work, not all of them though!
                      `);
    message.channel.send(embed);
  }
};
