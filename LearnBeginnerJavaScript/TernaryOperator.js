/*
Тернарный оператор
В духе использования сокращенного синтаксиса мы можем использовать тернарный оператор для упрощения if...else оператора.
Взгляните на if...else пример заявления:
let isNightTime = true;
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}
Мы можем использовать тернарный оператор для выполнения той же функции:
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
В приведенном выше примере:
Условие , isNightTime ставится перед ?.
Два выражения следуют за ?и разделены двоеточием :.
Если условие оценивается как true, выполняется первое выражение.
Если условие оценивается как false, выполняется второе выражение.
Как и if...else операторы, тернарные операторы могут использоваться для условий, которые оцениваются как true или false.
Рефакторинг или редактирование первого if...else блока для использования тернарного оператора.
Рефакторинг второго if...else блока для использования тернарного оператора.
Рефакторинг третьего if...else блока для использования тернарного оператора.
 */
let isLocked = false;
isLocked ?  console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

let isCorrect = true;
isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 6;
favoritePhrase <= 5 ? console.log(`Yes is ${favoritePhrase}`) :  console.log(`don't ${favoritePhrase}`);


