const {
    EmbedBuilder
} = require("discord.js");

module.exports = {
    name: "test",
    usage: "/test <num> <num2>",
    options: [
        {
            name: "num", // sayi 1
            description: "Sayi 1",
            type: 4, // Integer => 4 | String => 3 | Boolean => 5 | User => 6 | Channel => 7 | Role => 8
            required: true
        },
        {
            name: "num2", // sayi 2
            description: "Sayi 2",
            type: 4, // Integer => 4 | String => 3 | Boolean => 5 | User => 6 | Channel => 7 | Role => 8 
            required: true
        }
    ],
    category: "Bot",
    description: "Test Command",
    run: async (client, interaction) => {

        // let num = interaction.options.getInteger("num");
        // let num2 = interaction.options.getInteger("num2"); 

        // Veya bu şekilde de yapabilirsiniz.

        let {
            num,
            num2
        } = interaction.options.data.reduce((acc, cur) => {
            acc[cur.name] = cur.value;
            return acc;
        }, {});

        const embed = new EmbedBuilder()
            .setTitle("Test")
            .setDescription(`Toplam: ${num + num2} \nÇıkarma: ${num - num2} \nÇarpma: ${num * num2} \nBölme: ${num / num2}`)
            .setColor(0x00ff00)
            .setTimestamp()
            .setFooter({
                text: interaction.user.tag,
                iconURL: interaction.user.displayAvatarURL({
                    dynamic: true
                })
            })

        interaction.reply({
            embeds: [embed],
            ephemeral: true // true => sadece komutu kullanan kişi görebilir | false => herkes görebilir
        });
    }
}