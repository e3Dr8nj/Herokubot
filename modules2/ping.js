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
  bot_name:'l'
  ,bot_info:' l'
}

//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
    //code to execut bot on loading
    console.log("I am ready!");
  
//--------------------
let delay =(duration)=>new Promise( resolve=> setTimeout(resolve,duration) );
let default_delay = (4*60*60*1000)+(10 *1000);
let hour_delay=(1*60*60*1000);


async function process(){
      
       let channel = client.channels.get('460106434135457792');
       
       await channel.send('=bump'); await delay(2000);
       await channel.send(';;bump'); await delay(2000);
       await channel.send('dlm!bump'); await delay(2000);
       await channel.send('!disboard bump'); await delay(2000);
  /*
      await channel.send('s.up');
  let filter=(m)=>((m.embeds[0]&&m.embeds[0].author&&m.embeds[0].author.name)&&( m.embeds[0].author.name.indexOf('до следующего Up')!=-1 || m.embeds[0].author.name.startsWith('Сервер Up'))  );
       let x=await channel.awaitMessages(filter,{max:1,time:30*1000,errors:['time']}).then(collected => {return collected.first().embeds[0].author.name; }).catch(err=>{console.error(err); return 'nothing';});
         console.log('awaited '+x);
*/
let x='nothing';
      if(x=='nothing'){ console.log('x is nothing awaiting for an hour delay time');  await delay (hour_delay);  return process(); }else
    
        if(x.startsWith('Сервер Up')){ console.log('x is Sequrity Code awaiting for default time '); await delay (default_delay);  return process();} else
      if(x.indexOf('до следующего Up')!=-1 ){
          let time_arr = x.trim().split('до');
          time_arr = time_arr[0].split(':');
          console.log(time_arr);
          let hours =Number(time_arr[0]);
          let minutes = Number(time_arr[1]);
          let seconds =Number(time_arr[2]);
          console.log('hours is '+ hours +'  minutes is '+minutes+' seconds is '+seconds);
          let random =(max)=>{ return Math.floor(Math.random()*max);};
          let rnd_sec=await random(60*10);
          let bump_delay = (hours*60*60*1000)+(minutes*60*1000)+((seconds+15+rnd_sec)*1000);
          console.log('x is Next Bump aviable awaiting for bump delay time '+ bump_delay);
          await delay (Number(bump_delay));  return process();
       };//end if Next..
 };//process end
async function Void(){
      await delay(10*1000);
      return process();
};//Void end
 Void();
  
//---------------------
      
   
}catch(err){console.log(err);};}};//
//module.exports.boots.someBoot.RH_IGNORE=true;//add this line to ignore this command
//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};

module.exports.commands.someCommand={aliase:'send', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  if(message.mentions){
   let user = message.mentions.users.first();
   let cnt=message.content.split('|')[1]; console.log(cnt);
   if(cnt) try{user.send(cnt).catch(err=>console.log(err));}catch(err){console.log(err);};
};
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command
// ...


//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};
module.exports.sub_ev01={ run:async(client,message)=>{try{
   //code to execut then this command triggered

   if(message.channel.type=='dm' || message.author.bot||message.author==client.user) return;
  console.log('ddd');
   
   console.log(message.content);
   if(!message.content.startsWith('!')) return;
   let nc = message.content.slice(1);
   
   let msg = await message.channel.send('@septapus comic '+nc);
   await msg.delete();
   await message.delete();

   
}catch(err){console.log(err);};}};//
//module.exports.commands.someCommand.RH_IGNORE=true;//add this line to ignore this command
// ...

module.exports.events.message={ on:true,run:async(client,message)=>{try{
 //__
     // module.exports.sub_ev01.run(client,message);
  if(message.channel.type!='dm' ){
    if(message.content.startsWith('^rewire')&&message.author.bot){
      let str2 = message.content.trim().split(" ");
      str2.shift();
      str2=str2.join(" ");
     if(str2) message.channel.send(str2);
     return;
     };
  };
//_
     if(message.author.bot) return;
     if(message.channel.type=='dm'){
  let channel=client.channels.get("653004216926994452");
  if(!channel) return;
  //let cnt=(message.content)?message.content:' ';
      let cnt=message.content;
  let emb=(message.embeds[0])?message.embeds[0]:false;
  let mmb=channel.guild.members.get(message.author.id);
  mmb=(mmb)?mmb:mmb.id;
  if(cnt) channel.send('DM '+mmb+" : "+cnt);
  if(emb) channel.send('DM '+mmb+" : ",{embed:emb});
       
       
if(!cnt) return;
let invite=cnt.indexOf("https://discord.gg/")!=-1;
let guild_mmb=channel.guild.members.get(message.author.id); if(!guild_mmb) {return;};
if(!guild_mmb.bannable) return;
       if(!invite) return;
await guild_mmb.ban(1).then(() =>{channel.send(guild_mmb+" забанен")}).catch(err=>console.error(err));    return;};

}catch(err){console.log(err);};}};//
//module.exports.events.someEvent.RH_IGNORE=true;//add this line to ignore this event trigger
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
module.exports.events.guildMemberUpdate={ on:true,run:async(client,oldMember,newMember)=>{try{

    //____
 if(oldMember.roles.find(r=>r.name=="Muted")&&(!newMember.roles.find(r=>r.name=="Muted"))){
         await delay(1000);
        if(!newMember) return;
        newMember.roles.map(r=>{if(r.name!='Muted'&&r.name !== '@everyone')
            {
         console.log(r.name);
         newMember.removeRole(r.id).catch(console.error);
            }
       });
            
    };
//____
 
    if(!oldMember.roles.find(r=>r.name=="Muted")&&(newMember.roles.find(r=>r.name=="Muted"))){
         await delay(1000);
        if(!newMember) return;
        newMember.roles.map(r=>{if(r.name!='Muted'&&r.name !== '@everyone')
          {
        console.log(r.name);
newMember.removeRole(r.id).catch(console.error);
          }
          });
          
    };

}catch(err){console.log(err);};}};//