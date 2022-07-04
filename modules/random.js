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
   module.exports.commands.addContent={disable:false,aliase:'ac', run:async(client,message,args)=>{try{
      //code to execut then this command triggered
     if(!args[1]) return
     let msg  = await message.channel.messages.fetch({limit:100}).then(messages => {
               
                let msg =  messages.find(m=>m.reactions.cache.get('✅'));
               return msg;
                 //return msgs;
            }).catch(console.error);
     args.shift()
     let cnt = args.join(' ')
     await msg.edit(msg.content+' \n'+cnt)
     .then(msg => console.log(`Updated the content of a message to ${msg.content}`))
     .catch(console.error);
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
   module.exports.commands.createMessage={disable:false,aliase:'cm', run:async(client,message,args)=>{try{
      //code to execut then this command triggered
     if(!args[1]) return
     args.shift()
     let cnt = args.join(' ')
     message.channel.send(cnt+'\n')
   }catch(err){console.log(err);};}};//
   //--------
module.exports.commands.random={disable:false,aliase:'rnd', run:async(client,message,args)=>{try{
    //code to execut then this command triggered
   if(!args[1]) return
   let rnd = random(Number(args[1]))
   message.channel.send(rnd.toString())
   console.log(rnd.toString())
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