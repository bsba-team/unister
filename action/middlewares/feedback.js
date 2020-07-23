const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.hears(/\/feedback (.*)/ig, async ctx => {
    const feedbackText = ctx.match[1]
    await console.log(feedbackText)
    await ctx.replyWithHTML(message.help, {
        reply_markup: keyboard.help
    })
})

composer.hears(/\/feedback/, async ctx => {
    await ctx.replyWithHTML(`Test`)
})

middleware(composer)
consoles.module(__filename)