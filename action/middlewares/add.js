const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const security = require('../security')
const environment = require('../../core/config')

composer.hears(/\/add (.*)/ig, async ctx => {
    const toBeAdded = ctx.match[1]
    const isAdding = ctx.from.id
    await security(isAdding, ctx, async () => {
        await environment.temporary.push(toBeAdded)
        await ctx.replyWithHTML(`Successfully added!`)
    })
})

middleware(composer)
consoles.module(__filename)
