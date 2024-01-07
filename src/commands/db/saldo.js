const Discord = require("discord.js")
const db = require("quick.db")

module.exports.run = async (bot,message,args) => {
    const membro = message.author;

    let moedinhas = db.fetch(`moedinhas_${message.guild.id}_${membro.id}`)
    if(moedinhas === null) moedinhas = 0;

    let banco = await db.fetch(`dep_${message.guild.id}_${membro.id}`)
    if(banco === null) banco = 0;

    const embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle("LipeEconomia - Sua carteira")
        .addField("Moedinhas em sua carteira", moedinhas)
        .addField("Moedinhas depositadas", banco)
    message.quote(embed)
}

module.exports.help = {
    name: "saldo",
    aliases: ["atm", "carteira"]
}