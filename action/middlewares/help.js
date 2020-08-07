const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.help(async ctx => {
    await ctx.replyWithAnimation({url: `https://media.giphy.com/media/j2dYUL6ONL1TEuwDFP/source.gif`}, {
        parse_mode: "HTML",
        caption: message.help,
        reply_markup: keyboard.help
    })
})

middleware(composer)
consoles.module(__filename)
