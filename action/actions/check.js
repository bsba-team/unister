const { composer, middleware } = require('../../core/bot')
const { Markup } = require('telegraf')
const isReachable = require('is-reachable');

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.action(`check`, async ctx => {
    const uptime = await new Date().toLocaleString();

    const github = async () => {
        if (await isReachable('github.com')) {
            return "STABLE"
        } else {
            return "UNSTABLE"
        }
    }

    const telegram = async () => {
        if (await isReachable('api.telegram.org')) {
            return "STABLE"
        } else {
            return "UNSTABLE"
        }
    }

    const text =
        `<b>BSBA™ Bot status health checker:</b>` + `\n` +
        `\n` +
        `<b>Github API:</b> <code>${(await github())}</code>` + `\n` +
        `<b>Telegram API:</b> <code>${(await telegram())}</code>` + `\n` +
        `\n` +
        `<b>Last Update:</b> <code>${uptime}</code>`
    await ctx.editMessageText(text, {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard([
            Markup.callbackButton(`🔃 Refresh`, `check`)
        ])
    })
})

middleware(composer)
consoles.module(__filename)