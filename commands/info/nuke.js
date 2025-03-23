const discord = require('discord.js')

module.exports = {
  name: "nuke",
  aliases: ["nuke"],
  category: "fun",
  description: "Shows jail comment",
  usage: "jail <@user>",
  run: async (client, message, args) => {
    
    if (message.member.permissions.has("MANAGE_CHANNELS")) {
      
    
    let channel = client.channels.cache.get(message.channel.id)
    let pos = channel.position;
      
      channel.send("Please wait...")
    
    channel.clone().then(channel2 => {
      
      channel2.setPosition(pos)
      channel.delete()
      channel2.send("Channel nuked successfully! \nhttps://media2.giphy.com/media/XUFPGrX5Zis6Y/giphy.gif?cid=ecf05e47gwk6qfgr0dbyyhmprxsrfte0preinevhi8igrapu&rid=giphy.gif&ct=g")
      
    })
    } else {
      message.reply("Error!: `You are missing MANAGE_CHANNELS permissions`")
    }
  }
}