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
   module.exports.commands.command1={disable:false,aliase:'xxxbots', run:async(client,message,args)=>{try{
      //code to execut then this command triggered
      let mmbsds = await message.guild.roles.cache.find(r=>r.name=='Временная роль').members;
     let mmbs = mmbsds.map(m=>m)
   if(mmbs.length!=0){
       for(let i=0;i<mmbs.length;i++){
        // await delay(5*1000);
         // await client.channels.get(templ_channel).send(client.guilds.get(server_id).members.get(temp_mmbs_id[i])+'  Пройди пожалуйста тест на определение зачатков интеллекта еще раз'); 
         let m =mmbs[i] 
       
        let roles = m.roles.cache.map(r=>{
          if(r.name!='@everyone') return r.toString()
        }).join(',')
       let str = m.user.toString()+' '+m.user.id+' '+m.user.tag+roles+' '+args[1]
       if(args[1]==='ban') {
         if(m) m.ban()
         .then(banInfo =>message.channel.send(str))
         .catch(console.error);
       } else if(args[1]==='kick') {
         if(m) m.kick()
         .then(banInfo =>message.channel.send(str))
         .catch(console.error);}
        await delay(1000*5)
       };//
    
   }
      
   }catch(err){console.log(err);};}};//
   //--------
   /*
   module.exports.commands.command2={disable:false,aliase:'cmd2', run:async(client,message,args)=>{try{
      //code to execut then this command triggered
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