module.exports = {
  name: "role",
  execute(client, Discord, message, functions, args, set) {
   message.delete().catch(_ => {});
      const names = message.guild.roles.cache
        .get(args.toString())
        .members.map(m => m.user.tag.replace(/_/g, "\\_"));
      if (names === "") {
        message.channel.send("Nope");
      } else {
        message.channel.send(names);
      }
    
  }
};
