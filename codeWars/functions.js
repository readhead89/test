// Напишите функцию, которая удаляет пробелы из строки, а затем возвращает результирующую строку. Метод replaceAll

function noSpace(x){
    return x.replaceAll(' ','')
}
noSpace("8 j 8   mBliB8g  imjB8B8  jl  B")
noSpace("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd")
noSpace("8aaaaa dddd r     ")

//Учитывая непустой массив целых чисел, вернуть результат умножения значений вместе по порядку.

function grow(x){
    console.log(x.reduce())
}
grow()

//Создайте функцию, которая принимает целое число в качестве аргумента и возвращает значение "Even"для четных или "Odd"нечетных чисел.

function evenOrOdd(number) {
    return number % 2 === 0 ? "Odd" : "Even"
}
evenOrOdd(2)
evenOrOdd(7)
evenOrOdd(-42)
evenOrOdd(0)

//Рассмотрим массив/список овец, где некоторые овцы могут отсутствовать на своем месте. Нам нужна функция, которая подсчитывает количество овец, присутствующих в массиве (true означает наличие).

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.forEach()
}
countSheeps(17 )

//Это довольно просто. Ваша цель — создать функцию, которая удаляет первый и последний символы строки. Вам дан один параметр, исходная строка. Вам не нужно беспокоиться о строках, содержащих менее двух символов.Метод slice

function removeChar(str){
return str.slice(1,-1)
}
removeChar('Hello')

//Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними. На выходе должны быть две заглавные буквы с точкой, разделяющей их.
function abbrevName(name){
    console.log(name.substring(0,-1))
}
abbrevName('Dima Pima')