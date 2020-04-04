module.exports.run = async(client, message, args, RichEmbed) => {
//head command
  if (!args[0]) return message.channel.send('**Please type a vaild Minecraft user**')
  const Embed = new RichEmbed()
  .setTitle('here is the of of ' + args[0])
  .setImage('https://minotar.net/cube/' + args[0] + '/100.png')
  .setTimestamp()
  .setColor('RANDOM')
  .setFooter('Made By LARS#9237\n Requested By ' + message.author.tag, message.author.avatarURL)
  message.channel.send(Embed)
}
