const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const security = require('../security')
const database = require('../../database/db')

composer.command(`stats`, async ctx => {
    const status = {
        first_name: ctx.from.first_name,
        last_name: ctx.from.last_name,
        lang: ctx.from.language_code,
        superuser: async () => {
            if ( database.users["eternal"].includes(ctx.from.id) || database.users["temporary"].includes(ctx.from.username)) {
                return `admin`
            } else {
                return `non-admin`
            }
        }
    }

    await ctx.replyWithHTML(
        `<b>User status preview:</b>` + `\n` +
        `\n` +
        `<b>First Name:</b> <code>${status.first_name}</code>` + `\n` +
        `<b>Last Name:</b> <code>${status.last_name}</code>` + `\n` +
        `<b>Language:</b> <code>${status.lang}</code>` + `\n` +
        `<b>Status:</b> <code>${await status.superuser()}</code>`
    )
})

middleware(composer)
consoles.module(__filename)
