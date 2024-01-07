const Discord = require("discord.js")
const db = require("quick.db")
const prefixos = require("../../../../config.json")

module.exports.run = async (bot,message,args) => {
    if(message.author.id !== "401024028388884483") {
        return message.quote("Desculpe, esse comando está só disponível ao meu desenvolvedor")
    }

    if(!quantia) {
        return message.quote("Coloque certo uma quantia")
    }

    let membro = message.mentions.members.first()
    let quantia = args[1];

    const embed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle(prefixos.prefix_sucess)
    .setDescription("Foi adcionado " + quantia + " do usuário " + membro.user.username)
    message.quote(embed)
    db.add(`moedinhas_${message.guild.id}_${membro.id}`)
}

module.exports.help = {
    name: "addMoney",
    aliases: ["adicionarMoney"]
}