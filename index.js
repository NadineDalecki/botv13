const express = require("express")
const app = express()
app.get("/", (request, response) => {
	response.sendStatus(200)
})
app.listen()

const BotTokens = [process.env.BOT_MEL, process.env.BOT_AFFEN, process.env.BOT_ITSY, process.env.BOT_BANE, process.env.BOT_KVN, process.env.BOT_TG, process.env.BOT_MO, process.env.BOT_PY]

const Discord = require("discord.js")
const set = require("./settings.json")
const functions = require("./functions.js")
const giphy = require("giphy-api")(process.env.GIPHY)
const schedule = require("node-schedule")
const axios = require("axios")

// FOR EACH =========================================================================================================
BotTokens.forEach(runBot)

function runBot(token) {
	 const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGES] });

  
 
	client.on("error", error => console.log(error))
	process.on("error", error => console.log(error))
	process.on("uncaughtException", error => console.log(error))
	process.on("unhandledRejection", error => console.log(error))

	// Daily GIF TG Server ==========================================================================================
	const rule = new schedule.RecurrenceRule()
	rule.hour = 20
	rule.minute = 1

	const job = schedule.scheduleJob(rule, async function () {
		if (client.user.username === "TG Bot")
			giphy.trending(
				{
					limit: 1,
					rating: "g",
					fmt: "json"
				},
				function (err, res) {
					client.channels.cache.get("563382017505361940").send({ content: res.data[0].url })
				}
			)
	})
	// Starting all Bots ==========================================================================================
	client.once("ready", () => {
		if (client.user.username == "Mo") {
			functions.Fortum(client)
			console.log("Status set for the first time")
			setInterval(() => {
				functions.Fortum(client)
				console.log("Status interval executed")
			}, 900000)
		} else {
			client.user.setPresence({
				status: set[client.user.username].status,
				activity: {
					name: set[client.user.username].activity.name,
					url: set[client.user.username].activity.url,
					type: set[client.user.username].activity.type
				}
			})
			console.log(client.user.username + " Ready!")
		}
	})
	client.login(token)

	// Message ====================================================================================================
	client.on("messageCreate", async message => {
		if (client.user.id != message.author.id) {
			// COMMANDS ===========================================================================================
			if (message.content.startsWith(set[client.user.username].prefix)) {
				functions.Command(client, Discord, message, functions, set)
			}

			// MENTIONS ===========================================================================================
			else if ((message.content.toLowerCase().includes("nada") || message.content.toLowerCase().includes("na_da")) && !message.author.bot && !message.content.toLowerCase().includes("canada")) {
				functions.Mention(client, Discord, message, "338649491894829057")
			} else if (message.content.toLowerCase().includes("sendo") && !message.author.bot && message.guild.id != "632570524463136779") {
				functions.Mention(client, Discord, message, "119095000050040832")
			} else if (
				message.content.toLowerCase().includes("hasko") &&
				!message.author.bot &&
				message.guild.id != "387015404092129282" && //EU
				message.guild.id != "421618914166833152" && //Gravity
				message.guild.id != "707307751033798666" && //Virtex
				message.guild.id != "424911215714631690" //Dungeon
			) {
				functions.Mention(client, Discord, message, "335528823615651842")
			} else if (
				// Dialogflow =====================================================================================
				!message.content.startsWith(set[client.user.username].prefix) &&
				client.user.id != message.author.id
			) {
				functions.DialogflowIntents(client, Discord, message, functions, set)
			}
		}
	})
}
