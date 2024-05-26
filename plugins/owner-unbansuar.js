let handler = async (m, { conn, text}) => {
if (!text) throw '*[❗] لاتنسى المنشن يحب*'
let who
if (m.isGroup) who = m.mentionedJid[0]
else who = m.chat
if (!who) throw '*[❗] لاتنسى المنشن يحب*'
let users = global.db.data.users
users[who].banned = false
conn.reply(m.chat, `*[❗]تم إلغاء حظر المستخدم*\n*—◉ يقدر يستخدم البوت هاذا الوقت*`, m)
}
handler.help = ['unbanuser']
handler.tags = ['owner']
handler.command = /^رفع-البان$/i
handler.rowner = true
export default handler
