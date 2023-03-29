
const TelegramApi = require('node-telegram-bot-api');
// const Telegraf = require('telegraf');

const token = '6254290808:AAFSrEUhshPj6Ud8vBj2GR1sa0uADNDDsX8';

const bot = new TelegramApi(token, {polling: true});

// function sendReminder() {
//     bot.telegram.sendMessage(chatId, 'Напоминание: каждый час прошел.');
// }
  
// setInterval(sendReminder, 20000)

let chats = {
    startId: ''
};
  
bot.setMyCommands([
    {command: '/start', description:'Приветствие с моей любимой <3'}
])

const doit = () => {

    bot.on('message', async msg=> {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/k_owka/gif/5.gif');
            await bot.sendMessage(chatId, "Привет моя Молличка <3");
            chats.startId = chatId;
        } else {
            await bot.sendMessage(chatId, `Ты написала мне ${text}`);
            console.log(msg);
        }
    });
};

doit ();

function sendReminder() {
    bot.sendMessage(chats.startId, "Я люблю тебя Молличка")
}

setInterval(sendReminder, 3120000);
