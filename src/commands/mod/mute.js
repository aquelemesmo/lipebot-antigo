const Discord = require("discord.js")
const perms = require("../../json/perms.json")
const msgs = require("../../json/msgs.json")

module.exports.run = async (bot,message,args,ops) => {
	if(!message.member.hasPermission(perms.mutar)) return message.quote(msgs.semPerm)

	if(args.length === 0) {
		const length = new Discord.MessageEmbed()
		.setColor("PURPLE")
		.setTitle("Informações do comando **mute**")
		.addField("📜・Como usar?", "lp!mute <@usuário> <motivo>")
		return message.quote(length)
	}	

	const membro = message.mentions.members.first()
	const motivo = args.join(" ").slice(22) || args.slice(1).join(" ")
	const cargo = bot.guild.roles.cache.get(r => r.name === "Silenciado")

	message.quote("O usuário foi punido com sucesso.")

	const memberEmbed = new Discord.MessageEmbed()
		.setTitle("Você foi punido!")
		.setThumbnail(message.author.displayAvatarURL())
		.setColor("PURPLE")
		.addField("Informação do punimento", [
			`**Usuário que te puniu:** ${message.author.username}`,
			`**Motivo:** ${motivo}`,
			`**Ação do punimento:** Silenciado eterno`
		])
		.setTimestamp()
	await membro.send(memberEmbed)

	membro.roles.add(cargo)
}

module.exports.help = {
	name: "mute",
	aliases: ["mutar", "silenciar"]
}