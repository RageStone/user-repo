module.exports.run = async(client, message, args, RichEmbed) => {  
  const sMessage = args.join(" ");
  if(!sMessage) return message.channel.send("you need specific message")
  message.delete();
  message.channel.send(sMessage);

}