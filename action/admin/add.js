const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const security = require('../security')
const database = require('../../database/db')

composer.hears(/\/add (.+)/ig, async ctx => {
    await security(ctx, async () => {
        await database.users["temporary"].push(ctx.match[1])
        await ctx.replyWithHTML(`<b>Successfully added a temporary admin!</b>`)
    })
})

composer.hears(/\/add/,async ctx => {
    if (ctx.message.reply_to_message.from.username) {
        await security(ctx, async () => {
            await database.users["temporary"].push(ctx.message.reply_to_message.from.username)
            await ctx.replyWithHTML(`<b>Successfully added a temporary admin!</b>`)
            await ctx.deleteMessage(ctx.message.message_id).catch(async () => {
                await ctx.replyWithHTML(`<b>Not enough permission to delete!</b>`)
            })
        })
    } else {
        await ctx.replyWithHTML(
            `<b>In order to add a temporary admin, use our template as we showed in our examples below:</b>` + `\n` +
            `<code>/add &lt;id&gt;</code>` + `\n` +
            `\n` +
            `<b>Example:</b>` + `\n` +
            `<code>/add 123456789</code>`)
    }

})

middleware(composer)
consoles.module(__filename)
