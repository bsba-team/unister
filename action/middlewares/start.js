const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.start(async ctx => {
    await ctx.replyWithHTML(message.start, {
        reply_markup: keyboard.start
    })
        .then(r => {r = '';console.log(r)})
})

middleware(composer)
consoles.module(__filename)