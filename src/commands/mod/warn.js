const Discord = require('discord.js')
const perms = require("../../json/perms.json")
const msgs = require("../../json/msgs.json")

module.exports.run = async (bot,message,args,ops) => {
	if(!message.member.hasPermission(perms.warn)) return message.quote(msgs.semPerm)

	if(args.length === 0) {
		const length = new Discord.MessageEmbed()
		.setColor("PURPLE")
		.setTitle("Informações do comando **warn**")
		.addField("📜・Como usar?", "lp!warn <@usuário> <motivo>")
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
		`**Ação do punimento:** Aviso prévio`
	])
	.setTimestamp()
	await membro.send(memberEmbed)
}

module.exports.help = {
	name: "warn",
	aliases: ["aviso", "avisar"]
}