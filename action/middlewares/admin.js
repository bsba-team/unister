const { composer, middleware } = require('../../core/bot')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const database = require('../../database/db')

composer.command(`admins`, ctx => {
    console.log(database.admins)
})

middleware(composer)
consoles.module(__filename)