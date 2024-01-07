const Discord = require("discord.js")
const bot = new Discord.Client()
const config = require("./config.json")
const fs = require("fs")
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./src/commands/utils", (err, files) => {
    let arquivojs = files.filter(f => f.split("."))
    arquivojs.forEach((f, i) => {
        let props = require("./src/commands/utils/" + f)
        console.log(`O comando ${f} da categoria utils foi ativada`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})

fs.readdir("./src/commands/ships", (err, files) => {
    let arquivojs = files.filter(f => f.split("."))
    arquivojs.forEach((f, i) => {
        let props = require("./src/commands/ships/" + f)
        console.log(`O comando ${f} da categoria ships foi ativada`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})

fs.readdir("./src/commands/mod", (err, files) => {
    let arquivojs = files.filter(f => f.split("."))
    arquivojs.forEach((f, i) => {
        let props = require("./src/commands/mod/" + f)
        console.log(`O comando ${f} da categoria mod foi ativada`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})

fs.readdir("./src/commands/auth", (err, files) => {
    let arquivojs = files.filter(f => f.split("."))
    arquivojs.forEach((f, i) => {
        let props = require("./src/commands/auth/" + f)
        console.log(`O comando ${f} da categoria auth foi ativada`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})

fs.readdir("./src/commands/fun", (err, files) => {
    let arquivojs = files.filter(f => f.split("."))
    arquivojs.forEach((f, i) => {
        let props = require("./src/commands/fun/" + f)
        console.log(`O comando ${f} da categoria diversidade foi ativada`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})

/*fs.readdir("./src/commands/config", (err, files) => {
    let arquivojs = files.filter(f => f.split("."))
    arquivojs.forEach((f, i) => {
        let props = require("./src/commands/config/" + f)
        console.log(`O comando ${f} da categoria config foi ativada`)
        bot.commands.set(props.help.name, props)
        props.help.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name)
        })
    })
})
*/
fs.readdir("./src/events", (err, files) => {
    if (err) console.error(err);
    files.forEach(file => {
        const event = require(`./src/events/${file}`)
        let nomeEvento = file.split(".")[0];
        bot.on(nomeEvento, event.bind(null, bot));
        console.log("O evento " + file + " foi ativada!")
    })
})

bot.login(config.token)