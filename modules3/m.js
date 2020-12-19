//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
     //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};



//_________________PART MANAGER (OPCIONAL)
module.exports.active=true;//for previous rh_handler version(true=module on/false=module off);
//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
//exports.RH_IGNORE_COMMANDS=true;//add this line to ignore all commands from this module
//module.exports.RH_BOOTS=true;//add this line to ignore all boots from this module
//module.exports.RH_IGNORE_EVENTS=true;//add this line to ignore all events from this module
//module.exports.RH_IGNORE_EVENTS_PRIMITIVE=true;//add this line to ignore all events_primitive from this module


//___________________________ETERNAL_VARIABLE_PART
module.exports.e={
  bot_name:'tea'
  ,bot_info:' чай'
}
let p = ["идет соединение с астралом, подождите"
,"обрабатываются метаматериальные данные первичного потока от объекта1"
,"обрабатываются метаматериальные данные коллективного бессознательного"
,"обрабатываются метаматериальные данные вторичного потока"
,"связь с левым квадратом четрвертого дома меркурия установлена"
,"необходимо подтвердить астаральную идентификацию"
,"введите код верификации присланный по визуальному телепатическому каналу"];
//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//module.exports.boots.someBoot.RH_IGNORE=true;//add this line to ignore this command
//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};




//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

module.exports.events.message={ on:true,run:async(client,message)=>{try{
  if(message.guild.id!='622954155077533696') return;
    if(message.channel.type=='dm'||message.author.bot) return;
    if(message.content.startsWith('гадай')){
 if(!args[1]) return message.channel.send('не указан запрос гадания');
 for(var i = 0; i<p.length; i++){
     await delay(1000);
     message.channel.send(p[i]);
  };
 

};

}catch(err){console.log(err);};}};//
//module.exports.events.someEvent.RH_IGNORE=true;//add this line to ignore this event trigger
// ...

