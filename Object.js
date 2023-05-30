/*
Введение в объекты
Пришло время узнать больше об основной структуре, которая пронизывает почти каждый аспект программирования на JavaScript: объектах.
Вероятно, вы уже чувствуете себя более комфортно с объектами, чем вы думаете, потому что JavaScript любит объекты! Многие компоненты языка на самом деле являются объектами внутри, и даже части, которые ими не являются, например строки или числа, в некоторых случаях могут вести себя как объекты.
В JavaScript есть только семь основных типов данных, и шесть из них являются примитивными типами данных: строка, число, логическое значение, ноль, неопределенный и символ. С седьмым типом, объектами, мы открываем наш код для более сложных возможностей. Мы можем использовать объекты JavaScript для моделирования реальных вещей, таких как баскетбольный мяч, или мы можем использовать объекты для создания структур данных, которые делают возможным существование Интернета.
По своей сути объекты JavaScript представляют собой контейнеры, в которых хранятся связанные данные и функции, но на практике эта обманчиво простая задача оказывается чрезвычайно мощной. Вы все время использовали силу объектов, но теперь пришло время понять механику объектов и начать создавать свои собственные!
 */

/*
Объекты могут быть назначены переменным, как и любой тип JavaScript. Мы используем фигурные скобки {}для обозначения литерала объекта :
let spaceship = {}; // spaceship is an empty object
Мы заполняем объект неупорядоченными данными. Эти данные организованы в пары ключ-значение . Ключ похож на имя переменной, которое указывает на место в памяти, где хранится значение.
Значение ключа может относиться к любому типу данных языка, включая функции или другие объекты.
Мы создаем пару ключ-значение, записывая имя ключа или идентификатор , за которым следует двоеточие, а затем значение. Мы разделяем каждую пару ключ-значение в литерале объекта запятой ( ,). Ключи — это строки, но когда у нас есть ключ, в котором нет специальных символов, JavaScript позволяет нам опускать кавычки:
// An object literal with two key-value pairs
let spaceship = {
  'Fuel Type': 'diesel',
  color: 'silver'
};
Объект spaceship имеет два свойства Fuel Type и color. 'Fuel Type' заключен в кавычки, так как содержит пробел.
Давайте сделаем несколько объектов!
 */
 let starship = {
     'Fuel':'diesel',
     color: 'red'}
/*
Доступ к свойствам
Есть два способа получить доступ к свойству объекта. Давайте рассмотрим первый способ — запись через точку, ..
Вы использовали запись через точку для доступа к свойствам и методам встроенных объектов и экземпляров данных:
'hello'.length; // Returns 5
В точечной нотации свойства мы пишем имя объекта, за которым следует оператор точки, а затем имя свойства (ключ):
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver'
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',
Если мы попытаемся получить доступ к свойству, которое не существует в этом объекте, undefined будет возвращено.
spaceship.favoriteIcecream; // Returns undefined
Давайте еще немного попрактикуемся в использовании записи через точку на объекте!
 */
let spaceship5 = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
// Write your code below
let crewCount = spaceship5.numCrew
let planetArray =spaceship5.flightPath

/*
Обозначение скобки
Есть два способа получить доступ к свойству объекта. Давайте рассмотрим первый способ — запись через точку, [ ].
Вы использовали скобки при индексации массива:
['A', 'B', 'C'][0]; // Returns 'A'
Чтобы использовать запись в квадратных скобках для доступа к свойству объекта, мы передаем имя свойства (ключ) в виде строки.
Мы должны использовать запись в квадратных скобках при доступе к клавишам, содержащим цифры, пробелы или специальные символы. Без обозначения скобок в этих ситуациях наш код выдавал бы ошибку.
let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  'Active Duty': true,
  homePlanet: 'Earth',
  numCrew: 5
};
spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined
В скобках вы также можете использовать переменную внутри скобок для выбора ключей объекта. Это может быть особенно полезно при работе с функциями:
let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'
Если бы мы попытались написать нашу returnAnyProp()функцию с записью через точку ( objectName.propName), компьютер искал бы ключ 'propName' нашего объекта, а не значение параметра propName.
Давайте попрактикуемся в использовании скобок для доступа к свойствам!
 */
let spaceship1 = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth',
    numCrew: 5
};
let propName =  'Active Mission';
// Write your code below
let isActive = spaceship1 ['Active Mission']
console.log (isActive)

/*
Назначение собственности
Как только мы определили объект, мы не застряли со всеми свойствами, которые мы написали. Объекты изменяемы , что означает, что мы можем обновить их после того, как создадим!
Мы можем использовать точечную нотацию, .или квадратную нотацию, []и оператор присваивания, = чтобы добавить новые пары ключ-значение к объекту или изменить существующее свойство.
диаграмма, показывающая, как объект, за которым следуют квадратные скобки ([]) с именем свойства в виде строки, может быть переназначен новому значению.  Эта же идея применима для доступа к свойству с использованием записи через точку, которая имеет имя объекта, за которым следует точка и имя свойства.
При присвоении свойства может произойти одно из двух:
Если свойство уже существует в объекте, любое значение, которое оно имело ранее, будет заменено вновь присвоенным значением.
Если свойства с таким именем не было, к объекту будет добавлено новое свойство.
Важно знать, что, хотя мы не можем переназначить объект, объявленный с помощью const, мы все же можем изменить его, то есть мы можем добавить новые свойства и изменить уже существующие свойства.
const spaceship = {type: 'shuttle'};
spaceship = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceship.type = 'alien'; // Changes the value of the type property
spaceship.speed = 'Mach 5'; // Creates a new key of 'speed' with a value of 'Mach 5'
Вы можете удалить свойство объекта с помощью deleteо ператора.
const spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  mission: 'Explore the universe'
};

delete spaceship.mission;  // Removes the mission property
 */

let spaceship3 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship3.color = 'glorious gold'
spaceship3.numEngines = 10
delete spaceship3["Secret Mission"]

/*
Методы
Когда данные, хранящиеся в объекте, представляют собой функцию, мы называем это методом . Свойство — это то, что есть у объекта, а метод — это то, что объект делает.
Объектные методы кажутся знакомыми? Это потому, что вы использовали их все время! Например console, это глобальный объект JavaScript и .log()метод этого объекта. Math также является глобальным объектом JavaScript и .floor()является его методом.
Мы можем включать методы в наши литералы объектов, создавая обычные пары ключ-значение, разделенные двоеточием. Ключ служит именем нашего метода, а значение — выражением анонимной функции.
const alienShip = {
  invade: function () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
С новым синтаксисом метода, представленным в ES6, мы можем опустить двоеточие и function ключевое слово.
const alienShip = {
  invade () {
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
Методы объекта вызываются путем добавления к имени объекта оператора точки, за которым следует имя метода и круглые скобки:
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
 */
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
    retreat(){
        console.log ('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.')
    },
    takeOff(){
        console.log('Spim... Borp... Glix... Blastoff!')
    }
}
alienShip.retreat()
alienShip.takeOff()
/*
Вложенные объекты
В коде приложения объекты часто бывают вложенными — объект может иметь другой объект в качестве свойства, которое, в свою очередь, может иметь свойство, являющееся массивом еще большего количества объектов!
В нашем spaceship объекте нам нужен crew объект. В нем будут находиться все члены экипажа, выполняющие важную работу на корабле. Каждый из этих crew членов сам является объектом. У них есть такие свойства name, как , и degree, и у каждого из них есть уникальные методы, основанные на их ролях. Мы также можем вкладывать другие объекты, например spaceship a, telescope или вкладывать сведения о компьютерах космического корабля в родительский nanoelectronics объект.
const spaceship = {
     telescope: {
        yearBuilt: 2018,
        model: '91031-XLT',
        focalLength: 2032
     },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') }
         }
    },
    engine: {
        model: 'Nimbus2000'
     },
     nanoelectronics: {
         computer: {
            terabytes: 100,
            monitors: 'HD'
         },
        'back-up': {
           battery: 'Lithium',
           terabytes: 50
         }
    }
};
Мы можем связать операторы для доступа к вложенным свойствам. Нам придется обратить внимание на то, какой оператор имеет смысл использовать в каждом слое. Может быть полезно представить себя компьютером и оценивать каждое выражение слева направо, чтобы каждая операция стала более управляемой.
spaceship.nanoelectronics['back-up'].battery; // Returns 'Lithium'
В предыдущем коде:
Сначала компьютер оценивает spaceship.nanoelectronics, что приводит к объекту, содержащему объекты back-upи computer.
Мы получили доступ к back-up объекту, добавив ['back-up'].
У объекта back-up есть battery свойство, обращение к .battery которому возвращает хранящееся там значение:'Lithium'
 */

let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() { console.log('We got this!') },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};
let capFave = spaceship.crew.captain ['favorite foods'][0]
spaceship.passengers = [{
    name1:'Mile',name2:'Dima',name3:'Jonh'}]
let firstPassenger = spaceship.passengers[0]
/*
Пройти по ссылке
Объекты передаются по ссылке . Это означает, что когда мы передаем в функцию переменную, назначенную объекту, в качестве аргумента, компьютер интерпретирует имя параметра как указание на место в памяти, содержащее этот объект. В результате функции, которые изменяют свойства объекта, на самом деле навсегда изменяют объект (даже если объект присваивается переменной const).
const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};

let paintIt = obj => {
  obj.color = 'glorious gold'
};

paintIt(spaceship);

spaceship.color // Returns 'glorious gold'

Наша функция paintIt()навсегда изменила цвет нашего spaceshipобъекта. Однако переназначение переменной spaceshipне будет работать таким же образом:

let spaceship = {
  homePlanet : 'Earth',
  color : 'red'
};
let tryReassignment = obj => {
  obj = {
    identified : false,
    'transport type' : 'flying'
  }
  console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}

};
tryReassignment(spaceship) // The attempt at reassignment does not work.
spaceship // Still returns {homePlanet : 'Earth', color : 'red'};

spaceship = {
  identified : false,
  'transport type': 'flying'
}; // Regular reassignment still works.
Давайте посмотрим, что произошло в примере кода:

Мы объявили этот spaceship объект с помощью let. Это позволило нам без проблем переназначить его новому объекту со свойствами identified и свойствами.'transport type'
Когда мы попробовали то же самое, используя функцию, предназначенную для переназначения переданного в нее объекта, переназначение не закрепилось (даже несмотря на то, что обращение console.log()к объекту дало ожидаемый результат).
Когда мы перешли spaceship в эту функцию, obj стала ссылка на место в памяти объекта spaceship, а не на spaceship переменную. Это связано с тем, что obj параметр функции tryReassignment()является переменной сам по себе. Тело вообще tryReassignment()не знает о переменной!spaceship
Когда мы сделали переназначение в теле tryReassignment(), obj переменная стала ссылаться на место в памяти объекта {'identified' : false, 'transport type' : 'flying'}, в то время как spaceship переменная полностью не изменилась по сравнению с ее предыдущим значением.
 */

let spaceship7 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = spaceship3 => {
    spaceship3 ['Fuel Type']='avocado oil'
}

let remotelyDisable = obj => {
    obj.disabled = true;
}

greenEnergy(spaceship3)
remotelyDisable(spaceship3)
console.log (spaceship3)
/*
Перебор объектов
Циклы — это инструменты программирования, которые повторяют блок кода до тех пор, пока не будет выполнено условие. Мы научились перебирать массивы, используя их числовую индексацию, но пары ключ-значение в объектах не упорядочены! JavaScript дал нам альтернативное решение для перебора объектов с for...in синтаксисом .
for...in будет выполнять данный блок кода для каждого свойства в объекте.
let spaceship = {
  crew: {
    captain: {
      name: 'Lily',
      degree: 'Computer Engineering',
      cheerTeam() { console.log('You got this!') }
    },
    'chief officer': {
      name: 'Dan',
      degree: 'Aerospace Engineering',
      agree() { console.log('I agree, captain!') }
    },
    medic: {
      name: 'Clementine',
      degree: 'Physics',
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna',
      degree: 'Conservation Science',
      powerFuel() { console.log('The tank is full!') }
    }
  }
};

// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}
Мы for...in будем перебирать каждый элемент объекта spaceship.crew. В каждой итерации переменной crewMember присваивается один из spaceship.crew ключей , что позволяет нам регистрировать список ролей членов экипажа и name.
 */
let spaceship0 = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() { console.log('You got this!') }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() { console.log('I agree, captain!') }
        },
        medic: {
            name: 'Clementine',
            degree: 'Physics',
            announce() { console.log(`Jets on!`) } },
        translator: {
            name: 'Shauna',
            degree: 'Conservation Science',
            powerFuel() { console.log('The tank is full!') }
        }
    }
};

// Write your code below
for (let crewMember in spaceship0.crew) {
    console.log(`${crewMember}: ${spaceship0.crew[crewMember].name}`)
};
for (let crewMember in spaceship0.crew) {
    console.log(`${crewMember}: ${spaceship0.crew[crewMember].name}`)
};
for (let crewMember in spaceship0.crew) {
    console.log(`${spaceship0.crew[crewMember].name}: ${spaceship0.crew[crewMember].degree}`)
    for (let crewMember in spaceship.crew) {
        console.log(`${spaceship0.crew[crewMember].degree}: ${spaceship0.crew[crewMember].name}`)
    }
};
