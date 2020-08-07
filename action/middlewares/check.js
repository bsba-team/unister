const { composer, middleware } = require('../../core/bot')
const isReachable = require('is-reachable');

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.command(`check`, async ctx => {
    const uptime = await new Date().toLocaleString();

    const github = async () => {
        if (await isReachable('api.github.com')) {
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

    await ctx.replyWithAnimation({url: `https://media.giphy.com/media/3o6UB9xT8upEDGrcqs/source.gif`}, {
        caption: await message.check(await github(), await telegram(), uptime),
        reply_markup: keyboard.check,
        parse_mode: "HTML"
    })
})

middleware(composer)
consoles.module(__filename)
