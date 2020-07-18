const { composer, middleware } = require('../../core/bot')
const { Markup, Extra } = require('telegraf')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const database = require('../../database/db')

composer.command(`admins`, async ctx => {
    const admins = Object.keys(database.admins)
    const adminList = async () => {
        const list = []
        for (let admin of admins) {
            list.push([Markup.callbackButton(admin, `admin_${admin}`)])
        }
        return Markup.inlineKeyboard(list)
    }
    const photo = "https://github.com/bsba-team/unister/raw/master/assets/guard.png"
    await ctx.replyWithPhoto(photo, {
        parse_mode: "HTML",
        caption: message.admin[0],
        reply_markup: await adminList()
    })
})

middleware(composer)
consoles.module(__filename)