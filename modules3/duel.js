//________________________________________INITIATION_PART__________________________________________
//_____________SETTINGS
exports.active=true;//this module activate (deactivate module and all events,commands,boot in it if value is false)
exports.events={};// {} - activate/false - deactive
exports.commands={};// {} - activate/false -deactive
exports.boots={};// {} - activate/false -deactive
exports.delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))};
//exports.m=require('./this_project_main.js'); //inculde this project`s main file if present (same directory)
//____________DICTIONARY//dictionary set, elements by accesed by module.exports.d.some_phase[client.lang] 
exports.d={

      duel:['Duel!','Дуэль!']//aliase
     ,fire:['Fire!','Огонь!']
     ,field1:[' ','☠ ']
      ,field:['[lose...]','[трагически погибает...]']
     ,recovery:['[recovery some minutes later ','[воскрешение через ']
     ,recovered:['is recovered now','Воскрес  <:86:589907989339832339>']
     ,recovered_both:['is recovered now','Воскресли  <:86:589907989339832339>']
     ,start_phrase:['Get ready your guns for buttle.','Дуэлянты, зарядите ваши псевдоревольверы.']
     ,minutes:['minutes]','минут]']
     ,time_is_out:['Time awaiting reactions is out','Время ожидания реакции истекло']
     ,aganist:[' 💥 🔫  ',' <:29:589907121370431592>     💥 🔫  ']
     ,aganist_fault:[' 💥 🔫  ',' <:37:589907225737428992>     💥 🔫  ']
     ,aganist_misfire:['  🔫  ',' <:111:589907827565264906>      🔫  ']
     ,aganist_evade:[' 💥 🔫  ',' <:86:589907989339832339>      💥 🔫  ']
     ,fault:[' `fault` ',' `промах` ']
     ,misfire:[' `misfire` ',' `осечка` ']
     ,evade:[' `evade` ',' `уклонился` ']
     ,both:[' `you both tired me!` ',' `Вы мне надоели` ']
     
};//d end
//___________ENVORIMENTAL//envorimental set, elements accesed by module.exports.e.some_envorimental
exports.e={
     image_url:'https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/30EMZfei1z7xK.gif'
     ,delay_ban_time:30//sec
     ,react_awaiting_time:1//min
     ,ban_time:60//min
     ,channel_id:'416255611819524097'
     ,ban_role_name:'Muted'  
     
};//e end
exports.lang=1;
//___________TEMPRARY
exports.t={
   banned:{
//[user_id]:{role1_id,role2_id,role3_id...}
   }
};//t end
//___________
//_________________________________________INITIATION_PART_END___________________________________________
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events.someEvent={ on:true,  run:async(client,event_parametrs)=>{try{
//if on this function triggers on deffined event
              

}catch(err){console.log(err);};}};//
//_________e1
module.exports.events.guildMemberAdd={ on:true,  run:async(client,member)=>{try{
//check if member has banned add super_ban role
                   //    return;
/*
            console.log(client.duel);
            if(client.duel&&client.duel[member.user.id]&&client.duel[member.user.id].length!=0){
                let ban_role = member.guild.roles.find(r=>r.name==module.exports.e.ban_role_name); 
                console.log('banned mmb come');
                member.addRole(ban_role);
            };//if end
*/            
}catch(err){console.log(err);};}};//
//___________________________________________EVENTS_PART_END__________________________________________
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands.duelStart={ on:true, aliase:module.exports.d.duel[module.exports.lang], run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
// if(message.channel.id!=exports.e.channel_id) return;
  if(!client.duel_count) client.duel_count=0;
  if(client.duel_count!=0) return message.reply('Дуэль уже идет.');
  async function a(client,message){
    message.channel.send('n '+client.duel_count);
   if(!client.duel.active){ return;};
   let emb={
          description:module.exports.d.start_phrase[client.lang]
           ,image: {url:module.exports.e.image_url}
          };
   let emoji = '🔫';
   let msg = await message.channel.send({embed:emb});
   await msg.react(emoji);
   await module.exports.delay(1000);
    let id1=''; let i=0;
    let filter=(reaction,user)=>{ if(i==0){id1=user.id};console.log(i+' user.id '+user.id+' id1 '+id1);i++; return reaction.emoji.name==emoji & (i==1||id1!=user.id) ;};
    let resolve = await msg.awaitReactions(filter,{max:2,time:module.exports.e.react_awaiting_time*1000*60,errors:['time']}).then(collected=>{
      return collected.last();}).catch(err=>{console.log(err);return false;});
   
   if(!resolve) {message.channel.send(module.exports.d.time_is_out[client.lang]); return client.duel_count=0;};

   let mmbs=[];
   await resolve.users.map(u=>{
         if(u.id!=client.user.id){
           let mmb=message.member.guild.members.get(u.id);
           mmbs.push(mmb);
         };
   ;});
  
  await message.channel.send(module.exports.d.fire[client.lang]);
  await module.exports.delay(1000);
  let rnd = Math.floor(Math.random()*2);
  await module.exports.delay(1000);
  
  let loser = mmbs[rnd]; 
  let winner =(rnd==1)?mmbs[0]:mmbs[1];
  let rnd_game=Math.floor(Math.random()*5);
  //message.channel.send(rnd+" "+rnd_game);
  client.duel_count++;
  if (Number(client.duel_count)<7&&rnd_game==3){rnd_game=2;};
  //message.channel.send(client.duel_count);
  if (Number(client.duel_count)>7){rnd_game=3;};
  //rnd_game=3;
  if(rnd_game==0) {
  await message.channel.send(loser+module.exports.d.aganist_fault[client.lang]+winner+' '+module.exports.d.fault[client.lang]);
  return a(client,message);
  };//if field
  if(rnd_game==1) {
  await message.channel.send(loser+module.exports.d.aganist_misfire[client.lang]+winner+' '+module.exports.d.misfire[client.lang]);
  return a(client,message);
  };//if field
  if(rnd_game==2) {
  await message.channel.send(module.exports.d.evade[client.lang]+loser+module.exports.d.aganist_evade[client.lang]+winner);
  return a(client,message);
  };//if field
  if(rnd_game==3) {
    client.duel_count=0;
  //await message.channel.send(loser+' '+winner+' '+module.exports.d.both[client.lang]);
      let lia = message.guild.members.get('436917208560435211');
    lia=(lia)?lia:' ';
 await message.channel.send(winner+loser+'<:29:589907121370431592><:29:589907121370431592>    💥 🔫'+lia+" "+module.exports.d.both[client.lang]);
 
  await module.exports.mute(client,message,loser);
  await module.exports.delay(30*1000);
  await module.exports.mute(client,message,winner);
  await module.exports.delay(module.exports.e.ban_time*1000*60);
  await message.channel.send(loser+' '+winner+' '+module.exports.d.recovered_both[client.lang]);
   return;
 // return module.exports.commands.duelStart.run(client,message);
  };//if field
    client.duel_count=0;
  await message.channel.send(loser+module.exports.d.aganist[client.lang]+winner);
 let x=module.exports.e.delay_ban_time;
      let str=loser+module.exports.d.field1[client.lang]+'```ini\n '+ module.exports.d.field[client.lang];
      let msg2 =await message.channel.send(str+"["+x+"]"+"\n```");
      while(x!=0){
        //console.log(x);
         await module.exports.delay(1000); x--;
         await msg2.edit(str+"["+x+"]"+"\n```");
      };
       x=module.exports.e.ban_time;
     await message.channel.send("```ini\n"+module.exports.d.recovery[client.lang]+" "+x+" "+module.exports.d.minutes[client.lang]+"\n```");
     await module.exports.mute(client,message,loser);
     await module.exports.delay(module.exports.e.ban_time*1000*60);
     await message.channel.send(loser+' '+module.exports.d.recovered[client.lang]);
  return;};
  a(client,message);
    return;
/*
     await message.channel.send('.rewire \помолчика '+loser+' 40м');
     await module.exports.delay(module.exports.e.ban_time*1000*60);
     await message.channel.send(loser+' '+module.exports.d.recovered[client.lang]);

//_____________________
   
   if(!client.duel){client.duel={}};
   client.duel[loser.user.id]=[];
    let roles_arr=[];
//____
    let key_arr= loser.roles.keyArray().slice();
    for(let i=0;i<key_arr.length;i++){
        
        await module.exports.delay(3000);
        await roles_arr.push(key_arr[i]);
        loser.removeRole(message.channel.guild.roles.get(key_arr[i]));
    };//for
//__________

     client.duel[loser.user.id]= await roles_arr.slice();
   console.log('all roles deleted from mmb');
    await module.exports.delay(1000);
    let ban_role = message.guild.roles.find(r=>r.name==module.exports.e.ban_role_name); 
    if(!!ban_role){await loser.addRole(ban_role); console.log('ban role was added to mmb');};
//___________
    
    let ban=true;
    await module.exports.delay(x*1000*60);
    await loser.removeRole(ban_role); await console.log('ban_role removed');
    await module.exports.delay(1000);
   // console.log(client.duel);
  // await client.duel[loser.user.id].map(r_id=>{let role = message.guild.roles.get(r_id); if(role){loser.addRole(role);};});
//__
      key_arr= client.duel[loser.user.id];  console.log(key_arr);
    for( i=0;i<key_arr.length;i++){ 
          console.log(key_arr[i]);
         let role=message.channel.guild.roles.get(key_arr[i]);
        await module.exports.delay(3000);
        loser.addRole(role);
    };//for
//__
    await console.log('all roles recovered');
    client.duel[loser.user.id]=[];
    await message.channel.send(loser+' '+module.exports.d.recovered[client.lang]);
//_______________
*/
//____________________
}catch(err){console.log(err);};}};//
//___________________c1
module.exports.commands.duelOn={ on:true, aliase:'дуэлиРазрешить!', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
              client.duel.active=true;
              message.channel.send('Дуэли разрешены!');
              return;
}catch(err){console.log(err);};}};//
//___________________c2
module.exports.commands.duelOff={ on:true, aliase:'дуэлиЗапретить!', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
              client.duel.active=false;
              message.channel.send('Дуэли запрещены!');
              return;
}catch(err){console.log(err);};}};//
 //_______________test
module.exports.commands.test={ on:true, aliase:'тест2', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
             
              //message.channel.send('\помолчика');
              return;
}catch(err){console.log(err);};}};//
//___________________________________________COMMANDS_PART_END___________________________________________
//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots.someBoot={ on:true,  run:async(client)=>{try{
//if on this function triggers on ready event (with some delay)
              

}catch(err){console.log(err);};}};//

//___________________________________________BOOTS_PART_END______________________________________________
//___________________________SUB_COMMANDS
module.exports.boots.someBoot={ on:true,  run:async(client)=>{try{
//if on this function triggers on ready event (with some delay)
           client.duel={}; client.duel.active=true;

}catch(err){console.log(err);};}};//
//___________________________
module.exports.description=async(client)=>{try{
  let str=client.prefix+module.exports.d.duel[client.lang]+' Начать дуэль, бот ожидает нажатие на реакцию револьвера двумя дуэлянтами после чего начинаетс дуэль вследствии которой один из них отправляется в бан.';
}catch(err){console.log(err);};};//
//___________________________

module.exports.mute=async(client,message,mmb)=>{try{
        let msg = await message.channel.send('^rewire \\мут '+mmb+' '+module.exports.e.ban_time+'м');
        msg.delete();
        return;
}catch(err){console.log(err);};};//
//___________________________