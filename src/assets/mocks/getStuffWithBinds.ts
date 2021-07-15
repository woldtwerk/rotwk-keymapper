import { readFileSync, writeFileSync } from 'fs'

const data = readFileSync('./full.big').toString()
const keybinds = data.match(/CONTROLBAR:.*\n(\/\/.*\n)*".*&.*"\nEND\n/gi) || []
writeFileSync('stuffWithBinds.txt', keybinds.join('\n'))
