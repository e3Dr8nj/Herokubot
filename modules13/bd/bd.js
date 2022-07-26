const parser = require('./channel_parser.js')
const set = require('./set.js')
const data = parser.data
const table_name_reset=parser.data.table_name
let xlog=console.log
let obj_i = {
  хватит:true,
  bump:true
  ,up:true
  ,like:true
 
}

let table_name=
    {
      x:parser.data.table_name
     ,reset:function(){this.x=parser.data.table_name}
      
    
    }



let store=[]
exports.rh={
 // disable:true//uncomment for disable all this file
 // ,commands:{disable:true} //uncomment fro disable commands etc.
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

module.exports.bdbata={
  
}


//_________________________________________COMMANDS_PART_________________________________________________
module.exports.commands = {};
//--------
module.exports.commands.command1={disable:false,aliase:'top', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  //parse <tableName> 

  // 
  let guild_id = client.x.serverId
  let channel_name= parser.data.channel_name
  let bd_all=[]


 let tableName=args[1]||table_name.x
  
  
//  let channel = client.guilds.cache.get(guild_id).channels.cache.get(parser.data.channel_id)
 let channel = client.guilds.cache.get(guild_id).channels.cache.find(ch=>ch.name==='channel_name')

   bd_all= await parser.m.parseAll(client,guild_id,channel_name)//--
  //parse data from channel, return bd

   //bd= await getTable(bd,'table1')//--------
  
  bd_all = await parser.m.select(bd_all,'tableName',tableName)//++
//  bd_all =await bd_all.filter(e=>{e.tableName==='bump'})
  //return table from bd
  
  // let bd_ = await parser.m.selectf(bd_all,'data',lastDays)
  let bd_ = await bd_all.filter(e=>lastDays(e.data))
 let  bd = JSON.parse(JSON.stringify(bd_));
 //  let bd=bd_
   //select from table by filter function
   console.log('bd selected')
  console.log(bd_)
 
   bd_all = await parser.m.conUniBy(bd_all,'user_id','points')
  if(bd_.length===0) return
  bd = await parser.m.conUniBy(bd,'user_id','points')
 
  //reorganized bd by unique value fild, sum 
  console.log('unificata')
  console.log(bd)
  bd=await bd.sort((a,b)=>{return Number(b.points)-Number(a.points)})
  //sord bd by points des
  let inv5="⠀⠀⠀⠀"
    let inv4="⠀⠀⠀"
  let inv2="⠀⠀"
  let inv1="⠀"
  let invs = inv5.slice(0,3)
//  let str=`7дн${inv2}|${inv1}все${inv2}|${inv1}бампер \n`
  let str=''
 // console.log('find ')
//  console.log(bd_all.find)
let ee=0
//console.log('dd')
 // console.log(bd)
let i=0
let sw=0
  bd.map(e=>{
    sw=(sw===0)?1:0
    let invd=(sw)?inv5:inv4
  //  let invd=(sw===0)?invs:inv5
  //let pd= String(e.points).padStart(2,'0')//++
    let r = e.points+inv5
   let pd=r.slice(0,4)
  // let pd = e.points
ee=bd_all.find(e1=>e1.user_id===e.user_id) || 0
    let r2 = ee.all_points+inv5
    let all_points=r2.slice(0,4)
  //  let all_points = String(ee.points).padStart(3,'0')
    
// console.log('ee '+ee.points)
    let user = message.guild.members.cache.get(ee.user_id)
  // let link='[d](http://google.com)'
    user=(user)?user:'0'
    let udn= user.displayName
   // udn=udn.slice(-15)
    let link_dsc='https://discord.com/channels/301063859702071316/301319871981944834'
    let link = '['+udn+'](http://google.com)'
     let user_id =(user)? user.toString():ee.user_id
     let user_id_s=user_id
     user_id_s=user_id.slice(-20)
    let u_m='<@'+ee.user_id+'>'
   let usernamesubline=udn+inv5+inv5+inv5+inv5+inv5
    
   // u_m = '['+usernamesubline.slice(0,15)//redefined
   //  u_m = '['+udn+'](http://discord.com)'//redefined
    u_m = '['+udn+']('+link_dsc+')'
  // str+=` k  ${pd}${inv1}  ${all_points}${inv2}   <@${ee.user_id}>  \n`
    let b=(sw)?'`':''
    let b2=(sw)?'` ':''
   // invs=(sw)?inv5:invs
   // let vip = Math.floor(e.points/10)
    let vip = (e.ps)?e.ps:0
   // let vip = e.points/10
    vip+=inv5
    vip=vip.slice(0,3)
    let line=''
  // if(sw) {
     line=[b,pd,inv1,all_points,inv1,vip,invd,b,u_m,'\n'].join('')
   //}else{
    // line=[b,pd,inv5,all_points,inv4,vip,inv4,b,u_m,'\n'].join('')}
    str+=line
    //str+=b+pd+""+inv5+all_points+''+inv5+inv5+''+vip+inv5+b2+""+u_m+""+' \n'

  })
  let emb = {}
 //emb.description=str
  emb.fields=[{name:`7дн${inv1}|все${inv1}|п-и${inv1}|короли бампа`,value:str}]
  message.channel.send({embeds:[emb]})


 // console.log(bd)
}catch(err){console.log(err);};}};//
//--------
module.exports.commands.command_emitbump={disable:false,aliase:'bt_bump_emit', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
 // await delay(1000)
  let id =message.mentions.users.first().id||message.author.id
  let emb = {description:`Top Discord Servers Server bumped by  <@${id}>`}
 await  message.channel.send({embeds:[emb]})
  return
}catch(err){console.log(err);};}};//

module.exports.commands.command_emitsup={disable:false,aliase:'bt_sup_emit', run:async(client,message,args)=>{try{
   //code to execut then this command triggered

  let id =message.mentions.users.first().id||message.author.id
  let emb = {title:`Сервер Up <@${id}>`}
 await  message.channel.send({embeds:[emb]})
  return
}catch(err){console.log(err);};}};//
module.exports.commands.command3={disable:false,aliase:'bt_points', run:async(client,message,args)=>{try{
  
   //code to execut then this command triggered
  let guild_id = client.x.serverId
  let channel_name = parser.data.channel_name
  let tableName = table_name.x
  let points = Number(args[1])||0
  let pattern = /\d{10,}/;
let result = message.content.match(pattern);
  let id =result[0]
  
  let r =parser.m.recordObj(id,tableName,points)
  /*
  let r = parser.m.recordObj({'id':d})
  */
    // let channel = client.guilds.cache.get(guild_id).channels.cache.get(parser.data.channel_id)
  let channel = client.guilds.cache.get(guild_id).channels.cache.find(ch=>ch.name===channel_name)
   channel.send(r)
  return
}catch(err){console.log(err);};}};//
//--------------------
module.exports.commands.command5={disable:false,aliase:'привилегии', run:async(client,message,args)=>{try{
  
  message.channel.send('d')
     let channel_name = parser.data.channel_name
 let guild_id = client.x.serverId
   let ps_sp = Number(args[1])||0
   let points = Number(args[2])||0
   let current = Number(args[3])||0
   let all_points = Number(args[4]||0)
   
  let pattern = /\d{10,}/;
  let result = message.content.match(pattern);
  let user_id =result[0]
  let r = await module.exports.jsonForBd(client,user_id,ps_sp,points,current,all_points)
  let channel = client.guilds.cache.get(guild_id).channels.cache.find(ch=>ch.name===channel_name)
   channel.send(r)
  return
  
}catch(err){console.log(err);};}};//
//--------------------
module.exports.commands.command4={disable:false,aliase:'bt_table', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
   (args[1]==='rst')?table_name.reset():table_name.x=args[1]
message.reply(args[1])
  return
}catch(err){console.log(err);};}};//
module.exports.commands.command5={disable:false,aliase:'ххелп', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  if(args[1]&&args[1]!='бамп') return
   let str = ''
   str+='бамп \n'
   str+='`top` - показать таблицу \n'
   str+='`привилегии -1` - убрать привилегию \n'
   str+='`привилегии 1 -2 4 5` - убрать/добавить привилегии очки т.к общ.кол-во \n'
   
   await message.channel.send(str)
  return
}catch(err){console.log(err);};}};//
/*
module.exports.commands.command3={disable:false,aliase:'bt_points', run:async(client,message,args)=>{try{
   //code to execut then this command triggered
  let tableName = table_name
  let points = Number(args[1])||0
  let id =message.mentions.users.first().id||message.author.id
  let r =parser.m.recordObj(id,tableName,points)
     let channel = client.guilds.cache.get(parser.data.guild_id).channels.cache.get(parser.data.channel_id)
   channel.send(r)
  return
}catch(err){console.log(err);};}};//
*/
//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {}; 
module.exports.boots.someBoot1={disable:false,run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//_________________________________________EVENTS_PART_________________________________________________
module.exports.events={};
module.exports.events.messageCreate={ disable:false,run:async(client,message)=>{try{
 //code to execut then this event triggered
  console.log(message.author)
  let cn = (message.interaction)?message.interaction.commandName:(message.content)?message.content.slice(1):false
 
 if(obj_i[cn]){
  // message.reply('+'+' '+cn)
   obj_i[cn]=false
  let r = ''
  for(let key in obj_i){
    if(obj_i[key]) r= key
  }
   let emo ='<:20:925640966579306557>'
    let str =(r=='хватит')?emo:'``/'+r+'``'
    
    await delay(1000*10)
    message.channel.send(str)
   await delay(1000*60*5)
  // message.channel.send('ch ')
   obj_i[cn]=true
              }
  if(message.content.startsWith('/up')){
    //console.log(message)
   // console.log('mess')
   // message.channel.send('and now')
  }
  
  
  
   async function addPoints(env,type,phrase){
// if(!client[env]) {
 
  let guild_id = client.x.serverId

  if(message.embeds[0]&&message.embeds[0][type]&&message.embeds[0][type].indexOf(phrase)!=-1){
    
    let text = message.embeds[0][type]; 
let pattern = /\d{10,}/g;
let result = text.match(pattern);
   
  // let r =parser.m.recordObj(result[0],table_name.x)
   let r = await module.exports.jsonForBd(client,result[0],0,1)
   // await module.exports.jsonForBd(client,user_id,points)
     let channel = await client.guilds.cache.get(guild_id).channels.cache.find(ch=>ch.name===parser.data.channel_name)
   channel.send(r)
    client[env]=true
    
    await delay(1000*60)
    client[env]=false
     await delay(1000*30)
    await module.exports.commands.command1.run(client,message,[])
  }
// }
  // addPoints()
 }
 addPoints('bd_bump_dis','description','Server bumped by')
 // addPoints('bd_sup_dis','title','Сервер Up')
//  addPoints('bd_like_dis','title','Сервер Up')
}catch(err){console.log(err);};}};//

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};
module.exports.events_primitive.SOME_EVENT_NAME={disable:false,run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//_____________SUB FUNCTION


exports.jsonForBd=async(client,user_id,ps_sp,points,current_sp,all_points_sp)=>{
try{ 
  if(!ps_sp) ps_sp=0
  if(!points) points = 0
  if(!current_sp) current_sp=0
  if(!all_points_sp) all_points_sp=0
  // input user_id, points
  //output jsoned data string record to bd usage
  
   let tableName = table_name.x
   let guild_id = client.x.serverId
  let channel_name = parser.data.channel_name
  //

   let bd_all= await parser.m.parseAll(client,guild_id,channel_name)//--
  
  
 
 
 
  points = Number(points)||0
  
 
  let id = user_id
  let obj={
    user_id:id
    ,tableName:'bump'
    ,data:new Date().getTime()
    ,points:points
    ,all_points:0
    ,ps:0
    ,qps:0
  }
  
let bd_all2 = await parser.m.select(bd_all,'tableName',tableName)//++
let recordLast= parser.m.select(bd_all2,'user_id',id)
recordLast=(recordLast)?recordLast[0]:false
let p = 0
let current = 0
let ps = 0
if(recordLast){
  p=recordLast.all_points||0
 
  current = recordLast.current||0
  
  ps=recordLast.ps||0
  }


  obj.all_points=p+points+all_points_sp
  current+=points+current_sp
  
 if(current=>10){
   let psm = Math.floor(current/10)
   ps+=psm;current=current-(10*psm);
 }
 
  
  
   obj.current=current
   obj.ps=ps + ps_sp

 let r = parser.m.recordObj2(obj)
 
 // let channel = client.guilds.cache.get(guild_id).channels.cache.find(ch=>ch.name===channel_name)
  // channel.send(r)
  
  return r//jsoned ready to send
}catch(err){console.log(err);};
};//


exports.subFunction2=async(client)=>{
try{ 
   
}catch(err){console.log(err);};
};//




//-----
 function lastDays(recTime){
    //let days = 5
    
    let a={}
      a.curTime = new Date().getTime() 
     a.recTime=recTime
    //  let tag = days*1000*60*60*24
     a.tag =set.data.tag
      a.terminalPoint = a.curTime - a.tag
    a.res=a.recTime-a.terminalPoint
   a.res=(a.res>0)?true:false
    console.log(a)
      return a.res
  }