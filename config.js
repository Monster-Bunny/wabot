import { watchFile, unwatchFile } from 'fs' 
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone' 
import fs from 'fs' 

//OwnerShip
global.owner = [
  ['94763407452','Monster-Bunny 🤖', true],
  ['94703352934', 'NoteNest❤️', true]
]
global.mods = []
global.prems = []

global.author = 'Monster-Bunny'
global.botname = 'NoteNest'
 
 
 //Api's
global.APIs = {
}
global.APIKeys = { 
}

//Apikeys
global.shizokeys = 'shizo'

//Sticker Watermarks
global.stkpack = 'NoteNest'
global.stkowner = '© Monster-Bunny'

//Watermark
global.maker = 'Made with ❤️ by Monster-Bunny'

//global emojis
global.wait = '*⌛ Loading..._*\n*▰▰▰▱▱▱▱▱*'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//management
global.bug = '*!! Sorry 💢 !!*\nSomething went wrong 🌋'
global.stop = '*!! 🎭 Unfortunately 💔 !!*\nBot system is not Responding 🙃'

//TimeLines
global.botdate = `*⫹⫺ Date:*  ${moment.tz('Europe/Berlin').format('DD/MM/YY')}`
global.bottime = `*⫹⫺ Time:* ${moment.tz('Europe/Berlin').format('HH:mm:ss')}`

//Hosting Management
global.serverHost = 1
global.getQrWeb = 0
global.renderHost = 0
global.replitHost = 0

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
