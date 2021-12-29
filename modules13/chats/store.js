let target='#target'

let d2="Кнопки управления войсом:"
+"\nНадо пингануть @роль или @ник в своем текстовом канале и затем нажать на кнопку для действий с этим человеком или ролью."
   + "\n🔐Закрыть войс всем кто без спец ключа. Тем, кто находится в войсе на момент закрытия выдастся ключ. Повторное нажатие снимет блок."
  +"\n🔑@ник / @роль - Выдать спец ключ для входа в заблокированный войс*"
+"\n🔇 - Мутит всех кто без спец микрофона. Повторное нажатие снимает мут."
+"\n🎙️ @ник / @роль - выдать спец. микрофон в замученном войсе"

+"\n🧹 - кикнуть всех."

+"\n🚫@ник / @роль - Забанить*"
+"\n👑@ник - Передать права на войс"
+"\n♻️ @ник / @роль - обнулить права доступа*"
+"\n♻️ Сбросить настройки по умолчанию"

+"\n действия *, можно выполнить также поместив курсор на ник=>правая кнопка мыши=>приложения"
+"\nКнопки оповещения о беседах:"

+"\nперед тем как нажать на кнопку, можно послать в этот канал сообщение с уточнением темы беседы,начинающееся с точки"
+"\n👽 - Пингует роль для конструктивной беседы"
+"\n🎮Пингует роль игроманов"
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
    ,lecture:{0:{style:'SECONDARY',label:'🔇тиховсе',id:target+'lecture$0$1$micro$1'},1:{style:'SECONDARY',label:'🔇откл.тиховсе',id:target+'lecture$1$0$micro$0'}}
  ,textlock:{0:{style:'SECONDARY',emoji:'📖',id:target+'textlock$0$1'},1:{style:'DANGER',emoji:'📔',id:target+'textlock$1$0'}}
 ,reset:{0:{style:'SECONDARY',label:'♻️сбросить',id:target+'reset$0$1$resetall',disabled:false},1:{style:'PRIMARY',label:'♻️настройки сброшены',id:target+'reset$1$1$resetall'}}
  
        ,key:{0:{style:'SECONDARY',label:'🔑ключ @',id:target+'key$0$0',disabled:true},1:{style:'SECONDARY',label:'🔑ключ @',id:target+'key$1$1'},type:'message',needmention:true}
    ,micro:{0:{style:'SECONDARY',label:'🎙️микро @',id:target+'micro$0$0',disabled:true},1:{style:'SECONDARY',label:'🎙️микро @',id:target+'micro$1$1'},type:'message',needmention:true}
  ,ban:{0:{style:'SECONDARY',label:'🚫забанить @',id:target+'ban$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'ban$1$1'},type:'message',needmention:true}
  ,trans:{0:{style:'SECONDARY',label:'👑права @',id:target+'trans$0$0',disabled:true},1:{style:'PRIMARY',emoji:'♻️',id:target+'trans$1$1'},type:'message',needmention:true}
    ,'null':{0:{style:'SECONDARY',label:'♻️сбросить настройки для @',id:target+'null$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'null$1$1'},type:'message',needmention:true}
 ,'constructive':{0:{style:'SECONDARY',label:'👽конструктив',id:target+'constructive$0$0',disabled:true},1:{style:'PRIMARY',emoji:'♻️',id:target+'constructive$1$1'},type:'message',report:true}
,'game':{0:{style:'SECONDARY',label:'🎮игра',id:target+'game$0$0',disabled:true},1:{style:'PRIMARY',emoji:'♻️',id:target+'game$1$1'},type:'message',report:true}
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
     