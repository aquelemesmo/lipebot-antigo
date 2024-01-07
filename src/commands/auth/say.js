const Discord = require("discord.js")

module.exports.run = (bot,message,args,ops) => {
    let falar = args.join(" ")

    message.delete()

    message.channel.send(falar)
}

module.exports.help = {
    name: "falar",
    aliases: ["say"]
}