const discord = require("discord.js");
const prefix = "-";

module.exports = {
    name: "help",
    category: "info",
    description: "Returns latency and API ping",
    run: async (client, message, args) => {
      
      let embed = new discord.MessageEmbed()
      .setTitle("Help Menu")
      .setTimestamp()
      .setColor("RANDOM")
      .setFooter("Loading<3")
      .setThumbnail(client.user.displayAvatarURL())
      .setDescription(`
      **Bot prefix is .**
      **Commands**
      
      __.gen <Account Type>__ - Sends a random account of your type choice to your DMs.
      __.stock__ - Shows the current stock of the generator.
      
      `)
       message.channel.send(embed);
      
    }
}