import fetch import 'node-fetch'

let handler = async (m, { conn }) => {
let pp = hwaifu.getRandom()
conn.send2ButtonDoc(m.chat, 'Aktif !!', botdate, 'ðð¢ð¬ð­ððð§ð®', '.listmenu', 'ððð¬ðð¼ðð«ð', '.db', fkontak, {
			contextInfo: {
				forwardingScore: fsizedoc,
				externalAdReply: {
                    body: 'Â© ÎÆ§Æ¬Ð¯Îá-BÓ¨Æ¬',
    containsAutoReply: true,
    mediaType: 1,
    mediaUrl: hwaifu.getRandom(), 
    renderLargerThumbnail: true,
    showAdAttribution: true,
    sourceId: 'Â© ÎÆ§Æ¬Ð¯Îá-BÓ¨Æ¬',
    sourceType: 'PDF',
    previewType: 'PDF',
    sourceUrl: sgc,
    thumbnail: await(await fetch(pp)).buffer(),
    thumbnailUrl: sgc,
    title: bottime  
				}
			}
})
}
handler.command = ['tes']

export default handler