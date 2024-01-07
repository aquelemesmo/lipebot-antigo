const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, message) => {
    let chx = db.get(`logscanal_${member.guild.id}`)

    if(chx === null) {
        return;
    }

    const embedLog = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Uma mensagem de texto foi deletada!")
        .addField("Author", message.author.username)
        .addField("Mensagem", message.content)

    bot.channels.cache.get(chx).send(embedLog)
}