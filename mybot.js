let x={
  ch:{
    transfer:'transfer'
    ,log_id:'691751315742654554'
  }
}
require('dotenv').config();
//___
let env = {}
env.cnl_roles='👤▸выбрать_роль'
env.rl_muted='☣'
//___
const Discord = require("discord.js");
const client = new Discord.Client();
client.x=x;
client.lang=1;
client.SERVER_ID='301063859702071316';
//client.SERVER_ID='476431736813912064';
client.prefix='\\';
client.prefix2='!';
let RH=require(`./raw.js`);
RH.folder_name=`./modules`;
 RH.fetch_messages=true
RH.fetch_members=true
client.env=env
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

const Discord2 = require("discord.js");
const client2 = new Discord2.Client();
client2.env = env
client2.lang=1;
client2.SERVER_ID='301063859702071316';
//client2.SERVER_ID='476431736813912064';
client2.prefix='\\';
client2.prefix2='!';
let RH2=require(`./raw.js`);
RH2.folder_name=`./moduleslia`;

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
client3.env = env
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

//________________


const Discord13= require("discord13.js")
const {Intents:Intents13}= require("discord13.js")
const client13 = new Discord13.Client({
    disableEveryone: true
   //,intents:[Intents13]
   ,intents: [Intents13.FLAGS.GUILDS
             , Intents13.FLAGS.GUILD_MEMBERS, Intents13.FLAGS.GUILD_BANS, Intents13.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents13.FLAGS.GUILD_INTEGRATIONS, Intents13.FLAGS.GUILD_WEBHOOKS, Intents13.FLAGS.GUILD_INVITES, Intents13.FLAGS.GUILD_VOICE_STATES, Intents13.FLAGS.GUILD_PRESENCES, Intents13.FLAGS.GUILD_MESSAGES, Intents13.FLAGS.GUILD_MESSAGE_REACTIONS, Intents13.FLAGS.GUILD_MESSAGE_TYPING, Intents13.FLAGS.DIRECT_MESSAGES, Intents13.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents13.FLAGS.DIRECT_MESSAGE_TYPING
             ],
});
//___________
client13.client12=client
//____________
client13.prefix = "--";
client13.SERVER_ID = "301063859702071316";
let RH13 = require(`./raw13.js`);
RH13.folder_name = `./modules13`; // RH.folder_name='C:/user/discord/bot4/modules';- for pc running
//RH13.prefix = client13.prefix; //prefix for commands; default value: '!'
RH13.build(client13)


client13.x={
  ch:{
    transfer:'transfer'
  }
}
client13.x.inputPrefix='x13'
client13.x.rewirePrefix='rewx13'
client13.login();

//------------031221

client13.on('ready',guild=>{
let channelError= client13.guilds.cache.get(client13.SERVER_ID).channels.cache.find(ch=>ch.name=='error')
  //let channelError= client13.channels.cache.find(ch=>ch.name=='error')
  let consolelog = console.log
  console.log=(data)=>{
  if((data.data||data.message)&&channelError) {
    let ndata = data.toString()
   // if(ndata.length>1) channelError.send(ndata)
  }
   consolelog(data)}
    })
//-------------