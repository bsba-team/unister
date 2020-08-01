const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.action(/accept_form_(.*)/ig, async ctx => {
    const applicant = ctx.match[1]
    await ctx.telegram.sendMessage(applicant,
        message.form_accept(ctx), {
        parse_mode: "HTML",
        reply_markup: keyboard.form_accept
    })
    await ctx.editMessageReplyMarkup(keyboard.form_complete)
})

composer.action(/decline_form_(.*)/ig, async ctx => {
    const applicant = ctx.match[1]
    await ctx.telegram.sendMessage(applicant,
        message.form_decline(ctx), {
        parse_mode: "HTML",
        reply_markup: keyboard.form_decline
    })
    await ctx.editMessageReplyMarkup(keyboard.form_complete)
})

composer.action(`respond_complete`, async ctx => {
    await ctx.answerCbQuery(message.form_complete)
})

middleware(composer)
consoles.module(__filename)
