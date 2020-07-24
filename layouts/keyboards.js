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
    ],
    [
        Markup.urlButton("🌐 Website", "https://bsba.aternos.me/")
    ]
])

exports.admin_view = (data) =>
    Markup.inlineKeyboard([
        [
            Markup.urlButton(`Website`, data["profile"])
        ],
        [
            Markup.urlButton(`Github`, `https://github.com/${data["github"]}`),
            Markup.urlButton(`Telegram`, `https://t.me/${data["telegram"]}`)
        ],
        [
            Markup.callbackButton(`⬅ Back`, `admins`)
        ]
    ])

exports.admin_list = async (data) => {
    const list = []
    for (let admin of data) {
        list.push([Markup.callbackButton(admin, `admin_${admin}`)])
    } return Markup.inlineKeyboard(list)
}

exports.check =
    Markup.inlineKeyboard([
        Markup.callbackButton(`🔃 Refresh`, `check`)
    ])

exports.form_accept =
    null

exports.form_decline =
    null

exports.form_complete =
    Markup.inlineKeyboard([
        [
            Markup.callbackButton(`Completed...`, `respond_complete`)
        ],
        [
            Markup.urlButton(`Check pending invitations`, `https://github.com/orgs/bsba-team/people/pending_invitations`)
        ],
        [
            Markup.urlButton(`Check pending collaborators`, `https://github.com/orgs/bsba-team/pending_collaborators`)
        ]
    ])

exports.form_request =
    Markup.inlineKeyboard([
        [
            Markup.urlButton(`Check pending invitations`, `https://github.com/orgs/bsba-team/people/pending_invitations`)
        ],
        [
            Markup.urlButton(`Check pending collaborators`, `https://github.com/orgs/bsba-team/pending_collaborators`)
        ]
    ])

exports.form_admin = (data) =>
    Markup.inlineKeyboard([
        [
            Markup.callbackButton(`✅`, `accept_form_${data}`),
            Markup.callbackButton(`❌`, `decline_form_${data}`)
        ],
        [
            Markup.urlButton(`Check pending invitations`, `https://github.com/orgs/bsba-team/people/pending_invitations`)
        ],
        [
            Markup.urlButton(`Check pending collaborators`, `https://github.com/orgs/bsba-team/pending_collaborators`)
        ]
    ])