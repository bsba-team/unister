const { composer, middleware } = require('../../core/bot')
const { Markup } = require('telegraf')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.action(/accept_form_(.*)/ig, async ctx => {
    const applicant = ctx.match[1]
    const message = ctx.match[2]
    await ctx.telegram.sendMessage(applicant, `<b>You're application has been accepted!</b>`, {
        parse_mode: "HTML"
    })
    await ctx.editMessageReplyMarkup(Markup.inlineKeyboard([
        [
            Markup.callbackButton(`Completed...`, `respond_complete`)
        ],
        [
            Markup.urlButton(`Check pending invitations`, `https://github.com/orgs/bsba-team/people/pending_invitations`)
        ],
        [
            Markup.urlButton(`Check pending collaborators`, `https://github.com/orgs/bsba-team/pending_collaborators`)
        ]
    ]))
})

composer.action(/decline_form_(.*)/ig, async ctx => {
    const applicant = ctx.match[1]
    const message = ctx.match[2]
    await ctx.telegram.sendMessage(applicant, `<b>You're application has been declined!</b>`, {
        parse_mode: "HTML"
    })
    await ctx.editMessageReplyMarkup(Markup.inlineKeyboard([
        [
            Markup.callbackButton(`Completed...`, `respond_complete`)
        ],
        [
            Markup.urlButton(`Check pending invitations`, `https://github.com/orgs/bsba-team/people/pending_invitations`)
        ],
        [
            Markup.urlButton(`Check pending collaborators`, `https://github.com/orgs/bsba-team/pending_collaborators`)
        ]
    ]))
})

composer.action(`respond_complete`, async ctx => {
    await ctx.answerCbQuery(`You have already responded to applicant!`)
})

middleware(composer)
consoles.module(__filename)