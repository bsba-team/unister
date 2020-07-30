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
        await ctx.replyWithHTML(message.minecraft(database), {
            reply_markup: keyboard.minecraft
        })
    }
})

middleware(composer)
consoles.module(__filename)
