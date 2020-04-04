module.exports.run = async(client, message, args, RichEmbed) => {
//invite command
  const Embed = new RichEmbed()
  .setTitle("Click Here For My Invite:")
  .setURL("https://discordapp.com/api/oauth2/authorize?client_id=692280872040398860&permissions=8&scope=bot")
  .setTimestamp()
  .setFooter("MADE BY LARS#9237\n Requested By " + message.author.tag, message.author.avatarURL );
		message.channel.send(Embed); // Call .send() on the channel object the message was sent in
	}
