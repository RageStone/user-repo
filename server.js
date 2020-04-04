// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();
let prefix = '-';
const ydtl =require("ytdl-core");
const Discord = require('discord.js')
const Enmap = require("enmap");
const fs = require("fs");

// our default array of dreams

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});


// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
const {Client, RichEmbed} = require("discord.js");
const client = new Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();


fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});


fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});


//status event
client.on('ready', () => {
  console.log('I am ready with ' +  client.user.tag + '!');
 client.user.setActivity('-help ' + '| Watching ' + client.users.size + " users in " + client.guilds.size  + " servers!", {type: 'PLAYING'} );
  
});


client.login(process.env.TOKEN)