const Discord = require("discord.js")

module.exports.run = (bot,message,args,ops) => {

	const questão = args.join(" ")

	let respostas = [
		"Sim",
		"Não",
		"Provavelmente",
		"Definitivamente sim",
		"Definitivamente não"
	]

	if(!questão) {
		return message.quote("Você não colocou nenhuma pergunta.")
	}

	let Response = respostas[Math.floor(Math.random() * (respostas.length))]

	const embed = new Discord.MessageEmbed()
	.setTitle("8ball respostas")
	.setColor("PURPLE")
	.addField("**📩・Sua pergunta:**", questão)
	.addField("**🤔・Minha resposta:**", Response)

	message.quote(embed)
}

module.exports.help = {
	name: "8ball",
    aliases: ["questao"]
}