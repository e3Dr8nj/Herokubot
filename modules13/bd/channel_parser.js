let settings=require('./set.js')
/*
let data={
  channel_id:"981220945912025128"
  ,guild_id:"476431736813912064"
  ,keyworld:"table1"
  ,tableName:"table1"
  ,table_name:"bump"
}
*/
let data = settings.data
let parser = {
   
  ijs:ijs
  ,getTable:getTable
  ,select:select
  ,selectf:selectf
  ,conUniBy:conUniBy
  ,mergeWeek:mergeWeek
  ,recordObj:recordObj
  ,parseAll:parseAll
  ,recordObj2:recordObj2
}
function ijs(str) {//check if str is correctly jsoned
  try {
    var json = JSON.parse(str);
    return (typeof json === 'object');
  } catch (e) {
    return false;
  }
}
function getTable(bd,tableName){//get table from bd
    let bd_= bd.filter(e=>e.tableName===tableName)//--------
    return bd_
}

function select(bd,param,val){//get table from bd
    let bd_= bd.filter(e=>e[param]===val)//--------
    return bd_
}

/*
*/

function selectf(bd,param,func){//get table from bd
   let bd_= bd.filter(e=>func(e[param]))//--------
   return bd_
   
}

function conUniBy(bd,uni, by){
  //return bd, contated by 'by' value, and unique by 'uni'
  /*
  let bd = [
     {'tableName':'table1','id':'1','points':'12'}
     ,{'id':'2','points':'1'}
     ,{'id':'1','points':'1'}
     ,{'id':'3','points':'4'}
     ,{'id':'2','points':'3'}
     ,{'id':'3','points':'6'}
 ]
  example: 
  let bd2 = await parser.conUniBy(bd,'id','points')
  console.log(bd2)
  */
   let bd2=[]
    bd.map(el=>
     
    
            {
      console.log('e '+el)
               
               let same =bd2.find(e=>e[uni]===el[uni])
               if(!!same){
                 let s = Number(same[by])
                 s+=Number(el[by])
                 same[by]=s
                        } else{bd2.push(el)}
    })
                                                     
      return bd2    
          
}
//---

function mergeWeek(bd,week_bd){
 let new_bd = []
 bd.map(e=>{

      let wp_= week_bd.find(week_e=>e.id===week_e.id)
      let wp = (wp_)?wp_.points:0
      e.week_points=wp
      new_bd.push(e)

  })
console.log(week_bd)
 return week_bd
}
function recordObj(user_id,tableName,points_){
  let points = points_||1
  let data = new Date().getTime()
 let obj = {
   tableName:tableName
  , user_id:user_id
   ,data: data
   ,points:points
   ,type:'bump'
 }
  let st = JSON.stringify(obj)
 
  return st
}
///---
function recordObj2(a){
  /*
  let points = points_||1
  let data = new Date().getTime()
 let obj = {
   tableName:tableName
  , user_id:user_id
   ,data: data
   ,points:points
   ,type:'bump'
 }
  let st = JSON.stringify(obj)
 
  return st
  */
  let obj = Object.assign(a)
  obj=JSON.stringify(obj)
  return obj
}
//-----------
async function parseAll(client,guild_id,channel_name){
try{ 
    function ijs(str) {
  try {
    var json = JSON.parse(str);
    return (typeof json === 'object');
  } catch (e) {
    return false;
  }
}
  //
  let bd=[]
   let channel = await client.guilds.cache.get(guild_id).channels.cache.find(ch=>ch.name===channel_name)
  let msg_arr= await channel.messages.fetch({limit:100}).then(messages => {
             
            // let msgs =  messages.filter(m=>!m.author.bot);// return msgs.first().content.match(/\d{3,}/)[0];
              let msgs=messages
              return msgs;
         }).catch(console.error);
  
    msg_arr.map(m=>{
              console.log(m.content)
    let obj=false
             if(parser.ijs(m.content)) {
               obj=JSON.parse(m.content)
               bd.push(obj)
             }
             //if(obj) console.log(obj)
              }
             )
  //store=bd
  return bd
   
}catch(err){console.log(err);};
};//

module.exports.data=data
module.exports.m=parser