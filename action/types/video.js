const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const env = require('../../core/env')

composer.on('audio', async ctx => {
    const content = ctx.message.video.file_id
    // await ctx.replyWithHTML(`<b>Your video has been received and processing</b>`)
    await ctx.telegram.sendChatAction(ctx.chat.id, 'upload_video')

    await ctx.telegram.sendVideo(env.CONFESSION, content, {
        parse_mode: "HTML",
        caption: message.audio(ctx),
        reply_markup: keyboard.audio
    })
})

middleware(composer)
consoles.module(__filename)
