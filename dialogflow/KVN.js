module.exports = {
    name: "KVN",
    execute: async function (client, Discord, message, functions, set) {

        if (message.channel.type == "dm" ||
            message.mentions.has(client.user.id) ||
            message.cleanContent.startsWith(client.user.username + " ") ||
            message.cleanContent.startsWith(client.user.username.toLowerCase() + " ")) {

            const answer = await functions.DialogflowQuery(client, message);
            message.reply({content:answer.response});
        }
    }
};
