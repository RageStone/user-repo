const talkedRecently = new Set();
const { RichEmbed } = require("discord.js")
const fetch = require('node-fetch');

module.exports = { 
    config: {
        name: "meme",
        description: "Sends a meme from a website!",
        usage: "",
        category: "images",
        accessableby: "Members",
    },
   

    run: async (bot, message, args) => {
        let msg = await message.channel.send("Generating...")
        fetch("https://apis.duncte123.me/meme")
        .then(res => res.json()).then(body => {
            if(!body || !body.data.image) return message.reply(" whoops. I broke, try again!")

            let embed = new RichEmbed()
            .setAuthor(`here is your meme!`, message.guild.iconURL)
            .setImage(body.data.image)
            .setTimestamp()
           .setFooter("MADE BY LARS#9237\n Requested By " + message.author.tag, message.author.avatarURL );

            if(body.data.title) {
                embed.setTitle(body.data.title).setURL(body.data.url)
            }
                msg.edit(embed)
        
 if (talkedRecently.has(msg.author.id)) {
            msg.channel.send("Wait 1 minute before getting typing this again. - " + msg.author);
    } else {

 
           // the user can type the command ... your command code goes here :)

        // Adds the user to the set so that they can't talk for a minute
        talkedRecently.add(msg.author.id);
        setTimeout(() => {
          // Removes the user from the set after a minute
          talkedRecently.delete(msg.author.id);
        }, 60000);
    }
        })
    }
}