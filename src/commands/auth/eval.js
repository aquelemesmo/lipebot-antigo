const Discord = require("discord.js")
const { inspect } = require('util')
const si = require("systeminformation")
const ids = require("../../json/ids.json")
const msgs = require('../../json/msgs.json')

module.exports.run = (bot,message,args, ops) => {
	let perms = [
		ids.jack
	]

	if(!perms.includes(message.author.id)) return message.reply(msgs.semPermDev)

    const input = args.slice(0).join(" ");

    if(args[0] == "message.quote(bot.login)") return message.reply("Esse input está bloqueado.")
    if(args[0] == "message.reply(bot.login)") return message.reply("Esse input está bloqueado.")
    if(args[0] == "process.env.TOKEN") return message.reply("Esse input está bloqueado.")
    if(args[0] == "process.env.MONGO_URL") return message.reply("Esse input está bloqueado.")
    if(args[0] == "message.reply(process.env.TOKEN)") return message.reply("Esse input está bloqueado.")
    if(args[0] == "message.reply(process.env.MONGO_URL)") return message.reply("Esse input está bloqueado.")
    if(args[0] == "message.quote(`${process.env.TOKEN})") return message.reply("Está função foi bloqueada.")
    if(args[0] == "message.quote(`${process.env.MONGO_URL})") return message.reply("Está função foi bloqueada.")
    if(args[0] == "bot.token") return message.reply("Está função foi bloqueada.")

    if(!input) {return message.reply("Insira o codigo que deseja executar.")}

    try {
        var output = eval(input);
        if(typeof output !== "string") output = inspect(output);
        if(output.length > 1950) output = output.substr(0, 1950);

        message.quote(`**Input:**\n\`\`\`${input}\`\`\`**Output:**\n\`\`\`${output}\n\`\`\``)
    } catch(err) {
        message.quote(`**Erro:**\n\`\`\`${err}\`\`\``)
    }

}

module.exports.help = {
	name: "eval",
    aliases: ["cmd", "system", "cmdeval"]
}