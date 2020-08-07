const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const ds = require('../../database/ds')
const env = require('../../core/env')

composer.command(`minecraft`, async ctx => {
    await ctx.replyWithHTML("<b>Please, wait a minute. We are processing your request!</b>")

    const database = await ds(env.MINECRAFT)
    if (database === null || database["debug"].ping === false) {
            await ctx.replyWithHTML(`<b>Unavailable at the moment! Please, try again later...</b>`, {
                reply_markup: keyboard.minecraft
            })
    } else {
        await ctx.replyWithAnimation({url: `https://media.giphy.com/media/3o6UBedJJfaxXHvZyU/source.gif`}, {
            reply_markup: keyboard.minecraft,
            parse_mode: "HTML",
            caption: message.minecraft(database)
        })
    }
})

middleware(composer)
consoles.module(__filename)
