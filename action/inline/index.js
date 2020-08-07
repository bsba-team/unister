const { composer, middleware } = require('../../core/bot')

const fuzzy = require('fuzzy');

const consoles = require('../../layouts/consoles')
const message = require('../../layouts/messages')
const keyboard = require('../../layouts/keyboards')
const ds = require('../../database/ds')

composer.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
    let results = [], indexation = 1, base = `https://github.com/bsba-team/`, thumb = `https://github.com/bsba-team/unister/raw/master/assets/repo.png`
    let repos = await Object.values(await ds("https://api.github.com/orgs/bsba-team/repos")).map(function (obj) { return obj["name"]})
    let similarities = await fuzzy.filter(inlineQuery.query, repos).sort().slice(0, 20)
    let found = await similarities.map(function(obj){ return obj.string})
    for (let key of found) {
        let data = await ds(`https://api.github.com/repos/bsba-team/${key}`)
        results.push({
            type: "article",
            id: indexation,
            url: base + key,
            title: key,
            description: `${data["description"]}`,
            reply_markup: keyboard.inline(data),
            input_message_content: {
                message_text: message.inline(data),
                parse_mode: 'HTML',
                disable_web_page_preview: true
            }
        })
        indexation++
    }
    return answerInlineQuery(results)
})

middleware(composer)
consoles.module(__filename)
