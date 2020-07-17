const { composer, middleware } = require('../../core/bot')
const { minecraft } = require('../../core/config')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const ds = require('../../database/ds')

composer.command(`mc`, async ctx => {
    const database = await ds(minecraft)

    await ctx.replyWithHTML(message.minecraft(database), {
        reply_markup: keyboard.help
    })
})

middleware(composer)
consoles.module(__filename)