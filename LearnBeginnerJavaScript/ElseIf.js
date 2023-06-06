/*
Операторы Else If
Мы можем добавить дополнительные условия к оператору if...else with . Утверждение допускает более двух возможных результатов. Вы можете добавить столько утверждений, сколько хотите, чтобы сделать более сложные условия!else if else if else if
Оператор else if всегда следует после if оператора и перед else оператором. Оператор else if также принимает условие. Давайте посмотрим на синтаксис:
let stopLight = 'yellow';
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}
Утверждения else if позволяют вам иметь несколько возможных результатов. if// операторы читаются сверху вниз, поэтому первое условие, которое вычисляется сверху вниз, — это выполняемый блок else if.else true
В приведенном выше примере, поскольку stopLight === 'red' оценивается false и stopLight === 'yellow' оценивается как , выполняется true код внутри первого оператора. else ifОстальные условия не оцениваются. Если бы ни одно из условий не оценивалось как true, то код в else операторе был бы выполнен.
Давайте создадим программу, которая отслеживает, как окружающая среда меняется в зависимости от времени года. Напишите условное выражение, чтобы это произошло!
В main.js уже есть if...else инструкция. Давайте добавим else if оператор, который проверяет, season равен ли 'winter'.
Внутри блока кода оператора else if добавьте a console.log(), который печатает строку 'It\'s winter! Everything is covered in snow.'.
Убедитесь, что в структуре используются if, else ifи else.
Добавьте еще один else if оператор, который проверяет, season равен ли 'fall'.
Внутри блока кода оператора, else if который вы только что создали, добавьте , console.log()который печатает строку 'It\'s fall! Leaves are falling!'.
Добавьте окончательный else if оператор, который проверяет, season равен ли 'summer'.
Внутри блока кода оператора, else if который вы только что создали, добавьте , console.log()который печатает строку 'It\'s sunny and warm because it\'s summer!'.
 */
let season = 'spring';
if (season === 'spring') {
    console.log('It\'s spring! The trees are budding!');
} else if (season ==='winter'){
    console.log('It\'s winter! Everything is covered in snow.')
} else if (season ==='fall'){
    console.log ('It\'s fall! Leaves are falling!')
} else if (season === 'summer'){
    console.log('It\'s sunny and warm because it\'s summer!')
} else {
    console.log('Invalid season.');
}
