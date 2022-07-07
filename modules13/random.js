
exports.digit={"0⃣":'0',"1⃣":'1' ,"2⃣":'2',"3⃣":'3',"4⃣":'4',"5⃣":'5',"6⃣":'6',"7⃣":'7',"8⃣":'8',"9⃣":'9',"🇹":'10',"🇱":'11',"🇪":'12',"🇳":'13' ,"🖤":'14',"🔚":'15',"🇬":'16',"🇭":'17',"🇮":'18',"🇯":'19'};

exports.rh={
 // disable:,true//uncomment for disable all this file
 // commands:{disable:true} //uncomment fro disable commands etc.
  //,boots:{disable:true}
  //,events:{disable:true}
  //,events_primitive:{disable:true}
                   
};
let x_log=false
let x = (data) => {x_log?console.log(data):{}; return;}
//________________________________________TOOLS__________________________________________
let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
     //* for delay inside async function, use it instead setTimeout
let random =(max)=>{ return Math.floor(Math.random()*max);};




//___________________________ETERNAL_VARIABLE_PART
module.exports.e={
 mod_info:{
   code_name:'rh00'
   ,aliase_name:'template'
 } 
};


//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------
module.exports.commands.addContent={disable:false,aliase:'+++', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  if(!args[1]) return message.channel.send('ниче не указано')
 // if(!args[2]) return message.channel.send('не указано название роли')
  let msg  = await message.channel.messages.fetch({limit:100}).then(messages => {
            
             let msg =  messages.find(m=>m.reactions.cache.get('✅')&&m.author.id===client.user.id);
            return msg;
              //return msgs;
         }).catch(console.error);
  args.shift()
//  let emo = args.shift()
  //let e = emo.match(/\b\d+\b/);
// console.log(e[0])
  //let isemo =await client.emojis.cache.get(Number(e))
  //if(!isemo) return console.log('no emo')
     let cnt2 = msg.content.split('###')[0].split('\n')
     cnt2.shift()
  let cnt = args.join(' ')
  let msg_cnt=msg.content.split('\n ###')
  let d=''
 
  let mm = msg.mentions.members.get(message.author.id)
  if(mm){d=''}else{d=message.author.toString()}
  let obj={}
  for(let key in exports.digit){
    obj[exports.digit[key]]=key
  }
 // arr.reverse()
  let emo = obj[cnt2.length]
  await msg.edit(msg_cnt[0]+' \n '+emo+' '+cnt+'\n ###'+msg_cnt[1]+' '+d)
  .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
  .catch(console.error);
  try{
  msg.react(emo)
}catch(err){console.log(err)}
  /*
  //console.log(msg.reactions)
 let obj= msg.reactions.fetch()
 for(let key in obj){
 //  let users = obj[key].users.fetch().then(m=>m).catch(err=>console.log(err))
   console.log(key)
 }
  console.log(obj)
  */
}catch(err){console.log(err);};}};//
//--------
module.exports.commands.createMessage={disable:false,aliase:'создать-список', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  if(!args[1]) args[1]='список'
  args.shift()
  let cnt = args.join(' ')
  let msg=await message.channel.send(cnt+'\n ###')
  await msg.react('✅').catch(err=>console.error)
}catch(err){console.log(err);};}};//
//--------
module.exports.commands.random={disable:false,aliase:'рандом', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
 
  
 // message.channel.send(rnd.toString())
 
    let msg  = await message.channel.messages.fetch({limit:100}).then(messages => {
            
             let msg =  messages.find(m=>m.reactions.cache.get('✅')&&m.author.id===client.user.id);
            return msg;
              //return msgs;
         }).catch(console.error);
  let arr =[]
   if(args[1]=='2'){
    // message.reply('d')
     let cnt = msg.content.split('###')[0].split('\n')
     cnt.shift()
    let rnd = random(cnt.length-1)
    let str='_'+cnt[rnd]
    message.reply(str)
    
}else{
  if(!msg.mentions.members.first()) return message.channel.send('нет ни одного участника')
     let mm = msg.mentions.members
     
     mm.map(m=>{
       arr.push(m)
     })
     
     let rnd = random(arr.length-1)
     let mm_rnd_st=arr[rnd].toString()
     message.channel.send(mm_rnd_st)
  }
}catch(err){console.log(err);};}};//

module.exports.commands.rnd_help={disable:false,aliase:'рандом-хелп', run:async(client,message,args)=>{try{
  
   let str='  !рандом-хелп'
  str+='\n !создать-список <заголовок> - создает список с заданым заголовком'
  
   str+='\n !+++ <текст> - добавляет позицию в список, а так же добавляет упоминание ее автора'
 
   str+='\n !рандом 1 - выбирает из упоминаний в конце сообщения-списка одного участника'
  str+='\n !рандом 2 - выбирает вариант из списка'
  message.channel.send(str)

}catch(err){console.log(err);};}};//
//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {}; 
module.exports.boots.someBoot1={disable:false,run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};
module.exports.events.messageCreate={ disable:false,run:async(client,message)=>{try{
 //code to execut then this event triggered
   
}catch(err){console.log(err);};}};//

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};
module.exports.events_primitive.SOME_EVENT_NAME={disable:false,run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//_____________SUB FUNCTION
exports.subFunction1=async(client)=>{
try{ 
   
}catch(err){console.log(err);};
};//

//// "discord13.js": "npm:discord.js@^13.1.0",