const { composer, middleware } = require('../../core/bot')
const { Markup, Extra } = require('telegraf')

const consoles = require('../../layouts/consoles')
const ds = require('../../database/ds')

composer.command(`repos`, async ctx => {
    const fetch = await ds("https://api.github.com/orgs/bsba-team/repos")
    const keyboard = Object.values(fetch).map((obj) => [Markup.callbackButton(`${obj["name"]}`, `repo_${obj["name"]}`)])
    await ctx.replyWithPhoto({source: `./assets/github.jpg`}, {
        caption: `<b>Choose the project you would like to interact with:</b>`,
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard(keyboard)
    })
})

middleware(composer)
consoles.module(__filename)