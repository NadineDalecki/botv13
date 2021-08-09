module.exports = {
  name: "Itsy",
  execute: async function(client, Discord, message, functions, set) {
    if (
      message.content.toLowerCase().includes("itsy") ||
      message.mentions.has(client.user.id) ||
      message.channel.type == "dm"
    ) {
      const answer = await functions.DialogflowQuery(client, message);
      const axios = require("axios");
      const CollectionList = await axios.request({
        url:
          "https://api.webflow.com/sites/5ed8826082212c5dc8270931/collections",
        method: "get",
        headers: {
          Authorization: process.env.WEBFLOW_ITSY,
          "accept-version": "1.0.0"
        }
      });

      //=================================================================
      if (answer.intent.substring(0, 5) === "embed") {
        const data = await functions.SpreadsheetGET(client);
        const rows = await data.doc.sheetsByTitle["Embeds"].getRows();
        let embed = rows.filter(row => row.name == answer.intent);
        const finalEmbed = functions.EmbedBuilder(embed);
        message.channel.send({ embeds: [finalEmbed] });
      }
      //=========================================================================================================
      if (answer.intent === "Blog") {
        //throws an error that it can't send an empty message but works fine?
        try {
          let blogCollection = CollectionList.data.filter(
            collection => collection.name === "Blog Posts"
          );

          const BlogData = await axios.request({
            url: `https://api.webflow.com/collections/${
              blogCollection[0]["_id"]
            }/items?live=true`,
            method: "get",
            headers: {
              Authorization: process.env.WEBFLOW_ITSY,
              "accept-version": "1.0.0"
            }
          });
          const imageLink = BlogData.data.items[0]["main-image"].url;
          const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(BlogData.data.items[0].name)
            .setURL(
              `https://www.vrcommunitybuilders.com/post/${BlogData.data.items[0].slug}`
            )
            .setDescription(BlogData.data.items[0]["post-summary"])
            .setImage(imageLink)
            .setFooter("Published on:" + BlogData.data.items[0]["custom-date"]);

          message.channel.send({ embeds: [embed] });
        } catch (error) {
          message.reply({
            content: "Hm, sorry I could not find what you were looking for! 😟"
          });
        }
      }
      //=======================================================================================================
      if (answer.intent === "Webflow | What is?") {
        try {
          let communityCollection = CollectionList.data.filter(
            collection => collection.name === "Communities"
          );

          const CommunitiesData = await axios.request({
            url: `https://api.webflow.com/collections/${
              communityCollection[0]["_id"]
            }/items?live=true`,
            method: "get",
            headers: {
              Authorization: process.env.WEBFLOW_ITSY,
              "accept-version": "1.0.0"
            }
          });

          const args =
            answer.result[0].queryResult.parameters.fields.Community
              .stringValue;
          let community = CommunitiesData.data.items.filter(
            communities => communities.name.toLowerCase() === args.toLowerCase()
          );

          const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(community[0].name)
            .setURL(
              `https://www.vrcommunitybuilders.com/communities/${community[0].slug}`
            )
            .setDescription(community[0]["discord-description"])
            .setThumbnail(community[0].logo.url)
            .setImage(community[0]["cover-image"].url);

          message.channel.send({ embeds: [embed] });
        } catch (error) {
          message.reply({
            content: "Hm, sorry I could not find what you were looking for! 😟"
          });
          console.log(error);
        }
      }
      //=========================================================================================================
      else if (answer.intent === "Webflow | Who is?") {
        try {
          let memberCollection = CollectionList.data.filter(
            collection => collection.name === "Team Members"
          );

          const MemberData = await axios.request({
            url: `https://api.webflow.com/collections/${
              memberCollection[0]["_id"]
            }/items?live=true`,
            method: "get",
            headers: {
              Authorization: process.env.WEBFLOW_ITSY,
              "accept-version": "1.0.0"
            }
          });
          const args =
            answer.result[0].queryResult.parameters.fields.Member.stringValue;
          let Member = MemberData.data.items.filter(
            member => member.name === args
          );

          const SocialMediaLinks = [];

          if (Member[0]["facebook-link"]) {
            SocialMediaLinks.push(`[Facebook](${Member[0]["facebook-link"]}) `);
          }

          if (Member[0]["linkedin"]) {
            SocialMediaLinks.push(`[LinkedIn](${Member[0]["linkedin"]}) `);
          }

          if (Member[0]["twitter-link"]) {
            SocialMediaLinks.push(`[Twitter](${Member[0]["twitter-link"]}) `);
          }

          if (Member[0]["instagram"]) {
            SocialMediaLinks.push(`[Instagram](${Member[0]["instagram"]}) `);
          }

          if (Member[0]["youtube"]) {
            SocialMediaLinks.push(`[YouTube](${Member[0]["youtube"]}) `);
          }

          if (Member[0]["website"]) {
            SocialMediaLinks.push(`[Website](${Member[0]["website"]}) `);
          }

          const embed = new Discord.MessageEmbed()
            .setColor("#0099ff")
            .setTitle(Member[0].name)
            .setAuthor(
              Member[0]["discord-tag"] + " | " + Member[0]["job-title"],
              Member[0]["profile-picture"].url
            )
            .setURL(
              `https://www.vrcommunitybuilders.com/team/${Member[0].slug}`
            )
            .setDescription(Member[0]["bio-summary"])
            .setThumbnail(Member[0]["profile-picture"].url)
            .addField(
              `Connect with ${Member[0].nickname}`,
              SocialMediaLinks.join("	　")
            )
            .setFooter(`${Member[0].nickname} is a part of VRCB since`)
            .setTimestamp(Member[0]["created-on"]);

          message.channel.send({ embeds: [embed] });
        } catch (error) {
          message.reply({
            content: "Hm, sorry I could not find what you were looking for! 😟"
          });
          console.log(error);
        }
      }
      //=========================================================================================================
      else {
        message.reply({ content: answer.response });
      }
      //=========================================================================================================
    }
  }
};
