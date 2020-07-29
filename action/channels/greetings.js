const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

composer.hears(/^hi/ig, ctx => {
    return null
})

middleware(composer)
consoles.module(__filename)
