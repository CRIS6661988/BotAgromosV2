//7W7 PORFAVOR  DEJAME CREDITOS NO SEAS MALO XD
let fs = require('fs')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let path = require('path')
let util = require('util')
let handler = async (m, { conn, usedPrefix }) => {
let pp = './Menu2.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let username = conn.getName(who)
let vn = './media/atajos-bot.mp3'
let menu =`
â­âã ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ðâ¡ï¸ð ãââ®
 â    â¡ _*AGROMOS BOT SP_* â¡
 â ð*Â¡ðola! ${username}* ð
 â
  â âï¸ *_MENÃ ATAJOS_* âï¸
 âââââââââââââââ
â *<GESTION DE ATAJOS ALOS COMANDOS/>* 
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â _menu de comandos_ *grupos*
â£ â±â¨ï¸ _${usedPrefix}menugrupos_
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â _MENU DE COMANDOS_ *CREADOR*
â£ â±â¨ï¸ _${usedPrefix}menucreador
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â_MENU DE_ *INFORMACIÃN*
â£ â±â¨ï¸ _${usedPrefix}minformacion
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MENU DE DESCARGAS*
â£ â±â¨ï¸ _${usedPrefix}menudescargas
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â _MENU DE JUEGOS_
â£ â±â¨ï¸ _${usedPrefix}menujuegos
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â _MENU DE COSAS_ *RANDOM*
â£ â±â¨ï¸ _${usedPrefix}menurandom
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MENU DE* _CREACIONES_
â£ â±â¨ï¸ _${usedPrefix}menucreaciones
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â *MENU  AUDIOS*
â£ â±â¨ï¸ _${usedPrefix}menu2
ââ¡â¡â¡â¡â¡â¡â¡â¡â¡
â*MENU NOPORð*
â£ â±â¨ï¸ _${usedPrefix}labiblia
âââââââââââââââ
âã ðâ¡ðâ¡ðâ¡ðâ¡ð ãâ`.trim()
let mentionedJid = [who]
conn.send3ButtonImg(m.chat, pp, menu, 'ð´ðºððððð ðð-ðµðð', 'ð¼ð´ð½ð CREADOR', `#menucreador`, 'ð¼ENU GRUPOS', `#menugrupos`, 'MENU DESCARGAS', `#menudescargas`, m, false, { contextInfo: { mentionedJid }})   
await await await await await await conn.sendFile(m.chat, vn, 'atajos-bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(menunuevo)$/i
handler.fail = null
module.exports = handler
