const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.help(async ctx => {
    await ctx.replyWithHTML(message.help, {
        reply_markup: keyboard.help
    })
})

middleware(composer)
consoles.module(__filename)