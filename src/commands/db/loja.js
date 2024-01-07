const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    const paginasEmbed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Lojinha estrelinha")
    .addField("")
    message.quote(paginasEmbed).then(msg => {
        msg.react(` `).then(() => {
            msg.react(``)
            msg.react(``)
            msg.react(``)
            msg.react(``)
            msg.react(``)
            msg.react(``)
        })
    })
}

module.exports.help = {
    name: "loja",
    aliases: ["lojinha"]
}