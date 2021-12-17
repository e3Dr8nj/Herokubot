let target='#target'

let d2="Кнопки ативации режимов:"
   + "\n🔐замкнуть - блокирует подключение к войсу без спец. ключа"
    +"\n повторное нажатие снимает блок "
+"\nтиховсе - устанавливает блок на разговор без спец. микрофона"
+"\n повторное нажатие снимает блок"
+"\n♻️сбросить - сбрасывает настройки чата"
+"\n🧹киквсех - выкидывает из войса всех"
+"\nКнопки управления правами @участников/@ролей:"
+"\nперед тем как нажать на кнопку, пошлите в этот канал сообщение с @участника или @роли"
+"\n🔑ключ @- выдает спец.ключ в заблокированный войс *"
+"\n🎙️микро @ -  выдает спец. микрофон чтобы говорить при режиме тиховсе"
+"\n🚫бан @ - банит участника *"
+"\n👑права @ - передает права на чат"
+"\n♻️ сбросить @-сбрасывает права для @ *"
+"\n действия *, можно выполнить также поместив курсор на ник=>правая кнопка мыши=>приложения"
+"\nКнопки оповещения о беседах:"
+"\nперед тем как нажать на кнопку, можно послать в этот канал сообщение с уточнением темы беседы,начинающееся с точки"
+"\n👽 -оповещает о конструктивной беседе в данном войсе"
+"\n🎮 -оповещает о игре/игровом стриме в данном войсе"
//+"\n🎞️ -кнопка оповещает о просмотре фильма в данном войсе и предлагает присоединится к беседе, возможно указать дополнительную информацию о фильме, для этого перед нажатием пришлите сообщение с темой в этот канал"


module.exports.in={
    
      embed:{
        d:d2

      }
 
  
  ,chats:{
    getButtons:function(target){
      let obj={
        help:{0:{style:'DANGER',label:'Help',id:target+'help$0$1'},1:{style:'DANGER',label:'Help',id:target+'help$1$1',disabled:true}}
   
       ,lock:{0:{style:'SECONDARY',label:'🔐замкнуть',id:target+'lock$0$1$key$1'},1:{style:'SECONDARY',label:'🔓отомкнуть',id:target+'lock$1$0$key$0'}}
    
    //lock:{0:{style:'SECONDARY',label:'тиховсе',emoji:'🔓',id:target+'lock$0$1$key$1'},1:{style:'DANGER',label:'обычный',emoji:'🔐',id:target+'lock$1$0$key$0'}}
    ,lecture:{0:{style:'SECONDARY',label:'🎙️тиховсе',id:target+'lecture$0$1$micro$1'},1:{style:'SECONDARY',label:'🎙️отк.тиховсе',id:target+'lecture$1$0$micro$0'}}
  ,textlock:{0:{style:'SECONDARY',emoji:'📖',id:target+'textlock$0$1'},1:{style:'DANGER',emoji:'📔',id:target+'textlock$1$0'}}
 ,reset:{0:{style:'SECONDARY',label:'♻️сбросить',id:target+'reset$0$1'},1:{style:'PRIMARY',label:'♻️настройки сброшены',id:target+'reset$1$1'}}
  
        ,key:{0:{style:'SECONDARY',label:'🔑ключ @',id:target+'key$0$0',disabled:true},1:{style:'SECONDARY',label:'🔑ключ @',id:target+'key$1$1'},type:'message'}
    ,micro:{0:{style:'SECONDARY',label:'🎙️микро @',id:target+'micro$0$0',disabled:true},1:{style:'SECONDARY',label:'🎙️микро @',id:target+'micro$1$1'},type:'message'}
  ,ban:{0:{style:'SECONDARY',label:'🚫забанить @',id:target+'ban$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'ban$1$1'},type:'message'}
  ,trans:{0:{style:'SECONDARY',label:'👑права @',id:target+'trans$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'trans$1$1'},type:'message'}
    ,'null':{0:{style:'SECONDARY',label:'♻️сбросить настройки для @',id:target+'null$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'null$1$1'},type:'message'}
 ,'constructive':{0:{style:'SECONDARY',label:'👽конструктив',id:target+'constructive$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'constructive$1$1'},type:'message',report:true}
,'game':{0:{style:'SECONDARY',label:'🎮игра',id:target+'game$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'game$1$1'},type:'message'}
, 'film':{0:{style:'SECONDARY',label:'🎞️фильм',id:target+'film$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'film$1$1'},type:'message'}
    ,broom:{0:{style:'SECONDARY',label:'🧹кик всех',id:target+'broom$0$0'},1:{style:'PRIMARY',emoji:'🧹',id:target+'broom$1$1'}}
  ,report:{0:{style:'SECONDARY',label:'присоединится к беседе',id:target+'report$0$0'},1:{style:'PRIMARY',emoji:'🧹',id:target+'broom$1$1'},type:'linkdata'}
 
      }
      
      return obj
      }
  
    ,'buttons':{}
   , 
      rowsini:{
        baseRow:{lock:0,lecture:0,reset:0,broom:0,help:0}
        ,'permsRow':{key:0,micro:0,ban:0,trans:0,'null':0}
        ,'alertRow':{constructive:0,game:0}
      
      
    }
  }
}