const { Telegraf, Composer } = require('telegraf')

const consoles = require('../layouts/consoles')
const { token, environment } = require('./config')

const bot = new Telegraf(token)
const composer = new Composer()
const middleware = (composer) => {
    bot.use(composer.middleware())
}

if (environment === "heroku") {
    bot.launch({
        webhook: {
            domain: process.env.URL,
            hookPath: '/bot',
            port: process.env.PORT
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