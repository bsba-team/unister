const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const security = require('../security')
const database = require('../../database/db')

composer.command(`list`, async ctx => {
    await security(ctx, async () => {
        const list = database.users["temporary"].toString()

        if (list === '') {
            await ctx.replyWithAnimation({url: `https://media.giphy.com/media/3o6UB117P7KdPnnpNC/source.gif`}, {
                parse_mode: "HTML",
                caption: `<b>Temporary admin list is empty!</b>`
            })
        }
        else {
            await ctx.replyWithAnimation({url: `https://media.giphy.com/media/3o6UB117P7KdPnnpNC/source.gif`}, {
                parse_mode: "HTML",
                caption: `<b>Temporary admins:</b>\n<code>${list}</code>`
            })
        }
    })
})

middleware(composer)
consoles.module(__filename)
