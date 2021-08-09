module.exports = {
    name: "embed",
    async execute(client, Discord, message, functions, args, set) {
        message.delete().catch(_ => { });
        const adminRoles = set[client.user.username].adminRoles;
        if (message.channel.type == "dm" ||
            message.member.roles.cache.some(r => adminRoles.includes(r.id)) ||
            message.member.hasPermission("ADMINISTRATOR")
        ) {
            const data = await functions.SpreadsheetGET(client);
            const sheet = data.doc.sheetsByTitle["Embeds"];
            const rows = await sheet.getRows();

            let embed = rows.filter(embed => embed.name == args.join(" "));
            const finalEmbed = functions.EmbedBuilder(Discord, embed);
            message.channel.send({ embeds: [finalEmbed] })
        }
    }
};
