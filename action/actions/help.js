const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.action(`help`, async ctx => {
    await ctx.editMessageText(message.help, {
        parse_mode: "HTML",
        reply_markup: keyboard.help
    })
        .then(r => {r = '';console.log(r)})
})

middleware(composer)
consoles.module(__filename)