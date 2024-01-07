const Discord = require("discord.js")
const jimp = require("jimp")

module.exports.run = async (bot,message,args,ops) => {
	let img = jimp.read("https://cdn.discordapp.com/attachments/554048737648050179/610011657632219147/laranjo-meme-cke.jpg")

	if(!args[0]) {
		return message.quote("Coloque alguma frase para o laranjo poder falar.")
	}

	img.then(image => {
		jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
			image.resize(685, 494)
			image.print(font, 20, 30, args.join(" "), 600)
			image.getBuffer(jimp.MIME_PNG, (err, i) => {
				message.quote({files: [{attachment: i, name: "laranjo.png"}]})
			})
		})
	})
}

module.exports.help = {
	name: "laranjo",
    aliases: ["laranja"]
}