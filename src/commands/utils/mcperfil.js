const Discord = require("discord.js")
const request = require("request")

module.exports.run = (bot,message,args,ops) => {
	let nick = args[0]
	if(!nick) {
		return message.quote("Você não colocou nenhum nick de jogador.")
	}

  	request(`https://api.mojang.com/users/profiles/minecraft/${nick}`, function (err, response, body){

    if(!body) {
        return message.quote("Não foi encontrado nenhum tipo de jogador com esse nick")
    }

    body = JSON.parse(body)
    let uuid = body.id    

    request(`https://api.mojang.com/user/profiles/${uuid}/names`, function(err, response, body){
        body = JSON.parse(body)

        let array = body

        let list = array.map(function(listar) {
            return listar.name
        })

        let embed = new Discord.MessageEmbed()
        .addField("Informações do " + nick, [
            `🦺・Skin do jogador\n[Observe aqui](https://minotar.net/download/${nick})`,
            `🤯・Cabeça do jogador\n[Observe aqui](https://minotar.net/helm/${nick}/100.png)`,
            `🧍・Corpo do jogador\n[Observe aqui](https://minotar.net/body/${nick}/100.png)`,
        ])
        .setThumbnail(`https://minotar.net/cube/${nick}/100.png`)
	    .setColor("PURPLE")

        message.quote(embed)
    	})
	})
}

module.exports.help = {
	name: "mcperfil",
    aliases: ["minecraft-perfil"]
}