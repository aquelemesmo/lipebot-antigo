const Discord = require("discord.js")
const system = require("systeminformation")
const os = require("os")
const ver = require("../../json/version.json")
const comandos = require("../../json/comandos.json")
const moment = require('moment')
moment.locale("pt-br")

module.exports.run = async (bot,message,args) => {

	var usoMemória = os.totalmem() -os.freemem(), totalMemória = os.totalmem();
	var cpu = await system.cpu()
	var terPorcetagem = ((usoMemória/totalMemória) * 100).toFixed(2) + '%'

	const embed = new Discord.MessageEmbed()
	//.setTitle("Minhas informações")
	.setThumbnail(bot.user.displayAvatarURL())
	.setColor("PURPLE")
	.addField("Informações própria", [
		"> <:discord:813438382428389457>・**Nome**: Lipe",
		"> <:discord:813438382428389457>・**Discriminator**: 9691",
		"> <:ids:813438883601317889>・**Meu ID**: 813437884283486280",
		"> <:owner:780262066056462336>・**Meu criador:** <@401024028388884483>",
		"> <:computador:780732699203338240>・**Linguagem programada:** Node.JS <:nodejs:813433244019982357>",
		"> <:emoji2:781657909661532201>・**Biblioteca trabalhada:** Discord.JS <:discordjs:813433596307046410>",
		`> <:configurando:780780622213021699>・**Versão:** ${ver.lipeversion}`,
		`> <:container:813432997637914654>・**Comandos liberados:** ${comandos.msg_comando}`,
	])
	.addField("Informações da minha Hospedagem", [
		`> <:cpu:813778764491522062>・**Processador:** ${cpu.manufacturer} ${cpu.brand} ${cpu.family}°`,
		"> <:cpu:813778764491522062>・**Hospedagem:** PC",
		`> <:cpu:813778764491522062>・**Plataforma:** ${os.platform()}`,
		`> <:cpu:813778764491522062>・**Uso de memória:** ${terPorcetagem}`,
	])
	.addField("Informações suas", [
		`> <:pessoa:780733492534837248>・**Nome do usuário:** ${message.author.username}`,
		`> <:discord:813438382428389457>・**Discriminator:** ${message.author.discriminator}`,
		`> <:ids:813438883601317889>・**ID:** ${message.author.id}`,
		`> :date:・**Conta criada:** ${moment.utc(message.author.createdAt).format('dddd, MMMM do YYYY, HH:mm:ss')}`,
		`> :date:・**Entrou no servidor:** ${moment.utc(message.author.joinedAt).format('dddd, MMMM do YYYY, HH:mm:ss')}`
	])
	.addField("Informações do grupo", [
		`> <:owner:780262066056462336>・**Dono do servidor:** ${message.guild.owner}`,
		`> <:ids:813438883601317889>・**ID do grupo:** ${message.guild.id}`,
		`> <:localizacao:780730170608058378>・**Região do grupo:** ${message.guild.region}`,
		`> <:verf:780736343839604737>・**Níveis de verificação:** ${message.guild.verificationLevel}`,
		`> <:computador:780732699203338240>・**Total de membros:** ${message.guild.memberCount}`,
	])
	.addField("Agradecimentos", [
		`> **Sistema de música: https://github.com/LMS5413**`,
		`> **Sistema de economia: https://github.com/chxlls**`,
		`> **Sistema inteiro: https://github.com/aquelemesmo**`
	])
	//.addField("<:owner:780262066056462336>・Meu criador", "<@401024028388884483>")
	//.addField("<:emoji2:781657909661532201>・Linguagem programada", "Node.JS <:nodejs:813433244019982357>")
	//.addField("<:emoji2:781657909661532201>・Biblioteca trabalhada", "Discord.JS <:discordjs:813433596307046410>")
	//.addField("<:configurando:780780622213021699>・Versão", "1.1.0 BETA")

	message.quote(embed)
}

module.exports.help = {
	name: "info",
	aliases: ["infobot", "botinfo", "serverinfo", "infoserver"]
}