const Discord = require("discord.js")
const buttons = require("discord-buttons")

exports.run = (bot,message,args) => {
	const helpEmbed = new Discord.MessageEmbed()
	.setTitle("Painel de comando")
	.setColor("PURPLE")
	.setThumbnail(bot.user.displayAvatarURL())
	.setDescription("Se eu conter algum erro, ou demora de resposta de comando, ou algo do tipo. Digite ``lp!reportar-bug``")
	.addField("🍃・Categoria úteis", "esse tipo de categoria e para comandos que são úteis para ser demonstrado")
	.addField("🚓・Categoria moderação", "os comandos da categoria moderação, servem para moderar o grupo, e essa categoria serve para os staffers.")
	.addField("🎉・Categoria diversidade", "posso animar qualquer um dos usuários ou o grupo todo!")
	.addField("❤️・Categoria ships", "uma categoria com comandos para ter um web namoro rs.")
	.addField("⚙️・Categoria configuração", "categoria para dar uma melhorada no servidor")
	message.quote(helpEmbed).then(msg => {
		msg.react("⬅").then(() => {
			msg.react("🍃")
			msg.react("🚓")
			msg.react("🎉")
			msg.react("❤️")	
			msg.react("⚙️")
		})

		const voltar = msg.createReactionCollector((reaction, user) => reaction.emoji.name === `⬅` && user.id === message.author.id, {time: 60000})
		const uteis = msg.createReactionCollector((reaction, user) => reaction.emoji.name === `🍃` && user.id === message.author.id, {time: 60000})
		const mod = msg.createReactionCollector((reaction, user) => reaction.emoji.name === `🚓` && user.id === message.author.id, {time: 60000})
        const diversidade = msg.createReactionCollector((reaction, user) => reaction.emoji.name === `🎉` && user.id === message.author.id, {time: 60000})
		const ships = msg.createReactionCollector((reaction, user) => reaction.emoji.name === `❤️` && user.id === message.author.id, {time: 60000})
        const config = msg.createReactionCollector((reaction, user) => reaction.emoji.name === `⚙️` && user.id === message.author.id, {time: 60000})

		voltar.on(`collect`, r => {
			msg.edit(helpEmbed)
			r.users.remove(message.author.id)
		})
		
		uteis.on(`collect`, r => {
			const uteisEmbed = new Discord.MessageEmbed()
			.setTitle("Comandos da categoria úteis")
			.setColor("PURPLE")
			.addField("Avatar do usuário - lp!avatar", "olhar o avatar de outro usuário")
			.addField("Falar - lp!falar", "eu posso falar oque você pode falar")
			.addField("Informações gerais - lp!info", "ao invez de ter userinfo ou serverinfo, eu posso mostrar todas as informações!")
			.addField("Perfil Minecraft - lp!mcperfil", "você pode ver as informações do usuário via Minecraft")
			.addField("Server Minecraft - lp!mcserver", "você pode checar as informações de servidores de Minecraft")
			.addField("Lantência - lp!ping", "checar o meu ping para ver se eu não estou lagado")
			.addField("Reportar bug - lp!reportar-bug", "se encontrou algum bug, erro de digitação ou demoras de respostas de mensagem.")
			.addField("Sugestão para mim - lp!sugerir-bot", "você pode sugerir algo para eu ser adicionado!")
			.addField("Sugerir - lp!sugerir", "antes de usar, use o lp!setsugestão para não acontecer bugs!")
			.addField("Update - lp!update", "veja minhas atualizações recentes")
			msg.edit(uteisEmbed)
			r.users.remove(message.author.id)
		})

		mod.on(`collect`, r => {
			const modEmbed = new Discord.MessageEmbed()
			.setTitle("Comandos da categoria moderação")
			.setColor("PURPLE")
			.addField("Anúnciar - lp!anunciar", "se quiser dar alguma novidade")
			.addField("Banir - lp!ban", "se algum membro quebrou alguma regra do servidor, merece ser banido!")
			.addField("Kick - lp!kick", "pode até banir, mais o kick o usuário pode retornar")
			.addField("Silenciar - lp!mute", "silenciar o usuário eternamente")
			.addField("Warn - lp!warn", "você pode dar chances ao usuário, se as chances acabar, ele levará punição")
			msg.edit(modEmbed)
			r.users.remove(message.author.id)
		})

		diversidade.on(`collect`, r => {
			const diversidadeEmbed = new Discord.MessageEmbed()
			.setTitle("Comandos da categoria diversidade")
			.setColor("PURPLE")
			.addField("8ball - lp!8ball", "pode perguntar qualquer coisa que eu respondo")
			.addField("Laranjo - lp!laranjo", "o laranjo fala também")
			.addField("Moeda - lp!moeda", "cara ou coroa?")
			.addField("Primeiras palavras - lp!primeiraspalavras", "coloque algo para o bebê falar!")
			msg.edit(diversidadeEmbed)
			r.users.remove(message.author.id)
		})

		ships.on(`collect`, r => {
			const shipsEmbed = new Discord.MessageEmbed()
			.setTitle("Comandos da categoria ships")
			.setColor("PURPLE")
			.addField("Abraçar alguém - lp!abraçar", "você pode abraçar alguém pelo meu comando")
			.addField("Beijar alguém - lp!beijar", "quero ver a caminha hihi")
			.addField("Fazer cafuné - lp!cafuné", "olha que carinho fofinho no usuário")
			msg.edit(shipsEmbed)
			r.users.remove(message.author.id)
		})

		config.on(`collect`, r => {
			const configEmbed = new Discord.MessageEmbed()
			.setTitle("Comandos da categoria configuração")
			.setColor("PURPLE")
			.addField("Segurança - lp!security", "ative o sistema de segurança de raids, convites e ")
			.addField("Mensagem de leave setado - lp!setleave", "mesma coisa que o welcome, só que o usuário sai")
			.addField("Mensagem de sugestão setado - lp!setsugestão", "se caso tem canal de sugestão, o usuário pode executar o comando e a sugestão vai para aquele canal")
			.addField("Mensagem de welcome setado - lp!setwelcome", "caso alguém entrar no servidor, vai aparecer a mensagem no canais setado")
			.addField("Mensagem de logs setado - lp!????", "Comando em desenvolvimento")
			msg.edit(configEmbed)
			r.users.remove(message.author.id)
		})
	})
}

exports.help = {
	name: "help",
	aliases: ["ajuda"]
}