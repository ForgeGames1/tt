const Discord = require("discord.js")
var bot = new Discord.Client();
const Play = require('./commands/play')
const Google = require('./commands/google')

bot.on("ready", function() {
    bot.user.setGame("Swam, !help");
    console.log("Le bot a bien ete connecte");
    
})

bot.on('message', function (message) {
    Google.parse(message)
})  

bot.o,('guildMemberAdd', function (member) {
    member.createDM().then(function (channel) {
        return channel.send('Bienvenue sur le channel ' + member.displayName)
    }).catch(console.error)
})

bot.login("NDE4MTQ1NzYzNjg0NTE1ODQw.DYGsjg.ISdAaBaf6wlZiilpm23hyCiK-e8");
