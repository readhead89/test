/*
Волшебная восьмерка
Вы изучили мощный инструмент в JavaScript: поток управления! На самом деле он настолько силен, что его можно использовать, чтобы предсказать чью-то судьбу.
В этом проекте мы создадим Magic Eight Ball , используя поток управления в JavaScript.
Пользователь сможет ввести вопрос, после чего наша программа выдаст случайное состояние.
Если вы застряли во время этого проекта или хотели бы увидеть, как над ним работает опытный разработчик, нажмите « Выйти из тупика », чтобы просмотреть видео с пошаговым обзором проекта .

В первой строке программы определите переменную с именем userName, для которой задана пустая строка.
Если пользователь хочет, он может ввести свое имя между кавычками.
Под этой переменной создайте троичное выражение, которое решает, что делать, если пользователь введет имя или нет. Если пользователь вводит имя — например 'Jane'— используйте интерполяцию строк для входа Hello, Jane!в консоль. В противном случае просто зарегистрируйтесь Hello!.
Создайте переменную с именем userQuestion. Значение переменной должно быть строкой, представляющей собой вопрос, который пользователь хочет задать Magic Eight Ball.
Напишите console.log()для userQuestion, заявив, что было задано. Вы можете включить имя пользователя в console.log()выписку, если хотите!
Нам нужно сгенерировать случайное число от 0 до 7.
Создайте еще одну переменную и назовите ее randomNumber. Установите его равным этому выражению, которое использует два метода ( Math.floor()и Math.random()) из библиотеки Math.
Math.floor(Math.random() * 8);
Проверьте подсказку, чтобы узнать, как это работает!
Создайте еще одну переменную с именем eightBall и установите ее равной пустой строке. Мы сохраним значение этой переменной на следующих шагах, в зависимости от значения randomNumber.
Нам нужно создать поток управления, который берет то, что randomNumber мы сделали на шаге 5, а затем присваивает eightBall ответу, который вернет Magic Eight Ball. Подумайте об использовании if/ else или switch утверждений. Вот 8 фраз Magic Eight Ball, которые мы хотели бы сохранить в переменной eightBall:
'It is certain'
'It is decidedly so'
'Reply hazy try again'
'Cannot predict now'
'Do not count on it'
'My sources say no'
'Outlook not so good'
'Signs point to yes'
Если randomNumber это 0, то сохраните ответ в eightBall переменную; если randomNumber есть 1, то сохранить следующий ответ и т.д. Если вы чувствуете себя творчески, сделайте свои собственные ответы!
Напишите a console.log(), чтобы напечатать ответ волшебной восьмерки, значение переменной eightBall.
Запустите вашу программу несколько раз, чтобы увидеть, как в консоли появляются случайные результаты!
Если вам нужна дополнительная практика:
Если вы начали с switch оператора, преобразуйте его в оператор if/ else if/ .else
Если вы начали с операторов if/ else if/ , преобразуйте их в операторы.else switch
 */
const userName = "Bond";
userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");
const userQuestion = "How do you do?";
console.log(
    `The man ${userName} asks you a magic ball, what do you think of my question ${userQuestion}?`
);
let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";
eightBall = randomNumber;

if (randomNumber === 1) {
    console.log("It is certain");
} else if (randomNumber === 2) {
    console.log("It is decidedly so");
} else if (randomNumber === 3) {
    console.log("Reply hazy try again");
} else if (eightBall === 4) {
    console.log("Cannot predict now");
} else if (eightBall === 5) {
    console.log("Do not count on it");
} else if (eightBall === 6) {
    console.log("My sources say no");
} else if (eightBall === 7) {
    console.log("Outlook not so good");
} else if (eightBall === 8) {
    console.log("Signs point to yes");
} else {
    console.log(0);
}
console.log(eightBall);


switch (randomNumber){
    case (randomNumber=1):
        console.log("It is certain");
        break;
    case (randomNumber=2):
        console.log("It is decidedly so");
        break;
    case (randomNumber=3):
        console.log("Reply hazy try again");
        break;
    case (randomNumber=4):
        console.log("Cannot predict now");
        break;
    case (randomNumber=5):
        console.log("Do not count on it");
        break;
    case (randomNumber=6):
        console.log("My sources say no");
        break;
    case (randomNumber=7):
        console.log("Outlook not so good");
        break;
    case (randomNumber=8):
        console.log("Signs point to yes");
        break;
    default:
        console.log(0);
        break;
}