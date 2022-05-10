// Require Modules
const discord = require(`discord.js`);

// Instatiate Client
const token = "OTcxMjIyMTc5NDM1OTM3ODg4.YnHXJA.Gw6vyKTN05WqY7Yp4I_ZC6rMwsw";
const client = new discord.Client(token);

// Handle Client Events
client.on(`ready`, () => {
    console.log(`${client.user.username} is now online!`);
})