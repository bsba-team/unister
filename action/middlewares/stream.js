const { composer, middleware } = require('../../core/bot')

const fs = require('fs')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.command(`stream`, async ctx => {
    await ctx.replyWithAnimation({url: `https://media.giphy.com/media/xT77Y2ZtcB1HWt2KmQ/source.gif`}, {
        caption: message.stream,
        parse_mode: "HTML",
        reply_markup: keyboard.stream
    })
})

middleware(composer)
consoles.module(__filename)
