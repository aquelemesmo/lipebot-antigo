const Discord = require("discord.js")
const request = require("request")

module.exports.run = (bot,message,args,ops) => {
	let ip = args[0]
	if(!ip) ip = "hypixel.net"

	request(`https://api.mcsrvstat.us/2/${ip}`, function (error, response, body) {
        if(!body) return message.quote(`Erro.`);
        let server = JSON.parse(body)

        const embed = new Discord.MessageEmbed()
        if(server.online === false) {
            embed.setTitle(`Informações do servidor ${ip}`)
            embed.setDescription(`・O servidor se encontra off-line...`)
            embed.setColor("PURPLE")

        message.quote(embed)
        } else {
            embed.setColor("PURPLE")
            embed.setTitle(`📋・Informações do servidor ${ip}`)
            embed.addField(`🔭・IP númerico`, `${server.ip}:${server.port} `)
            embed.addField(`📭・MOTD`, server.motd.clean)
            embed.addField(`👥・Jogadores on-line`, `${server.players.online} / ${server.players.max}`)
            embed.addField(`🔩・Versão do servidor `, server.version)
            embed.addField(`💻・Hostname`, server.hostname || 'Não definido.')
            embed.addField(`🔋・Software`, server.software || 'Desconhecido.')

            if(server.plugins) 
            embed.addField(`🔌・Plugins`, server.plugins.names || 'Sem plugins')
            embed.setThumbnail(`https://api.mcsrvstat.us/icon/${ip}`)
        message.quote(embed)
        }
    })

}

module.exports.help = {
	name: "mcserver",
    aliases: ["status"]
}