const isReachable = require('is-reachable');
const colors = require('colors');

(async () => {
    if (await isReachable('github.com'))
        await console.log("GitHub is reachable!".green.bold);
    else
        await console.log("GitHub is not reachable!".red.bold)

    if (await isReachable('api.telegram.org'))
        await console.log("Telegram API is reachable!".green.bold);
    else
        await console.log("Telegram API is not reachable!".red.bold)
})();