import axios from "axios"
import fetch from 'node-fetch'
let handler = async (m, {command, conn}) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw '*[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar`
await delay(5000)
if (command == 'nsfwloli') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwloli.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'nsfwfoot') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfoot.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'nsfwass') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/ass?APIKEY=${keysxteam}`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'nsfwbdsm') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/bdsm?APIKEY=${keysxteam}`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'nsfwcum') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwcum.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [[' 🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}   
  
if (command == 'nsfwero') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/ero?APIKEY=${keysxteam}`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'nsfwfemdom') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwfemdom.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)} 
  
if (command == 'nsfwglass') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/nsfwglass.json`)).data  
let haha = await res[Math.floor(res.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha, [[' 🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'hentai') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/hentai?APIKEY=${keysxteam}`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'nsfworgy') {
let haha = await conn.getFile(`https://api.xteam.xyz/randomimage/orgy?APIKEY=${keysxteam}`)
conn.sendButton(m.chat, `_${command}_`.trim(), author, haha.data, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'tetas') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/boobs?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, res, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'booty') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/ass?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, res, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'ecchi') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/ecchi.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'furro') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/furro.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)} 
  
if (command == 'trapito') {
let res = await fetch(`https://api.waifu.pics/nsfw/trap`)
let json = await res.json()
let url = json.url
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)} 
  
if (command == 'imagenlesbians') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/lesbian?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, res, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}  
  
if (command == 'panties') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'pene') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pene.json`)).data   
let res = await conn.getFile(`https://api-fgmods.ddns.net/api/nsfw/penis?apikey=fg-dylux`).data
if (res == '' || !res || res == null) res = await resError[Math.floor(resError.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, res, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'porno') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'randomxxx') {
let rawjsonn = ['https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/tetas.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/booty.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/imagenlesbians.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/panties.json', 'https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/porno.json'] 
let rawjson = await rawjsonn[Math.floor(rawjsonn.length * Math.random())]  
let res = (await axios.get(rawjson)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'pechos') {
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/pechos.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'yaoi') {
let res = await fetch(`https://nekobot.xyz/api/image?type=yaoi`)
let json = await res.json()
let url = json.message
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'yaoi2') {
let res = await fetch(`https://purrbot.site/api/img/nsfw/yaoi/gif`)
let json = await res.json()
let url = json.link
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'yuri') { 
let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]  
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
  
if (command == 'yuri2') {
let resError = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/yuri.json`)).data   
let res = await fetch(`https://purrbot.site/api/img/nsfw/yuri/gif`)
let json = await res.json()
let url = json.link
if (url == '' || !url || url == null) url = await resError[Math.floor(resError.length * Math.random())]
conn.sendButton(m.chat, `_${command}_`.trim(), author, url, [['🥵 𝑺𝒊𝒈𝒖𝒊𝒆𝒏𝒕𝒆🥵', `/${command}`]], m)}
}  
handler.help = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.command = ['nsfwloli', 'nsfwfoot', 'nsfwass', 'nsfwbdsm', 'nsfwcum', 'nsfwero', 'nsfwfemdom', 'nsfwfoot', 'nsfwglss', 'nsfworgy', 'yuri', 'yuri2', 'yaoi', 'yaoi2', 'panties', 'tetas', 'booty', 'ecchi', 'furro', 'hentai', 'trapito', 'imagenlesbians', 'pene', 'porno', 'randomxxx', 'pechos']
handler.tags = ['nsfw']
export default  handler
handler.register = true
handler.level = 6
handler.money = 200
const delay = time => new Promise(res => setTimeout(res, time))