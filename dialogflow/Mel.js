module.exports = {
  name: "Mel",
  execute: async function(client, Discord, message, functions, set) {
    if (
      message.channel.type == "dm" ||
      message.mentions.has(client.user.id) ||
      message.cleanContent.startsWith(client.user.username + " ") ||
      message.cleanContent.startsWith(client.user.username.toLowerCase() + " ")
    ) {
      functions.SpamStop(
        client,
        message,
        userMap,
        set[client.user.username].muteRole
      );
      const answer = await functions.DialogflowQuery(client, message);
      const userMap = new Map();
      const data = await functions.SpreadsheetGET(client);

      //=========================================================================================================
      if (
        message.channel.type == "dm" ||
        !message.member.roles.cache.has("748631446217818123")
      ) {
        //=========================================================================================================
        if (answer.intent.substring(0, 5) === "embed") {
          const rows = await data.doc.sheetsByTitle["Embeds"].getRows();
          let embed = rows.filter(row => row.name == answer.intent);
          const finalEmbed = functions.EmbedBuilder(embed);
          message.channel.send({ embeds: [finalEmbed] });
        }
        //=========================================================================================================
        else if (
          answer.intent === "Sign Language" &&
          (message.channel.id == "328962843800109067" ||
            message.channel.type == "dm")
        ) {
          const signName = answer.result[0].queryResult.parameters.fields.sign.stringValue.toLowerCase();
          const rows = await data.doc.sheetsByTitle["ESL"].getRows();
          try {
            let embed = rows.filter(row =>
              row.name.toLowerCase().includes(signName)
            );
            message.channel.send({ content: embed[0].url });
          } catch (e) {
            message.reply({ content: "Sorry I could not find a sign for it!" });
          }
        }
        //=========================================================================================================
        else if (answer.intent === "Invite | ?") {
          const rows = await data.doc.sheetsByTitle["Server Links"].getRows();
          const serverName =
            answer.result[0].queryResult.parameters.fields["discord-server"]
              .stringValue;
          try {
            let server = rows.filter(row => row.server == serverName);
            message.reply({ content: server[0].description });
          } catch (e) {
            console.log(e);
          }
        }
        //=========================================================================================================
        else if (
          answer.intent === "Sign Commands" &&
          (message.channel.id == "328962843800109067" ||
            message.channel.type == "dm")
        ) {
          const rows = await data.doc.sheetsByTitle["ESL"].getRows();
          const commands = rows.map(commands => `${commands.name}`);
          const embed = new Discord.MessageEmbed().setDescription(
            commands.join(" | ")
          );
          message.channel.send({ embeds: [embed] });
        }
        //=========================================================================================================
        else if (answer.intent === "Spam | Spoon") {
          message.react("754602236163915788");
        }
        //=========================================================================================================
        else if (answer.intent.substring(0, 4) === "Spam") {
          const allowedChannels = ["328962843800109067", "688765312023396374"]; //bot channel, meme channel
          if (
            allowedChannels.includes(message.channel.id) ||
            message.channel.type == "dm"
          ) {
            message.reply({ content: answer.response });
          } else {
            message.reply({
              content: "Try that again in the <#328962843800109067> or in a DM!"
            });
          }
        }
        //=========================================================================================================
        else if (answer.intent === "Meme") {
          if (
            message.channel.id == "333796567746084864" ||
            message.channel.type == "dm"
          ) {
            const rows = await data.doc.sheetsByTitle["Memes"].getRows();
            const randomMeme =
              rows[Math.floor(Math.random() * rows.length)].meme;
            message.channel.send(randomMeme);
          } else {
            message.reply({
              content: "Try that again in the <#333796567746084864> or in a DM!"
            });
          }
        }
        //=========================================================================================================
        else if (message.channel.id !== "333796567746084864") {
          message.reply({ content: answer.response });
          functions.Inform(client, Discord, answer, message);
        }
      }
    }
  }
};
