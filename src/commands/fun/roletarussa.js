const Discord = require("discord.js")

module.exports.run = (bot,message,args) => {
	let tempo = 1000;
	let aleatorio = [
		"Notebook i9 10 geração, 1 TB HD e 256 GB SSD",
		"Teclado hyperx mecânico (RGB)",
		"Microfone BM800 black (comprado na wish)",
		"iPhone 12 pro max falsificado",
		"Fusca rebaixado"
	]

	let aleatorioResponse = aleatorio(Math.floor[Math.random() * aleatorio.length])

	const embedPremio = new Discord.MessageEmbed()
	.setTitle("Parabéns! você ganhou um item")
	setDescription("Você acaba de ganhar um " + aleatorioResponse)
	.setColor("PURPLE")

	message.quote(embedPremio)

	if(tempo - Date.now() > 0) {
		let time = ms(tempo - (Date.now() - aleatorio))

		message.quote(`Você já girou a roleta! aguarde ${time.hours}h ${time.minutes}m ${time.seconds}s`)
	}
}

module.exports.help = {
	name: "roletarussa",
    aliases: ["rr"]
}