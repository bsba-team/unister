const { composer, middleware } = require('../../core/bot')
const { Markup, Extra } = require('telegraf')
const fs = require('fs')
const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const database = require('../../database/db')

composer.action(`admins`, async ctx => {
    const admins = Object.keys(database.admins)
    const adminList = async () => {
        const list = []
        for (let admin of admins) {
            list.push([Markup.callbackButton(admin, `admin_${admin}`)])
        }
        return Markup.inlineKeyboard(list)
    }
    const picture = "https://github.com/genemators/bsba/raw/master/assets/logo.png"

    await ctx.editMessageMedia({
        type: 'photo',
        media: picture,
        caption: message.admin[0]
    }, {
        parse_mode: "HTML",
        reply_markup: await adminList()
    })
})

composer.action(/admin_(.+)/ig, async ctx => {
    const match = ctx.match[1]
    const admins = database.admins
    const found = admins[match]

    const result =
        `<a href="${found["avatar"]}"></a><a href="${found["profile"]}"><b>${match}</b></a>` + `\n` +
        `<b>Name:</b> <code>${found["name"]}</code>` + `\n` +
        `<b>Surname:</b> <code>${found["surname"]}</code>` + `\n` +
        `<b>Experiences:</b> <code>${found["experience"].toString()}</code>`
    await ctx.editMessageMedia({
        type: 'photo',
        media: found['avatar'],
        caption: result
    }, {
        parse_mode: "HTML",
        disable_web_page_preview: true,
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.urlButton(`Website`, found["profile"])
            ],
            [
                Markup.urlButton(`Github`, `https://github.com/${found["github"]}`),
                Markup.urlButton(`Telegram`, `https://t.me/${found["telegram"]}`)
            ],
            [
                Markup.callbackButton(`⬅ Back`, `admins`)
            ]
        ])
    })
})

middleware(composer)
consoles.module(__filename)