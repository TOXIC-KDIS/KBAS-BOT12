let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*📩┇الـرسـالـه :* ${pesan}`
let teks = `*『👑┇مـنـشـن جـمـاعـي』* \n\n ${oi}\n\n*👑┇مـلـوكـنـا :⇣*\n`
for (let mem of participants) {
teks += `*👑╎↫* @${mem.id.split('@')[0]}\n`}
teks += `*『👑┇𝙻𝙴𝚅𝙸┇🤖┇𝙱𝙾𝚃┇👑』*\n\n*▌│█║▌║▌║║▌║▌║▌║█*`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(منشن|invocar|invocacion|todos|invocación)$/i
handler.group = true
handler.admin = true
export default handler
