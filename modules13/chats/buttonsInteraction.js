//
let store={
  
  chats:{
    '1':{
      rows:{}
      ,baseRow2:[['lock','0'],['lecture','0'],['textlock','0']]
      ,baseRow:{lock:0,lecture:0,textlock:0}
    }
  }
}
let baseRow = {lock:0,lecture:0,textlock:0}
const { MessageActionRow, MessageEmbed, MessageButton, MessageSelectMenu } = require('discord13.js');
//----
exports.rh={
  //disable:true//uncomment for disable all this file
 // commands:{disable:true} //uncomment fro disable commands etc.
  //,boots:{disable:true}
  //,events:{disable:true}
  //,events_primitive:{disable:true}
                   
};

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

//--------
module.exports.commands.command2={disable:false,aliase:'buttonsInteraction', run:async(client,message,args)=>{try{
  


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
//_________________________________________INTERACTION_PART_________________________________________________
//module.exports.events={};

module.exports.events.interactionCreate={ disable:false,run:async(client,i)=>{try{
 //code to execut then this event triggered
  //return
           console.log('it___________________________-')
 
            console.log('but int')
 
           
           if(!i.isButton()) return
           
 
	
  await i.reply({content:`${i.user.tag} ${i.customId}`,ephemeral: true})

  let row2={}
  
    
     let v = i.component.customId.split('$')//chat$8990$lock$0$1
     let channel_id=v[1]
     let target=v[0]
     let param = v[2]
     let curvalue=Number(v[3])
     let newvalue = Number(v[4])
     
     let user_id=i.user.id
      let div = '$'
     store.chats[channel_id].baseRow[param]=newvalue

  row2 = await module.exports.BaseRow(client,i.message)
 if(row2) await i.message.edit({components:[row2]})
  let str = 'xxx$chats$'+param+div+newvalue+div+user_id
 
 
  let ch = i.guild.channels.cache.find(n=>n.name==client.x.ch.transfer)
  
  ch.send(str)
  return

   
  
           
}catch(err){console.log(err);};}};//

//______________________________EVENTS PRIMITIVE
module.exports.events_primitive={};
module.exports.events_primitive.SOME_EVENT_NAME={disable:false,run:async(client,event)=>{try{
      //some code here
}catch(err){console.log(err);};}};//
//_____________SUB FUNCTION

exports.s0=async(client)=>{
try{ 
 
  

}catch(err){console.log(err);};
};//
//___
exports.s1=async(client)=>{
try{ 
   
}catch(err){console.log(err);};
};//

