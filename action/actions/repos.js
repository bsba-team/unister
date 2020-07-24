const { composer, middleware } = require('../../core/bot')
const { Markup } = require('telegraf')

const consoles = require('../../layouts/consoles')
const ds = require('../../database/ds')

composer.action(`repos`, async ctx => {
    const fetch = await ds("https://api.github.com/orgs/bsba-team/repos")
    const keyboard = Object.values(fetch).map((obj) => [Markup.callbackButton(`${obj["name"]}`, `repo_${obj["name"]}`)])
    await ctx.editMessageMedia(
        {
            caption: `<b>Choose the project you would like to interact with:</b>`,
            type: "photo",
            media: {source: `./assets/repo.png`}
            }, {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard(keyboard)
    })
})

composer.action(/repo_(.*)/ig, async ctx => {
    const match = ctx.match[1]
    const fetch = await ds(`https://api.github.com/repos/bsba-team/${match}`)
    const repo = {
            "name": fetch["full_name"],
            "about": fetch["description"],
            "url": fetch["html_url"],
            "language": fetch["language"],
            "stars": fetch["stargazers_count"],
            "followers": fetch["watchers_count"],
            "created_at": fetch["created_at"],
            "subscribers": fetch["subscribers_count"],
            "forks": fetch["forks_count"],
            "issues": fetch["open_issues_count"],
            "license": fetch["license"]["spdx_id"]
    }
    const text =
        `<b><a href="${repo.url}">GitHub Project Review</a></b>` + `\n` +
        `\n` +
        `<b>Description:</b> ${repo.about}` + `\n` +
        `<b>Forks:</b> ${repo.forks}` + `\n` +
        `<b>Issues:</b> ${repo.issues}` + `\n` +
        `<b>License:</b> ${repo.license}` + `\n` +
        `<b>Programming Language:</b> ${repo.language}` + `\n` +
        `<b>Created Date:</b> ${repo.created_at}` + `\n` +
        `\n` +
        `<code>👁: ${repo.followers}</code> <b>|</b> <code>🌟: ${repo.stars}</code> <b>|</b> <code>👥: ${repo.subscribers}</code>`
    await ctx.editMessageMedia({caption: text, type: "photo", media: {source: `./assets/repo.png`}}, {
        parse_mode: "HTML",
        reply_markup: Markup.inlineKeyboard([
            [
                Markup.urlButton(`Website`, `${repo.url}`)
            ],
            [
                Markup.callbackButton(`🔙 Back`, `repos`)
            ]
        ])
    })
})

middleware(composer)
consoles.module(__filename)