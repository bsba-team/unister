exports.start =
    `<b>Welcome to BSBA™: Unister Assistant!</b>` + `\n` +
    `\n` +
    `This bot helps you to manage with information about BSBA team.` + `\n` +
    `With the help of this bot you can do:` + `\n` +
    `\n` +
    `<code>* Check current status of the team</code>` + `\n` +
    `<code>* Check the members & their statuses</code>` + `\n` +
    `<code>* Check status of minecraft servers</code>` + `\n` +
    `\n` +
    `<i>In order to see full detailed usage information of the bot, press the button below.</i>`

exports.help =
    `<b>List of available commands:</b>` + `\n` +
    `\n` +
    `/help - <code>show this helper message</code>` + `\n` +
    `/minecraft - <code>check server status</code>` + `\n` +
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

exports.admin = [
    `<b>Choose an admin from the list to get information about:</b>`
]