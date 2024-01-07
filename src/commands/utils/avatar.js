const Discord = require("discord.js")
const msgs = require('../../json/msgs.json')

module.exports.run = (bot,message,args) => {
	const membro = bot.users.cache.get(args[0]) || message.mentions.members.first() || message.author;
	const avatar = membro.displayAvatarURL({format: 'ping', dynamic: true, size: 4096})
	
	const embed = new Discord.MessageEmbed()
	.setTitle("Avatar do usuário")
	.setImage(avatar)
	.setColor("PURPLE")
	.setURL(avatar)
	message.quote(embed)

}

module.exports.help = {
	name: "avatar",
	aliases: ["photo"]
}