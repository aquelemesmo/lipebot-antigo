const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, message) => {
    let chx = db.get(`saidacanal_${member.guild.id}`)

    if(chx === null) {
        return;
    }

    const embedMemberRemove = new Discord.MessageEmbed()
    .setThumbnail(member.user.displayAvatarURL())
    .setColor("PURPLE")
    .setDescription("Triste... O usuário " + member.user.username + " saiu do grupo... Tomará que volte")

    bot.channels.cache.get(chx).send(embedMemberRemove)
}