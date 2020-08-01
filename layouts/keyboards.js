const { Markup } = require('telegraf')

exports.start = Markup.inlineKeyboard([
    [
        Markup.callbackButton("Show detailed information", "help")
    ]
])

exports.help = Markup.inlineKeyboard([
    [
        Markup.switchToCurrentChatButton("Inline Mode (Beta)", "")
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
    Markup.inlineKeyboard([
        [
            Markup.urlButton(`Community Group`, `https://t.me/bsba_group`)
        ]
    ])

exports.form_decline =
    Markup.inlineKeyboard([
        [
            Markup.urlButton(`Feedback Zone`, `https://t.me/bsba_r8`)
        ]
    ])

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

exports.invalid =
    Markup.inlineKeyboard([
        Markup.callbackButton(`Show available commands`, `help`)
    ])

exports.photo =
    Markup.inlineKeyboard([
        [
            Markup.urlButton(`Upload your own art!`, `https://t.me/bsba_bot`)
        ],
        [
            Markup.urlButton(`Community Group`, `https://t.me/bsba_group`)
        ]
    ])

exports.video =
    Markup.inlineKeyboard([
        [
            Markup.urlButton(`Upload your own video!`, `https://t.me/bsba_bot`)
        ],
        [
            Markup.urlButton(`Community Group`, `https://t.me/bsba_group`)
        ]
    ])

exports.inline = (data) =>
    Markup.inlineKeyboard([
        Markup.urlButton(`GitHub`, `${data["html_url"]}`),
        Markup.urlButton(`Download`, `https://github.com/${data["full_name"]}/archive/master.zip`),
        Markup.urlButton(`Repositories`, `https://github.com/bsba-team/`),
    ], { columns: 2 })

exports.error_admin =
    Markup.inlineKeyboard([
        Markup.urlButton(`Contact with admin`, `https://t.me/genemator`)
    ])

exports.links = async (links) => {
    const keyboard = []
    for (let link of links) {
        keyboard.push([Markup.urlButton(link["name"], `https://t.me/` + link["url"])])
    }
    return Markup.inlineKeyboard(keyboard)
}
