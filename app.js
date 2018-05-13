const Discord = require("discord.js");
const bot = new Discord.Client();



 bot.on("ready", async () => {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
     bot.user.setActivity("Owner: AK4L1FE", {type: 2});
     
     });


    bot.on('guildMemberAdd', member => {
      let channel = member.guild.channels.find('name', 'welcome-leave');
      let memberavatar = member.user.avatarURL
          if (!channel) return;
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(memberavatar)
          .addField(':bust_in_silhouette: | name : ', `${member}`)
          .addField(':microphone2: | Welcome!', `Welcome to the server, ${member}`)
          .addField(':id: | User :', "**[" + `${member.id}` + "]**")
          .addField(':family_mwgb: | Your are the member', `${member.guild.memberCount}`)
          .addField("Name", `<@` + `${member.id}` + `>`, true)
          .addField('Server', `${member.guild.name}`, true )
          .setFooter(`**${member.guild.name}**`)
          .setTimestamp()
  
          channel.sendEmbed(embed);
  });
  bot.on('guildMemberRemove', member => {
    let channel = member.guild.channels.find('name', 'welcome-leave');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed2 = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('Name:', `${member}`)
        .addField('Has Let the Server', ';(')
        .addField('Bye Bye :(', 'We will all miss you!')
        .addField('The server now as', `${member.guild.memberCount}` + " members")
        .setFooter(`**${member.guild.name}`)
        .setTimestamp()

        channel.sendEmbed(embed2);
});


bot.on("message", async message => {
      if(message.author.bot) return;
      if(message.channel.type === "dm") return;
    
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase();
    let args = messageArray.slice(1);
    });
    
    bot.login("NDQyNzQ0MjIzMjAxMDk5Nzc3.DdeUOg.EC7jrRhV8_xbYQwTILKSoUsQibA");