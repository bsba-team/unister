const database = require('../../database/db');
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const environment = require('../../core/config')
module.exports = async (id, ctx, func) => {
    if (database.users["users"].includes(id) || environment.temporary.includes(id)) {
        await func()
    } else {
        await ctx.replyWithHTML(message.error_admin, {
            reply_markup: keyboard.error_admin
        })
    }
}
