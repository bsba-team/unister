const { Telegraf, Composer } = require('telegraf')

const consoles = require('../layouts/consoles')
const { token, environment, domain, port } = require('./config')

const bot = new Telegraf(token)
const composer = new Composer()
const middleware = (composer) => {
    bot.use(composer.middleware())
}

bot.telegram.getMe().then((botInfo) => {
    bot.options.username = botInfo.username;
});

if (environment === "heroku") {
    bot.launch({
        webhook: {
            domain: domain,
            hookPath: '/bot',
            port: port
        }
    })
        .then(() => consoles.launch(environment))
        .catch(error => consoles.errors(error))
} else if (environment === "local") {
    bot.launch()
        .then(() => consoles.launch(environment))
        .catch(error => consoles.errors(error))
} else {
    consoles.wrongEnv()
}

module.exports = {
    bot, composer, middleware
}
