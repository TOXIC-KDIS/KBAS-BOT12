let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `*[❗] يجب ان تعمل ريبلاي علي الشخص الذي تريد ان تمنعه من استعمال البوت*\n\n*—◉ مثال:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(BANtext, m.chat, { mentions: conn.parseMention(BANtext)})
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*[❗معلومات❗] لقد تم حظره بالفعل*\n*—◉ هاذا اليوزر لن يستطيع استعمال البوت حتي يتم رفع الحظر*')    }
handler.command = /^بان$/i
handler.rowner = true
export default handler