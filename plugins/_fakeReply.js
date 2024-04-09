
import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
	let pp = await this.profilePictureUrl(who, 'image').catch(_ => 'https://i.ibb.co/wsTPjTQ/donate.jpg')
	
	//reply link wa
   global.rpgc = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', mediaType: 'VIDEO', description: 'support group', title: 'SUBSCRIBE', body: 'support group', thumbnailUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VaHdbO6A2pLF6mdtIy24' }}} 
	
	//reply link Instagram 
    global.rpig = { contextInfo: { externalAdReply: { mediaUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', mediaType: 'VIDEO', description: 'FOLLOW DEVELOPER', title: 'INSTAGRAM', body: 'Keep bot alive', thumbnailUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', sourceUrl: 'https://www.youtube.com/@DEEPEAGLE' }}}
	
	//reply link yt
    global.rpyt = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', mediaType: 'VIDEO', description: 'Subscribe : ERROR MODS YT', title: 'YouTube', body: 'learn to create your own bots', thumbnailUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', sourceUrl: 'https://www.youtube.com/@DEEPEAGLE' }}}

//reply link WhatsApp Channel
    global.rpwp = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', mediaType: 'VIDEO', description: 'Subscribe : ERROR MODS YT', title: 'YouTube', body: 'To Get Updates About NoteNest', thumbnailUrl: 'https://i.ibb.co/wsTPjTQ/donate.jpg', sourceUrl: 'https://whatsapp.com/channel/0029VaHdbO6A2pLF6mdtIy24' }}}
    
} 
export default handler
