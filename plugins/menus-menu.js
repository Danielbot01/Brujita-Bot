import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es-ES';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: '2-digit', month: '2-digit', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `◉— BUGS BUNNY —◉

 🐰🥕  Hola, @monovan🪴

         ◉— TUS ESTADISTICAS —◉

 🐰🥕  Nivel: 0
 🐰🥕  Experiencia: 28
 🐰🥕  Rango: Guerrero V
 🐰🥕  Diamantes: 20
 🐰🥕  MonovanCoins: 15
 🐰🥕  Tokens: 2
 🐰🥕  Premium: ❌
 ‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎

          ◉— MENUS —◉
  
  🐰🥕  .menuaudios
  🐰🥕  .menuanimes
  🐰🥕  .labiblia (🔞)

 

         ◉— JUEGOS —◉

  🐰🥕  .mates <noob / easy / medium / hard / extreme /impossible /impossible2>
  🐰🥕  .fake <txt1> <@tag> <txt2>
  🐰🥕  .ppt <papel / tijera /piedra>
  🐰🥕  .prostituto <nombre / @tag>
  🐰🥕  .prostituta <nombre / @tag>
  🐰🥕  .gay2 <nombre / @tag>
  🐰🥕  .lesbiana <nombre / @tag>
  🐰🥕  .pajero <nombre / @tag>
  🐰🥕  .pajera <nombre / @tag>
  🐰🥕  .puto <nombre / @tag>
  🐰🥕  .puta <nombre / @tag>
  🐰🥕  .manco <nombre / @tag>
  🐰🥕  .manca <nombre / @tag>
  🐰🥕  .rata <nombre / @tag>
  🐰🥕  .love <nombre / @tag>
  🐰🥕  .doxear <nombre / @tag>
  🐰🥕  .pregunta <txt>
  🐰🥕  .suitpvp <@tag>
  🐰🥕  .slot <apuesta>
  🐰🥕  .ttt <nombre sala>
  🐰🥕  .delttt
  🐰🥕  .acertijo
  🐰🥕  .simi <txt>
  🐰🥕  .top <txt>
  🐰🥕  .topgays
  🐰🥕  .topotakus
  🐰🥕  .formarpareja
  🐰🥕  .verdad
  🐰🥕  .reto
  🐰🥕  .cancion
  🐰🥕  .pista
  🐰🥕  .akinator
  🐰🥕  _.ruleta
  🐰🥕  _.suerte
  🐰🥕  .wordfind


         ◉— ACT./DESACT. FUNC. —◉

  🐰🥕  .enable welcome
  🐰🥕  .disable welcome
  🐰🥕  .enable modohorny
  🐰🥕  .disable modohorny
  🐰🥕  .enable antilink
  🐰🥕  .disable antilink
  🐰🥕  .enable antilink2
  🐰🥕  .disable antilink2
  🐰🥕  .enable detect
  🐰🥕  .disable detect
  🐰🥕  .enable audios
  🐰🥕  .disable audios
  🐰🥕  .enable autosticker
  🐰🥕  .disable autosticker
  🐰🥕  .enable antiviewonce
  🐰🥕  .disable antiviewonce
  🐰🥕  .enable antitoxic
  🐰🥕  .disable antitoxic
  🐰🥕  .enable antitraba
  🐰🥕  .disable antitraba
  🐰🥕  .enable antiarabes
  🐰🥕  .disable antiarabes
  🐰🥕  .enable modoadmin
  🐰🥕  .disable modoadmin
  🐰🥕  .enable antidelete
  🐰🥕  .disable antidelete


         ◉— DESCARGAS —◉

 🐰🥕  .play <txt>
 🐰🥕  .play2 <txt>
 🐰🥕  .play.1 <txt>
 🐰🥕  .play.2 <txt>
 🐰🥕  .playdoc <txt>
 🐰🥕  .playdoc2 <txt>
 🐰🥕  .playlist <txt>
 🐰🥕  .ytshort <url>
 🐰🥕  .ytmp3 <url>
 🐰🥕  .ytmp3doc <url>
 🐰🥕  .ytmp4 <url>
 🐰🥕  .ytmp4doc <url>
 🐰🥕  .videodoc <url>
 🐰🥕  .spotify <txt>
 🐰🥕  .facebook <url>
 🐰🥕  .instagram <url>
 🐰🥕  .igstory <usr>
 🐰🥕  .tiktok <url>
 🐰🥕  .tiktokimg <url>
 🐰🥕  .pptiktok <usr>
 🐰🥕  .mediafire <url> 
 🐰🥕  .pinterest <txt>
 🐰🥕  .gitclone <url>
 🐰🥕  .gdrive <url>
 🐰🥕  .twitter <url>
 🐰🥕  .ringtone <txt>
 🐰🥕  .soundcloud <txt>
 🐰🥕  .stickerpack <url>
 🐰🥕  .wallpaper <txt> 
 🐰🥕  .dapk2 <url>
 🐰🥕  .xnxxdl <url> (🔞)
 🐰🥕  .xvideosdl <url> (🔞)


          ◉— BUSCADORES —◉ 


  🐰🥕 .githubsearch <txt>
  🐰🥕 .pelisplus <txt>
  🐰🥕 .modapk <txt>
  🐰🥕 .stickersearch <txt>
  🐰🥕 .stickersearch2 <txt>
  🐰🥕 .xnxxsearch <txt>
  🐰🥕 .animeinfo <txt>
  🐰🥕 .google <txt>
  🐰🥕 .letra <txt>
  🐰🥕 .wikipedia <txt>
  🐰🥕 .ytsearch <txt>
  🐰🥕 .playstore <txt>


          ◉— GRUPOS —◉

  🐰🥕 .add num>
  🐰🥕 .kick <@tag>
  🐰🥕 .kick2 <@tag>
  🐰🥕 .listanum <txt>
  🐰🥕 .kicknum <txt>
  🐰🥕 .grupo <abrir/cerrar>
  🐰🥕 .grouptime <opcion> <tiempo>
  🐰🥕 .promote <@tag>
  🐰🥕 .demote <@tag>
  🐰🥕 .infogroup
  🐰🥕 .resetlink
  🐰🥕 .link
  🐰🥕 .setname <txt>
  🐰🥕 .setdesc <txt>
  🐰🥕 .invocar <txt>
  🐰🥕 .setwelcome <txt>
  🐰🥕 .setbye <txt>
  🐰🥕 .hidetag <txt>
  🐰🥕 .hidetag <audio>
  🐰🥕 .hidetag <video>
  🐰🥕 .hidetag <img>
  🐰🥕 .warn <@tag>
  🐰🥕 .unwarn <@tag>
  🐰🥕 .listwarn
  🐰🥕 .fantasmas
  🐰🥕 .destraba
  🐰🥕 .setpp <img>
  🐰🥕 admins <txt> (sin prefijo)


         ◉— CONVERTIDORES —◉

  🐰🥕 .toanime <img>
  🐰🥕 .togifaud <video>
  🐰🥕 .toimg <sticker>
  🐰🥕 .tomp3 <video>
  🐰🥕 .tomp3 <nota de voz>
  🐰🥕 .toptt <video / audio>
  🐰🥕 .tovideo <sticker>
  🐰🥕 .tourl <video / img / audio>
  🐰🥕 .tts <idioma> <txt>
  🐰🥕 .tts <efecto> <txt>


        ◉— EFECTOS Y LOGOS —◉

  🐰🥕 .logos <efecto> <txt>
  🐰🥕 .logochristmas <txt>
  🐰🥕 .logocorazon <txt>
  🐰🥕 .ytcomment <txt>
  🐰🥕 .hornycard <@tag>
  🐰🥕 .simpcard <@tag>
  🐰🥕 .lolice <@tag>
  🐰🥕 .itssostupid
  🐰🥕 .pixelar
  🐰🥕 .blur


        ◉— FRASES —◉

  🐰🥕 .piropo
  🐰🥕 .consejo
  🐰🥕 .fraseromantica


         ◉— ALEATORIO —◉

  🐰🥕 .kpop <blackpink/exo/bts>
  🐰🥕 .cristianoronaldo
  🐰🥕 .messi
  🐰🥕 .cat
  🐰🥕 .dog
  🐰🥕 .meme
  🐰🥕 .itzy
  🐰🥕 .blackpink
  🐰🥕 .navidad
  🐰🥕 .wpmontaña
  🐰🥕 .pubg
  🐰🥕 .wpgaming
  🐰🥕 .wpaesthetic
  🐰🥕 .wpaesthetic2
  🐰🥕 .wprandom
  🐰🥕 .wallhp
  🐰🥕 .wpvehiculo
  🐰🥕 .wpmoto
  🐰🥕 .coffee
  🐰🥕 .pentol
  🐰🥕 .caricatura
  🐰🥕 .ciberespacio
  🐰🥕 .technology
  🐰🥕 .doraemon
  🐰🥕 .hacker
  🐰🥕 .planeta
  🐰🥕 .randomprofile


       ◉— EFECTOS DE AUDIO —◉


  🐰🥕 .bass
  🐰🥕 .blown
  🐰🥕 .deep
  🐰🥕 .earrape
  🐰🥕 .fast
  🐰🥕 .fat
  🐰🥕 .nightcore
  🐰🥕 .reverse
  🐰🥕 .robot
  🐰🥕 .slow
  🐰🥕 .smooth
  🐰🥕 .tupai


         ◉— CHAT ANONIMA —◉

  🐰🥕 .start
  🐰🥕 .next
  🐰🥕 .leave


         ◉— HERRAMIENTAS —◉
 
  🐰🥕 .inspect <wagc_url>
  🐰🥕 .chatgpt <txt>
  🐰🥕 _.delchatgpt
  🐰🥕 .gptvoz <txt>
  🐰🥕 .dall-e <txt>
  🐰🥕 .tamaño <cant> <img / video>
  🐰🥕 .readviewonce <img / video>
  🐰🥕 .clima <país> <ciudad>
  🐰🥕 .encuesta <txt1|txt2>
  🐰🥕 .afk <motivo>
  🐰🥕 .ocr <responde a img>
  🐰🥕 .hd <responde a img>
  🐰🥕 .acortar <url>
  🐰🥕 .calc <operacion>
  🐰🥕 .del <msj>
  🐰🥕 .whatmusic <audio>
  🐰🥕 .readqr <img>
  🐰🥕 .qrcode <txt>
  🐰🥕 .readmore <txt1|txt2>
  🐰🥕 .styletext <txt>
  🐰🥕 .traducir <txt>
  🐰🥕 .nowa num>
  🐰🥕 .covid <pais>
  🐰🥕 .horario
  🐰🥕 .dropmail
  🐰🥕 .igstalk <usr>
  🐰🥕 .tiktokstalk <usr>
  🐰🥕 .img <txt>


          ◉— STICKERS —◉

 
  🐰🥕 .sticker <responder a img o video>
  🐰🥕 .sticker <url>
  🐰🥕 .sticker2 <responder a img o video>
  🐰🥕 .sticker2 <url>
  🐰🥕 .s <responder a img o video>
  🐰🥕 .s <url>
  🐰🥕 .emojimix <emoji 1>&<emoji 2>
  🐰🥕 .scircle <img>
  🐰🥕 .sremovebg <img>
  🐰🥕 .semoji <tipo> <emoji>
  🐰🥕 .qc <txt>
  🐰🥕 .attp <txt>
  🐰🥕 .attp2 <txt>
  🐰🥕 .attp3 <txt>
  🐰🥕 .ttp <txt>
  🐰🥕 .ttp2 <txt>
  🐰🥕 .ttp3 <txt>
  🐰🥕 .ttp4 <txt>
  🐰🥕 .ttp5 <txt>
  🐰🥕 .pat <@tag>
  🐰🥕 .slap <@tag>
  🐰🥕 .kiss <@tag>
  🐰🥕 .dado
  🐰🥕 .wm <packname> <autor>
  🐰🥕 .stickermarker <efecto> <img>
  🐰🥕 .stickerfilter <efecto> <img>`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[ ℹ️ ] Este menu tiene un error interno, por lo cual no fue posible enviarlo.*', m);
  }
};
handler.command = /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
