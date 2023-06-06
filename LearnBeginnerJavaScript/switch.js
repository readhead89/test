/*
else if операторы — отличный инструмент, если нам нужно проверить несколько условий. В программировании нам часто приходится проверять несколько значений и обрабатывать каждое из них по-разному. Например:
let groceryItem = 'papaya';
if (groceryItem === 'tomato') {
  console.log('Tomatoes are $0.49');
} else if (groceryItem === 'papaya'){
  console.log('Papayas are $1.29');
} else {
  console.log('Invalid item');
}
В приведенном выше коде у нас есть ряд условий, проверяющих значение, соответствующее переменной groceryItem. Наш код работает нормально, но представьте, если бы нам нужно было проверить 100 разных значений! Необходимость писать столько else if утверждений звучит как боль!
Оператор предоставляет альтернативный синтаксис switch, который легче читать и писать. Заявление switch выглядит следующим образом:
let groceryItem = 'papaya';
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
// Prints 'Papayas are $1.29'
Ключевое switch слово инициирует оператор, за ним следует ( ... ), которое содержит значение, которое case будет сравниваться каждым из них. В примере значением или выражением инструкции switch является groceryItem.
Внутри блока { ... }есть несколько cases. Ключевое case слово проверяет, соответствует ли выражение указанному значению, которое следует за ним. Значение, следующее за первым, case равно 'tomato'. Если значение groceryItem равно 'tomato', это case будет console.log()работать.
Значение groceryItem равно 'papaya', поэтому третий case запуск Papayas are $1.29записывается в консоль.
Ключевое break слово говорит компьютеру выйти из блока и больше не выполнять код или проверять какие-либо другие случаи внутри блока кода. Примечание. Без break ключевых слов будет выполняться первый совпадающий вариант, а также каждый последующий вариант, независимо от того, совпадает он или нет, включая вариант по умолчанию. Это поведение отличается от условных операторов if/ else, которые выполняют только один блок кода.
В конце каждого switch утверждения есть default утверждение. Если ни один из cases не является истинным, код в default операторе будет выполнен.
Давайте напишем switch заявление, чтобы решить, какой медалью наградить спортсмена.
athleteFinalPosition уже определен в верхней части main.js. Итак, начните с написания switch оператора с athleteFinalPosition его выражением.
Внутри switch оператора добавьте три cases:
Первая case проверка значения 'first place'
Если значение выражения совпадает со значением, case то console.log()строка'You get the gold medal!'
Второй case проверяет значение 'second place'
Если значение выражения совпадает со значением, case то console.log()строка'You get the silver medal!'
Третий case проверяет значение 'third place'
Если значение выражения совпадает со значением, case то console.log()строка'You get the bronze medal!'
Не забудьте добавить break после каждого console.log().
Теперь добавьте default оператор в конце, switch который использует console.log()для печати 'No medal awarded.'.
Если athleteFinalPosition не равно никакому значению нашего cases, то строка 'No medal awarded.'выводится на консоль.
Не забудьте добавить break ключевое слово в конце случая default.
 */
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
    case "first place":
        console.log('You get the gold medal!')
        break;
    case 'second place':
        console.log('You get the silver medal!')
        break;
    case 'third place':
        console.log('You get the bronze medal!')
        break;
    default:
        console.log('No medal awarded.')
        break
}