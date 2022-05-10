// Require Modules
const {Client, Intents} = require(`discord.js`);
require(`dotenv`).config();

// Instatiate Client
const token = process.env.TOKEN;
// console.log(process.env.TOKEN);
const client = new Client({intents: [Intents.FLAGS.GUILDS]});

// Handle Client Events
client.on(`ready`, () => {
    console.log(`${client.user.username} is now online!`);
})

// Log Client In
client.login(token);