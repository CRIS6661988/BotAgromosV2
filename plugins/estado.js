let handler = async (m, { conn, command, usedPrefix }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
conn.send3Button(m.chat, `
*ใ๐ Hola estimado usuario ๐ๅฝก*

*ใ๐ Estado del bot ๐ๅฝก*
*=> Bot activo para tus servicios๐๐ฅ*
*=> Bot  para cualquier uso๐น๐*
`.trim(), 'AGROMOS SP - Bot', '๐ต MENร ๐ต', `${usedPrefix}menu`, '๐ด MENร SIMPLE ๐ด', `${usedPrefix}menusimple`, '๐ก MENร AUDIOS ๐ก', `${usedPrefix}menuaudios`, m, false, { contextInfo: { mentionedJid }})}
handler.command = /^(estado|status|estate|state|stado|stats)$/i
module.exports = handler
