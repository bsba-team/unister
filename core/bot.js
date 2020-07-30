const { Telegraf, Composer } = require('telegraf')

const consoles = require('../layouts/consoles')
const env = require('./env')

const bot = new Telegraf(env.BOT_TOKEN)
const composer = new Composer()
const middleware = (composer) => {
    bot.use(composer.middleware())
}

bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username;
});

if (env.ENVIRONMENT === "heroku") {
    bot.launch({
        webhook: {
            domain: env.DOMAIN,
            hookPath: '/bot',
            port: env.PORT
        }
    })
        .then(async () => {
            consoles.launch(env.ENVIRONMENT)
            await bot.telegram.sendMessage(env.CONTROLLER,
                `<a href="https://github.com/bsba-team/unister">⛓ GitHub Update Notification ⛓</a>` + `\n` +
                `\n` +
                `The telegram bot has just finished build process and has been restarted` + `\n` +
                `\n` +
                `For more information, visit:` + `\n` +
                `<a href="https://t.me/bsba_bot"><u>https://t.me/bsba_bot</u></a>`, {
                parse_mode: "HTML"
                })
        })
        .catch(error => consoles.errors(error))
} else if (env.ENVIRONMENT === "local") {
    bot.launch()
        .then(() => consoles.launch(env.ENVIRONMENT))
        .catch(error => consoles.errors(error))
} else {
    consoles.wrongEnv()
}

module.exports = {
    bot, composer, middleware
}
