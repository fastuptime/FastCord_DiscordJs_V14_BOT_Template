const {
    Client,
    Collection,
    Discord,
    ActivityType
} = require('discord.js');
const client = new Client({
    intents: 32767
});
const colors = require('colors');

require("./load.js")(client);

client.on('ready', () => {
    console.log(`${colors.bgCyan('[BOT]').black} --> ${colors.green('Bot Başarıyla Aktif Edildi!')} Botun Adı: ${colors.green(client.user.username)} | Botun ID'si: ${colors.green(client.user.id)}`.green);
    client.user.setPresence({
        activities: [{
            name: 'FastCord V14 FastUptime',
            type: 0
        }],
        status: 'idle'
    });
});

client.login('x').catch(() => console.log(`${colors.bgRed('[HATA]').black} --> ${colors.red('Botun Tokeni Geçersiz! Lütfen Tokeni Kontrol Ediniz!')}`.red));