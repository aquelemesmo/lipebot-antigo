const Discord = require("discord.js")
const db = require("quick.db")
const msgs = require("../../json/msgs.json")
const perms = require("../../json/perms.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission(perms.configchannel)) return message.quote(msgs.semPerm)

    let channel = message.mentions.channels.first() || args[0];

    if(!channel) {
        return message.quote("Mencione um canal primeiro")
    }

    if(args[1] === "boas-vindas") {
        db.set(`boasvindascanal_${message.guild.id}`, channel.id)
        message.quote("O canal de boas-vindas foi setada!")
    }

    if(args[1] === "saída") {
        db.set(`saidacanal_${member.guild.id}`, channel.id)
        message.quote("O canal de saída foi setada!")
    }

    if(args[1] === "punição") {
        db.set(`punicaocanal_${message.guild.id}`, channel.id)
        message.quote("O canal de punições foi setada!")
    }

    if(args[1] === "sugestão") {
        db.set(`sugestioncanal_${message.guild.id}`, channel.id)
        message.quote("O canal de sugestão foi setada!")
    }

    if(args[1] === "nsfw") {
        db.set(`nsfwcanal_${message.guild.id}`, channel.id)
        message.quote("O canal de nsfw foi setada!")
    }
}   

module.exports.help = {
    name: "setwelcome",
    aliases: ["config-setwelcome"]
}   