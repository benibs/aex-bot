const About = (name) => new Promise((resolve, reject) => {
    let list = ` Halo ${name} 👋
- about *BOT_STYLE whatsapp*

Bot ini merupakan program open-source yang dibuat menggunakan Javascript, kamu dapat Mengundang Bot ini tersebut dengan mendonasikan seikhlasnya saja.

Terimakasih, Assalamualaikum.

author: Benniismael
    `
    resolve(list)
})

module.exports = About
