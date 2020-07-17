const colors = require('colors');
const project = "D:\\Projects\\unister\\action\\"

exports.errors = (error) => {
    console.log(
        "Error occurred while running the app: ".red.bold + error.red
    )
}

exports.launch = (environment) => {
    console.log(
        "Bot has been started in ".green + environment.yellow + " environment".green
    )
}

exports.wrongEnv = () => {
    console.log("Bot can't be started due to wrong environment!".red.bold)
}

exports.module = (filename) => {
    console.log("The module ".yellow.bold + filename.replace(project, '').yellow + " has been loaded...".yellow.bold)
}