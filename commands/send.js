module.exports.run = async(client, message, args, RichEmbed) => {  
//send command
let channel = message.guild.channels.find(channel => channel.toString() == args[0])
if(channel) channel.send(args.slice(1).join(" "))
message.delete();
channel
if(!channel) message.channel.send(args.join(" "))
  const Embed = new RichEmbed()
  .setTitle('Done! ')
  .setDescription('Ive sent ' + ' ' + args[2] + ' ' + args[3] + ' ' + args[4] + ' ' + args[4] + ' ' + args[4] + ' ' + ' in ' + args[0])
  .setFooter("MADE BY LARS#9237\n Requested By " + message.author.tag, message.author.avatarURL)
  message.channel.send(Embed)
  .then(Embed => {
  setTimeout(() => {
  Embed.delete()
}, 8000);
 
  })  
}    