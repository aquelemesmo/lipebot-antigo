const Discord = require("discord.js")

module.exports.run = async (bot,message,args,ops) => {

	const embed = new Discord.MessageEmbed()
	.setTitle("Pong!")
	.setColor("PURPLE")
	.setDescription("API: " + bot.ws.ping)
	message.quote(embed)
}

module.exports.help = {
	name: "ping",
	aliases: ["lantencia"]
}