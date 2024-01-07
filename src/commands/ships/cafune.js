const Discord = require("discord.js")
const msgs = require("../../json/msgs.json")

module.exports.run = (bot, message, args) => {
    const membro = message.mentions.members.first();

    if (!membro) {
        return message.quote(msgs.semMembro)
    }

    let img = [
        "https://pa1.narvii.com/6200/33889bd8c5e3b9dde6b4c43de225fea521ce511a_hq.gif",
        "https://media.tenor.com/images/c5acf899741117647a56c80ad6f459ca/tenor.gif",
        "https://media.tenor.com/images/c7192cc8ffa738690156fbb9334a8937/tenor.gif",
        "https://pa1.narvii.com/6208/322cd6d8998e41fe2a424d59b8ad4a5a21c4783c_hq.gif",
        "http://pa1.narvii.com/6442/d486755b37fd6b86d21e94dac9ead16424bc13e1_00.gif",
    ]

    let Response = img[Math.floor(Math.random() * img.length)];

    const embed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle(message.author.username + " fez carinho no(a) " + membro.user.username)
        .setImage(Response)
    message.quote(embed)
}

module.exports.help = {
    name: "cafuné",
    aliases: ["cafune", "carinho"]
}