

let target='#target'

let d=" 🔓 - кнопка блокировки/разблокировки войса \n   при нажатии блокирует подключение к войсу без специального ключа"
    +    "\n повторное нажатие снимает блок "
let d2="🔓- кнопка блокировки/разблокировки войса"
    + "[❔](https://discord.com/ 'при нажатии блокирует подключение к войсу без специального ключа \n повторное нажатие снимает блок') "

+"\n📢  - кнопка активации/деактивации режма тиховсе \n при нажатии устанавливает запрет на разговор без специального микрофона"
+"\n повторное нажатие снимает запрет"

+"\n♻️ - кнопка(в первом ряду) сбрасывает все настройки чата"
//+"\n🧹 - кнопка выкидывает из войса всех, кроме владельца"

//+"\n🔑 - кнопка выдачи ключа в заблокированный войс \n перед тем как нажать на кнопку, пошлите в этот канал сообщение с упоминанием  участника или роли"
//+"\n🎙️ - кнопка выдачи микрофона для разрешения говорить при активном режиме тиховсе,\n перед тем как нажать на кнопку, пошлите в этот канал сообщение с упоминанием  участника или роли"
//+"\n🚫 - кнопка банит участника, т.е участник не сможет подключатся к вашему войсу \n перед тем как нажать на кнопку, пошлите в этот канал сообщение с упоминанием  участника"
//+"\n👑 - кнопка передает права на чат другому участнику \n перед тем как нажать на кнопку, пошлите в этот канал сообщение с упоминанием  участника"
//+"\n♻️ -кнопка(во втором ряду) сбрасывает ранее установленные права для указанных участников и ролей \n перед тем как нажать на кнопку, пошлите в этот канал сообщение с упоминанием  участника или роли"

//+"\n👽 -кнопка оповещает о конструктивной беседе в данном войсе и предлагает присоединится к беседе, возможно указать дополнительную информацию о беседе, для этого перед нажатием пришлите сообщение с темой в этот канал"
//+"\n🎮 -кнопка оповещает о игре/игровом стриме в данном войсе и предлагает присоединится к беседе, возможно указать дополнительную информацию об игре, для этого перед нажатием пришлите сообщение с темой в этот канал"
//+"\n🎞️ -кнопка оповещает о просмотре фильма в данном войсе и предлагает присоединится к беседе, возможно указать дополнительную информацию о фильме, для этого перед нажатием пришлите сообщение с темой в этот канал"


module.exports.in={
    
      embed:{
        d:d2

      }
 
  
  ,chats:{
    getButtons:function(target){
      let obj={
        help:{0:{style:'DANGER',label:'Help',id:target+'help$0$1'},1:{style:'DANGER',label:'Help',id:target+'help$1$1',disabled:true}}
   
       ,lock:{0:{style:'SECONDARY',label:'🔓=>закрыть войс',id:target+'lock$0$1$key$1'},1:{style:'SECONDARY',label:'🔐=>открыть войс',id:target+'lock$1$0$key$0'}}
    
    //lock:{0:{style:'SECONDARY',label:'тиховсе',emoji:'🔓',id:target+'lock$0$1$key$1'},1:{style:'DANGER',label:'обычный',emoji:'🔐',id:target+'lock$1$0$key$0'}}
    ,lecture:{0:{style:'SECONDARY',label:'вкл.тиховсе',id:target+'lecture$0$1$micro$1'},1:{style:'SECONDARY',label:'🔇=>отк.тиховсе',id:target+'lecture$1$0$micro$0'}}
  ,textlock:{0:{style:'SECONDARY',emoji:'📖',id:target+'textlock$0$1'},1:{style:'DANGER',emoji:'📔',id:target+'textlock$1$0'}}
 ,reset:{0:{style:'SECONDARY',label:'♻️сбросить настройки',id:target+'reset$0$1'},1:{style:'PRIMARY',label:'♻️настройки сброшены',id:target+'reset$1$1'}}
  
        ,key:{0:{style:'SECONDARY',label:'🔑дать доступ @',id:target+'key$0$0',disabled:true},1:{style:'SECONDARY',label:'🔑дать доступ @',id:target+'key$1$1'},type:'message'}
    ,micro:{0:{style:'SECONDARY',label:'🎙️дать микро @',id:target+'micro$0$0',disabled:true},1:{style:'SECONDARY',label:'🎙️micro$0$0',id:target+'micro$1$1'},type:'message'}
  ,ban:{0:{style:'SECONDARY',label:'🚫забанить @',id:target+'ban$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'ban$1$1'},type:'message'}
  ,trans:{0:{style:'SECONDARY',label:'👑передать права @',id:target+'trans$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'trans$1$1'},type:'message'}
    ,'null':{0:{style:'SECONDARY',label:'♻️сбросить настройки для @',id:target+'null$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'null$1$1'},type:'message'}
 ,'constructive':{0:{style:'SECONDARY',label:'👽конструктивная беседа',id:target+'constructive$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'constructive$1$1'},type:'message'}
,'game':{0:{style:'SECONDARY',label:'🎮игра',id:target+'game$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'game$1$1'},type:'message'}
, 'film':{0:{style:'SECONDARY',label:'🎞️фильм',id:target+'film$0$0'},1:{style:'PRIMARY',emoji:'♻️',id:target+'film$1$1'},type:'message'}
    ,broom:{0:{style:'SECONDARY',label:'🧹кикнуть из войса всех',id:target+'broom$0$0'},1:{style:'PRIMARY',emoji:'🧹',id:target+'broom$1$1'}}
 
      }
      
      return obj
      }
  
    ,'buttons':{}
   , 
      rowsini:{
        baseRow:{lock:0,lecture:0,reset:0,broom:0,help:0}
        ,'permsRow':{key:0,micro:0,ban:0,trans:0,'null':0}
        ,'alertRow':{constructive:0,game:0,film:0}
      
      
    }
  }
}
     