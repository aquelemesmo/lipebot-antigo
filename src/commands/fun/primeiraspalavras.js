const Discord = require("discord.js")
const jimp = require("jimp")

module.exports.run = async (bot,message,args,ops) => {
	let img = jimp.read("https://cdn.discordapp.com/attachments/672188275963854879/709074434283143208/PrimeirasPalavras2.png")

	if(!args[0]) {
		return message.quote("Coloque alguma frase para o bebê poder falar.")
	}

	img.then(image => {
		jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
			image.resize(485, 450)
			image.print(font, 10, 230, args.join(" "), 330)
			image.getBuffer(jimp.MIME_PNG, (err, i) => {
				message.quote({files: [{attachment: i, name: "primeiraspalavras.png"}]})
			})
		})
	})
}

module.exports.help = {
	name: "primeiraspalavras",
    aliases: ["firstwords"]
}