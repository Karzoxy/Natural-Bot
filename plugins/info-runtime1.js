import fs from 'fs'
import fetch from 'node-fetch'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
       let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
    let flaa = `${pickRandom(fla)}` + muptime
  let rtt = await(await fetch(flaa)).buffer()
 conn.sendButtonDoc(m.chat, `π©ππ πΌπππππ`, muptime + '\n\n', 'MENU', '.menu', ftoko, { contextInfo: { forwardingScore: fsizedoc, externalAdReply: { body: 'Tes', containsAutoReply: true, mediaType: 1, mediaUrl: hwaifu.getRandom(),  renderLargerThumbnail: true, showAdAttribution: true, sourceId: 'Tes', sourceType: 'PDF', previewType: 'PDF', sourceUrl: sgc, thumbnail: rtt, thumbnailUrl: sgc, title: 'MΚ Uα΄ TΙͺα΄α΄'}}})
}
handler.help = ['runtime1']
handler.tags = ['info']
handler.command = ['runtime1', 'rt1']

export default handler


function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? π₯±"
  if (time >= 4) {
    res = "Pagi Lord π"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak βοΈ"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak π"
  }
  if (time >= 18) {
    res = "Malam Kak π"
  }
  return res
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}