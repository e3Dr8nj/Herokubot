
exports.rh={
  disable:false,
  commands:{disable:false},
  boots:{disable:true},
  //events:{disable:true},
  events_primitive:{disable:true}
};

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

//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 


//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};




//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

module.exports.events.message={ on:true,run:async(client,message)=>{try{
 //
 // message.channel.send('d');
}catch(err){console.log(err);};}};//
//module.exports.events.someEvent.RH_IGNORE=true;//add this line to ignore this event trigger
// ...
module.exports.events.message={ run:async(client,message)=>{try{
   //code to execut then this command triggered
   if(message.channel.type=='dm' || message.author.bot) return;
   if(!message.content.startsWith('+')) return;
   let nc = message.content.slice(1);
   
   let msg = await message.channel.send('@septapus comic '+nc);
   await msg.delete();
   await message.delete();
   
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command
// ...


 
//_________________________________________EVENTS_PART_END__________________________________________

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};

module.exports.events_primitive.SOME_EVENT_NAME={run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//module.exports.events_primitive.SOME_EVENT_NAME.RH_IGNORE = true;//add this line to ignore this primitive event trigger

//_____________SUB FUNCTION
//______________sf01
exports.sf01=async(client)=>{
try{ 
   
}catch(err){console.log(err);};
};//createRole end

