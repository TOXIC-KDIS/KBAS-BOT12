import fetch from 'node-fetch';

let handler = async (m, { text, conn, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `*هـذا هـو chatgpt اكـتب سـؤالـك وسـيرد عـليك*\nمـثال:\n*.زورو اريـد بعـض النـصائح لـعيش حيـاه سـعيده*\n\n*.زورو كـيف ابـدأ فـي مـجال الـبرمجه*`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    m.react(rwait)
    const { key } = await conn.sendMessage(m.chat, {
      image: { url: 'https://telegra.ph/file/7daad4098ab7cc85eaec8.jpg' },
      caption: 'ثانيه افكر....⚡'
    }, { quoted: m });
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);

    const model = 'llama';
    const senderNumber = m.sender.replace(/[^0-9]/g, '');
    const session = `GURU_BOT_${senderNumber}`;
    const guru2 = `https://aemt.me/bard?text=${prompt}`;

    let response = await fetch(guru2);
    let data = await response.json();
    let result = data.completion;
    let yourName = ''; // قم بتعيين اسمك هنا

    await conn.relayMessage(m.chat, {
      protocolMessage: {
        key,
        type: 14,
        editedMessage: {
          imageMessage: { caption: result + ' ' + yourName }
        }
      }
    }, {});
    m.react(done);

  } catch (error) {
    console.error('خطأ:', error);
    throw `*[❗] خطأ، يرجى إدخال نص صحيح*`;
  }
};
handler.help = ['chats'];
handler.tags = ['ذكاء صناعي'];
handler.command = ['زورو', 'زوز'];

export default handler;
