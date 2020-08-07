const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const security = require('../security')
const database = require('../../database/db')

composer.hears(/\/add (.+)/ig, async ctx => {
    await security(ctx, async () => {
        await database.users["temporary"].push(ctx.match[1])
        await ctx.replyWithHTML(`<b>Successfully added a temporary admin!</b>`)
    })
})

composer.hears(/\/add/,async ctx => {
        await ctx.replyWithAnimation({url: `https://media.giphy.com/media/Kc2DXdh0FYgd63XQ14/source.gif`}, {
            parse_mode: "HTML",
            caption: `<b>In order to add a temporary admin, use our template as we showed in our examples below:</b>` + `\n` +
                `<code>/add &lt;id&gt;</code>` + `\n` +
                `\n` +
                `<b>Example:</b>` + `\n` +
                `<code>/add 123456789</code>`
            }
        )
})

middleware(composer)
consoles.module(__filename)
