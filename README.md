# Kofu
Simple Discord bot written in JS
## Команды
* `qt string` - Выбирает случайное слово из строки, ищет стихотворение в базе с этим словом и отправляет предложение от точки до точки (база ~ 260 стихотворений)
* `say ch_id text` - Отправляет в канал с `ch_id` сообщение `text` (only for me^^)
* `pick ch_id m_id em` - Ставит эмодзи `em` на сообщение `m_id` в канале `ch_id` (*работает, как с символьными эмодзи, так и с внитрисерверными (но тогда надо отправлять на этом сервере)*) (only for me^^)
* `get` - Показывает ваши баллы (за каждое сообщение начисляется 5-10 баллов, пока общая база для всех серверов)
* `ping` - проверка работы (*должна ответить `pong!`, если есть права чтения и отправки сообщений в этом канале*)
* `cr string` - на некоторых серверах, при отправке админом - меняет всем пользователям с заданной ролью никнейм на `string`
* `ch` - при отправке меняет цвет радужной роли)
* `hh text` - ставит под этим сообщением два эмодзи `+` и `-`
* `vi` - отправляет случайное изображение Виктора Никифорова (база ~200 картинок)
* `ava *ping*`- отправляет аватар пользователя, которого пинганули, либо вас если дальше пустая строка
* `link` - отправляет важные ссылочки)

