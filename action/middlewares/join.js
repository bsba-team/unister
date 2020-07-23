const { composer, middleware } = require('../../core/bot')
const { Markup } = require('telegraf')

const consoles = require('../../layouts/consoles')

composer.hears(/\/join (.+)/ig,async ctx => {
    const memberTg = ctx.from.id
    const memberId = ctx.match[1]
    const text =
        `<b><a href="https://bsba.uz">⛓ GitHub Update Notification ⛓</a></b>` + `\n` +
        `\n` +
        `New applicant for BSBA™ GitHub organization:` + `\n` +
        `<code>Telegram ID: ${memberTg}</code>` + `\n` +
        `<code>GitHub Token: ${memberId}</code>` + `\n` +
        `\n` +
        `<b>To proceed with it, copy and visit:</b>` + `\n` +
        `https://github.com/orgs/bsba-team/people` + `\n`
    await ctx.telegram.sendMessage(-1001347275021, text ,
        {
            disable_web_page_preview: true,
            parse_mode: "HTML",
            reply_markup: Markup.inlineKeyboard([
                [
                  Markup.callbackButton(`✅`, `accept_form_${ctx.from.id}`),
                  Markup.callbackButton(`❌`, `decline_form_${ctx.from.id}`)
                ],
                [
                    Markup.urlButton(`Check pending invitations`, `https://github.com/orgs/bsba-team/people/pending_invitations`)
                ],
                [
                    Markup.urlButton(`Check pending collaborators`, `https://github.com/orgs/bsba-team/pending_collaborators`)
                ]
            ])
        }
    )
    await ctx.replyWithHTML(
        `<b>Your requested has been applied. It will take up to 3 days to confirm your application.` + `\n` +
        `Please, be patient and don't forget to confirm our invitation!</b>`, {
            reply_markup: Markup.inlineKeyboard([
                [
                    Markup.urlButton(`Check pending invitations`, `https://github.com/orgs/bsba-team/people/pending_invitations`)
                ],
                [
                    Markup.urlButton(`Check pending collaborators`, `https://github.com/orgs/bsba-team/pending_collaborators`)
                ]
            ])
        }
    )
})

composer.hears(/\/join/,async ctx => {
    await ctx.replyWithHTML(
        `<b>In order to join our github organisation, choose and type as we showed in our examples below:</b>` + `\n` +
        `<code>/join &lt;github username&gt;</code>` + `\n` +
        `<code>/join &lt;github email address&gt;</code>` + `\n` +
        `\n` +
        `<b>Example:</b>` + `\n` +
        `<code>/join example-name</code>` + `\n` +
        `<code>/join example@gmail.com</code>`)

})

middleware(composer)
consoles.module(__filename)