
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
module.exports.commands.command2={disable:false,aliase:'lll', run:async(client,message,args)=>{try{
  return


}catch(err){console.log(err);};}};//

//_________________________________________BOOTS_PART___________________________________________________

module.exports.boots = {}; 
module.exports.boots.someBoot1={disable:false,run:async(client)=>{try{
    //code to execut bot on loading
}catch(err){console.log(err);};}};//
//_________________________________________EVENTS_PART_________________________________________________
 module.exports.events={};
module.exports.events.message={ disable:false,run:async(client,message)=>{try{
 //code to execut then this event triggered
}catch(err){console.log(err);};}};//
//_________________________________________INTERACTION_PART_________________________________________________
//module.exports.events={};

//_________________________________________USER CONTEX MENU

module.exports.events.interactionCreate={ disable:false,run:async(client,interaction)=>{try{
 //code to execut then this event triggered
  //return
          if(interaction.isButton()) return
      
          // if(!interaction.isCommand()) return
  console.log('dd________________________')
    console.log(interaction)
  const {commandName, options} = interaction
  console.log(commandName)
  
    let pref = 'xxx'
    let prefZ='zzz'
    let div='$'
    let module='chats'
    let str='.'
    let guild_id = interaction.guild.id
    let owner_id= interaction.user.id
    let member_id = interaction.targetId
    let mmb = interaction.guild.members.cache.get(member_id)
    let cmd =''
  if(commandName === 'Mут 30мин'){
     module='base'
     cmd = 'mute30m'
    str = 'Команда мута обрабатывается'
     let data = pref+div+module+div+cmd+div+guild_id+div+owner_id+div+member_id
       let ch = interaction.guild.channels.cache.find(n=>n.name==client.x.ch.transfer)
  
      if(ch){ ch.send(data)}else{ interaction.channel.send(data)}
  return
  }
  if(commandName === '☥Забанить'){
  
     cmd = 'ban'
    str = 'Забанен'
  }
  if(commandName === '☥Обнулить'){
  
    
   
    cmd = 'null'
    str = 'Обнулен'
    
   
  }
   if(commandName === '☥Дать ключ'){
  
  
    
    cmd = 'key'
    str = 'Ключ доступа в закрытый войс выдан'
   
  }if(commandName === '☥Дать микрофон'){
  
  
   
    cmd = 'micro' 
    str='Микрофон, позволяющий говорить учатнику, при активированном режиме "Тиховсе"'
  }
     //----2.12.21
       let data = pref+div+module+div+cmd+div+guild_id+div+owner_id+div+member_id
       let ch = interaction.guild.channels.cache.find(n=>n.name==client.x.ch.transfer)
  
      if(ch){ ch.send(data)}else{ interaction.channel.send(data)}
   //---
       
   //  await interaction.channel.send(pref+div+module+div+cmd+div+guild_id+div+owner_id+div+member_id)
      return interaction.reply({content:str+": "+mmb.toString(),ephemeral:true})       
}catch(err){console.log(err);};}};//
