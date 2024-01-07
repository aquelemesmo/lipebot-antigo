const Discord = require("discord.js")

module.exports.run = async (bot,message,args) => {
    const embed = new Discord.MessageEmbed()
        .addField("Atualizações - 19/06 às 21:28", [
            "* Arrumado bugs básicos",
            "* Adicionado comando `lp!security, lp!cafune`",
            "* Migrado os comando `mcserver, mcperfil` para a categoria Utilidades",
            "* Removido `lp!discord`",
            "* Corrigido que a categoria Configurações não tivesse nenhuma permissão",
            "* Os comandos `reportar-bug` e `sugerir-bot` estarão funcionando normalmente, exceto para um servidor privado."
        ])
        .addField("Atualizações - 19/05 às 02:37", [
            "* Arrumando bugs básicos",
            "* Adicionado prefixos (LipeEconomia - Sucesso | LipeEconomia - Falha)",
            "* Adicionado sistema de economia",
            "* Adicionado mais imagens em cada comandos da categoria Ships",
            "* Atualizado o diversidade para fun na src",
            "* Atualizado o index para adicionar novo diretório",
            "* Removido casado.js",
            "* Construindo reactionRole configuravél",
            "* Construindo sistema de música",
            "* Construindo sistema de NSFW quando bane algum usuário",
            "* Construindo um Handler melhorado",
            "* Construindo sistema de verificação",
            "* Construindo os comandos (setprefix e rep)",
            "* O github será atualizado amanhã às 19:30"
        ])
        .addField("Atualizações - 17/05 às 14:38", [
            "* Arrumando bugs básicos",
            "* Adicionado novo comando `update`",
            "* Removido o `setlogs`"
        ])
        .setColor("PURPLE")
    message.quote(embed)
}

module.exports.help = {
    name: "update",
    aliases: ["atualizações"]
}