const { composer, middleware } = require('../../core/bot')

const fuzzy = require('fuzzy');
const fs = require('fs')

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const ds = require('../../database/ds')

composer.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
    let results = [], indexation = 1, home = `https://github.com/bsba-team/`, thumb = fs.readFileSync('./assets/logo.png')
    let database = await ds("https://api.github.com/orgs/bsba-team/repos")
    let repos = await Object.values(database).map(function (obj) { return obj["name"]})
    let similarities = await fuzzy.filter(inlineQuery.query, repos).sort().slice(0, 20)
    let found = await similarities.map(function(obj){ return obj.string})
    for (let key of found) {
        let data = await ds(`https://api.github.com/repos/bsba-team/${key}`)
        results.push({
            type: "article",
            id: indexation,
            url: home,
            title: key,
            thumb_url: thumb,
            thumb_width: 300,
            thumb_height: 300,
            description: `${data["description"]}`,
            reply_markup: keyboard.inline(data),
            input_message_content: {
                message_text: message.inline(data),
                parse_mode: 'HTML'
            }
        })
        indexation++
    }
    return answerInlineQuery(results)
})

middleware(composer)
consoles.module(__filename)