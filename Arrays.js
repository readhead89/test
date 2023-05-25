//Массивы
/*
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
