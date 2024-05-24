import fetch from 'node-fetch';
const handler = async (m, {
  conn,
  command,
}) => {
  const res = await fetch(`https://api.lolhuman.xyz/api/random/ppcouple?apikey=${lolkeysapi}`);
  if (res.status != 200) throw await res.text();
  const json = await res.json();
  if (!json.status) throw json;
  conn.sendFile(m.chat, json.result.female, 'error.jpg', `بنت كيوت✨`, m);
  conn.sendFile(m.chat, json.result.male, 'error.jpg', `ولد كيوت✨`, m);
  // conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙰 𝙲𝚄𝚃𝙴', wm, json.result.female, [['🔄 التالي 🔄', `/${command}`]], m)
  // conn.sendButton(m.chat, '𝙲𝙷𝙸𝙲𝙾 𝙲𝚄𝚃𝙴', wm, json.result.male, [['🔄 التالي 🔄', `/${command}`]], m)
};
handler.help = ['ppcouple'];
handler.tags = ['internet'];
handler.command = /^(تطقيم|طقم)$/i;
export default handler;