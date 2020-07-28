const { Markup } = require('telegraf')
const { composer, middleware } = require('../../core/bot')
const fuzzy = require('fuzzy');
const fs = require('fs')
const consoles = require('../../layouts/consoles')
const ds = require('../../database/ds')

composer.on('inline_query', async ({ inlineQuery, answerInlineQuery }) => {
    let results = []
    let indexation = 1
    let database = await ds("https://api.github.com/orgs/bsba-team/repos")
    let repos = await Object.values(database).map(function (obj) { return obj["name"]})
    let similarities = await fuzzy.filter(inlineQuery.query, repos).sort().slice(0, 20)
    let found = similarities.map(function(obj){ return obj.string})
    for (let key of found) {
        let data = await ds(`https://api.github.com/repos/bsba-team/${key}`)
        results.push({
            type: "article",
            id: indexation,
            url: `https://github.com/bsba-team/`,
            title: key,
            thumb_url: `https://github.com/bsba-team/unister/raw/master/assets/repo.png`,
            thumb_width: 300,
            thumb_height: 300,
            description: `${data["description"]}`,
            reply_markup: Markup.inlineKeyboard([
                Markup.urlButton(`GitHub`, `${data["html_url"]}`),
                Markup.urlButton(`Repositories`, `https://github.com/bsba-team/`),
            ], { columns: 2 }),
            input_message_content: {
                media: {type: "photo", source: "https://github.com/bsba-team/unister/raw/master/assets/repo.png"},
                message_text:
                    `<b><a href="${data["html_url"]}">GitHub Project Review</a></b>` + `\n` +
                    `\n` +
                    `<b>Description:</b> ${data["description"]}` + `\n` +
                    `<b>Forks:</b> ${data["forks_count"]}` + `\n` +
                    `<b>Issues:</b> ${data["open_issues_count"]}` + `\n` +
                    `<b>License:</b> ${data["license"]["spdx_id"]}` + `\n` +
                    `<b>Programming Language:</b> ${data["language"]}` + `\n` +
                    `<b>Created Date:</b> ${data["created_at"]}` + `\n` +
                    `\n` +
                    `<code>👁: ${data["watchers_count"]}</code> <b>|</b> <code>🌟: ${data["stargazers_count"]}</code> <b>|</b> <code>👥: ${data["subscribers_count"]}</code>`,
                parse_mode: 'HTML'
            }
        })
        indexation++
    }
    return answerInlineQuery(results)
})

middleware(composer)
consoles.module(__filename)