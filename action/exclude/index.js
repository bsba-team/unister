const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.on('chosen_inline_result', async ctx => {
    await ctx.replyWithHTML(message.invalid_query, {
        reply_markup: keyboard.invalid
    })
})

composer.on('text', async ctx => {
    if (!ctx.message["via_bot"])
        await ctx.replyWithHTML(message.invalid, {
            reply_markup: keyboard.invalid
        })
})

middleware(composer)
consoles.module(__filename)