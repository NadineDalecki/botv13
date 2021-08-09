module.exports = {
  name: "lft",
  execute(client, Discord, message, functions, args, set) {
    if (client.user.username === "Affen") {
      const names = client.guilds.cache.get("387015404092129282").roles.cache
        .get("549925842646597651")
        .members.map(m => m.user.tag.replace(/_/g, "\\_"));
      if (names === "") {
        message.channel.send({ content: "Nah. No motivation. Bother someone else."})
      } else {
        if(message.channel.type == "dm"){
          message.author.send({ content: names})
        }
        else {
          message.author.send({ content: names})
          message.react("💌")
        }
      }
    }
  }
};
