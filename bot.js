const { Telegraf } = require('telegraf'); // Импортируем библиотеку Telegraf

// Вставьте сюда токен вашего бота из BotFather
const bot = new Telegraf('7987142856:AAGbqNgY_tfvhcwLS9s1Pxe_04iGUbOiXIg');

// Команда /start
bot.start((ctx) => ctx.reply('Добро пожаловать! Нажмите кнопку, чтобы открыть приложение.', {
    reply_markup: {
        inline_keyboard: [
            [{ 
                text: 'Открыть приложение', 
                web_app: { url: 'https://testermister.miy.link' } 
            }]
        ]
    }
}));

// Обработка текстовых сообщений
bot.on('text', (ctx) => {
    ctx.reply(`Вы написали: ${ctx.message.text}`);
});

// Запуск бота
bot.launch();

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
