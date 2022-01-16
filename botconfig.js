module.exports = {
  Admins: ["924159887628439593", "924159887628439593"], //Admins of the bot
  ExpressServer: true, //If you wanted to make the website run or not
  DefaultPrefix: process.env.Prefix || ">", //Default prefix, Server Admins can change the prefix
  Port: 3000, //Which port website gonna be hosted
  SupportServer: "https://discord.gg/pasifixc", //Support Server Link
  Token: process.env.Token || "OTMyMzAzOTYzOTIxOTc3MzY0.YeRBug.fddNiqdF-2kKy5gGcR9xBPaiPMY", //Discord Bot Token
  ClientID: process.env.Discord_ClientID || "932303963921977364", //Discord Client ID
  ClientSecret: process.env.Discord_ClientSecret || "wHzdgfVyMGv-JMKApbGi2DVxAREXaegp", //Discord Client Secret
  Scopes: ["identify", "guilds", "applications.commands"], //Discord OAuth2 Scopes
  ServerDeafen: true, //If you want bot to stay deafened
  DefaultVolume: 100, //Sets the default volume of the bot, You can change this number anywhere from 1 to 100
  CallbackURL: "/api/callback", //Discord OAuth2 Callback URL
  "24/7": true, //If you want the bot to be stay in the vc 24/7
  CookieSecret: "Pikachu is cute", //A Secret like a password
  IconURL:
    "https://raw.githubusercontent.com/SudhanPlayz/Discord-MusicBot/master/assets/logo.gif", //URL of all embed author icons | Dont edit unless you dont need that Music CD Spining
  EmbedColor: "RANDOM", //Color of most embeds | Dont edit unless you want a specific color instead of a random one each time
  Permissions: 2205281600, //Bot Inviting Permissions
  Website: process.env.Website || "http://localhost", //Website where it was hosted at includes http or https || Use "0.0.0.0" if you using Heroku
  
  Presence: {
    status: "idle", // You can show online, idle, and dnd
    name: "Music", // The message shown
    type: "PLAYING", // PLAYING, WATCHING, LISTENING, STREAMING
  },

  //Lavalink
  Lavalink: {
    id: "lava.link",
    host: "lava.link",
    port: 80, // The port that lavalink is listening to. This must be a number!
    pass: "lava123",
    secure: false, // Set this to true if the lavalink uses SSL or you're hosting lavalink on repl.it
  },

  //Please go to https://developer.spotify.com/dashboard/
  Spotify: {
    ClientID: process.env.Spotify_ClientID || "7a6aa44375da4370877c76c3b1ecf1b1", //Spotify Client ID
    ClientSecret: process.env.Spotify_ClientSecret || "d5bc56f03c0b4ffdade192558a42cd25", //Spotify Client Secret
  },
};
