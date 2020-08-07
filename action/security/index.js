const database = require('../../database/db');
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')

module.exports = async (ctx, func) => {
    if ( database.users["eternal"].includes(ctx.from.id) || database.users["temporary"].includes(ctx.from.username)) {
        await func()
    } else {
        await ctx.replyWithAnimation({url: `https://media.giphy.com/media/xT77XUjQrAVQmf4jFS/source.gif`}, {
            parse_mode: "HTML",
            caption: message.error_admin,
            reply_markup: keyboard.error_admin
        })
    }
}
