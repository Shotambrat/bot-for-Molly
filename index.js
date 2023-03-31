
const TelegramApi = require('node-telegram-bot-api');

const token = '6254290808:AAFSrEUhshPj6Ud8vBj2GR1sa0uADNDDsX8';

const bot = new TelegramApi(token, {polling: true});

bot.setMyCommands([
    {command: '/start', description:'Приветствие с моей любимой <3'},
    {command: '/compliment', description: 'Комплименты, которых я не делаю тебе в переписках, ведь я же стеснительный у тебя))'}
])

const doit = () => {

    bot.on('message', async msg=> {
        const text = msg.text;
        const chatId = msg.chat.id;
        if (text === '/start') {
            await bot.sendSticker(chatId, 'https://tgram.ru/wiki/stickers/img/k_owka/gif/5.gif');
            await bot.sendMessage(chatId, "Привет моя Молличка <3");
            await reminderOfBot();
        } else if (text === '/compliment') {
            bot.sendMessage(chatId, )
        }
        
        else {
            await bot.sendMessage(chatId, `Ты написала мне ${text}, бот еще не дороботан чтобы понять это слово, обратись к @El_Guseia`);
        }
        console.log(msg);
        console.log(chatId)
    });
};

doit ();

function sendReminder() {
    bot.sendMessage(5256030505, "Я люблю тебя Молличка")
}

function reminderOfBot() {
    bot.sendMessage(5256030505, "Напоминаю! Все новости и новые функции будут объявляться создателем либо на этом же боте...")
}

setInterval(sendReminder, 3120000);

setInterval(reminderOfBot, 129600000);
