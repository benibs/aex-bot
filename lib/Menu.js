const Menu = (prefix, name) => new Promise((resolve, reject) => {
	resolve(`Halo ${name}!

Join Us: https://chat.whatsapp.com/F4iO1UxDaUOGE7itha7alG

Ini fiture menu dari  *BOT_STYLE*:

📂 Main Menu 
 ├ *${prefix}menu*
 ├ *${prefix}about*
 ├ *${prefix}donasi*
 └ *${prefix}krisar [isi kritik dan saran]*

📂 New Menu
 ├ *${prefix}lirik [judul lagu]*
 ├ *${prefix}stiker*
 └ *${prefix}nulis [tulisan yang ingin kamu tulis]*

📂 Menu Group
 ├ *${prefix}promote [@tagmember]* admin only
 ├ *${prefix}demote [@tagmember]* admin only
 ├ *${prefix}add [number]* admin only
 ├ *${prefix}kick [@tagmember]* admin only
 ├ *${prefix}kickall* admin only
 ├ *${prefix}getall*
 ├ *${prefix}glink*
 ├ *${prefix}del*
 └ *${prefix}kickme*

📂 Menu Primbon
 ├ *${prefix}cekjodoh [nama1 & nama2/tag 2 orang]*
 └ *${prefix}artinama [nama seseorang]*

📂 Menu Downloader
 ├ *${prefix}pinterest [link pinterest]*
 ├ *${prefix}ytmp4 [link youtube]*
 ├ *${prefix}ytmp3 [link youtube]*
 ├ *~${prefix}igdl [link instagram]~*
 └ *${prefix}fbdl [link fb]*

📂 Menu Education
 ├ *${prefix}wiki [query yang ingin kamu cari]*
 ├ *${prefix}brainly [query yang ingin kamu cari]*
 └ *${prefix}translate [kode bahasa] [tagPesan/masukanPesanManual]*

📂 Other Menu
 ├ *${prefix}quotes*
 ├ *${prefix}quotesmaker [type|author] [quotes kamu]*
 ├ *${prefix}toxic*
 ├ *${prefix}randomanime*
 ├ *~${prefix}randomhentai~*
 ├ *${prefix}js [kota]*
 ├ *${prefix}cuaca [kota]*
 ├ *${prefix}stalk [Username Instagram]*
 ├ *${prefix}tts [kode bahasa] [tagPesan/masukanPesanManual]*
 └ *${prefix}qr [tagPesan/masukanPesanManual]*

note: semua command tidak menggunakan tanda *[*   dan   *]*

Semoga harimu menyenangkan.

Channel YouTube: https://www.youtube.com/channel/UCrNO1yUYW0i3xsJp4NGBh4Q

regards: Benniismael
		`)
})

module.exports = Menu
