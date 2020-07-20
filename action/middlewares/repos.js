const { composer, middleware } = require('../../core/bot')
const { Markup, Extra } = require('telegraf')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const ds = require('../../database/ds')

composer.command(`repos`, async ctx => {
    const fetch = await ds("https://api.github.com/orgs/bsba-team/repos")
    const keyboard = Object.values(fetch).map((obj) => [Markup.callbackButton(`${obj["name"]}`, `repo_${obj["name"]}`)])
    ctx.replyWithHTML(`<b>Choose the project you would like to interact with:</b>`, {
        reply_markup: Markup.inlineKeyboard(keyboard)
    })
        .then(r => {r = '';console.log(r)})
})

middleware(composer)
consoles.module(__filename)