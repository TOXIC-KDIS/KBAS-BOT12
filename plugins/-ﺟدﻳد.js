import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    
    if (!text) {
      return conn.reply(m.chat, `*مرحبا كيف يمكنني مساعدتك اليوم*`, m);
    }
      
    await m.reply(wait)

    const response = await fetch(`https://aemt.me/gemini?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      return conn.reply(m.chat, 'اسف هل تقدر على صياغة السؤال مجددا', m);
    }

    const data = await response.json();
    const result = data.result;

    if (!result) {
      return conn.reply(m.chat, 'اسف حدث خطأ في تنفيد طلبك حاول لاحقا .', m);
    }

    conn.reply(m.chat, result, m);
  } catch (error) {
    
    throw eror
  }
};

handler.help = ['gemini'];
handler.tags = ['ai'];
handler.limit = false;
handler.register = false;

handler.command = /^(2بوت)$/i;

export default handler;

// Ni plugens
