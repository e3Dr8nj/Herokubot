//________________________________________INITIATION_PART__________________________________________
//_____________SETTINGS
//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
exports.active=false;//this module activate (deactivate module and all events,commands,boot in it if value is false)
exports.events={};// {} - activate/false - deactive
exports.commands={};// {} - activate/false -deactive
exports.boots={};// {} - activate/false -deactive
//exports.on=true;
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))};
//exports.m=require('./this_project_main.js'); //inculde this project`s main file if present (same directory)
//____________DICTIONARY//dictionary set, elements by accesed by module.exports.d.some_phase[client.lang] 
exports.d={
      profile_roles:['!color roles','!цветные роли']
     ,roles_count:['there roles count is  ','ролей ']
     ,need_msgs:['need count messages is ','необходимое колличество сообщений ']
};//d end
//___________ENVORIMENTAL//envorimental set, elements accesed by module.exports.e.some_envorimental
exports.e={
     time_limit:1000*60*60,
     some_envorimental:'value'  
};//e end
exports.system={
 
     //channel_name:'🔎info-help',
      channel_name:'⚛роли-и-каналы✺',
  //  prefix:'.',
     step:10,
     divider_roleList_word:'roles2',
   // main_command_name:'roles1',
    
     channelID:'301319871981944834',
    // part1:{ messageID:'490587062488006667'},
     messagesID:[],
     temple:{roles_arr_id:[]}
   
   
};

exports.digit={"0⃣":'0',"1⃣":'1' ,"2⃣":'2',"3⃣":'3',"4⃣":'4',"5⃣":'5',"6⃣":'6',"7⃣":'7',"8⃣":'8',"9⃣":'9',"🇹":'10',"🇱":'11',"🇪":'12',"🇳":'13' ,"🖤":'14',"🔚":'15',"🇬":'16',"🇭":'17',"🇮":'18',"🇯":'19'};
//_________________________________________INITIATION_PART_END___________________________________________

//_________________________________________EVENTS_PART_________________________________________________
//________________________e0
module.exports.events.messageReactionAdd={ on:true,  run:async(client,messageReaction,user)=>{try{
//if on this function triggers on deffined event
              module.exports.onclickEmoji(client,messageReaction,user,'add'); 
}catch(err){console.log(err);};}};//
//_______________________e1
module.exports.events.messageReactionRemove={ on:true,  run:async(client,messageReaction,user)=>{try{
//if on this function triggers on deffined event
              module.exports.onclickEmoji(client,messageReaction,user,'remove'); 
}catch(err){console.log(err);};}};//
//___________________________________________EVENTS_PART_END__________________________________________
//_________________________________________COMMANDS_PART_________________________________________________
//__________________c0
module.exports.commands.rpHelp={ on:true, aliase:'rcHelp', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command

              let str='['+client.prefix+'] [rcHelp] Цветные роли инфо';
              str+='['+module.exports.system.channel_name+']-название канала\n';
              str+='['+module.exports.system.divider_roleList_word+']-название ролей разделителей в дискорд списке ролей\n';
              str+='['+client.prefix+'rcPrint x'+']-запостить интерактивные списки ролей по x ролей в каждом\n команда также удаляет предыдущие списки \n';
              str+='['+client.prefix+'rcReload x'+']-обновить списки ролей поместив по x ролей в каждый\n';
              message.channel.send(str,{code:'ini'});

}catch(err){console.log(err);};}};//
//________________c1
module.exports.commands.postAll={ on:true, aliase:'rcPrint', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
                       if(module.exports.system.messagesID){
                           let t_msg={};  let id='';
                           for(let i=0;i<module.exports.system.messagesID.length;i++){
                            id=module.exports.system.messagesID[i];
                            t_msg=await message.channel.message.fetch(id);
                            await t_msg.delete();
                             console.log(id+' delete');
                            };
                       };//if
                       let num = Number(args[1]);
                       await module.exports.getRoleArr(client,message,0,module.exports.system.divider_roleList_word);
                       let roles_len =  module.exports.system.temple.roles_arr_id.length;
                       let m_d1 =await message.reply(module.exports.d.roles_count[client.lang]+roles_len);
                       let num2 = Math.ceil(roles_len/num);
                       let m_d2=await message.reply(module.exports.d.need_msgs[client.lang]+num2);
                       
                       let msg='';  module.exports.system.step=num; let msg_arr_id=[];
                       for(let i=0;i<num2;i++){
                             msg=await message.channel.send('msg');
                             msg_arr_id.push(msg.id);
                       };//for end
                       module.exports.system.messagesID=msg_arr_id.slice();
                       await module.exports.autoreload(client,message,['',num]);
                       await delay(1000);
                       await m_d1.delete(); await m_d2.delete();
}catch(err){console.log(err);};}};//
//________________c2
module.exports.commands.rolesProfile={ on:true, aliase:'rcReload', run:async(client,message,args)=>{try{
//if on this function triggers on deffined command
                       //message.channel.send('ok');
                       return module.exports.run(client,message,args);
}catch(err){console.log(err);};}};//
//___________________________________________COMMANDS_PART_END___________________________________________
//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots.someBoot={ on:true,  run:async(client)=>{try{
//if on this function triggers on ready event (with some delay)
             client.lang=1;
             return module.exports.onGuildCreate(client);
}catch(err){console.log(err);};}};//

//___________________________________________BOOTS_PART_END______________________________________________

//_________________________________________SUB_FUNCTIONS_________________
//_______________________________FOR BOOTS____
//________________________b_sf0__

exports.onGuildCreate=async(client)=>{try{
//_______________________
     console.log('ogc');
     let v_chnl = client.channels.cache.find(ch=>ch.name==module.exports.system.channel_name);
     let msg_arr=await v_chnl.messages.fetch({limit:100}).then(collected=>{return collected;}).catch(err=>console.log(err));
             module.exports.system.messagesID=[];
             let color_list=false;
             msg_arr.map(m=>{ 
              if(m.embeds&&m.embeds[0]&&m.embeds[0].fields&&m.embeds[0].fields[0]){
                  client.emit('message',m);
                  console.log(m.embeds[0].fields[0].name);
                  color_list=(m.embeds[0].fields[0].name.indexOf(module.exports.d.profile_roles[client.lang])!=-1)&&(m.author==client.user);
                  if(color_list){
                    console.log('color');
                  module.exports.system.messagesID.push(m.id);
                  console.log(m.id+' color list');
                 };//if has embeds
               };//if end
             });//map end
//___________________________add
        await exports.getRoleArr(client,'',[0,0],module.exports.system.divider_roleList_word);
        return;
//________________________

}catch(err){console.log(err);};};//onGuildCreate end
//________________________________

//_____________________________________FOR COMMANDS____________________
//______________________c0
exports.run=async(client,message,args)=>{try{
     // message.channel.send('ok1');
      return await module.exports.autoreload(client,message,args);

}catch(err){console.log(err);};};//exports.run end
//___________________c1
exports.reset=async(client,message,args)=>{try{
//message.channel.send('st6');
   let step = module.exports.system.step;
      let counter = Number(args[1]);
      let count = [0+(step*counter),0+(step*counter)+step];
    //  console.log(count);
      let roleList =  await module.exports.getRoleList(client,message,count);
//message.channel.send('st7');
      let rolesCount=roleList[1];
      roleList=roleList[0]; 
      if(roleList==' '){roleList='no data';};

      let msg = await message.channel.messages.fetch(args[2]);
       await msg.reactions.removeAll().catch(error => console.error('Failed to clear reactions: ', error));
      
      msg = await msg.edit({
      embed:{
         title:'',
         fields:[{name:module.exports.d.profile_roles[client.lang],value:roleList}]
       }
      });
          let j=0;
          for(let key in module.exports.digit){
                      if(j==rolesCount) continue;
                      await msg.react(key); j++;
                };
          
}catch(err){console.log(err);};};//reset end
//___________________c2
exports.getRoleArr=async(client,message,count,keyWord)=>{try{
     
     let roles_arr=[];
     let bool=false;
     let roles_arr2= await client.guilds.cache.get(client.SERVER_ID).roles.cache;
     
     let pos=[];
     roles_arr2.map(r=>{if(r.name==keyWord){ pos.push(r.position);}; return;});
         console.log('primitive '+pos);
     pos = pos.sort(function(a, b){return a-b}).reverse();
         console.log('sorted '+pos);
     roles_arr2.map( r=>{
               if(r.position<pos[0]&&r.position>pos[1]){bool=true;};
               if(bool) {roles_arr.push(r); }   
               bool=false;        
                             });
     roles_arr = roles_arr.sort(function(a, b){return a.position-b.position}).reverse();//---
     module.exports.system.temple.roles_arr_id=await roles_arr.map(r=>r.id);
     roles_arr = roles_arr.slice(count[0],count[1]);
     
     return  roles_arr;
}catch(err){console.log(err);};};//getRoleArr end;
//_________________c3
exports.getRoleList=async(client,message,count)=>{try{
   let str='';
   str+='\n';
   let roles_arr  = await module.exports.getRoleArr(client,message,count,module.exports.system.divider_roleList_word);
   let d_arr = [];
   for(let key in module.exports.digit){ await d_arr.push(key);};
   if(roles_arr.length>20) roles_arr.length=20;
   for(let i=0;i<roles_arr.length;i++){str+=d_arr[i]+" <@&"+roles_arr[i].id+">  \n"};
 
   str+='';
   return [str,roles_arr.length];
}catch(err){console.log(err);};};//getRoleList end

//exports.create=async(client,message,args)=>{ await message.channel.send('test'); };

//______________________c4
exports.getRoleEmojiArr=async(client,msg)=>{try{

   let emb = msg.embeds[0].fields[0].value;
   let roles_arr = emb.split('\n');
   roles_arr=roles_arr.map(e=>e.replace('>','').trim().split(' <@&'));
    let obj = {};
   await  roles_arr.map(e=>obj[e[0]]=e[1]);
    //console.log(obj);  
   return obj;

 }catch(err){console.log(err);};};//getRoleEmojiArr end

//_____________________c5
/*
exports.onclickEmoji=async(client,messageReaction,user,action)=>{try{

     
      if(!messageReaction) return;
       if ( module.exports.system.messagesID.indexOf(messageReaction.message.id)==-1) return;
     console.log('roles add/remove action');
   
     let roleEmojiArr = await  module.exports.getRoleEmojiArr(client,messageReaction.message);
     let member =messageReaction.message.guild.members.get(user.id);
     let roleID = await roleEmojiArr[messageReaction.emoji.name];
     let role = messageReaction.message.guild.roles.get(roleID);
     if(!role){return console.log('this role is apsend');};
     if(member.user.id==client.user.id) return;
     if(action=='remove'){ member.removeRole(role);  }else{member.addRole(role);};
    return;
     
     
}catch(err){console.log(err);};};//onclickEmoji end
*/
//_______________________________________test
exports.onclickEmoji=async(client,messageReaction,user,action)=>{try{
 async function f(){
     
       if ( module.exports.system.messagesID.indexOf(messageReaction.message.id)==-1) return;
   console.log('emoji_role');
     //if(messageReaction.message.id!=module.exports.system.part1.messageID) return;
     let roleEmojiArr = await  module.exports.getRoleEmojiArr(client,messageReaction.message);
     let member =messageReaction.message.guild.members.cache.get(user.id);
   
     let roleID = await roleEmojiArr[messageReaction.emoji.name];
     let role = messageReaction.message.guild.roles.cache.get(roleID);
     if(!role){return console.log('this role is apsend');};
   
     if(member.user.id==client.user.id) return;
    // if(member.roles.get(roleID)){ member.removeRole(role);  }else{member.addRole(role);};
       if(action=='remove'){ 
        if(member.roles.cache.get(role.id)) {console.log('rh');member.roles.remove(role); };
       }else{
                 
if(module.exports.e[user.id]&&exports.e[user.id]>new Date().getTime()) return console.log('due time limit'+exports.e[user.id]);
                 //console.log(module.exports.system.temple.roles_arr_id);
                if(module.exports.system.temple.roles_arr_id.length!=0){
                      let roles_arr_id=module.exports.system.temple.roles_arr_id.slice();
                   async function check(){  
                      for(let i=0;i<roles_arr_id.length;i++){
                               //console.log(roles_arr_id[i])
                               let item_role=messageReaction.message.guild.roles.cache.get(roles_arr_id[i]);
                               if(item_role && item_role.id!=role.id&&member.roles.cache.get(roles_arr_id[i])){ member.roles.remove(item_role).then(console.log(role.name+'  add')).catch(err=>console.log(err+'222 '+role.name));}; 
                       };//for end
                     };//ch
                   await check();
                };
           
                let res = await member.roles.add(role).then(r=>{exports.e[user.id]=new Date().getTime()+exports.e.time_limit;}).catch(err=>{console.log(err+'111');return 2;});
               await console.log(role.name+' '+res);
//await delay(1000);
         
//await module.exports.e[user.id]=1;
                
                };
             //console.log(module.exports.system.temple.roles_arr_id);
     return;
     //if member has role remove it else add
 };
 return await f();
     
 }catch(err){console.log(err);};};//onclickEmoji end
//____________________________________________test end

exports.autoreload=async(client,message,args)=>{try{ 

if(args[1]&&!isNaN(args[1])){module.exports.system.step =Number(args[1])};
  try{

   if(module.exports.system.messagesID.length==0) return;

let rev = await module.exports.system.messagesID.reverse();//---
   for(let i =0; i<rev.length;i++){//---90221
      
      let channel = message.guild.channels.cache.find(ch=>ch.name==module.exports.system.channel_name);
      args=[' ',i,module.exports.system.messagesID[i]];
      await module.exports.reset(client,message,args);
    };//for end
    module.exports.system.step =10;

    return   module.exports.onGuildCreate(client);
  }catch(err){console.log(err);};    

}catch(err){console.log(err);};};//autoreload end

