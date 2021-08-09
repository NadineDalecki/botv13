module.exports = {
  name: "Bane",
  execute: async function(client, Discord, message, functions, set) {
    if (message.mentions.has(client.user.id) || message.channel.type == "dm") {
      const data = await functions.SpreadsheetGET(client);
      const answer = await functions.DialogflowQuery(client, message);
      const AskBaneChannel = "819541831086899230";

      //=========================================================================================================
      if (
        answer.intent == "Default Welcome Intent" ||
        answer.intent.includes("Discord")
      ) {
        message.reply({ content: answer.response });
        functions.Inform(client, Discord, answer, message);
      }
      //=================================================================
      else if (answer.intent.substring(0, 5) === "embed") {
        const rows = await data.doc.sheetsByTitle["Embeds"].getRows();
        let embed = rows.filter(row => row.name == answer.intent);
        const finalEmbed = functions.EmbedBuilder(embed);
        message.channel.send({ embeds: [finalEmbed] });
      }
      //=========================================================================================================
      else if (
        message.channel.id == "736472663299719190" || //bot-mod
        message.channel.id == "819541831086899230" || //ask bane
        message.channel.type == "dm"
      ) {
        if (answer.intent === "Tip") {
          const sheet = data.doc.sheetsByTitle["Tips"];
          const rows = await sheet.getRows();
          const tip = rows[Math.floor(Math.random() * rows.length)].tip;
          message.channel.send({ content: `💡 ${tip}` });
        }
        if (answer.intent === "Meme") {
          try {
            const sheet = data.doc.sheetsByTitle["Memes"];
            const rows = await sheet.getRows();
            const meme = rows[Math.floor(Math.random() * rows.length)].meme;
            message.channel.send({ content: meme });
          } catch (e) {
            console.log(e);
          }
        }
        if (answer.intent === "Fun Fact") {
          const sheet = data.doc.sheetsByTitle["Fun Facts"];
          const rows = await sheet.getRows();
          const fact = rows[Math.floor(Math.random() * rows.length)].fact;
          message.channel.send({ content: `🤣 ${fact}` });
        }
        //=========================================================================================================
        else if (answer.intent === "Locations") {
          if (answer.result[0].queryResult.allRequiredParamsPresent === false) {
            message.reply({ content: answer.response });
          } else if (
            answer.result[0].queryResult.allRequiredParamsPresent === true
          ) {
            const sheet = data.doc.sheetsByTitle["Embeds"];
            const rows = await sheet.getRows();
            let embed = rows.filter(
              row =>
                row.name ==
                answer.result[0].queryResult.parameters.fields.locations
                  .stringValue
            );
            const finalEmbed = functions.EmbedBuilder(embed);
            message.channel.send({ embeds: [finalEmbed] });
          }
        }
        //=========================================================================================================
        else if (answer.intent === "Skins") {
          if (answer.result[0].queryResult.allRequiredParamsPresent === false) {
            message.reply({ content: answer.response });
          } else if (
            answer.result[0].queryResult.allRequiredParamsPresent === true
          ) {
            const sheet = data.doc.sheetsByTitle["Embeds"];
            const rows = await sheet.getRows();
            let embed = rows.filter(
              row =>
                row.name ==
                answer.result[0].queryResult.parameters.fields.Skins.stringValue
            );
            const finalEmbed = functions.EmbedBuilder(embed);
            message.channel.send({ embeds: [finalEmbed] });
          }
        }
        //=========================================================================================================
        else if (answer.intent === "Weapons") {
          if (answer.result[0].queryResult.allRequiredParamsPresent === false) {
            message.reply({ content: answer.response });
          } else if (
            answer.result[0].queryResult.allRequiredParamsPresent === true
          ) {
            const sheet = data.doc.sheetsByTitle["Embeds"];
            const rows = await sheet.getRows();

            let embed = rows.filter(
              row =>
                row.name ==
                answer.result[0].queryResult.parameters.fields.Weapon
                  .stringValue
            );
            const finalEmbed = functions.EmbedBuilder(embed);
            message.channel.send({ embeds: [finalEmbed] });
          }
        }
        //=========================================================================================================
        else {
          message.reply({ content: answer.response });
          functions.Inform(client, Discord, answer, message);
        }
      } else {
        if (answer.intent === "Tip") {
          const sheet = data.doc.sheetsByTitle["Tips"];
          const rows = await sheet.getRows();
          const sometip = rows[Math.floor(Math.random() * rows.length)].tip;
          client.channels.cache
            .get(AskBaneChannel)
            .send({ content: `${message.author} 💡 ${sometip}` });
        }
        //=========================================================================================================
        if (answer.intent === "Meme") {
          const sheet = data.doc.sheetsByTitle["Memes"];
          const rows = await sheet.getRows();
          const somememe = rows[Math.floor(Math.random() * rows.length)].meme;

          client.channels.cache
            .get(AskBaneChannel)
            .send({ content: message.author });
          client.channels.cache.get(AskBaneChannel).send({ content: somememe });
        }
        //=========================================================================================================
        if (answer.intent === "Fun Fact") {
          const sheet = data.doc.sheetsByTitle["Fun Facts"];
          const rows = await sheet.getRows();
          const somefact = rows[Math.floor(Math.random() * rows.length)].fact;

          client.channels.cache
            .get(AskBaneChannel)
            .send({ content: `${message.author} 🤣 ${somefact}` });
        }
        //=========================================================================================================
        else if (answer.intent === "Locations") {
          if (answer.result[0].queryResult.allRequiredParamsPresent === false) {
            client.channels.cache.get(AskBaneChannel).send(answer.response);
          } else if (
            answer.result[0].queryResult.allRequiredParamsPresent === true
          ) {
            const sheet = data.doc.sheetsByTitle["Embeds"];
            const rows = await sheet.getRows();
            let embed = rows.filter(
              row =>
                row.name ==
                answer.result[0].queryResult.parameters.fields.locations
                  .stringValue
            );
            const finalEmbed = functions.EmbedBuilder(embed);
            client.channels.cache
              .get(AskBaneChannel)
              .send({ content: message.author });
            client.channels.cache
              .get(AskBaneChannel)
              .send({ content: finalEmbed });
          }
        }
        //=========================================================================================================
        else if (answer.intent === "Skins") {
          if (answer.result[0].queryResult.allRequiredParamsPresent === false) {
            client.channels.cache.get(AskBaneChannel).send(answer.response);
          } else if (
            answer.result[0].queryResult.allRequiredParamsPresent === true
          ) {
            const sheet = data.doc.sheetsByTitle["Embeds"];
            const rows = await sheet.getRows();
            let embed = rows.filter(
              row =>
                row.name ==
                answer.result[0].queryResult.parameters.fields.Skins.stringValue
            );
            const finalEmbed = functions.EmbedBuilder(embed);
            client.channels.cache
              .get(AskBaneChannel)
              .send({ content: message.author });
          }
        }
        //=========================================================================================================
        else if (answer.intent === "Weapons") {
          if (answer.result[0].queryResult.allRequiredParamsPresent === false) {
            client.channels.cache.get(AskBaneChannel).send(answer.response);
          } else if (
            answer.result[0].queryResult.allRequiredParamsPresent === true
          ) {
            const sheet = data.doc.sheetsByTitle["Embeds"];
            const rows = await sheet.getRows();

            let embed = rows.filter(
              row =>
                row.name ==
                answer.result[0].queryResult.parameters.fields.Weapon
                  .stringValue
            );
            const finalEmbed = functions.EmbedBuilder(embed);
            client.channels.cache
              .get(AskBaneChannel)
              .send({ content: finalEmbed });
          }
        }
        //=========================================================================================================
        else {
          client.channels.cache.get(AskBaneChannel).send(answer.response);
          functions.Inform(client, Discord, answer, message);
        }
        client.channels.cache
          .get(AskBaneChannel)
          .send({
            content: `If you have further questions, ${message.author}, let's continue our little chat here!`
          });
      }
      //=========================================================================================================
    }
  }
};
