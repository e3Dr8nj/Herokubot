﻿let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
let random =(max)=>{ return Math.floor(Math.random()*max);};

exports.rh={};
exports.commands={};
exports.commands.run1={aliase:'eval'};
exports.commands.run1.run =(client,message,args)=>{
if(message.author.id!='437330563423010827') return message.reply('Ты не можешь использовать эту команду');
//==You cannot use this command!

function asyncEval(code){
  return new Promise(function(resolve,reject){ let res = eval(code); resolve(res);   }   );
};//asyncEval
function clean(text) {
  if (typeof(text) === "string")
   return  text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
   
  else
   return text;
};
let process=async()=>{
try {
      const code = args.slice(1).join(" ");
      console.log(code);
     

     client.msg  = await message.channel.messages.fetch({limit:10}).then(messages => {
            
             let msg =  messages.find(m=>m.reactions.cache.get('✅'));
            return msg;
              //return msgs;
         }).catch(console.error);
       await delay(1000);




      let evaled = await asyncEval(code);
      
      if (typeof evaled !== "string")
        evaled = await require("util").inspect(evaled);
      
     await  message.channel.send('>>'+code+'\n<<'+clean(evaled), {code:"xl"});
      
    } catch (err) {
      
      const code = args.slice(1).join(" ");
      console.log(code);
      message.channel.send(`\`ERROR\` \`\`\`xl\n>>${code} \n<<${clean(err)}\n\`\`\``);
      message.delete().catch(err=>console.log(err));
    }
};//process end
process();
};//exports.run end

//This code interpritate the code inside message
//It is nessesary to check if the author of the command is you, becouse eval can execute code on your computer or host
//The message you has reacted by '✅' emoji, can be accesed as client.msg for using as variable inside code from your message 
//only 10 last messages of the channel you use this command is avalible (it can be 100 max)
//also async functions can be executed 