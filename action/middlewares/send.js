const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.hears(/\/send (.*) : (.*)/,async ctx => {
    const senderId = ctx.match[1]
    const senderMsg = ctx.match[2]
    await ctx.telegram.sendMessage(senderId,
        `<b>Reply from an admin:</b>` + `\n` +
        `\n` +
        `<code>${senderMsg}</code>` + `\n`, {
        parse_mode: "HTML"
        }
    )
    await ctx.replyWithHTML(`<b>Successfully sent!</b>`)
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