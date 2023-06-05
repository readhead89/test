/*
JavaScript — это язык объектно-ориентированного программирования (ООП), который мы можем использовать для моделирования реальных объектов. В этом уроке вы научитесь делать классы . Классы — это инструмент, который разработчики используют для быстрого создания подобных объектов.
Возьмем, к примеру, объект, представляющий собаку по имени halley. name(Ключ) этой собаки является "Halley"(значением) и имеет behavior(другой ключ) из 0(другого значения). Мы создаем halley объект ниже:
let halley = {
  _name: 'Halley',
  _behavior: 0,
  get name() {
    return this._name;
  },
  get behavior() {
    return this._behavior;
  },
  incrementBehavior() {
    this._behavior++;
  }
}
Теперь представьте, что у вас есть детский сад для собак и вы хотите создать каталог всех собак, которые обслуживаются в нем. Вместо того чтобы использовать приведенный выше синтаксис для каждой собаки, присоединяющейся к детскому саду, мы можем создать класс, Dog который будет служить шаблоном для создания новых Dog объектов. Для каждой новой собаки вы можете указать значение имени.
Как видите, классы — отличный способ уменьшить дублирование кода и время отладки.
После того, как мы заложим основу для классов в первых нескольких упражнениях, мы познакомимся с наследованием и статическими методами — двумя функциями, которые сделают ваш код более эффективным и осмысленным.
В следующем упражнении вы узнаете о классах более подробно. Прежде чем вы это сделаете, найдите время, чтобы изучить класс в main.js.
Потратьте некоторое время на выявление сходств и различий между Dog классом в main.js и кодом, который мы использовали для создания нашего halley объекта в инструкциях выше.
Скопируйте экземпляр класса, вызов метода и операторы console.log()ниже в main.js.
const halley = new Dog('Halley');
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
halley.incrementBehavior(); // Add one to behavior
console.log(halley.name); // Print name value to console
console.log(halley.behavior); // Print behavior value to console
Что вы ожидаете увидеть при запуске этого кода?
 */
/*
Конструктор
В последнем упражнении вы создали класс с именем Dogи использовали его для создания Dogобъекта.

Хотя вы можете видеть сходство между синтаксисом класса и объекта, есть один важный метод, который отличает их друг от друга. Он называется методом конструктора . JavaScript вызывает constructor()метод каждый раз, когда создает новый экземпляр класса.

class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
Dog это имя нашего класса. По соглашению мы используем заглавные буквы в именах классов PascalCase.
JavaScript будет вызывать constructor()метод каждый раз, когда мы создаем новый экземпляр нашего Dog класса.
Этот constructor()метод принимает один аргумент, name.
Внутри метода constructor()мы используем this ключевое слово. В контексте класса this относится к экземпляру этого класса. В Dog классе мы используем this для установки значения свойства экземпляра Dog name в качестве name аргумента.
В разделе this.name мы создаем свойство с именем behavior, которое будет отслеживать, сколько раз собака плохо себя ведет. Свойство behavior всегда инициализируется нулем.
В следующем упражнении вы узнаете, как создавать Dog экземпляры.


Создайте пустой класс с именем Surgeon.
Внутри Surgeon класса создайте constructor()метод, который принимает два параметра: name и department.
Внутри Surgeon constructor()создайте name и department свойства и установите их равными вашим входным параметрам.
 */
class Surgeon{
    constructor (name, department){
        this.name  = name
        this.department = department
    }
}
/*
Теперь мы готовы создать экземпляры класса. Экземпляр — это объект, который содержит имена свойств и методы класса, но с уникальными значениями свойств . Давайте посмотрим на наш Dog пример класса.
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}

const halley = new Dog('Halley'); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
Под нашим Dog классом мы используем new ключевое слово для создания экземпляра нашего Dog класса. Рассмотрим строку кода шаг за шагом.
Мы создаем новую переменную с именем halley, в которой будет храниться экземпляр нашего Dog класса.
Мы используем new ключевое слово для создания нового экземпляра класса Dog. Ключевое new слово вызывает constructor(), запускает код внутри него, а затем возвращает новый экземпляр.
Мы передаем 'Halley' строку конструктору Dog, который устанавливает name для свойства значение 'Halley'.
Наконец, мы записываем значение, сохраненное в name ключе нашего halley объекта, который выводится 'Halley' на консоль.
Теперь вы знаете, как создавать экземпляры. В следующем упражнении вы узнаете, как добавлять геттеры, сеттеры и методы.
Создайте экземпляр класса Surgeon— установите name to 'Francisco Romero' и department to 'Cardiovascular'.
Сохраните экземпляр в константную переменную с именем surgeonRomero.
Создайте экземпляр класса Surgeon— установите name to 'Ruth Jackson' и department to 'Orthopedics'.
Сохраните экземпляр в константную переменную с именем surgeonJackson.
 */
class Surgeon1 {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}
const surgeonRomero = new Surgeon1 ('Francisco Romero', 'Cardiovascular')
const surgeonJackson = new Surgeon1 ('Ruth Jackson', 'Orthopedics')

/*
Методы
На данный момент у нас есть Dog класс, который вращает объекты со свойствами name и behavior. Ниже мы добавим геттеры и метод, чтобы оживить наш класс.
Метод класса и синтаксис получателя такие же, как и для объектов, за исключением того, что вы не можете включать запятые между методами .
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }
  incrementBehavior() {
    this._behavior++;
  }
}
В приведенном выше примере мы добавляем методы получения для name и behavior. Обратите внимание, мы также добавили перед именами свойств знаки подчеркивания ( _name и _behavior), что указывает на то, что к этим свойствам нельзя обращаться напрямую. Под геттерами мы добавляем метод с именем .incrementBehavior(). Когда вы вызываете .incrementBehavior()экземпляр Dog, он добавляет 1свойство _behavior. Между каждым из наших методов мы не ставили запятые.
В Surgeon конструкторе добавьте перед свойствами name и department знак подчеркивания ( _).
Внутри constructor()добавьте свойство с именем _remainingVacationDays и установите его равным 20.
В разделе constructor()создайте геттер name, который возвращает значение, сохраненное в _name.
В name геттере создайте геттер department, который возвращает значение, сохраненное в _department.
В department геттере создайте геттер remainingVacationDays, который возвращает значение, сохраненное в _remainingVacationDays.
В remainingVacationDays геттере создайте метод с именем takeVacationDays, который принимает один аргумент с именем daysOff.
Внутри метода вычтите daysOff из числа, сохраненного в _remainingVacationDays. Настройтесь _remainingVacationDays на результат.
 */

class Surgeon2 {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {

    }
}
const surgeonRomero = new Surgeon2("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon2("Ruth Jackson", "Orthopedics");

class Surgeon4 {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }
    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }
    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}
const surgeonRomero = new Surgeon4("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon4("Ruth Jackson", "Orthopedics");

/*
Вызовы методов
Наконец, давайте воспользуемся нашими новыми методами для доступа к данным из Dogэкземпляров и управления ими.
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
  get name() {
    return this._name;
  }
  get behavior() {
    return this._behavior;
  }
  incrementBehavior() {
    this._behavior++;
  }
}
const halley = new Dog('Halley');
В приведенном выше примере мы создаем Dog класс, затем создаем экземпляр и сохраняем его в переменной с именем halley.

Синтаксис вызова методов и геттеров для экземпляра такой же, как и для вызова их для объекта — добавьте к экземпляру точку, затем имя свойства или метода. Для методов вы также должны включать открывающие и закрывающие круглые скобки.
Давайте создадим два Dog экземпляра и вызовем наш .incrementBehavior()метод для одного из них.
let nikko = new Dog('Nikko'); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console
В приведенном выше примере мы создаем два новых Dog экземпляра nikko и bradford. Потому что мы увеличиваем поведение нашего nikko экземпляра, но не bradford возвращаем nikko.behavior доступ 1и bradford.behavior возвращаем доступ 0.
В нижней части main.js используйте console.log()для печати значения, сохраненного в name свойстве объекта surgeonRomero.
Позвоните .takeVacationDays()по surgeonRomero, с вводом 3.
После вызова .takeVacationDays()используйте console.log()для печати значения, сохраненного в remainingVacationDays свойстве экземпляра surgeonRomero.
 */
class Surgeon3 {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonRomero3 = new Surgeon3('Francisco Romero', 'Cardiovascular');
const surgeonJackson3 = new Surgeon3('Ruth Jackson', 'Orthopedics');
console.log (surgeonRomero3.name)
console.log (surgeonRomero3.takeVacationDays(3))
