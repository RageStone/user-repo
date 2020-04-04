module.exports.run = async(client, message, args, RichEmbed) => {
  var i = "";
  client.guilds.forEach(g => {
    i += g.name + "\n"
    
  })
  message.channel.send(i)
}