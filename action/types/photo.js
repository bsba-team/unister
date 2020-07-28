const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const env = require('../../core/env')

composer.on('photo', async ctx => {
    const content = ctx.message.photo.pop().file_id
    await ctx.replyWithHTML(`<b>Your photo has been received and processing</b>`)
    await ctx.telegram.sendChatAction(ctx.chat.id, 'upload_photo')

    await ctx.telegram.sendPhoto(env.CONFESSION, content, {
        caption: message.photo(ctx),
        parse_mode: "HTML",
        reply_markup: keyboard.photo
    })
})

middleware(composer)
consoles.module(__filename)