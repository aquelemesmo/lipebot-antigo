const Discord = require("discord.js")
const canais = require("../../json/canais.json")

module.exports.run = async (bot,message,args) => {
    let sugestao = args.join(" ")
    
    if(!sugestao) {
        return message.quote("Você não colocou nenhuma sugestão");
    }
    
    message.reply("sua sugestão foi enviada com sucesso!")
    
    let channel = bot.guild.channels.cache.get(canais.canal_sugerir_bot)
    
    const embed = new Discord.MessageEmbed()
    .setTitle("Nova sugestão!")
    .setThumbnail(message.author.displayAvatarURL())
    .addField("Nome do usuário", message.author.username)
    .addField("Sugestão", sugestao)

    await channel.send(embed)
}

module.exports.help = {
    name: "sugerir-bot",
    aliases: ["sugestion-bot"]
}