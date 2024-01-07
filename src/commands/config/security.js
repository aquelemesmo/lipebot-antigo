const Discord = require("discord.js")
const db = require("quick.db")
const msgs = require("../../json/msgs.json")
const perms = require("../../json/perms.json")

module.exports.run = async (bot,message,args) => {
    if(!message.member.hasPermission(perms.configmax)) return message.quote(msgs.semPerm)

    if(args.length === 0) {
        const lengthEmbed = new Discord.MessageEmbed()
        .setColor("PURPLE")
		.setTitle("Informações do comando **security**")
		.addField("📜・Como usar?", "lp!security <on/off> <setnickraid/setanticonvite>")
        message.quote(lengthEmbed)
    }

    if(args[0] === "on") {
        let convites = db.fetch(`convitesecurity_${message.guild.id}`, convites)
        message.content.startsWith(anticonvite)
        message.quote("Sistema de segurança ativado")
    }

    if(args[0] === "off") {
        message.quote("Sistema de segurança desativado")
    }
}

module.exports.help = {
    name: "security",
    aliases: ["segurança", "antiraid", "sistema-segurança"]
}