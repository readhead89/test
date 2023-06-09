/*
Введение в расширенные объекты
Помните, что объекты в JavaScript — это контейнеры, в которых хранятся данные и функции. В этом уроке мы будем опираться на основы создания объектов и рассмотрим некоторые дополнительные концепции.
Так что если нет возражений, давайте подробнее разбираться с объектами!
В этом уроке мы рассмотрим следующие темы:
как использовать this ключевое слово.
передача конфиденциальности в методах JavaScript.
определение геттеров и сеттеров в объектах.
создание фабричных функций.
с использованием методов деструкции.
 */

/*
 this
Объекты представляют собой наборы связанных данных и функций. Мы храним эту функциональность в методах наших объектов:
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
В нашем goatобъекте у нас есть .makeSound()метод. Мы можем вызвать .makeSound()метод на goat.
goat.makeSound(); // Prints baaa
Отлично, у нас есть goat объект, который можно вывести baaa на консоль. Кажется, все работает нормально. goatЧто, если бы мы захотели добавить к нашему объекту новый метод с именем .diet(), который печатает goat's dietType?

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet();
// Output will be "ReferenceError: dietType is not defined"
Странно, почему dietType не определено, хотя это свойство goat? Это потому .diet(), что внутри области действия метода у нас нет автоматического доступа к другим свойствам объекта goat.
Вот где this ключевое слово приходит на помощь. Если мы изменим .diet()метод, чтобы использовать this, .diet()работает! :
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
goat.diet();
// Output: herbivore
Ключевое this слово ссылается на вызывающий объект , который обеспечивает доступ к свойствам вызывающего объекта. В приведенном выше примере вызывающий объект — это goat и с помощью this мы получаем доступ к goat самому объекту, а затем к dietType свойству goat с помощью точечной нотации свойства.
Давайте освоимся с использованием this ключевого слова в методе.
 */
const robot = {
    model:'1E78V2',
    energyLevel: 100,
    provideInfo(){
        return `I am ${this.model} and my current energy level is ${this.energyLevel}`
    }
};
console.log(robot.provideInfo())

/*
Стрелочные функции и this
В предыдущем упражнении мы видели, что для метода вызывающий объект — это объект, которому принадлежит метод. Если мы используем this ключевое слово в методе, то значением this является вызывающий объект. Однако все становится немного сложнее, когда мы начинаем использовать стрелочные функции для методов. Взгляните на пример ниже:
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet: () => {
    console.log(this.dietType);
  }
};
goat.diet(); // Prints undefined
В комментарии вы можете увидеть, что goat.diet()будет log undefined. Итак, что случилось? Обратите внимание, что .diet()метод определяется с помощью функции стрелки.
Стрелочные функции по своей сути связывают уже определенное this значение с самой функцией, которая НЕ является вызывающим объектом. В приведенном выше фрагменте кода значением this является глобальный объект или объект, существующий в глобальной области, который не имеет dietType свойства и поэтому возвращает значение undefined.
Чтобы узнать больше о стрелочных функциях или глобальном объекте, ознакомьтесь с документацией MDN по глобальным объектам и стрелочным функциям .
Ключевой вывод из приведенного выше примера — избегать использования стрелочных функций при использовании thisв методе!
 */
const robot1 = {
    energyLevel: 100,
    checkEnergy() {
        return `Energy is currently at ${this.energyLevel}%.`
    }
};
robot1.checkEnergy();
/*
Конфиденциальность
Доступ к свойствам и их обновление имеют основополагающее значение при работе с объектами. Однако бывают случаи, когда мы не хотим, чтобы другой код просто обращался к свойствам объекта и обновлял их. Обсуждая конфиденциальность в объектах, мы определяем ее как идею о том, что только определенные свойства должны быть изменяемыми или иметь возможность изменять значение.
Некоторые языки имеют встроенную конфиденциальность для объектов, но JavaScript не имеет этой функции. Скорее, разработчики JavaScript следуют соглашениям об именах, которые сигнализируют другим разработчикам, как взаимодействовать со свойством. Одним из распространенных соглашений является размещение подчеркивания _перед именем свойства, что означает, что свойство не должно быть изменено. Вот пример использования _для добавления свойства.
const bankAccount = {
  _amount: 1000
}
В приведенном выше примере объект _amount не предназначен для прямого манипулирования.
Тем не менее, все еще возможно переназначить _amount:
bankAccount._amount = 1000000;
В следующих упражнениях мы рассмотрим использование методов, называемых геттерами и сеттерами . Оба метода используются для соблюдения назначения свойств, предваряемых или начинающихся с _. Геттеры могут возвращать значения внутренних свойств, а сеттеры могут безопасно переназначать значения свойств. А пока давайте посмотрим, что произойдет, если мы сможем изменить свойства, у которых нет сеттеров или геттеров.
 */
/*
Под robot объектом переназначьте _energyLevel свойство на 'high'.
Теперь взгляните на новый recharge метод в robot. .recharge()добавит 30к _energyLevel.
Что будет теперь, если _energyLevel это не число?
Звоните .recharge(), robot чтобы узнать.
Обратите внимание, что на консоль выводится странная строка! Это известно как побочный эффект приведения типов. Пока не нужно беспокоиться о том, что это означает, но важно понимать, что вы можете вызвать нежелательные побочные эффекты при изменении объектов и их свойств.
 */
const robot3 = {
    _energyLevel: 100,
    recharge(){
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};
robot3._energyLevel = 'high'
robot3.recharge()
/*
Геттеры — это методы, которые получают и возвращают внутренние свойства объекта. Но они могут сделать больше, чем просто получить значение свойства! Давайте посмотрим на метод получения:
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
// To call the getter method:
person.fullName; // 'John Doe'
Обратите внимание, что в приведенном выше методе получения:
Мы используем get ключевое слово, за которым следует функция.
Мы используем if...else условное выражение, чтобы проверить, существуют ли и то, _firstName и другое _lastName(убедившись, что они оба возвращают истинные значения), а затем возвращаем другое значение в зависимости от результата.
Мы можем получить доступ к внутренним свойствам вызывающего объекта, используя this. В fullName, мы получаем доступ к обоим this._firstName и this._lastName.
В последней строке мы fullName вызываем person. Как правило, методы получения не нужно вызывать с набором круглых скобок. Синтаксически это выглядит так, как будто мы обращаемся к свойству.
Теперь, когда мы рассмотрели синтаксис, давайте обсудим некоторые заметные преимущества использования методов получения:
Геттеры могут выполнять действие над данными при получении свойства.
Геттеры могут возвращать разные значения, используя условные операторы.
В геттере мы можем получить доступ к свойствам вызывающего объекта, используя this.
Функциональность нашего кода легче понять другим разработчикам.
Еще одна вещь, о которой следует помнить при использовании методов получения (и установки), заключается в том, что свойства не могут иметь то же имя, что и функция получения/установки. Если мы это сделаем, то вызов метода приведет к бесконечной ошибке стека вызовов. Одним из обходных путей является добавление подчеркивания перед именем свойства, как мы сделали в примере выше.
 */
/*
В robot, создайте метод получения, названный energyLevel с помощью get ключевого слова. Пока оставьте тело функции пустым.
Внутри метода получения добавьте if оператор, чтобы проверить, this._energyLevel является ли число с помощью typeof оператора. Если это условие истинно, верните 'My current energy level is ENERGYLEVEL'. Замените ENERGYLEVEL значением this._energyLevel.
Убедитесь, что вы возвращаете строку, а не записываете ее в консоль.
Если this._energyLevel это не число, возможно, _energyLevel свойство было изменено. Давайте добавим оператор возврата по умолчанию, когда возникает такой сценарий.
Добавьте else оператор, который возвращает 'System malfunction: cannot retrieve energy level'.
Запишите результат вызова метода получения energyLevel на robot консоль.
Обратите внимание, что метод вернет отформатированный ответ, а не просто обратится к свойству!
 */
const robot4 = {
    _model: '1E78V2',
    _energyLevel: " ",
    get energyLevel(){
        if (typeof this._energyLevel === 'number'){
            return `My current energy level is ${this._energyLevel}`
        }
        else {
            return "System malfunction: cannot retrieve energy level"
        }
    }
};
console.log(robot4.energyLevel)

/*
Сеттеры
Наряду с методами получения мы также можем создавать методы установки , которые переназначают значения существующих свойств внутри объекта. Давайте посмотрим на пример метода установки:
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
Обратите внимание, что в приведенном выше примере:
Мы можем выполнить проверку того, какое значение присваивается this._age.
Когда мы используем метод установки, только значения, которые являются числами, будут переназначены this._age
Существуют разные выходные данные в зависимости от того, какие значения используются для переназначения this._age.
Затем, чтобы использовать метод установки:
person.age = 40;
console.log(person._age); // Logs: 40
person.age = '40'; // Logs: You must assign a number to age
Подобные методы установки age не нужно вызывать с набором круглых скобок. Синтаксически это выглядит так, как будто мы переназначаем значение свойства.
Как и у методов-получателей, у методов-установщиков есть аналогичные преимущества, которые включают проверку ввода, выполнение действий со свойствами и отображение четкого намерения относительно того, как предполагается использовать объект. Тем не менее, даже с помощью метода установки можно напрямую переназначить свойства. Например, в приведенном выше примере мы все еще можем установить ._age напрямую:
person._age = 'forty-five'
console.log(person._age); // Prints forty-five
инструкции
/*
В настоящее время robot существует метод получения, numOfSensors но нет метода установки! Что делать, если нам нужно добавить или удалить некоторые датчики? Давайте исправим эту проблему.
Добавьте метод установки, названный numOfSensors с помощью set ключевого слова. Укажите параметр num. Пока оставьте тело функции пустым.
Есть несколько вещей, которые мы должны сделать в методе установки:
Добавьте проверку, чтобы увидеть, num является ли число с помощью typeof оператора.
num также должно быть больше или равно 0.
Если оба условия соблюдены, переназначить this._numOfSensors на num.
Теперь добавьте файл else, который регистрируется 'Pass in a number that is greater than or equal to 0'в консоли.
Используйте numOfSensors метод установки, robot чтобы _numOfSensors назначить 100.
Чтобы проверить, что метод установки работает, console.log() robot.numOfSensors.
 */

const robot5 = {
    _model: '1E78V2',
    _energyLevel: 100,
    _numOfSensors: 15,
    get numOfSensors(){
        if(typeof this._numOfSensors === 'number'){
            return this._numOfSensors;
        } else {
            return 'Sensors are currently down.'
        }
    },
    set numOfSensors (num) {
        if(typeof num === 'number' && num >=0){
            this._numOfSensors = num
        }
        else {
            return 'Pass in a number that is greater than or equal to 0'
        }
    }
};
robot5.numOfSensors = 100
console.log (robot5.numOfSensors)

/*
Заводские функции
До сих пор мы создавали объекты по отдельности, но бывают случаи, когда нам нужно быстро создать множество экземпляров объекта. Вот где вступают в действие фабричные функции . Реальная фабрика производит несколько копий предмета быстро и в больших масштабах. Фабричная функция — это функция, которая возвращает объект и может быть повторно использована для создания нескольких экземпляров объекта. Фабричные функции также могут иметь параметры, позволяющие нам настраивать возвращаемый объект.
Допустим, мы хотели создать объект для представления монстров в JavaScript. Существует много разных типов монстров, и мы могли бы создавать каждого монстра по отдельности, но мы также можем использовать функцию фабрики, чтобы облегчить себе жизнь. Чтобы реализовать этот дьявольский план создания нескольких объектов-монстров, мы можем использовать фабричную функцию с параметрами:
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return {
    name: name,
    age: age,
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    }
  }
};
В monsterFactory приведенной выше функции она имеет четыре параметра и возвращает объект со свойствами: name, age, energySource и scare(). Чтобы сделать объект, представляющий конкретного монстра, например, призраком, мы можем вызвать его monsterFactory с необходимыми аргументами и присвоить возвращаемое значение переменной:
const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
Теперь у нас есть ghost объект в результате вызова monsterFactory()с нужными аргументами. Благодаря monsterFactory этому нам не нужно создавать объектный литерал каждый раз, когда нам нужен новый монстр. Вместо этого мы можем вызвать monsterFactory функцию с необходимыми аргументами длязахватить власть над миромсделай нам монстра!
Вместо того, чтобы делать отдельных роботов, как мы делали, давайте создадим фабричную функцию, чтобы делать роботов, как нам нравится!
Создайте фабричную функцию с именем robotFactory, которая имеет два параметра model и mobile. Заставьте функцию возвращать объект. В объект добавьте ключ model со значением параметра model. Добавьте еще одно свойство, имеющее ключ mobile со значением параметра mobile.
Затем добавьте метод с именем beep без параметра, который будет регистрироваться 'Beep Boop' в консоли.
Используйте свою фабричную функцию, объявив const переменную с именем tinCan. Присвоить tinCan значение вызова robotFactory с первым аргументом 'P-500'и вторым аргументом true.
Давайте теперь проверим, что tinCan можно сделать! Звоните . .beep()_tinCan
Вы должны увидеть 'Beep Boop' напечатанное на консоли, что означает, что фабричная функция создала объект-робот! Поиграйте с tinCan, чтобы проверить другие свойства!
 */
const robotFactory = (model, mobile) => {
    return{
        model:model,
        mobile:mobile,
        beep(){
            console.log('Beep Boop')
        }
    }
}
const tinCan = robotFactory ('P-500', true)
tinCan.beep()
const t200 = robotFactory ('T-100', true)
tinCan.beep()
/*
Сокращенное значение свойства
В ES6 появилось несколько новых способов присвоения свойств переменным, известных как деструктуризация .
В предыдущем упражнении мы создали фабричную функцию, которая помогала нам создавать объекты. Нам пришлось присвоить каждому свойству ключ и значение, несмотря на то, что имя ключа было таким же, как и имя параметра, которое мы ему присвоили. Чтобы напомнить себе, вот усеченная версия фабричной функции:
const monsterFactory = (name, age) => {
  return {
    name: name,
    age: age
  }
};
Представьте, если бы нам пришлось включить больше свойств, этот процесс быстро стал бы утомительным! Но мы можем использовать технику деструктуризации, называемую сокращением значения свойства , чтобы сэкономить несколько нажатий клавиш. Пример ниже работает точно так же, как пример выше:
const monsterFactory = (name, age) => {
  return {
    name,
    age
  }
};
Обратите внимание, что нам не нужно повторяться для присвоения свойств!
Используйте сокращенное значение свойства и рефакторинг фабричной функции в main.js.
 */
const robotFactory1 = (model, mobile) => {
    return {
        model,
        mobile,
        beep() {
            console.log('Beep Bop');
        }
    }
}
// To check that the property value shorthand technique worked:
const newRobot = robotFactory1('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)
const oldRobot = robotFactory1('T-200', true)
console.log(oldRobot.model)

/*
Деструктурированное назначение
Мы часто хотим извлечь пары ключ-значение из объектов и сохранить их как переменные. Возьмем, к примеру, следующий объект:
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};
Если бы мы хотели извлечь residence свойство как переменную, мы могли бы использовать следующий код:
const residence = vampire.residence;
console.log(residence); // Prints 'Transylvania'
Однако мы также можем воспользоваться методом деструктурирования, называемым деструктурированным присваиванием , чтобы сэкономить несколько нажатий клавиш. В деструктурированном присваивании мы создаем переменную с именем ключа объекта, заключенного в фигурные скобки, { }и присваиваем ей объект. Взгляните на пример ниже:
const { residence } = vampire;
console.log(residence); // Prints 'Transylvania'
Посмотрите на vampire свойства объекта в первом примере кода. Затем в приведенном выше примере мы объявляем новую переменную residence, которая извлекает значение residence свойства vampire. Когда мы записываем значение residence в консоль, 'Transylvania' печатается.
Мы даже можем использовать деструктурированное присваивание для захвата вложенных свойств объекта:
const { day } = vampire.preferences;
console.log(day); // Prints 'stay inside'
инструкции
Используйте деструктурированное присваивание, чтобы создать const переменную с именем functionality, которая извлекает functionality свойство robot.
Если вам нужно напоминание о том, как использовать деструктурированное задание, просмотрите пример в описательной части или проверьте подсказку.
Поскольку functionality это ссылка, robot.functionality мы можем вызывать методы, доступные robot.functionality просто через functionality.
Воспользуйтесь этим ярлыком и вызовите .beep()метод на functionality.
 */
const robot5 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
        beep() {
            console.log('Beep Boop');
        },
        fireLaser() {
            console.log('Pew Pew');
        },
    }
};
const {functionality} = robot
functionality.beep()

/*
Встроенные методы объекта
В предыдущих упражнениях мы создавали экземпляры объектов с собственными методами. Но мы также можем воспользоваться встроенными методами для объектов!
Например, у нас есть доступ к методам экземпляра объекта, таким как: .hasOwnProperty(), .valueOf(), и многим другим! Практикуйте свои навыки чтения документации и ознакомьтесь с документацией по экземплярам объектов MDN .
Существуют также полезные методы класса Object, такие как Object.assign(), Object.entries(), и Object.keys()это лишь некоторые из них. Полный список см. в документации по экземпляру объекта MDN .
Давайте познакомимся с некоторыми из этих методов и их документацией.
Примечание. В ходе выполнения этого упражнения вы увидите ошибки, но к концу они будут исправлены!

В main.js есть объект, robot. Мы хотели бы получить имена свойств, также известные как ключи, и сохранить ключи в массиве, который назначен robotKeys. Однако в вызове метода чего-то не хватает.
Узнайте, что мы должны включить, прочитав документацию MDNObject.keys() .
Object.entries()также вернет массив, но массив будет содержать больше массивов, которые имеют как ключ, так и значение свойств в объекте.
Объявите const переменную с именем robotEntries и назначьте ей записи, robot вызвав Object.entries().
Чтобы узнать, как использовать Object.entries(), прочитайте документацию на MDN .

А что, если нам нужен еще один объект со свойствами, robot но с несколькими дополнительными свойствами. Object.assign()звучит как отличный метод для использования, но, как и в предыдущих примерах, мы должны проверить документацию Object.assign() на MDN .
Объявите const переменную с именем newRobot. newRobot будет новый объект, обладающий всеми свойствами robot и свойствами следующего объекта: {laserBlaster: true, voiceRecognition: true}. Убедитесь, что вы не меняете robot объект!
 */
const robot = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
};
const robotKeys = Object.keys(robot);
console.log(robotKeys);
const robotEntries = Object.entries(robot)
console.log(robotEntries);
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true},robot )
console.log(newRobot);