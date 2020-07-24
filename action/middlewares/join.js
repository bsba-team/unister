const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.hears(/\/join (.+)/ig,async ctx => {
    const memberTg = ctx.from.id
    const memberId = ctx.match[1]

    await ctx.telegram.sendMessage(-1001347275021, message.form_notification(memberTg, memberId) ,
        {
            disable_web_page_preview: true,
            parse_mode: "HTML",
            reply_markup: keyboard.form_admin(ctx.from.id)
        }
    )
    await ctx.replyWithHTML(
        message.form_status, {
            reply_markup: keyboard.form_request
        }
    )
})

composer.hears(/\/join/,async ctx => {
    await ctx.replyWithHTML(message.form_guide)
})

middleware(composer)
consoles.module(__filename)