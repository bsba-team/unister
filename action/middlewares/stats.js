const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const security = require('../security')
const database = require('../../database/db')

composer.command(`stats`, async ctx => {
    const status = {
        id: ctx.from.id,
        first_name: ctx.from.first_name,
        last_name: ctx.from.last_name,
        username: ctx.from.username,
        captcha: async () => {
            if (ctx.from.is_bot)
                return `bot`
            else
                return `person`
        },
        lang: ctx.from.language_code,
        superuser: async () => {
            if ( database.users["eternal"].includes(ctx.from.id) || database.users["temporary"].includes(ctx.from.username)) {
                return `admin`
            } else {
                return `non-admin`
            }
        }
    }

    await ctx.replyWithAnimation({url: `https://media.giphy.com/media/3o6UAYBY07Lv7rgfde/source.gif`}, {
        caption: `<b>User status preview:</b>` + `\n` +
            `\n` +
            `<b>ID:</b> <code>${status.id}</code>` + `\n` +
            `<b>First Name:</b> <code>${status.first_name}</code>` + `\n` +
            `<b>Last Name:</b> <code>${status.last_name}</code>` + `\n` +
            `<b>Username:</b> <code>${status.username}</code>` + `\n` +
            `<b>Captcha:</b> <code>${await status.captcha()}</code>` + `\n` +
            `<b>Language:</b> <code>${status.lang}</code>` + `\n` +
            `<b>Status:</b> <code>${await status.superuser()}</code>`,
        parse_mode: "HTML"
        }
    )
})

middleware(composer)
consoles.module(__filename)
