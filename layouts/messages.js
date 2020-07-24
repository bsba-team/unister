exports.start =
    `<b>Welcome to BSBA™: Unister Assistant!</b>` + `\n` +
    `\n` +
    `This bot helps you to manage with information about BSBA team.` + `\n` +
    `With the help of this bot you can do:` + `\n` +
    `\n` +
    `<code>* Check current status of the team</code>` + `\n` +
    `<code>* Check the members & their statuses</code>` + `\n` +
    `<code>* Check status of minecraft servers</code>` + `\n` +
    `<code>* Check statuses of github repositories</code>` + `\n` +
    `<code>* Leave a feedback to admins</code>` + `\n` +
    `<code>* Request to join our github organisation</code>` + `\n` +
    `\n` +
    `<i>In order to see full detailed usage information of the bot, press the button below.</i>`

exports.help =
    `<b>List of available commands:</b>` + `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` + `\n` +
    `/check - <code>check health of API responses</code>` + `\n` +
    `/minecraft - <code>check server status</code>` + `\n` +
    `/admins - <code>get infos about admins</code>` + `\n` +
    `/repos - <code>get infos about repos</code>` + `\n` +
    `/join - <code>request to join our organisation</code>` + `\n` +
    `/feedback - <code>leave a feedback to admins</code>` + `\n` +
    `\n` +
    `<i>In order to our inline mode, switch to inline mode ` +
    `by typing: @bsba_bot and then start typing something there.</i>`

exports.minecraft = (data) =>
    `<b>The status of our minecraft server:</b>` + `\n` +
    `\n` +
    `<b>Address:</b> mc.bsba.uz / ${data.ip}:${data.port}` + `\n` +
    `<b>Online:</b> ${data.online}` + `\n` +
    `<b>Message:</b> ${data["motd"]["clean"]}` + `\n` +
    `<b>Players: (${data["players"].online}/${data["players"].max})</b>` + `\n` +
    `<b>Version: ${data.version}</b>` + `\n` +
    `<b>Software:</b> ${data["software"]}` + `\n`

exports.admin_menu =
    `<b>Choose an admin from the list to get information about:</b>`

exports.admin_view = (data, match) =>
    `<a href="${data["avatar"]}"></a><a href="${data["profile"]}"><b>${match}</b></a>` + `\n` +
    `<b>Name:</b> <code>${data["name"]}</code>` + `\n` +
    `<b>Surname:</b> <code>${data["surname"]}</code>` + `\n` +
    `<b>Status:</b> <code>${data["status"]}</code>` + `\n` +
    `<b>Rank:</b> <code>${data["rank"]}</code>` + `\n` +
    `<b>Experiences:</b> <code>${data["experience"].toString()}</code>`

exports.check = async (github, telegram, uptime) =>
    `<b>BSBA™ Bot status health checker:</b>` + `\n` +
    `\n` +
    `<b>Github API:</b> <code>${(github)}</code>` + `\n` +
    `<b>Telegram API:</b> <code>${(telegram)}</code>` + `\n` +
    `\n` +
    `<b>Last Update:</b> <code>${uptime}</code>`

exports.form_complete =
    `You have already responded to applicant!`

exports.form_guide =
    `<b>In order to join our github organisation, choose and type as we showed in our examples below:</b>` + `\n` +
    `<code>/join &lt;github username&gt;</code>` + `\n` +
    `<code>/join &lt;github email address&gt;</code>` + `\n` +
    `\n` +
    `<b>Example:</b>` + `\n` +
    `<code>/join example-name</code>` + `\n` +
    `<code>/join example@gmail.com</code>`

exports.form_notification = (TG, ID) =>
    `<b><a href="https://bsba.uz">⛓ GitHub Update Notification ⛓</a></b>` + `\n` +
    `\n` +
    `New applicant for BSBA™ GitHub organization:` + `\n` +
    `<code>Telegram ID:</code> <code>${TG}</code>` + `\n` +
    `<code>GitHub Token:</code> <code>${ID}</code>` + `\n` +
    `\n` +
    `<b>To proceed with it, copy and visit:</b>` + `\n` +
    `https://github.com/orgs/bsba-team/people` + `\n`

exports.form_status =
    `<b>Your requested has been applied. It will take up to 3 days to confirm your application.</b>` + `\n` +
    `<code>Please, be patient and don't forget to confirm our invitation!</code>`