module.exports.run = async(client, message, args, RichEmbed) => {
//help command
  const Embed = new RichEmbed()
  .setTitle("Help commands!")
  .setColor(0xFF0000)
  .setDescription("**here is my command list:**")
  .addField("**PREFIX:**", "``-``")
  .addField("**-help**", "``see this list``")
  .addField("**-say {mesage}**", "``make the bot say something``")
  .addField("**-avatar**", "``see your avatar``")
  .addField("**-avm {user}**", "``see the mentioned member`s avatar``")
  .addField("**-invite**", "``invite the bot to your server``")
  .addField("**-ping**", "``pong!``")
  .addField("__________________", "**Minecraft**")
  .addField("**-mc {server} {port}**", "``see minecraft sever stats``")
  .addField("**-skin {user}**", "``see the skin of a mc user``")
  .addField("**-head {user}**", "``see the head of a mc user``")
  .setTimestamp()
  .setFooter("MADE BY LARS#9237\n Requested By " + message.author.tag, message.author.avatarURL);
  message.reply(" look at your dm`s for my command list!")
  message.author.send(Embed);       
    }
