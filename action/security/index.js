const { middleware, composer } = require('../../core/bot')
const session = require('telegraf/session'),
    Stage = require('telegraf/stage'),
    Scene = require('telegraf/scenes/base'),
    { leave } = Stage