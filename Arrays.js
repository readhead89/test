/*
Shift + F9 запуск кода
МАССИВЫ
Каждый элемент в массиве имеет пронумерованную позицию, известную как его индекс . Мы можем получить доступ к отдельным элементам, используя их индекс, что аналогично ссылке на элемент в списке на основе позиции элемента.
Массивы в JavaScript имеют нулевой индекс , то есть позиции начинают отсчет с, 0а не с 1. Следовательно, первый элемент массива будет в позиции 0. Давайте посмотрим, как мы можем получить доступ к элементу в массиве
Во фрагменте кода выше:
cities представляет собой массив, состоящий из трех элементов.
Мы используем обозначение скобок []с индексом после имени массива для доступа к элементу.
cities[0]будет обращаться к элементу по индексу 0в массиве cities. Вы можете думать об этом cities[0]как о доступе к пространству в памяти, которое содержит строку 'New York'.
Вы также можете получить доступ к отдельным символам в строке, используя скобки и индекс. Например, вы можете написать:
const hello = 'Hello World';
console.log(hello[6]);
// Output: W
*/

const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
let listItem =famousSayings[0]
console.log (listItem)
console.log (famousSayings[2])
console.log (famousSayings[3])

//Обновление массивов
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1]= 'avocados'

/*
Свойство .length
Одно из встроенных свойств массива — lengthи возвращает количество элементов в массиве. Мы обращаемся к .length свойству так же, как и к строкам.
 */

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log (objectives.length)

/*
Метод .push()
Один метод .push() позволяет нам добавлять элементы в конец массива. Вот пример того, как это используется
 */
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('fly airplane', 'take cake')
console.log(chores)

/*Метод .pop()
Другой метод массива .pop() удаляет последний элемент массива.
 */
const chores1 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
chores1.pop()
console.log (chores1)

/*
Другие методы массива. Некоторые методы массивов, доступные разработчикам JavaScript, включают: .join(), .slice(), .splice(), .shift(), .unshift() и .concat()многие другие. Использование этих встроенных методов упрощает выполнение некоторых общих задач при работе с массивами.

 */
/*Используйте .shift()метод для удаления первого элемента из массива groceryList. Зарегистрируйте новое groceryList в консоли. Читайте об этом .shift()в Документах https://www.codecademy.com/resources/docs/javascript/arrays/shift
 */

// Метод .shift() удаляет первый элемент массива
const groceryList1 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList1.shift()
console.log(groceryList1)

//Метод .unshift() добавляет первый элемент в массив
const groceryList2 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList2.unshift('popcorn')
console.log(groceryList2)

/* Метод массива .slice()
Возвращает неглубокую копию всего массива или его части без изменения оригинала. Неглубокая копия дублирует содержимое объекта в новый экземпляр по ссылке; поэтому изменения в копии не отражаются в оригинале.
 */
const groceryList3 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
groceryList3.unshift('popcorn')
console.log (groceryList3.slice(1,4))
console.log (groceryList3)

// Метод массива .indexOf() возвращает индекс массива
const groceryList4 = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
const pastaIndex =groceryList4.indexOf('pasta')
console.log (pastaIndex)