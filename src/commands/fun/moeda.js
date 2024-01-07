const Discord = require('discord.js')

module.exports.run = (bot,messae,args) => {
	let respostas = [
		"Cara",
		"Coroa"
	]

	let Response = respostas[Math.floor(Math.random() * respostas.length)]

	const embed = new Discord.MessageEmbed()
	.setColor("PURPLE")
	.setTitle("A moeda caiu em...")
	.setDescription(Response)
	message.quote(embed)
}	

module.exports.help = {
	name: "moeda",
    aliases: ["coinflip"]
}