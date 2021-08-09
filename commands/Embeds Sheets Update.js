module.exports = {
  name: "edit",
  async execute(client, Discord, message, functions, args, set) {
    message.delete().catch(_ => {});

    const adminRoles = set[client.user.username].adminRoles;
    if (
      message.member.roles.cache.some(r => adminRoles.includes(r.id)) ||
      message.member.hasPermission("ADMINISTRATOR")
    ) {
      const data = await functions.SpreadsheetGET(client);
      const sheet = data.doc.sheetsByTitle["Embeds"];
      const rows = await sheet.getRows();

      let embed = rows.filter(row => row.name == args[2]);
      const finalEmbed = functions.EmbedBuilder(Discord, embed);

      client.channels.cache
        .get(args[0])
        .messages.fetch(args[1])
         .then(msg => msg.edit({ embeds: [embed] }))
        .catch(console.error);
      console.log("Updating Embed");
    }}}
    
    
