require('dotenv').config();
/*
var pg = require('pg');
var conString = process.env.DATABASE_URL;

var clientdb = new pg.Client(conString);
clientdb.connect();

var query = clientdb.query("SELECT * FROM test_table");
//fired after last row is emitted

query.on('row', function(row) {
    console.log('TEST_______________________________________-');
    console.log(row);
});
*/
/*
var express = require('express');
var router = express.Router();

const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
router.get('/db', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM test_table');
      const results = { 'results': (result) ? result.rows : null};
      res.render('pages/db', results );
      client.release();
    } catch (err) {
      console.error(err);
      res.send("Error " + err);
    }
  })
*/

const Discord = require("discord.js");
const client = new Discord.Client();
client.lang=1;
client.SERVER_ID='301063859702071316';
//client.SERVER_ID='476431736813912064';
client.prefix='\\';
client.prefix2='!';
let RH=require(`./raw.js`);
RH.folder_name=`./modules`;
 
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
    // RH2.run(client2,...args);
}catch(err){console.log(err);}; });

client2.login();

//_______________

const Discord3 = require("discord_ex.js");
const client3 = new Discord3.Client();

client3.lang=1;
client.SERVER_ID='301063859702071316';
//client3.SERVER_ID='622954155077533696';
//client2.SERVER_ID='476431736813912064';
client3.prefix='\\';
client3.prefix2='!';
let RH3=require(`./raw3_old.js`);
RH3.folder_name=`./modules3`;

client3.rateLimit=0;
client3.rateLimitDate=0;
client3.on('rateLimit', (rateLimitInfo)  => {try{
	client3.rateLimit = rateLimitInfo.timeout;
        client3.rateLimitDate=rateLimitInfo.timeout+new Date().getTime();
        console.log('RL__'+client3.rateLimit+'  '+rateLimitInfo.limit)
}catch(err){console.log(err);}; });

client3.on("raw", (...args) => {try{
     RH3.run(client3,...args);
}catch(err){console.log(err);}; });

client3.login(process.env.TOKEN4);

//__
const Discord4 = require("discord_ex.js");
const client4 = new Discord4.Client();
client4.lang=1;
client4.SERVER_ID='301063859702071316';
//client4.SERVER_ID='476431736813912064';
client4.prefix='\\';
client4.prefix2='!';
let RH4=require(`./raw3_old.js`);
RH4.folder_name=`./modules4`;
 
client4.rateLimit=0;
client4.rateLimitDate=0;
client4.on('rateLimit', (rateLimitInfo)  => {try{
	client4.rateLimit = rateLimitInfo.timeout;
        client.rateLimitDate=rateLimitInfo.timeout+new Date().getTime();
        console.log('RL__'+client.rateLimit+'  '+rateLimitInfo.limit)
}catch(err){console.log(err);}; });

client4.on("raw", (...args) => {try{
   // RH4.run(client,...args);
}catch(err){console.log(err);}; });
  

client4.login(process.env.TOKEN4);

