const db = require("quick.db")
module.exports.run = async (client, message, args) => {
  await db.set(`prefix_${message.guild.id}`, args[0])
 
  message.channel.send("ok, i set the new prefix for this server to " + args[0])
}