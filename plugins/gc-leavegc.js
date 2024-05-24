let handler = async (m, { conn, text, command }) => {
let id = text ? text : m.chat  
await conn.reply(id, '*لقد قضيت معكم وقتاً رائعاً الى اللقاء تحياتي  𝙕𝙊𝙍𝙊 بوت💞😹*') 
await conn.groupLeave(id)}
handler.command = /^(اخرج|اطلع|غادر|خروج)$/i
handler.group = true
handler.rowner = true
export default handler