const Discord = require("discord.js")
const db = require("quick.db")
const msgs = require("../../json/msgs.json")
const prefixos = require("../../../config.json")
const { prefix } = require("../../../config.json")

module.exports.run = (bot,message,args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.quote(msgs.semPerm)

    if(!prefixo) {
        return message.quote("Coloque algum prefixo válido")
    }

    let prefixo = db.get(`prefixGuild_${message.guild.id}`)
    if(prefixo === null) prefixo = prefix
    db.set(`prefixGuild_${message.guild.id}.prefix`, prefixo)

    const embed = new Discord.MessageEmbed()
    .setTitle(prefixos.prefix_sucess)
    .setColor("PURPLE")
    .setDescription("Meu prefixo foi alterado para " + prefixo)
    message.quote(embed)
}

module.exports.help = {
    name: "setprefix",
    aliases: ["setarprefixos"]
}