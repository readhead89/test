//Примеры if / else if и switch
if ((randomNumber === 1)) {
    console.log("It is certain");
} else if ((randomNumber === 2)) {
    console.log("It is decidedly so");
} else if ((randomNumber === 3)) {
    console.log("Reply hazy try again");
} else if ((eightBall === 4)) {
    console.log("Cannot predict now");
} else if ((eightBall === 5)) {
    console.log("Do not count on it");
} else if ((eightBall === 6)) {
    console.log("My sources say no");
} else if ((eightBall === 7)) {
    console.log("Outlook not so good");
} else if ((eightBall === 8)) {
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
/* Функциональные выражения.
Допустим, у нас есть растение, которое нужно поливать раз в неделю по средам. Мы могли бы определить функциональное выражение, которое поможет нам проверить день недели и нужно ли поливать растение:
Создайте переменную с именем, plantNeedsWater используя const ключевое слово variable.Назначьте анонимную функцию, которая принимает параметр day to plantNeedsWater.
Теперь нам нужно добавить код в тело функции plantNeedsWater(): В теле функции добавьте if условие, которое проверяет day === 'Wednesday'.
Если условное выражение истинно, внутри if блока кода используйте return ключевое слово для возврата true. В нерабочие дни 'Wednesday' должно plantNeedsWater()вернуться false:
Добавьте else заявление после if заявления. Внутри else инструкции используйте return ключевое слово для возврата false.
Вызовите plantNeedsWater()и передайте в 'Tuesday' качестве аргумента. Проверим, что plantNeedsWater()вернуло ожидаемое значение.
Войдите plantNeedsWater('Tuesday')в консоль. Если это сработало правильно, вы должны увидеть false вход в консоль.
 */
const plantNeedsWater = function(day) {
    if (day === 'Wednesday'){
        return true
    }
    else
        return false
}
plantNeedsWater('Tuesday')
console.log (plantNeedsWater('Wednesday'))

//Упрощенный вариант

const plantNeedsWater1 = function(day) {
    return day === 'Wednesday';
}
plantNeedsWater1('Tuesday')
console.log (plantNeedsWater1('Wednesday'))

//Стрелочые функции
const plantNeedsWater3 = day => {
    return day === 'Wednesday';
};
//Краткие функции стрелок тела
/*
const squareNum = (num) => {
    return num * num;
};
const squareNum = num => num * num;
 */
const plantNeedsWater4 = day => day === 'Wednesday'