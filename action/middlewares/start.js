const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.start(async ctx => {
    await ctx.replyWithAnimation({url: `https://media.giphy.com/media/lnmR8HiZcsHYXi23Jj/source.gif`}, {
        parse_mode: "HTML",
        caption: message.start,
        reply_markup: keyboard.start
    })
})

middleware(composer)
consoles.module(__filename)
