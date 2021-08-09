const Embed = require("../embeds.js")

module.exports = {
    name: "update",
    async execute(client, Discord, message, functions, args, set) {
        message.delete().catch(_ => { });
        const adminRoles = set[client.user.username].adminRoles;
        const embed = Embed[`${args[2]}`](message)
        if (
            message.member.roles.cache.some(r => adminRoles.includes(r.id)) ||
            message.member.hasPermission("ADMINISTRATOR")
        ) {
            client.channels.cache
                .get(args[0])
                .messages.fetch(args[1])
                .then(msg => msg.edit({ embeds: [embed] }))
                .catch(console.error);
            console.log("Updating Embed");
        }
    }
}
