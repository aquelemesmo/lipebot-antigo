const Discord = require("discord.js")
const db = require("quick.db")
const prefixos = require("../../../config.json")

module.exports.run = async (bot,message,args) => {
    let membro = message.author;
    let moedinhas = db.fetch(`moedinhas_${message.guild.id}_${membro.id}`) 
    let banco = db.fetch(`dep_${message.guild.id}_${membro.id}`) 
    let quantia = Math.floor(Math.random() * 5000);

    const embed = new Discord.MessageEmbed()
    .setTitle(prefixos.prefix_sucess)
    .setColor("PURPLE")
    .setDescription("Você trabalhou e ganhou " + quantia)
    message.quote(embed)
    db.add(`moedinhas_${message.guild.id}_${membro.id}`)
    db.set(`work_${message.guild.id}_${membro.id}`)
}

module.exports.help = {
    name: "work",
    aliases: ["trabalhar"]
}