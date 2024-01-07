const Discord = require("discord.js")
const msgs = require("../../json/msgs.json")
const img_hug = require("../../json/img.json")

module.exports.run = (bot, message, args) => {

    const membro = message.mentions.members.first()

    let img = [
        img_hug.abraçar.img_abraçar1,
        img_hug.abraçar.img_abraçar2,
        img_hug.abraçar.img_abraçar3,
        img_hug.abraçar.img_abraçar4,
        img_hug.abraçar.img_abraçar5,
        img_hug.abraçar.img_abraçar6,
        img_hug.abraçar.img_abraçar7,
        img_hug.abraçar.img_abraçar8,
        img_hug.abraçar.img_abraçar9,
        img_hug.abraçar.img_abraçar10,
        img_hug.abraçar.img_abraçar11,
        img_hug.abraçar.img_abraçar12,
        img_hug.abraçar.img_abraçar13,
        img_hug.abraçar.img_abraçar14,
        img_hug.abraçar.img_abraçar15,
    ]

    let Response = img[Math.floor(Math.random() * img.length)]

    if (!membro) {
        return message.quote(msgs.semMembro)
    }

    const embed = new Discord.MessageEmbed()
        .setTitle(message.author.username + " abraçou " + membro.user.username)
        .setColor("PURPLE")
        .setImage(Response)
    message.quote(embed)
}

module.exports.help = {
    name: "abraçar",
    aliases: ["hug", "abracar"]
}