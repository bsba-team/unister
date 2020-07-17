const { Markup } = require('telegraf')

exports.start = Markup.inlineKeyboard([
    [
        Markup.callbackButton("Show detailed information", "help")
    ]
])

exports.help = Markup.inlineKeyboard([
    [
        Markup.switchToCurrentChatButton("Inline Mode", "mc")
    ]
])

exports.minecraft = Markup.inlineKeyboard([
    [
        Markup.callbackButton("🔃 Refresh", "minecraft")
    ]
])