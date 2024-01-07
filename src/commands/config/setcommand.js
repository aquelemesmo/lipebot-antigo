const Discord = require("discord.js")
const db = require("quick.db")
const msgs = require("../../json/msgs.json")
const perms = require("../../json/perms.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission(perms.configguild)) return message.quote(msgs.semPerm)

    
}

module.exports.help = {
    name: "setcommand",
    aliases: ["setarcanalcomandos"]
}