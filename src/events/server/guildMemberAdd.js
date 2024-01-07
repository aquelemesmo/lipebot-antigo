const Discord = require("discord.js")
const db = require("quick.db")

module.exports = async (bot, member, message) => {
    let chx = db.get(`boasvindascanal_${member.guild.id}`)

    if(chx === null) {
        return;
    }

    const embedMemberAdd = new Discord.MessageEmbed()
    .setTitle("Seja bem-vindo(a) " + member.user.username)
    .setThumbnail(member.user.displayAvatarURL())
    .setColor("PURPLE")
    .setDescription("Seja bem-vindo(a) ao servidor, leia as regras para não causar nenhum tipo de punição eterna. Seja grato com os membros e os staffers do grupo.")

    bot.channels.cache.get(chx).send(embedMemberAdd)
}