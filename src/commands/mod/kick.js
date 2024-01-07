const Discord = require("discord.js")
const msgs = require("../../json/msgs.json")
const perms = require("../../json/perms.json")

module.exports.run = async (bot,message,args,ops) => {
	if(!message.member.hasPermission(perms.kick)) return message.quote(msgs.semPerm)

	if(args.length === 0) {
		const length = new Discord.MessageEmbed()
		.setColor("PURPLE")
		.setTitle("Informações do comando **kick**")
		.addField("📜・Como usar?", "lp!kick <@usuário> <motivo>")
		return message.quote(length)
	}

	const membro = message.mentions.members.first()
	const motivo = args.join(" ").slice(22) || args.slice(1).join(" ")

	if(!membro) {
		return message.quote(msgs.semMembro)
	}

	if(!motivo) {
		return message.quote(msgs.semMotivo)
	}

	message.quote("O usuário foi punido com sucesso.")

	const memberEmbed = new Discord.MessageEmbed()
	.setTitle("Você foi punido!")
	.setThumbnail(message.author.displayAvatarURL())
	.setColor("PURPLE")
	.addField("Informação do punimento", [
		`**Usuário que te puniu:** ${message.author.username}`,
		`**Motivo:** ${motivo}`,
		`**Ação do punimento:** Kick`
	])
	.setTimestamp()
	await membro.send(memberEmbed)

	membro.kick()
}

module.exports.help = {
	name: "kick",
	aliases: ["chutar", "kickar"]
}