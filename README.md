Книга контактів

Напиши застосунок зберігання контактів телефонної книги.

Крок 1 Застосунок повинен складатися з форми і списку контактів. На поточному
кроці реалізуй додавання імені контакту та відображення списку контактів.
Застосунок не повинен зберігати контакти між різними сесіями (оновлення
сторінки). Кожен контакт повинен бути об'єктом з властивостями name та id. Для
генерації ідентифікаторів використовуй будь-який відповідний пакет, наприклад
nanoid.

Крок 2 Розшир функціонал застосунку, дозволивши користувачам додавати номери
телефонів. Для цього додай <input type="tel"> у форму і властивість для
зберігання його значення в стані.

Крок 3 Додай поле пошуку, яке можна використовувати для фільтрації списку
контактів за ім'ям. Поле пошуку – це інпут без форми, значення якого записується
у стан (контрольований елемент). Логіка фільтрації повинна бути нечутливою до
регістру.

Крок 4 Якщо твій застосунок реалізований в одному компоненті <App>, виконай
рефакторинг, виділивши відповідні частини в окремі компоненти. У стані
кореневого компонента <App> залишаться тільки властивості contacts і filter.
Достатньо виділити чотири компоненти: форма додавання контактів, список
контактів, елемент списку контактів та фільтр пошуку.

Крок 5 Заборони користувачеві можливість додавати контакти, імена яких вже
присутні у телефонній книзі. При спробі виконати таку дію виведи alert із
попередженням.

Крок 6 Розшир функціонал застосунку, дозволивши користувачеві видаляти раніше
збережені контакти.
