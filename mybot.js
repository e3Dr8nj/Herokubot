﻿require('dotenv').config();

const Discord = require("discord.js");
const client = new Discord.Client();
client.lang=1;
client.SERVER_ID='301063859702071316';
//client.SERVER_ID='476431736813912064';
client.prefix='\\';
client.prefix2='!';
let RH=require(`./raw.js`);
RH.folder_name=`./modules`;
 RH.fetch_messages=true
RH.fetch_members=true

client.rateLimit=0;
client.rateLimitDate=0;
client.on('rateLimit', (rateLimitInfo)  => {try{
	client.rateLimit = rateLimitInfo.timeout;
        client.rateLimitDate=rateLimitInfo.timeout+new Date().getTime();
        console.log('RL__'+client.rateLimit+'  '+rateLimitInfo.limit)
}catch(err){console.log(err);}; });

client.on("raw", (...args) => {try{
    RH.run(client,...args);
}catch(err){console.log(err);}; });
  

client.login();
//____________

const Discord2 = require("discord_ex.js");
const client2 = new Discord2.Client();
client2.lang=1;
client2.SERVER_ID='301063859702071316';
//client2.SERVER_ID='476431736813912064';
client2.prefix='\\';
client2.prefix2='!';
let RH2=require(`./raw2.js`);
RH2.folder_name=`./modules2`;

client2.rateLimit=0;
client2.rateLimitDate=0;
client2.on('rateLimit', (rateLimitInfo)  => {try{
	client2.rateLimit = rateLimitInfo.timeout;
        client2.rateLimitDate=rateLimitInfo.timeout+new Date().getTime();
        console.log('RL__'+client2.rateLimit+'  '+rateLimitInfo.limit)
}catch(err){console.log(err);}; });

client2.on("raw", (...args) => {try{
     RH2.run(client2,...args);
}catch(err){console.log(err);}; });

client2.login();

//_______________

const Discord3 = require("discord.js");
const client3 = new Discord3.Client();

client3.lang=1;
client3.SERVER_ID='622954155077533696';
//client2.SERVER_ID='476431736813912064';
client3.prefix='\\';
client3.prefix2='!';
let RH3=require(`./raw3.js`);
RH3.folder_name=`./modules3`;

client3.rateLimit=0;
client3.rateLimitDate=0;
client3.on('rateLimit', (rateLimitInfo)  => {try{
	client3.rateLimit = rateLimitInfo.timeout;
        client3.rateLimitDate=rateLimitInfo.timeout+new Date().getTime();
        console.log('RL__'+client3.rateLimit+'  '+rateLimitInfo.limit)
}catch(err){console.log(err);}; });

client3.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('<a:5zz:789573337596166144>');
  }
});

client3.on("raw", (...args) => {try{
     RH3.run(client3,...args);
}catch(err){console.log(err);}; });

client3.login(process.env.TOKEN_TEA);

