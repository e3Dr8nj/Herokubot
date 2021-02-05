let delay=async(duration)=>{await new Promise(resolve=>setTimeout(resolve,duration))}; 
let random =(max)=>{ return Math.floor(Math.random()*max);};
exports.active=true;
exports.on=true;
exports.dictionary={
'use':['You cannot use it','Ты не можешь использовать эту комманду']
};
exports.commands={};
exports.commands.run1={aliase:'eval'};
exports.commands.run1.run =(client,message,args)=>{
if(message.author.id!='437330563423010827') return message.reply('ошибка доступа\error access');
//чекаем, если автор команды не мы - скип 
//check if author of the command is not we - stop the code execution

function asyncEval(code){
    return new Promise(function(resolve,reject){ let res = eval(code); resolve(res);   }   );
   //сама функция асинхронного исполнения кода
   //the main function for asyncronous code execution 
};//asyncEval end;

function clean(text) {
  if (typeof(text) === "string")
   return  text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
   //эта функция что-то делает, мб чистит от случайных упоминаний или что-то еще, вобщем она нужна тут. 
   //this function do something usefull, i  dont know that exactly
  else
   return text;
};

let process=async()=>{
try {
      const code = args.slice(1).join(" ");
     
//---
     client.msg  = await message.channel.messages.fetch({limit:15}).then(messages => {
            //считываем последние 15 сообщений с канала (число может быть и больше, до 100)
            //fetching the last 15 messages from the channel ( this amount may be bigger till 100)
            let msg1 =  messages.find(m=>m.reactions.cache.get('✅'));
            return msg1;
            //ищем среди них последние, имеющие вашу реакцию ✅ и записываем его в переменную client.msg
            //find the last message that has your's reaction among them ✅ and record it into client.msg variable
            
             
     }).catch(console.error);
       await delay(1000);


//---

      let evaled = await asyncEval(code);
      		//в эту переменную запишется результат выполнения кода
                // the result of the code execution will be recorded in this variable
      
      if (typeof evaled !== "string")
        evaled = await require("util").inspect(evaled);
               //хз чо тут происходит
               //no comments
      
      await  message.channel.send('>>'+code+'\n<<'+clean(evaled), {code:"xl"});
               //постим сообщение с текстом кода + результат его выполнения
               //send messages this the text of code and result of it's execution
      
    } catch (err) {
      
       const code = args.slice(1).join(" ");
       console.log(code);
       message.channel.send(`\`ERROR\` \`\`\`xl\n>>${code} \n<<${clean(err)}\n\`\`\``);
                //если случилась ошибка, постим ее сообщением, текст кода + текст ошибки
                //if the error occured, then send messages : text code + error message
       message.delete().catch(err=>console.log(err));
    }
};//process end
process();
};//exports.run end
