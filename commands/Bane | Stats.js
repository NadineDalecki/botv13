const axios = require("axios");
var giphy = require('giphy-api')('GwL2a2DLk3CsCUnQQawoHaRKRtEVYdbm');

module.exports = {
    name: "stats",
    async execute(client, Discord, message, functions, args, set) {
        if (client.user.username === "Bane") {
            if (message.channel.id == "736472663299719190" || //bot-mod
             message.channel.id == "819541831086899230" || //ask bane
                    message.channel.type == "dm") {

            try {
                //======================================================================================================
                const playerId = await axios.request({
                    url: `https://nykloo.com/api/PlayerInfos/Search?usernameQuery=${args.join(" ")}&page=0&pageSize=25`,
                    method: "get"
                });

                const playerStats = await axios.request({
                    url: `https://nykloo.com/api/PlayerStats/Stats/${playerId.data[0].playFabId}`,
                    method: "get"
                });
                //======================================================================================================
                const GamesPlayed = playerStats.data.playerStatistics.filter((stat) =>
                    stat.statisticName === "CareerGamesPlayed"
                );
                const Kills = playerStats.data.playerStatistics.filter((stat) =>
                    stat.statisticName === "CareerKills"
                );
                const Wins = playerStats.data.playerStatistics.filter((stat) =>
                    stat.statisticName === "CareerWins"
                );
                const KpG = Kills[0].value / GamesPlayed[0].value
                const WL = (Wins[0].value / GamesPlayed[0].value) * 100
                const Damage = playerStats.data.playerStatistics.filter((stat) =>
                    stat.statisticName === "CareerDamage"
                );
                const CreationDate = playerStats.data.accountInfo.created.slice(0, 10)
                const Avatar = playerStats.data.accountInfo.titleInfo.avatarUrl

                //======================================================================================================
                const embed = new Discord.MessageEmbed()
                    .setColor('#fca903')
                    .setTitle(playerStats.data.accountInfo.titleInfo.displayName)
                    .setDescription("Account created on: " + CreationDate)
                    .setThumbnail(Avatar)
                    .addFields(
                        { name: 'Games', value: GamesPlayed[0].value, inline: true },
                        { name: 'Wins', value: Wins[0].value, inline: true },
                        { name: 'W/L', value: `${WL.toFixed(1)}%`, inline: true },
                    )
                    .addFields(
                        { name: 'Kills', value: Kills[0].value, inline: true },
                        { name: 'Damage', value: Damage[0].value, inline: true },
                        { name: 'Average Kills', value: KpG.toFixed(2), inline: true },

                    )

                    .setFooter('Did you know? You can chat with Bane in DM! Try it!', `https://cdn.discordapp.com/attachments/819237538467282984/829911881224683540/banefooter.png`);

                message.reply({ embeds: [embed] })
            }
            catch (e) {
                message.reply({ content:"Hm...sorry but I can't find that player!"})
            }
        }
        }
    }
}
