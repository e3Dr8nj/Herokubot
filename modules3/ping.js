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

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
    
 

 
}catch(err){console.log(err);};}};//
//module.exports.boots.someBoot.RH_IGNORE=true;//add this line to ignore this command
//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};

module.exports.commands.cmd1={aliase:'+', run:async(client,message,args)=>{try{
   //code to execut then this command triggered


 
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command


//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

module.exports.events.message={ on:true,run:async(client,message)=>{try{
  if(message.guild.id!='622954155077533696') return;
//if(!!message.member.nickname&&!message.member.nickname.startsWith("🎄"))//{message.member.setNickname("🎄"+message.member.nickname+"🎄");};
if(message.content.startsWith('test')) return message.channel.send('<a:5zz:789573337596166144>');
    if(message.channel.type=='dm'||message.author.bot) return;
    // module.exports.sf3.run(client,message);
     if(message.channel.type!='dm'&&!message.author.bot){ 
        client.bot_name=(client.bot_name)?client.bot_name:module.exports.e.bot_name;
        client.bot_info=(client.bot_info)?client.bot_info:module.exports.e.bot_info;
        if(message.content.startsWith('?!!*')){ message.reply(client.bot_name+' is online'); return;};
        if(message.content.startsWith('?!!'+client.bot_name+" info")){ message.reply(client.bot_name+" info: "+client.bot_info); return;};
        if(message.content.startsWith('?!!'+client.bot_name)){ message.reply(client.bot_name+' is online'); return;};
   };
  let mc=message.content;
  if (mc.toLowerCase().indexOf('водк')!=-1 ) message.channel.send('Ася иди сюдааааа!!!!').catch(err=>console.log(err));
  var patt = /[ч|t]{1,}\s{0,}[а|a|я|e]{1,}\s{0,}[й|i|я|a]{1,}\s{0,}/i;
  var result = patt.exec(mc);
  //let args = mc.split(' ');
//let str_tea=result+' '+args[random(args.lenght-1)]+' ';
let rnd = await random(2);
  if(result&&(rnd==1)){
  let args = mc.split(' ');  
let str_tea=result[0]+" "+args[random(args.length-1)]+" ";
   //  let reply = await exports.sf(client,message,args); 
if(result) message.channel.send(str_tea+'<:nichosi:625116176212688917>');
};
  if (mc.toLowerCase().indexOf("нит ")!=-1){ message.channel.send(mc.replace(/нит/ig,'дат'));};
if (mc.toLowerCase().indexOf("дат ")!=-1){ message.channel.send(mc.replace(/дат/ig,'нит'));};
if (mc.startsWith("кто")&&mc.indexOf('?')!=-1){
   let str1= /кто \W{1,}/;
   let result=mc.match(str1);
   result=result[0].slice(4,-1);
   if(result.toLowerCase().startsWith("хару")) return message.reply(result+" не лалка");
   message.reply(result+' лалка');
};
  if(mc.toLowerCase().indexOf('коф')!=-1){
  let coffe=/коф\W{1,}/i;
  let result = mc.match(coffe);
  if(result) message.channel.send(result+" для лалок");
    /*
    let bot_mentioned=!!message.mentions.members&&!!message.mentions.members.get(client.user.id);
     console.log(bot_mentioned);
     if(bot_mentioned){
        
         let arr=mc.trim().split(' ');
         arr=await arr.filter(e=>e.indexOf('<@')==-1&&e.indexOf('>')==-1);

         let n=random(arr.length)+1;
          console.log(n);
         let reply_str='';
         for(let i=0;i<n;i++){
         let x=random(arr.length-1);
         reply_str+=' '+arr[x]; console.log(reply_str+x);
         };
         message.reply(reply_str);
     };
    */
    return;
};

}catch(err){console.log(err);};}};//
//module.exports.events.someEvent.RH_IGNORE=true;//add this line to ignore this event trigger
// ...

module.exports.sf3={ run:async(client,message)=>{try{
    //code to execut then event occurs
  if(message.author.bot) return;
  let channel_id=message.channel.id;
   console.log(message.content);
  if(!client.guild1){client.guild1={}};
if(!client.guild1[channel_id]){client.guild1[channel_id]={
   last_message_time:0
   ,communication_rate:0
   
};};

 let time_before= client.guild1[channel_id].last_message_time;
  
  let this_time=new Date().getTime();
  let tag = this_time-time_before;
  console.log(tag);
  let inc = (tag<60*1000)?1:-1;
  console.log(inc);
  client.guild1[channel_id].communication_rate=client.guild1[channel_id].communication_rate+inc;
if(client.guild1[channel_id].communication_rate>15){
   message.channel.send('Новый год пришол!!! <:nichosi:625116176212688917>');
   client.guild1[channel_id].communication_rate=-20;
};
  client.guild1[channel_id].last_message_time=this_time;
  console.log(client.guild1);
}catch(err){console.log(err);};}};//
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

module.exports.sf=async(client,message,args)=>{try{
           let str=args[random(args.length-1)];

  let result = await message.channel.fetchMessages({limit:100}).then((collected)=>{
  let arr=[];
  collected.map(m=>{
      if(m.content.indexOf(str)!=-1){
                  let m_arr=m.content.split(" "); 
                  let same = true;
                  let x='';
                  do{
                     let n = random(m_arr.length-1);console.log(n);
                      x = m_arr[n];  console.log(x);
                      same=(x==str)?true:false;
                   }while(same);
                  arr.push(x); 
      };
    
   });
    return arr;
}).catch(err=>console.log(err));

   return result[random(result.length-1)]+' '+str;
}catch(err){console.log(err);};};//

//let msg = msgs.find(m=>{m.reactions.cache.find(r=>r.users.fetch().then(u=>u.has(message.author.id) ) )})