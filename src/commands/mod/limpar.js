const Discord = require("discord.js")
const perms = require("../../json/perms.json")
const msgs = require("../../json/msgs.json")

module.exports.run = (bot,message,args) => {
    if(!message.members.hasPermission(perms.clearchat)) {
        return message.quote(msgs.semPerm)
    }

    let deletarTotalDeMensagem = parseInt(args[0]) + 1;
    let mensagemApagadas = deletarTotalDeMensagem - 1;

    async function clear() {
        try {
            message.delete();
            const fetched = await message.channel.fetchMessages({limit: deletarTotalDeMensagem});
            message.channel.bulkDelete(fetched);
            message.channel.send("Eu limpei " + mensagemApagadas + " agora ficou bem limpinho!")
        } catch (e) {
            console.error()
        }
    }

    clear();
}

module.exports.help = {
    name: "limpar",
    aliases: ["clearchat", "cc"]
}