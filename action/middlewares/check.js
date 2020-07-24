const { composer, middleware } = require('../../core/bot')
const { Markup } = require('telegraf')
const isReachable = require('is-reachable');

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.command(`check`, async ctx => {
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

    await ctx.replyWithHTML(await message.check(await github(), await telegram(), uptime), {
        reply_markup: keyboard.check
    })
})

middleware(composer)
consoles.module(__filename)