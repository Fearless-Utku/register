const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["779999144566849547", "780159285312749619"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("779999144566849547"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
const kadin = message.guild.roles.cache.find(r => r.id === "780001230814445569")
const xx = message.guild.roles.cache.find(r => r.id === "")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "779999655428882432")
const reglog = message.guild.channels.cache.find(c => c.id === "780161689660293150")
const genelchat = message.guild.channels.cache.find(g => g.id === "779998558987747342")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
const x = message.guild.member(member)

let tag = "⚝"
let isim = args[1]
let yas = Number(args[2])
if(!isim) return message.channel.send(`Bir İsim Belirt`)
if(!yas) return message.channel.send(`Bir Yaş Belirt`)

let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.kadin`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('✅')
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kadin)
x.roles.add(xx)
x.roles.remove(kayıtsız)
//
x.setNickname(`${tag} ${isim} | ${yas}`)
x.roles.add(kadin)
x.roles.add(xx)
x.roles.remove(kayıtsız)


genelchat.send(`<@${member.id}>, Aramıza Hoş Geldin ! Umarım Keyifli Vakitler Geçirirsin.`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kadın", "k", "woman", "girl", "kız"],
    permLevel: 0
};

exports.help = {
    name: "kadın"
}

