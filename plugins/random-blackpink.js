import fetch from 'node-fetch'
let handler = async(m, { conn, args, usedPrefix, command }) => {
fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/blackpink.txt').then(res => res.text()).then(body => {
let randomkpop = body.split('\n')
let randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]
conn.sendButton(m.chat, `_${command}_`, wm, randomkpopx, [['𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆 🆕', `/${command}`]], m)
})}
handler.help = ['blackpink']
handler.tags = ['internet']
handler.command = /^(blackpink)$/i
handler.register = true
export default handler
