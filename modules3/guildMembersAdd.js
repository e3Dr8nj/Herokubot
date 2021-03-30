exports.rh={
//disable:true,
  commands:{disable:false},
  boots:{disable:false},
  events:{disable:false},
  events_primitive:{disable:false}
};

exports.active=true;
exports.on=true;
//___________________________________________________CONFIG
exports.system={
  ROLE_TIME_NAME:'ботилинебот',
  ROLE_NAME:'мимопроходил',
  ROLE_SPAMER_NAME:"точнобот",
 GUEST_CHANNEL_ID:'825471608658329671',
  BOT_CHANNEL_ID:'825473489619517471',
 SERVER_ID:'622954155077533696'
};//
exports.e={
  channels_exceptions:[exports.system.GUEST_CHANNEL_ID,exports.system.BOT_CHANNEL_ID]
//id`s of channels where ?test works, guest room, and outoftimeroomm
 };

//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};


//_________________PART MANAGER (OPCIONAL)
//exports.RH_IGNORE_TOTAL=true;//add this line to ignore this module 
exports.RH_IGNORE_COMMANDS=false;//add this line to ignore all commands from this module
module.exports.RH_BOOTS=false;//add this line to ignore all boots from this module
module.exports.RH_IGNORE_EVENTS=false;//add this line to ignore all events from this module
module.exports.RH_IGNORE_EVENTS_PRIMITIVE=false;//add this line to ignore all events_primitive from this module

//___________

exports.phrases={
 enter_phrase: 'Привет! Чтобы увидеть каналы сервера, пожалуйста, в течение 15 минут пройди простой тест: нажми на реакцию, похожую на картинку ниже.',
 wrong_phrase:' Не туда тыцкаешь!',
 timeout_phrase:' Ой, ну я не могу ждать тебя вечность!',
 waitingForRole_phrase:' Почитай еще пару минут о сервере и добро пожаловать на чаепитие.) ',
 tryAgain_phrase:' Попробуй пройти тест еще раз',
 ifFail_phrase:' Перезайди на сервер или напиши что-нибудь в этот канал. ',
 fail_phrase:[
            ' Ты что, бот? На картинке совсем не #wrong_answer ?.. :50: ',
             ' Вас раскрыли! #wrong_answer с #right_answer  путают только боты. Даже ежики не путают!'
              ],
  ifFail_phrase:' Перезайди на сервер (инвайт отправлен в лс)',
  dm_msg:'Вы не прошли проверку на бота для доступа ко всем каналам сервера, перезайдите и попробуйте еще раз.\n ',
  footer_txt:'Нажатие на другие реакции (кроме верной) не позволит вам пройти тест на бота'
};
exports.delay={
 waitingForRole_minutes:1,
 waitingReactions_minutes:15
};


exports.secret_arr=[


['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/Unicorn-galloping-sky-clouds-full-moon-Desktop-Wallpaper-HD-for-mobile-phones-and-laptops-1280x1024.jpg','🦄','единорог'],
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/sq.jpeg','🐿️','белка'],
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/spider.jpg','🕷️','паук'],
 ['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/snake.jpg','🐍','змей'] ,
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/snail.jpg','🐌','улитка'],
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/robbit.jpg','🐇','зайец'],
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/owl.jpg','🦉','сова'],
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/fox.jpg','🦊','лис'] ,
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/enot.jpg','🦝','енот'],
['https://raw.githubusercontent.com/e3Dr8nj/file_storage/master/cat.jpg','🐈‍⬛','черный кот']
/*
['unicorn/r1.jpg','🦄'],
['unicorn/r1.jpg','🦄'],
['unicorn/r1.jpg','🦄'],
['unicorn/r1.jpg','🦄'],
['unicorn/r1.jpg','🦄'],
['unicorn/r1.jpg','🦄']
*/
];//secret_arr


//_________________________________________BOOTS_PART___________________________________________________
module.exports.boots = {}; 

module.exports.boots.someBoot={run:async(client)=>{try{
  //if(client.users.get(exports.bbi).presence.status=='online') return console.log('bbi is online');
 let server_id= exports.system.SERVER_ID;
let templ_channel=exports.system.GUEST_CHANNEL_ID;
let temp_mmbs_id = await client.guilds.cache.get(server_id).roles.cache.find(r=>r.name==exports.system.ROLE_TIME_NAME).members.keyArray();
if(temp_mmbs_id.length!=0){
    for(let i=0;i<temp_mmbs_id.length;i++){
      await delay(5*1000);
      // await client.channels.get(templ_channel).send(client.guilds.get(server_id).members.get(temp_mmbs_id[i])+'  Пройди пожалуйста тест на определение зачатков интеллекта еще раз'); 
       await client.emit('guildMemberAdd', client.guilds.cache.get(server_id).members.cache.get(temp_mmbs_id[i]) );   
      console.log('double check');
    };//
  
};//if end
}catch(err){console.log(err);};}};//

//...
//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
/*
module.exports.commands.test={aliase:'тест', run:async(client,message,args)=>{try{

   let channel_true=module.exports.e.channels_exceptions.includes(message.channel.id);
              if(!channel_true) return;
      client.emit('guildMemberAdd',message.member);
}catch(err){console.log(err);};}};//

// ...
*/

//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};

module.exports.events.guildMemberAdd={ run:async(client,member)=>{try{
  return exports.run(client,member);
}catch(err){console.log(err);};}};//

module.exports.events.message={ on:true,  run:async(client,message)=>{try{
console.log(message.content);
     if(message.channel.type=='dm'||message.author.bot) return;
     if(message.content.trim().startsWith('?тест')||message.content.trim().startsWith('?Тест')){
        
   
      let channel_true=module.exports.e.channels_exceptions.includes(message.channel.id);
              if(!channel_true) return;
      client.emit('guildMemberAdd',message.member);
     };

}catch(err){console.log(err);};}};//

// ...
//_________________________________________EVENTS_PART_END__________________________________________

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};

module.exports.events_primitive.SOME_EVENT_NAME={run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//___________sf
/*
module.exports.sf=async()=>{try{
         
}catch(err){console.log(err);};};//
*/

//_________________
exports.run = async(client, member) => {
try{
          if(member.guild.id!=module.exports.system.SERVER_ID) return;
//-------
        
let channel=client.channels.cache.get(module.exports.system.GUEST_CHANNEL_ID);
  /*
let spamer = await module.exports.isSpamer(client,member,false);
if(spamer) {
  console.log('spamer');
  
  return;
};
*/
//-----check if member has roles 
        let delay=(duration)=>new Promise( resolve => setTimeout(resolve,duration) );
        await delay(5*1000); 
        if( member.roles.cache.keyArray().length>2) {
           //await   member.removeRole(member.guild.roles.find(r=>r.name==module.exports.system.ROLE_TIME_NAME));
           //await member.guild.channels.get(module.exports.system.GUEST_CHANNEL_ID).send(member.user.username+' Уже есть роли доступа');
           //return;
        }else if(member.roles.cache.keyArray().length==2){
           if (!member.roles.cache.find(r=>r.name==module.exports.system.ROLE_TIME_NAME)){
              //await member.guild.channels.get(module.exports.system.GUEST_CHANNEL_ID).send(member.user.username+' Уже есть роль доступа');
            //  return;
             };
        };
//-----

          await module.exports.check(client,member);
 }catch(err){console.log(err);}
};//exports.end

exports.check = async(client, member) => {
try{
   let delay=(duration)=>new Promise( resolve => setTimeout(resolve,duration) );
   let channel=client.channels.cache.get(module.exports.system.GUEST_CHANNEL_ID);
    if (member.guild.id!=exports.system.SERVER_ID) return; 
   let roleTime=await channel.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_TIME_NAME);
   if(roleTime) await member.roles.add(roleTime);
  let obj={};
   async function checkBot(){  
         let secret_arr=module.exports.secret_arr.slice();
         let new_arr = [];
         for (let i = 0;i<10;i++){
         let xrnd_ = Math.ceil(Math.random() * secret_arr.length-2);
         new_arr.push(secret_arr.splice(xrnd_,1));
         };

      secret_arr=new_arr; 
      //console.log(new_arr);
      secret_arr=secret_arr.map(e=>e[0]);
//---------
      let obj_={};
      await secret_arr.map(e=>obj_[e[1]]=e);
     // console.log(obj_);
      obj=obj_;
//----
      let xrnd = Math.ceil(Math.random() * secret_arr.length-1);
      let desc=secret_arr[xrnd][0];
      let emo=secret_arr[xrnd][1];
    let desc_msg = module.exports.phrases.enter_phrase;
    let file_name = desc;
     let check_msg = await channel.send(member.toString(),{embed: {
            description: member.toString()+ "  "+desc_msg,
            image: {
                //url: "attachment://"+'r1.jpg'
                 url: "attachment://r1.jpg"
            },
          footer:{text:module.exports.phrases.footer_txt}
        },
                                        
                                
        files: [{ attachment: file_name,name:'r1.jpg' }] 
     });
     
//--
//--------
  for(let i=0;i<secret_arr.length;i++){
       let emoji_name=  secret_arr[i][1]; 
      let emoji= await client.guilds.cache.get(module.exports.system.SERVER_ID).emojis.cache.find(e=>e.name==emoji_name);
       emoji=(emoji)?emoji.id:emoji_name;
       check_msg.react(emoji);
  };     
//-----------

  let filter=(reaction,user)=>(user.id==member.user.id);
  let waiting_time=module.exports.delay.waitingReactions_minutes*60*1000;
  let resolve = await check_msg.awaitReactions(filter,{max:1,time:waiting_time,errors:['time']}).then(collection=>{
              if (collection.first().emoji.name==emo) {
          
           return true;}else{
                 // console.log(obj);
                 let random = Math.ceil(Math.random() * module.exports.phrases.fail_phrase.length);
                 let wrong_answer=obj[collection.first().emoji.name][2];
                 let str = module.exports.phrases.fail_phrase[0].replace('#wrong_answer',wrong_answer);
                 let right_answer=obj[emo][2];
                 str = str.replace('#right_answer',right_answer);
                channel.send(member.toString()+str);  
                channel.send(member.toString()+module.exports.phrases.wrong_phrase);   
                return false;
                };
      
           }).catch(err=>{console.log(err); channel.send(member.toString()+module.exports.phrases.timeout_phrase); return false;});
    //console.log(resolve);
  
   return resolve;
   
};//checkBot end;

 async function giveRole(){
    await channel.send(member.toString()+module.exports.phrases.waitingForRole_phrase);
    await delay(module.exports.delay.waitingForRole_minutes*60*1000);
    let roleTime=await channel.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_TIME_NAME);
    if(roleTime) await member.roles.remove(roleTime).catch(console.error);
    let roleA=channel.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_NAME);
    if(roleA) await member.roles.add(roleA).catch(console.error);
    
let roleSpamer=await member.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_SPAMER_NAME);
   if(roleSpamer&& (member.roles.cache.find(r=>r.name==module.exports.system.ROLE_SPAMER_NAME)) ) { await member.roles.remove(roleSpamer).catch(console.error);};
    return 1;
};//end giveRole 
 let resolve = await checkBot();
 
  //let resolve=true;
   //console.log('resolve '+resolve);
   if(resolve){
     await giveRole(); 
   };//resolve true

//---------------
  if( !member.guild.members.cache.get(member.user.id)) return;
 if( !member.roles.cache.has(member.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_TIME_NAME).id) ) return;
//--------------------------

  if(!resolve){
    await delay(2*1000);
    await channel.send(member.toString()+module.exports.phrases.tryAgain_phrase);
    await delay(2*1000);
   resolve = await checkBot();
   if(resolve){
     await delay(2*1000);
     return giveRole();
     
   };
    //___
   
    //___
    if(!resolve){
      //__
      await delay(2*1000);
    await channel.send(member.toString()+module.exports.phrases.tryAgain_phrase);
    await delay(2*1000);
   resolve = await checkBot();
   if(resolve){
     await delay(2*1000);
     return giveRole();
     
   };
     // if(!resolve){channel.send(member+" Чтобы пройти еще раз, отправьте сообщение - ?тест")};//prev1
      if(!resolve){return  module.exports.isSpamer(client,member,true);};//features1
      //__
      /*
      await delay(2*1000);
      await channel.send(member+module.exports.phrases.ifFail_phrase);
       let mmb = member.guild.members.get(member.user.id);
       if(mmb){mmb.user.send(module.exports.phrases.dm_msg)};
       */
     // await delay(2*1000);
     // await channel.send(member+module.exports.phrases.ifFail_phrase);
    };
return;
  };

}catch(err){console.log(err);};
};//run end

//______________________
exports.isSpamer=async(client,member,defined)=>{try{
  /*
var str =member.user.username;
  var patt1 = /\w+\d{2,4}\b/g; 
  var result = patt1.test(str);
  if(!result&&!defined) return false;
  */
  await delay(1000);
 // if (member.roles.find(r=>r.name==module.exports.system.ROLE_SPAMER_NAME)) return false;
  let roleTime=await member.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_TIME_NAME);
   if(!roleTime) return;
  if( !member.roles.cache.has(member.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_TIME_NAME).id) ) return;//test
   if(roleTime) await member.roles.remove(roleTime);
  
let roleSpamer=await member.guild.roles.cache.find(r=>r.name==module.exports.system.ROLE_SPAMER_NAME);
   if(roleSpamer) await member.roles.add(roleSpamer);
  
let channel=client.channels.cache.get(module.exports.system.BOT_CHANNEL_ID);
if(channel) channel.send(member.toString()+" "+member.user.username+" если ты не бот напиши `?тест` ");
  return;
 // return result;
}catch(err){console.log(err)};};