

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
    `\n` +
    `<i>In order to our inline mode, switch to inline mode ` +
    `by typing: @bsba_bot and then start typing something there.</i>`

exports.minecraft = (data) =>
    data.toString()