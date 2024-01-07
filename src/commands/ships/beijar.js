const Discord = require("discord.js")
const msgs = require("../../json/msgs.json")

module.exports.run = (bot,message,args) => {
	const membro = message.mentions.members.first()

	let img = [
        img_hug.abraçar.img_beijar1,
        img_hug.abraçar.img_beijar2,
        img_hug.abraçar.img_beijar3,
        img_hug.abraçar.img_beijar4,
        img_hug.abraçar.img_beijar5,
        img_hug.abraçar.img_beijar6,
        img_hug.abraçar.img_beijar7,
        img_hug.abraçar.img_beijar8,
        img_hug.abraçar.img_beijar9,
        img_hug.abraçar.img_beijar10,
        img_hug.abraçar.img_beijar11,
        img_hug.abraçar.img_beijar12,
        img_hug.abraçar.img_beijar13,
        img_hug.abraçar.img_beijar14,
        img_hug.abraçar.img_beijar15,
	]

	let Response = img[Math.floor(Math.random() * img.length)]

	if(!membro) {
		return message.quote(msgs.semMembro)
	}

	const embed = new Discord.MessageEmbed()
	.setTitle(":flushed: " + message.author.username + " beijou " + membro.user.username + " :flushed:")
	.setColor("PURPLE")
	.setImage(Response)
	message.quote(embed)
}	

module.exports.help = {
	name: "beijar",
	aliases: ["kiss", "beijo"]
}