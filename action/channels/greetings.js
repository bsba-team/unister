const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')

const dialogue = (ctx) => [
    `Howdy, ${ctx.from.first_name}`,
    `Hi, ${ctx.from.first_name}`,
]

const response = (ctx) => {
    return dialogue(ctx)[Math.floor(Math.random() * dialogue(ctx).length)]
}

composer.hears(/hi|hello/ig, async ctx => {
    if (ctx.chat.type)
        await ctx.replyWithHTML(response(ctx))
})

middleware(composer)
consoles.module(__filename)
