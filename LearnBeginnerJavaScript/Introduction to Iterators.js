/*
Представьте, что у вас есть список продуктов, и вы хотите знать, что представляет собой каждый пункт в списке. Вам придется просмотреть каждую строку и проверить наличие элемента. Эта общая задача похожа на то, что мы должны делать, когда хотим перебрать или перебрать массив. Одним из инструментов в нашем распоряжении является for. Однако у нас также есть доступ к встроенным методам массива, которые упрощают создание циклов.
Встроенные методы массива JavaScript, которые помогают нам выполнять итерацию, называются методами итерации , иногда называемыми итераторами . Итераторы — это методы, вызываемые для массивов для управления элементами и возврата значений.
На этом уроке вы изучите синтаксис этих методов, их возвращаемые значения, как использовать документацию, чтобы понять их, и как выбрать правильный метод итератора для данной задачи.
Проверьте код в main.js. Обратите внимание на различные методы, вызываемые для массивов:
.forEach()
.map()
.filter()
Запустите код, чтобы увидеть результат!
 */
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];
artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
    return number * number;
});
console.log(squareNumbers);
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];
const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});
console.log(onlyNumbers);

/*
Метод .forEach()
Первый метод итерации, который мы собираемся изучить, это .forEach(). Правильно названный, .forEach()будет выполнять один и тот же код для каждого элемента массива.
Диаграмма, показывающая части итератора массива, включая идентификатор массива, раздел, который является итератором, и функцию обратного вызова
Приведенный выше код выведет на консоль хорошо отформатированный список продуктов. Давайте изучим синтаксис вызова .forEach().
groceries.forEach()вызывает forEach метод массива groceries.
.forEach()принимает аргумент функции обратного вызова. Помните, что функция обратного вызова — это функция, которая передается в качестве аргумента в другую функцию.
.forEach()перебирает массив и выполняет функцию обратного вызова для каждого элемента. Во время каждого выполнения текущий элемент передается в качестве аргумента функции обратного вызова.
Возвращаемое значение .forEach()всегда будет undefined.
Другой способ передать обратный вызов для .forEach()— использовать синтаксис стрелочной функции.
groceries.forEach(groceryItem => console.log(groceryItem));
Мы также можем заранее определить функцию, которая будет использоваться в качестве функции обратного вызова.
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);
В приведенном выше примере используется объявление функции, но вы также можете использовать выражение функции или функцию стрелки.
Все три фрагмента кода делают одно и то же. В каждом методе итерации массива мы можем использовать любой из трех примеров для предоставления функции обратного вызова в качестве аргумента итератора. Полезно знать о различных способах передачи функций обратного вызова в качестве аргументов в итераторах, поскольку у разработчиков разные стилистические предпочтения. Тем не менее, из-за сильного внедрения ES6 мы будем использовать синтаксис стрелочных функций в последующих упражнениях.
 */
/*
Переберите fruits массив для записи в журнал, I want to eat aа также имя каждого фрукта для консоли. Например, I want to eat a mango.
Вы можете использовать любую форму обратного вызова, которую вы предпочитаете.
 */
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];
fruits.forEach(fruits => console.log('I want to eat a '+ fruits))

/*
Метод .map()
Второй итератор, который мы собираемся рассмотреть, это .map(). Когда .map()вызывается массив, он принимает аргумент функции обратного вызова и возвращает новый массив! Взгляните на пример вызова .map():
const numbers = [1, 2, 3, 4, 5];
const bigNumbers = numbers.map(number => {
  return number * 10;
});
.map()работает аналогично .forEach()- основное отличие состоит в том, что он .map()возвращает новый массив.
В приведенном выше примере:
numbers представляет собой массив чисел.
bigNumbers будет хранить возвращаемое значение .map()вызова numbers.
numbers.map будет перебирать каждый элемент в numbers массиве и передавать элемент в функцию обратного вызова.
return number * 10это код, который мы хотим выполнить для каждого элемента в массиве. Это сохранит каждое значение из numbers массива, умноженное на 10, в новый массив.
Если мы посмотрим на numbers и bigNumbers:
console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]
Обратите внимание, что элементы numbers не были изменены и bigNumbers представляют собой новый массив.
 */
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const secretMessage = animals.map (animals=>{
    return animals[0]
})
console.log(secretMessage.join(' + '));

const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers1 = bigNumbers.map(bigNumbers => {
    return bigNumbers / 100
})
console.log (bigNumbers)
console.log (smallNumbers1)

/*
Метод .filter()
Еще один полезный метод итератора — .filter(). Например .map(), .filter()возвращает новый массив. Однако .filter()возвращает массив элементов после фильтрации определенных элементов из исходного массива. Функция обратного вызова для .filter()метода должна возвращать true или false в зависимости от переданного ей элемента. Элементы, вызывающие возврат функции обратного вызова, true добавляются в новый массив. Взгляните на следующий пример:
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
const shortWords = words.filter(word => {
  return word.length < 6;
});
words представляет собой массив, содержащий строковые элементы.
const shortWords =объявляет новую переменную, в которой будет храниться массив, возвращаемый при вызове .filter().
Функция обратного вызова — это стрелочная функция с одним параметром word. Каждый элемент массива words будет передан этой функции в качестве аргумента.
word.length < 6;это условие в функции обратного вызова. Любое word из words массива, которое содержит меньше 6символов, будет добавлено в shortWords массив.
Давайте также проверим значения words и shortWords:
console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']
Наблюдайте, как words не мутировалось, т.е. не изменялось, а shortWords представляло собой новый массив.
 */
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(randomNumbers =>{
    return randomNumbers < 250
})
console.log (randomNumbers)
console.log (smallNumbers)

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter (favoriteWords=>{
    return favoriteWords.length > 7
})
console.log (favoriteWords.length)
console.log (longFavoriteWords)

/*
Метод .findIndex()
Иногда нам нужно найти расположение элемента в массиве. Вот где .findIndex()метод приходит! Вызов .findIndex()массива вернет индекс первого элемента, который оценивается true в функции обратного вызова.
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
jumbledNums представляет собой массив, содержащий элементы, являющиеся числами.
const lessThanTen =объявляет новую переменную, в которой хранится номер индекса, возвращаемый при вызове .findIndex().
Функция обратного вызова — это стрелочная функция с одним параметром num. Каждый элемент массива jumbledNums будет передан этой функции в качестве аргумента.
num < 10;условие, по которому проверяются элементы. .findIndex()вернет индекс первого элемента, который оценивается true для этого условия.
Давайте посмотрим, что lessThanTen оценивается:
console.log(lessThanTen); // Output: 3
Если мы проверим, какой элемент имеет индекс 3:
console.log(jumbledNums[3]); // Output: 5
Отлично, элемент в индексе 3— это число 5. Это имеет смысл, так как 5это первый элемент, который меньше 10.
Если в массиве нет ни одного элемента, удовлетворяющего условию обратного вызова, то .findIndex()будет возвращено -1.
const greaterThan1000 = jumbledNums.findIndex(num => {
  return num > 1000;
});
console.log(greaterThan1000); // Output: -1
 */
const animals2 = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
const findAnimal = animals2.findIndex(animals2 =>{
    return animals2 === 'leopard'
})
console.log(findAnimal)
/*
Метод .reduce()
Другим широко используемым методом итерации является .reduce(). Метод .reduce()возвращает одно значение после перебора элементов массива, тем самым уменьшая массив. Взгляните на пример ниже:
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
})
console.log(summedNums) // Output: 17
Вот значения accumulator и currentValue при переборе массива numbers:
Итерация	accumulator	currentValue	возвращаемое значение
Первый	1	2	3
Второй	3	4	7
Третий	7	10	17
Теперь давайте рассмотрим использование .reduce()из приведенного выше примера:
numbers представляет собой массив, содержащий числа.
summedNums.reduce()— это переменная, в которой хранится возвращаемое значение вызова numbers.
numbers.reduce()вызывает .reduce()метод массива numbers и принимает функцию обратного вызова в качестве аргумента.
Функция обратного вызова имеет два параметра accumulator и currentValue. Значение accumulator начинается со значения первого элемента в массиве и начинается currentValue со второго элемента. Чтобы увидеть значение accumulator и currentValue изменение, просмотрите диаграмму выше.
При .reduce()переборе массива возвращаемое значение функции обратного вызова становится значением accumulator для следующей итерации, currentValue принимает значение текущего элемента в циклическом процессе.
Метод .reduce()также может принимать необязательный второй параметр для установки начального значения accumulator(помните, что первый аргумент — это функция обратного вызова!). Например:
const numbers = [1, 2, 4, 10];
const summedNums = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue
}, 100)  // <- Second argument for .reduce()
console.log(summedNums); // Output: 117
Вот обновленная диаграмма, учитывающая второй аргумент 100:
Итерация #	accumulator	currentValue	возвращаемое значение
Первый	100	1	101
Второй	101	2	103
Третий	103	4	107
Четвертый	107	10	117
 */
const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue )=>{
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
},10)
console.log(newSum);
/*
Документация по итератору
Существует множество дополнительных встроенных методов массива, полный список которых находится на странице методов итерации массива MDN .
Документация для каждого метода содержит несколько разделов:
Краткое определение.
Блок с правильным синтаксисом для использования метода.
Список параметров, которые метод принимает или требует.
Возвращаемое значение функции.
Расширенное описание.
Примеры использования метода.
Другая дополнительная информация.
В приведенных ниже инструкциях есть ошибки в коде. Используйте документацию для данного метода, чтобы определить ошибку, или заполните пробел, чтобы код работал правильно.
 */
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
    return word.length < 6;
}));
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// Choose a method that will return a new array
const longCities = cities.filter(city => city.length > 7);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0]
}, "C");

console.log(word)

// Choose a method that will return a new array
const smallerNums = nums.map(num => num - 5);

// Choose a method that will return a boolean value
nums.every(num => num < 0);
