const Discord = require("discord.js")

module.exports = (bot, guild, members) => {
	setInterval(() => {
		const list = [
			{
				type: "LISTENING",
				message: `Estou em ${bot.guilds.cache.size} servidores`,
			},
			{
				type: "STREAMING",
				message: `Quer entrar no meu servidor do Discord? digite lp!discord`,
				url: "https://twitch.tv/cellbit"
			},
			{
				type: "WATCHING",
				message: `Sou open-source! digite lp!src`
			},
			{
				type: "PLAYING",
				message: `Cheque bem o lp!update, para ver as atualizações recentes!`
			}
		]
		const aleatorio = list[Math.floor(Math.random() * list.length)];
		bot.user.setActivity(aleatorio.message, { type: list.type, url: list.url})
	}, 5000)
}