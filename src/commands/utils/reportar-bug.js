const Discord = require("discord.js")
const canais = require("../../json/canais.json")

module.exports.run = async (bot,message,args,ops) => {
	const bugsplit = args.join(" ")

	if(args.length === 0) {
		const length = new Discord.MessageEmbed()
		.setColor("PURPLE")
		.setTitle("Informações do comando **reportar-bug**")
		.addField("📜・Como usar?", "lp!reportar-bug <bug>")
		return message.quote(length)
	}

	if(!bugsplit) {
		return message.quote("Você não colocou nenhum tipo de bug para ser enviado.")
	}

	let channel = bot.channels.cache.get(canais.canal_bug)

	const embed = new Discord.MessageEmbed()
	.setTitle("Um novo bug foi encontrado")
	.setColor("PURPLE")
	.addField("<:moderacao:780247787891720232>・Qual bug foi reportado", `${bugsplit}`)
	.setFooter(`Bug reportado por: ${message.author.username}`, message.author.displayAvatarURL())
	await channel.send(embed)
}

module.exports.help = {
	name: "reportar-bug",
	aliases: ["report-bug"]
}