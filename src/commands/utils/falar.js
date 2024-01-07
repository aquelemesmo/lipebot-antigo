const Discord = require("discord.js")

module.exports.run = (bot,message,args,ops) => {
	let falar = args.join(" ")

	const embed = new Discord.MessageEmbed()
	.setDescription(falar)
	.setColor("PURPLE")
	message.quote(embed)
}

module.exports.help = {
	name: "falar",
	aliases: ["say"]
}