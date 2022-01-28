let target='#target'

let d25=(full)=>{let str = " "
+"\nВначале надо ОТПРАВИТЬ сообщение пинганув в нем @ник или @ роль в своем текстовом канале и лишь потом нажать кнопку для действий с этим человеком или ролью."
   + "\n🔒 ЗАКРЫТЬ ВОЙС всем кто без спец доступа. Тем кто находится в войсе на момент закрытия выдастся доступ. \n Повторное нажатие 🔒 откроет войс всем.\n"
  +"\n🔑 @ник / @роль - ВЫДАТЬ ДОСТУП в закрытый войс*\n"
+"\nБАН @ник / @роль - Забаненный ник или роль не смогут зайти в ваш войс*\n"
+"\n👑➡@ник - ПЕРЕДАТЬ ПРАВА на войс\n"

                
if(full) {str+=''
          +"\n♻️ @ник / @роль - обнулить права доступа* \n"
+"\n♻️ Сбросить настройки по умолчанию \n"
         
         }
str+=" "


if(full) {str+="\n Еще можно так: курсор на ник ➡ правая кнопка мыши ➡ приложения ➡ бан, доступ, передать права и тд."
+"\nПозвать народ в свой войс:\nПеред нажатием кнопки еще можно отправить сообщение с уточнением темы беседы начинающееся с точки\nПример:.Давайте смотреть аниме!\nОтправляете сообщение выше и жмете кнопку Го войс!\n"
+"\nГо войс - Пингует эту роль со ссылкой в ваш войс/n"
+"\n🎮 - Пинг роли для игр/n"
          +'\n🤐 - мут всех. Повторное нажатие снимает мут'
          +'\n🎙️ @ник / @роль - Выборочно размутить кого-то в замученном войсе'
          +'\n🧹 - Кикнуть всех.'


         }
//+"\n🎞️ -кнопка оповещает о просмотре фильма в данном войсе и предлагает присоединится к беседе, возможно указать дополнительную информацию о фильме, для этого перед нажатием пришлите сообщение с темой в этот канал"

                      return (str)}
let d2=(full)=>{
  let str=""
  if(full){
  str+="ОТПРАВЬТЕ сообщение с пингом @ника или @роли в своем текстовом канале и лишь ПОТОМ жмите кнопку для действий с ними\n\n"
}

str+="🔒 ЗАКРЫТЬ ВОЙС всем кто без 🔑 Те кто находится в войсе на момент закрытия получат 🔑\nПовторное нажатие 🔒 откроет войс всем\n\n🔑 @ник / @роль - ВЫДАТЬ ДОСТУП в закрытый войс\n\nБАН @ник / @роль - Отправить сообщение с пингом ника или роли - нажать кнопку\n\n👑➡@ник - ПЕРЕДАТЬ ПРАВА на войс"

if(full){
  str+="♻️ @ник / @роль - Для ника или роли сброс настроек по умолчанию\n\n♻️ Сброс всех настроек по умолчанию\n\nИли так можно: правой кнопкой мыши по нику ➡ приложения ➡ бан, доступ и тд.\n\nПозвать в свой войс:\nПросто нажмите кнопку или вначале отправьте сообщение с уточнением темы беседы начинающееся с точки\nПример:\n.Го сплетничать!\nЗатем жмете кнопку Го войс\n\nГо войс - Пингует эту роль со ссылкой в ваш войс\n\n🎮 - Пинг роли для игр\n\n🤐 - Мут всех Повторное нажатие снимет мут\n\n🎙️ @ник / @роль - Выборочный размут в замученном войсе\n\n🧹 - Кик всех"
}
  return(str)
  
}
module.exports.d2 = d2
module.exports.in={
    
      embed:{
        d:d2()

      }
 
  
  ,chats:{
    getButtons:function(target){
      let obj={
        help:{0:{style:'DANGER',label:'Help',id:target+'help$0$1',disabled:true},1:{style:'DANGER',label:'Help',id:target+'help$1$1',disabled:true}}
       , showall:{0:{style:'DANGER',label:"ЕЩЁ",id:target+'showall$0$1'},1:{style:'DANGER',label:'не ЕЩЁ',id:target+'showall$1$0'}}
       ,lock:{0:{style:'PRIMARY',label:'🔐',id:target+'lock$0$1$key$1'},1:{style:'PRIMARY',label:'🔓',id:target+'lock$1$0$key$0'}}
    
    //lock:{0:{style:'SECONDARY',label:'тиховсе',emoji:'🔓',id:target+'lock$0$1$key$1'},1:{style:'DANGER',label:'обычный',emoji:'🔐',id:target+'lock$1$0$key$0'}}
    ,lecture:{0:{style:'SECONDARY',label:'🤐',id:target+'lecture$0$1$micro$1'},1:{style:'SECONDARY',label:'🤐откл.тиховсе',id:target+'lecture$1$0$micro$0'}}
  ,textlock:{0:{style:'SECONDARY',emoji:'📖',id:target+'textlock$0$1'},1:{style:'DANGER',emoji:'📔',id:target+'textlock$1$0'}}
 ,reset:{0:{style:'SECONDARY',label:'♻️',id:target+'reset$0$0$resetall',disabled:false},1:{style:'PRIMARY',label:'♻️настройки сброшены',id:target+'reset$1$1$resetall'}}
  
        ,key:{0:{style:'PRIMARY',label:'🔑@',id:target+'key$0$0',disabled:true},1:{style:'PRIMARY',label:'🔑@',id:target+'key$1$1'},type:'message',needmention:true}
    ,micro:{0:{style:'SECONDARY',label:'🎙️@',id:target+'micro$0$0',disabled:true},1:{style:'SECONDARY',label:'🎙️@',id:target+'micro$1$1'},type:'message',needmention:true}
  ,ban:{0:{style:'PRIMARY',label:'БАН @',id:target+'ban$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'ban$1$1'},type:'message',needmention:true}
  ,trans:{0:{style:'PRIMARY',label:'👑➡ @',id:target+'trans$0$0',disabled:false},1:{style:'PRIMARY',emoji:'♻️',id:target+'trans$1$1'},type:'message',needmention:true}
    ,'null':{0:{style:'SECONDARY',label:'♻️ @',id:target+'null$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'null$1$1'},type:'message',needmention:true}
 ,'constructive':{0:{style:'SECONDARY',label:'го войс',id:target+'constructive$0$0',disabled:false},1:{style:'PRIMARY',emoji:'♻️',id:target+'constructive$1$1'},type:'message',report:true}
,'game':{0:{style:'SECONDARY',label:'🎮',id:target+'game$0$0',disabled:true},1:{style:'PRIMARY',emoji:'♻️',id:target+'game$1$1'},type:'message',report:true}
, 'film':{0:{style:'SECONDARY',label:'🎞️фильм',id:target+'film$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'film$1$1'},type:'message'}
    ,broom:{0:{style:'SECONDARY',label:'🧹',id:target+'broom$0$0'},1:{style:'PRIMARY',emoji:'🧹',id:target+'broom$1$1'}}
  ,report:{0:{style:'LINK',label:'го войс'},1:{style:'PRIMARY',emoji:'🧹',id:target+'broom$1$1'},type:'linkdata'}
 
      }
      
      return obj
      }
  
    ,'buttons':{}
   , 
      rowsini:{
        baseRow:{lock:0,key:0,'ban':0,trans:0,showall:0}
        ,'permsRow':{lecture:0,micro:0,'null':0,reset:0,broom:0}
        ,'3row':{constructive:0,game:0}
        
        /*
        baseRow:{'lock':0,'lecture':0,'reset':0,broom:0}
        ,'permsRow':{key:0,micro:0,ban:0,trans:0,'null':0}
        ,'alertRow':{constructive:0,game:0}
        ,'settingsRow':{help:0,showall:0}
        */
      
    }
    ,rowsini2:{
        baseRow:{lock:0,key:0,'ban':0,trans:0,showall:0}
        
        
        
      
    }
  }
}
     
     
     
     