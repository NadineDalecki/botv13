const axios = require("axios");
var giphy = require('giphy-api')('GwL2a2DLk3CsCUnQQawoHaRKRtEVYdbm');

module.exports = {
    name: "gif",
    async execute(client, Discord, message, functions, args, set) {
        if (message.channel.id === "563382017505361940" || //TG #gifs-only
            message.channel.id === "718176504437276682" ||
            message.channel.id === "779820405644197888") { //EU #vc typey
            giphy.random(args.join(" ")).then(function (res) {
                message.channel.send({ content: res.data.url})
            });
        }
    }
};
