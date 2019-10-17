const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("634495937732935681")
setInterval(function() {
channel.send(`#rep 610164844674678785 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);