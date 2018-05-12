const Discord = require('discord.js');
const Client = new Discord.Client();
const OwnerID = "309081957604786176";

const prefix = "w!"



Client.on("ready", () => {
	console.log("online");
	Client.user.setPresence({ game: { name: `w!help for command list`, type: 0} });
});

// welcome message

Client.on("guildMemberAdd", member => {
	   const welcomeChannel = member.guild.channels.find('name', 'welcome');
                if (!welcomeChannel === null) return;
   client.channels.get(welcomeChannel.id).send("Welcome to: " + member.guild.name + " Hope you enjoy it here")
});

Client.on("guildMemberRemove", member => {
   const welcomeChannel = member.guild.channels.find('name', 'welcome');
                if (!welcomeChannel === null) return;
   client.channels.get(welcomeChannel.id).send("Goodbye: " + member.user.username + " from " + member.guild.name)
});

Client.on("guildCreate", guild => {
	console.log("Some one added the Welcomer bot to a server created by: " + guild.owner.user.username)
});

Client.on("message", async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
	
	if (command === "ping") {
		message.channel.send(`Pong! Time took: ${Date.now() - message.createdTimestamp} ms`);
	} else

	if (command === "say") {
		message.delete()
                const embed = new Discord.RichEmbed()
		.setColor(0x954D23)
		.setDescription(args.join(" "));
		message.channel.send({embed})
	} else

   if (command === "announcement") {
	   if (message.member.hasPermission("ADMINISTRATOR")) {
		   const color = args[0]
				
		   const text = args.slice(1).join(" ");
		   if (text.length < 1) return message.channel.send("Can not announce nothing");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor("0x" + color)
		   .setTitle("Important Announcement:")
		   .setDescription(text);
		   message.channel.send("@everyone")
		   message.channel.send({embed})
	   }
   } else

	if (command == "help") {
		const embed = new Discord.richEmbed()
		.setColor(0x954D23)
		.setTitle("Command List:")
		.addField("w!help", "Will give the current command list")
		.addField("w!ping", "WIll show the ping time for the bot")
		.addField("w!say [text]", "Will make the bot say something")
		.addField("w!announcement [text]", "Will make the bot say an announcement and tag everyone")
		message.channel.send({embed})
	}

});

Client.login("NDQyNzQ0MjIzMjAxMDk5Nzc3.DdDRTg.VOZDYyiomyvp4RuFdxKj5liOqzs"); //replace with your token dont share yours.
