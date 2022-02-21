exports.logs=true;
//________________________________________INITIATION_PART__________________________________________
let s_up=false;
let state_ini={
   bumped:false
   ,suped:false
   ,liked:false
}
let state ={}
//_____________SETTINGS

let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))};

//_________________PART MANAGER (OPCIONAL)
//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
//exports.RH_IGNORE_COMMANDS=true;//add this line to ignore all commands from this module
//module.exports.RH_BOOTS=true;//add this line to ignore all boots from this module
//module.exports.RH_IGNORE_EVENTS=true;//add this line to ignore all events from this module
//module.exports.RH_IGNORE_EVENTS_PRIMITIVE=true;//add this line to ignore all events_primitive from this module
exports.active=true;//this module activate (deactivate module and all events,commands,boot in it if value is false)
exports.events={};// {} - activate/false - deactive
exports.commands={};// {} - activate/false -deactive
exports.boots={};// {} - activate/false -deactive
//exports.m=require('./this_project_main.js'); //inculde this project`s main file if present (same directory)
//____________DICTIONARY//dictionary set, elements by accesed by module.exports.d.some_phase[client.lang] 
exports.d={
      some_phase:['on_lang0','on_lang1']
};//d end
//___________ENVORIMENTAL//envorimental set, elements accesed by module.exports.e.some_envorimental
exports.e={
 
    tag_time:(1000*60*60*4)-(1000*1)
     //tag_time:1000*60*1
    ,chnl_name:'🔘▸spam-b◉t'
    ,role_name : '💥'
    ,role_id:'400674484819984394'
};//e end
//_________________________________________INITIATION_PART_END___________________________________________
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events.messageCreate={ on:true,  run:async(client,message)=>{try{
//if on this function triggers on deffined event
             
             
              if(!message.channel.name.startsWith(module.exports.e.chnl_name)) return;
/*
              //if(message.embeds[0]) console.log(message.embeds[0]);
             // if(message.embeds[0]&&message.embeds[0].author&&message.embeds[0].author.name&&( message.embeds[0].author.name.startsWith('Сервер Up'))) { s_up=true;return;};
*/
//----
             
//----
             
                if((message.author.bot&& message.embeds[0]&&message.embeds[0].title&&message.embeds[0].title.startsWith('Сервер Up'))||(message.content=='sup test'&&!message.author.bot )||(message.author.id=='464272403766444044')){ 
                   client.suped=true
                   state.suped=true
                  if(!state.liked)  message.channel.send('а теперь /like  <:17:925640924451713044> ');
                   return;
};

              if(message.content.startsWith('!bump')){
                 state=state_ini
                 return;};
              if(!message.embeds[0]) return;
              if(message.embeds[0].description&&message.embeds[0].description.startsWith(':alarm_clock: Next bump point will be available')){
                 message.channel.send('<:54:589907518080286731>'); return;
               };
              if(message.embeds[0].description&&message.embeds[0].description.startsWith('[Top Discord Servers]') && message.author.bot){
           
//put data next bump time to db
// change channel name
//set awaiter to change channel name
              state.bumped=true

                
               
                let time = new Date();
                let msc=time.getTime()+module.exports.e.tag_time;
                let newTime = new Date(msc);
                let time_msc=newTime.getTime();
/*
                console.log(newTime.toString());

                await  module.exports.changeChnlName(client,message.channel,'default');
                
                await module.exports.setAwaiter(client,message.channel,delay_time);
                message.channel.send('<:28:589907105717157909>'); 
               
                await delay(1000);
                client.suped=false;
*/
                message.channel.send('<:17:925640924451713044>'); 
                
               // client.suped=false;
                await  module.exports.changeChnlName(client,message.channel,'default');//change channel name to default
                await module.exports.updateTime(client,message,time_msc);
                await module.exports.setAwaiter(client,message.channel,module.exports.e.tag_time,time_msc);
                if(!state.suped) message.channel.send('а теперь напиши */up* пожалуйста <:17:925640924451713044> ');
               
                return;

                };

}catch(err){console.log(err);};}};//

//___________________________________________EVENTS_PART_END__________________________________________
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands.someCommand={ on:true, aliase:'bumped', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
             let emb={description:'[Top Discord Servers]'};
              message.channel.send({embed:emb});

}catch(err){console.log(err);};}};//

//___________________________________________COMMANDS_PART_END___________________________________________
//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots.someBoot={ on:true,  run:async(client)=>{try{
//if on this function triggers on ready event (with some delay)
          await delay(5*1000);
          let b_channel=client.guilds.cache.get(client.SERVER_ID).channels.cache.find(ch=>ch.name.startsWith(module.exports.e.chnl_name));
          if(!b_channel){console.log('no channel'); return;};
          client.next_bump_time = await module.exports.getTime(client);
          console.log("client.next_bump_time is "+ client.next_bump_time);
          client.bumping=false;
          client.bumped=false;
          client.suped=false;
          return;
}catch(err){console.log(err);};}};//

//___________________________________________BOOTS_PART_END______________________________________________
//_______________________________________SUB_FUNCTION_______________________
//___________sf0
 exports.updateTime=async(client,message,time)=>{try{
          if(exports.logs) console.log('updateTime');
          let d1 = new Date(); d1=d1.toUTCString(); console.log('current time '+d1);
          let ch_ping = await client.channels.cache.find(ch=>ch.name=='logbot');
          ch_ping.send("bump_time : "+time);
          client.next_bump_time=time;
          console.log('client.next_bump_time set: '+client.next_bump_time);
          return;
//_________________________
}catch(err){console.log(err);};};//insertTime end

//_____________sf1
exports.getTime=async(client)=>{try{
      
         if(exports.logs) console.log('run getTime');
         let ch_ping = await client.channels.cache.find(ch=>ch.name=='logbot');
         let resolve = await ch_ping.messages.fetch({limit:100}).then(messages => {
             let msgs =  messages.filter(m=>m.content.startsWith('bump_time'));
             return msgs.first().content.match(/\d{3,}/)[0];
         }).catch(console.error);
       console.log('getTime get resolve: '+ resolve);

          client.next_bump_time=resolve;
          let current_time=new Date().getTime();
          let i_time=0; let tag=0;
//------
             await delay(1000);
              i_time=resolve;
              console.log('next bump time '+i_time);
              tag=Number(i_time)-Number(current_time);
              console.log('current time '+current_time+' table time '+i_time+' tag '+tag);
 
             let chnl = await client.guilds.cache.get(client.SERVER_ID).channels.cache.find(ch=>ch.name.startsWith(module.exports.e.chnl_name));
             if(resolve==0) tag=0;
             if(tag<=0){ 
                console.log('time is out');     
                module.exports.setAwaiter(client,chnl,0,client.next_bump_time);
              };
               if(tag>0){ 
                console.log('time is not come ');     
                module.exports.setAwaiter(client,chnl,tag,client.next_bump_time);
              };  
             resolve=(resolve)?resolve:0;
             return resolve;
//------------
}catch(err){console.log(err);};};//getgetTime end

//___________sf2
 exports.changeChnlName=async(client,chnl,newTime)=>{try{ console.log(newTime);
                if(exports.logs) console.log('run changeChnlName');
                 let chnl = await client.guilds.cache.get(client.SERVER_ID).channels.cache.find(ch=>ch.name.startsWith(module.exports.e.chnl_name));   
                let str='';
                 if(newTime=='default'){
                    str= await module.exports.e.chnl_name;
                
                 }else if(newTime=='past'){
                    str=module.exports.e.chnl_name+'❗bump';
                  // let role = client.guilds.cache.get(client.SERVER_ID).roles.cache.find(r=>r.name==module.exports.e.role_name);
                    let role = client.guilds.cache.get(client.SERVER_ID).roles.cache.get(module.exports.e.role_id);
                    role=(!role)?'':role.toString();
                    
                   // chnl.send(role+' го бампить!<:28:589907105717157909> !bump   s.up  /like');
                      chnl.send(role + '**го бампить!** <:17:925640924451713044>  \n \n`!bump`\n`/up`\n`/like`')
                 // s_up=false;
                };
                await chnl.edit({name:str}).catch(err=>console.log(err));
               
}catch(err){console.log(err);};};// exports.changeChnlName end
//___________sf2
 exports.setAwaiter=async(client,chnl,delay_time,time)=>{try{
                if(exports.logs) console.log('run awaiter');
                delay_time=(delay_time!=0)?delay_time:1000;
                await delay(delay_time);
               if(client.next_bump_time == time)  return module.exports.changeChnlName(client,chnl,'past');
}catch(err){console.log(err);};};// exports.setAwaiter end

//draper pressure laura brehm

//draper pressure laura brehm
/*
boot -get time 
0
1 -check tag <
   0
   1 -set alarm
alarm (time)
   set time delay (tag)
  if(client.next_bump_time = =time) change channel name

   
*/