const { composer, middleware } = require('../../core/bot')
const { minecraft } = require('../../core/config')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const ds = require('../../database/ds')

composer.command(`minecraft`, async ctx => {
    const database = await ds(minecraft)
    if (database["debug"].ping === false) {
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