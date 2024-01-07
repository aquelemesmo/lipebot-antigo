const {APIMessage, Message, MessageEmbed} = require('discord.js')
const config = require("../../../config.json")
const { bot } = require("../../../index.js")

module.exports = async (bot, message, quote) => {

    Message.prototype.quote = async function (content, options) {
        const message_reference = {
            message_id: (
                !!content && !options
                    ? typeof content === 'object' && content.messageID
                    : options && options.messageID
            ) || this.id,
            message_channel: this.channel.id
        }

        const allowed_mentions = {
            parse: ['users', 'roles', 'everyone'],
            replied_user: typeof content === 'object' ? content && +content.mention : options && +options.mention
        }

        const {data: parsed, files} = await APIMessage
            .create(this, content, options)
            .resolveData()
            .resolveFiles()

        return this.client.api.channels[this.channel.id].messages.post({
            data: {...parsed, message_reference, allowed_mentions},
            files
        })
            .then(d => this.client.actions.MessageCreate.handle(d).message)
    }

    let mention = [`<@${bot.user.id}>`, `<@!${bot.user.id}>`]

    mention.find(mention => {
        if (message.content === mention) {
            const mentionEmbed = new MessageEmbed()
                .setTitle("Olá! eu me chamo Lipe!")
                .setThumbnail(bot.user.displayAvatarURL())
                .setDescription("Olá " + message.author.username + ", eu me chamo Lipe, um simples robô para a comunidade do Discord. \n\n> Caso precisa conhecer minhas funções:\n`lp!help`\n\n> Se quiser ver minhas informações\n`lp!info`")
                .setFooter("Meu desenvolvedor: Jack2315#3288")
                .setColor("PURPLE")
            message.quote(mentionEmbed)
        }
    })

    if (message.author.bot) return;
    if (message.type.channel === "dm") return;
    if (message.content.indexOf(".") == 0);
    if (message.content.indexOf(config.prefix) !== 0) return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ")
    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let command = args.shift().toLowerCase();
    let arquivoCommand = [];
a
    if (bot.commands.has(command)) {
        arquivoCommand = bot.commands.get(command)
    } else if (bot.aliases.has(command)) {
        arquivoCommand = bot.commands.get(bot.aliases.get(command))
    }

    try {
        arquivoCommand.run(bot, message, args)
    } catch (e) {
    }

    let command = [];

    command.forEach(cmd => {
        const levDistance = levenshtein(comando, cmd);
        if (levDistance < levDistanceLevel) {
            sugestao = cmd;
            levDistanceLevel = levDistance;
        }
    });
    const embed = new MessageEmbed()
        .setColor('PURPLE')
        .setDescription(``)

    message.channel.send(embed)
}