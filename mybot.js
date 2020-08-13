require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.lang=1;
client.SERVER_ID='301063859702071316';
//client.SERVER_ID='476431736813912064';
client.prefix='\\';
client.prefix2='!';
let RH=require(`./raw.js`);
RH.folder_name=`./modules`;
client.on("raw", (...args) => {try{
     RH.run(client,...args);
}catch(err){console.log(err);}; });

client.login();
/*
const Discord2 = require("discord.js");
const client2 = new Discord2.Client();
client2.lang=1;
client2.SERVER_ID='301063859702071316';
//client2.SERVER_ID='476431736813912064';
client2.prefix='\\';
client2.prefix2='!';
let RH2=require(`./raw2.js`);
RH2.folder_name=`./modules2`;
client2.on("raw", (...args) => {try{
     RH2.run(client2,...args);
}catch(err){console.log(err);}; });

client2.login(TOKEN);
*/