const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.action(/accept_form_(.*)/ig, async ctx => {
    const applicant = ctx.match[1]
    const message = ctx.match[2]
    await ctx.telegram.sendMessage(applicant, `<b>You're application has been accepted!</b>`, {
        parse_mode: "HTML"
    })
    await ctx.editMessageReplyMarkup(keyboard.form_complete)
})

composer.action(/decline_form_(.*)/ig, async ctx => {
    const applicant = ctx.match[1]
    const message = ctx.match[2]
    await ctx.telegram.sendMessage(applicant, `<b>You're application has been declined!</b>`, {
        parse_mode: "HTML"
    })
    await ctx.editMessageReplyMarkup(keyboard.form_complete)
})

composer.action(`respond_complete`, async ctx => {
    await ctx.answerCbQuery(message.form_complete)
})

middleware(composer)
consoles.module(__filename)