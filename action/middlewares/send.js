const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const security = require('../security')

composer.hears(/\/send (.*) : (.*)/,async ctx => {
    const senderId = ctx.match[1]
    const senderMsg = ctx.match[2]
    const user = ctx.from.id

    await security(user, ctx, async () => {
        await ctx.telegram.sendMessage(senderId,
            `<b>Reply from an admin:</b>` + `\n` +
            `\n` +
            `<code>${senderMsg}</code>` + `\n`, {
                parse_mode: "HTML"
            }
        )
            .then(async () => {
                await ctx.replyWithHTML(`<b>Successfully sent!</b>`)
            })
            .catch(async () => {
                await ctx.replyWithHTML(`<b>User not activated or blocked!</b>`)
            })

    })
})

composer.hears(/\/send/,async ctx => {
    await ctx.replyWithHTML(
        `<b>In order to send a message to an applicant, use our template as we showed in our examples below:</b>` + `\n` +
        `<code>/send &lt;id : message&gt;</code>` + `\n` +
        `\n` +
        `<b>Example:</b>` + `\n` +
        `<code>/send 756870298 : Congrats!</code>`)
})

middleware(composer)
consoles.module(__filename)
