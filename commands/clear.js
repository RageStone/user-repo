module.exports.run = async(client, message, args, RichEmbed) => {
//clear command
if (isNaN(args[0])) return message.channel.send('**Please supply a vaild amount of messages to delete**')
if (args[0] > 100) return message.channel.send('**Please type a number less the 100**')
message.channel.bulkDelete(args[0])
  .then
 const a = message.channel.send('deleted ' + '``' + args[0] + '``' + ' messages')
  .then(message => {
  setTimeout(() => {
    a.delete()
  }, 5000)
}
        )
}
