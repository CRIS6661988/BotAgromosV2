let handler = async m => m.reply(`
*βINSTALACIΓN DEL BOT AGROMOS SP*

*VIDEO TUTORIAL YouTube: https://youtu.be/pZQqL51epBY* 

π₯ ππππππππππ ππππ ππ πππππππππππ π₯
β€ Termux  
β€ 1 GB de memoria en el telΓ©fono
β€ Aconsejable un WhatsApp secundario
β€ Aconsejable un numero secundario
β€ 2 telΓ©fonos o un 1 telΓ©fono y una PC (es temporal - solo para escanear un cΓ³digo QR)

π₯ πππππππππππ πππ πππ π₯
β€ https://github.com/Agromos0/AgromosBotV2


π₯ ππππ ππ πππππππππ π₯
β€ Termux: https://f-droid.org/en/packages/com.termux/
β€ WhatsApp recomendado: https://download853.mediafire.com/xawpdplr7wvg/u133oxjqtiry52t/%E2%9E%A2+SOLITARIO+BUSINESS+%E2%9E%A2_2.21.19.21.apk
   
π₯ ππππππππ ππ πππππππππππ πππ ππππππ π₯
β€ apt update && apt upgrade -y -y
β€ apt install git -y
β€ apt install nodejs -y
β€ apt install ffmpeg -y
β€ apt install imagemagick -y
β€ https://github.com/Agromos0/AgromosBotV2
β€ cd AgromosBotV2
β€ npm install
β€ npm install -g npm@8.4.0
β€ npm update
β€ npm start
Β° Escaneas el cΓ³digo QR tienes 30 segundos para hacerlo

π₯ INFO EXTRA π₯
β€ Se sugiere pedir ayuda por cualquier inconveniente 
β€ Para habilitar el /aΓ±adir y el /sacar usa #enable autoread
- Puede ocasionar que el numero se vaya a soporte 
β€ PayPal para apoyo voluntario: toxicoyt084@gmail.com 
β€ Numero de ayuda durante la instalacion: wa.me/18178659441 (No Bot, solo ayuda durante la instalaciΓ³n)

*βπβ‘πβ‘πβ‘βΊ*
`.trim()) 
handler.help = ['instalarbot']
handler.tags = ['info']
handler.command = /^instalarbot$/i

module.exports = handler
