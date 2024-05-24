const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] أدخل التقرير*\n\n*مثال:*\n*${usedPrefix + command} الأمر ${usedPrefix} عين مش شغال*`;
  if (text.length < 10) throw `*[❗𝐈𝐍𝐅𝐎❗] يجب أن يتكون التقرير من 10 أحرف على الأقل!*`;
  if (text.length > 1000) throw `*[❗𝐈𝐍𝐅𝐎❗] يجب أن يكون التقرير بحد أقصى 1000 حرف!*`;
  const teks = `*❒═════[𝐑𝐄𝐏𝐎𝐑𝐓𝐄]═════❒*\n*┬*\n*├❧ 𝙽𝚄𝙼𝙴𝚁𝙾:* wa.me/${m.sender.split`@`[0]}\n*┴*\n*┬*\n*├❧ 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${text}\n*┴*`;
  conn.reply('967773289295@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  conn.reply('967773289295@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
  m.reply(`*[ ✔️ ] تم إرسال التقرير بنجاح إلى منشئ الروبوت، وسيتم الرد على بلاغك في أقرب وقت ممكن، وإذا كان كاذبًا أو مزحة، فسيتم تجاهله فقط *`);
};
handler.help = ['reporte', 'request'].map((v) => v + ' <teks>');
handler.tags = ['info'];
handler.command = /^(report|ابلاغ|reporte|bugs|bug|report-owner|reportes)$/i;
export default handler;
