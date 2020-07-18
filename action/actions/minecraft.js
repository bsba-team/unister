const { composer, middleware } = require('../../core/bot')
const { minecraft } = require('../../core/config')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const ds = require('../../database/ds')

composer.action(`minecraft`, async ctx => {
    let now = new Date()
    let uptime = await now.toLocaleString();
    const database = await ds(minecraft)

    if (database === null || database["debug"].ping === false) {
        await ctx.editMessageText(`<b>Unavailable at the moment! Please, try again later...</b>` + `\n<b>Last Update:</b> ${uptime}`, {
            parse_mode: "HTML",
            reply_markup: keyboard.minecraft
        })
    } else {
        await ctx.editMessageText(message.minecraft(database) + `\n<b>Last Update:</b> ${uptime}`, {
            parse_mode: "HTML",
            reply_markup: keyboard.minecraft
        })
    }
})

middleware(composer)
consoles.module(__filename)