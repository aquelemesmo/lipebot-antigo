const Discord = require("discord.js")

module.exports.run = async (bot,message,args) => {
    if(message.author.id !== "401024028388884483") {
        return message.quote("Desculpe, esse comando está só disponível ao meu desenvolvedor")
    }
    
    if(!args[0]) return message.quote("Coloque o nome da pasta")
    if(!args[1]) return message.quote("Coloque o nome do comando")

    let pasta = args[0].toLowerCase();
    let command = args[1].toLowerCase();

    try {
        delete require.cache[require.resolve(`../${pasta}/${command}.js`)];
        bot.commands.delete(command)

        const pull = require(`../${pasta}/${command}`)
        bot.commands.set(command, pull)

        const embed = new Discord.MessageEmbed()
        .setTitle("SUCESSO!")
        .setDescription(`O comando **${command}** foi relogado com sucesso!`)
        .setColor("PURPLE")
    
        message.quote(embed)

    } catch (e) {
        return message.quote(`Comando indisponível: ${command} \`${e.message}\``)
    }

}

module.exports.help = {
    name: "reload",
    aliases: ["relogar", "cmdreload"]
}