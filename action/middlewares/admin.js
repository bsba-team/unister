const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.command(`admins`, ctx => {
    ctx.replyWithHTML(message.help, {
        reply_markup: keyboard.help
    })
        .then(r => {r = '';console.log(r)})
})

middleware(composer)
consoles.module(__filename)