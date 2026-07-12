//! Дробове число
//? Результат 0.1 + 0.2 не дорівнює 0.3
//? Число 0.1 у двійковій системі числення, 
//? яку використовує комп'ютер — це нескінченний дріб.
//? При додаванні 0.1 і 0.2 дві неточності складаються, виходить незначна,
//? але все ж таки помилка в обчисленнях.
// https://habr.com/ru/articles/112953/

// console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); //! false
// console.log("0.1 + 0.2 =", 0.1 + 0.2); //! 0.30000000000000004


// //? var. 1
// //? Можна зробити їх цілими, помноживши кожне з них на число
// //? N(10 або 100, в залежності від кількості знаків після коми),
// //? скласти(додати) їх, а потім результат поділити також на N.
// console.warn("Variant 1");
// console.log("0.1 * 10 + 0.2 * 10 =", 0.1 * 10 + 0.2 * 10); //! 3
// const result = (0.1 * 10 + 0.2 * 10) / 10;
// console.log("(0.1 * 10 + 0.2 * 10) / 10 =", result); //! 0.3
// // console.log("(0.1 * 10 + 0.2 * 10) / 10 =", ((0.1 * 10 + 0.2 * 10) / 10)); //! 0.3


// //? var. 2
// //! Метод число.toFixed(digits)
// //? Cкласти(додати) числа, а результат скоротити до 
// //? певного знаку після коми за допомогою методу toFixed().
// console.warn("Variant 2");
// console.log("(0.1 + 0.2).toFixed(1) =", (0.1 + 0.2).toFixed(1)); //! 0.3
// console.log("(0.1 + 0.2).toFixed(17) =", (0.1 + 0.2).toFixed(17)); //! 0.3000000000000004
// console.log("------------- Приклади toFixed(): ------------");
// console.log("(5).toFixed(2) =", (5).toFixed(2));  //! 5.00
// console.log("(8.762195).toFixed(4) =", (8.762195).toFixed(4));  //! 8.7622
// console.log("8.762195.toFixed(4) =", 8.762195.toFixed(4));  //! 8.7622
// console.log("----------------------------------------------");



//? Клас Math є вбудованим класом JavaScript
//? Надає набір методів для виконання математичних операцій та роботи з числами

//! Math.floor(num): 
//? - повертає найближче ціле число, 
//? яке є МЕНЬШИМ або дорівнює вказаному числу num
console.log(
    "%c Math.floor(num): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.floor(1.2):", Math.floor(1.2)); //! 1
console.log("Math.floor(1.5):", Math.floor(1.5)); //! 1
console.log("Math.floor(1.9):", Math.floor(1.9)); //! 1


//! Math.ceil(num): 
//? - повертає найближче ціле число, 
//? яке є БІЛЬШИМ, або дорівнює зазначеному числу num
console.log(
    "%c Math.ceil(num): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.ceil(1.2):", Math.ceil(1.2)); //! 2
console.log("Math.ceil(1.5):", Math.ceil(1.5)); //! 2
console.log("Math.ceil(1.9):", Math.ceil(1.9)); //! 2


//! Math.round(num): 
//?  - повертає значення числа після 
//? округлення до найближчого цілого.
console.log(
    "%c Math.round(num): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.round(1.2):", Math.round(1.2)); //! 1
console.log("Math.round(1.5):", Math.round(1.5)); //! 2
console.log("Math.round(1.9):", Math.round(1.9)); //! 2


//! Math.pow(number, power):
//? - зведення в ступінь
console.log(
    "%c Math.pow(number, power): ",
    "color: yellow; background-color: #2274A5",
);
const primeNumber = 2;
const power = 5;
console.log("primeNumber =", primeNumber);
console.log("power =", power);
const result = Math.pow(primeNumber, power);
console.log("Math.pow(primeNumber, power) =", result);
console.log("primeNumber ** power =", primeNumber ** power);


//! Math.max(num1, num2, ...): 
//?  - повертає НАЙБІЛШЕ число з набору переданих чисел.
console.log(
    "%c Math.max(num1, num2, ...): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.max(20, 10, 50, 40):", Math.max(20, 10, 50, 40)); //! 50


//! Math.min(num1, num2, ...): 
//? - повертає НАЙМЕНЬШЕ число з набору переданих чисел
console.log(
    "%c Math.min(num1, num2, ...): ",
    "color: yellow; background-color: #2274A5",
);
console.log("Math.min(20, 10, 50, 40):", Math.min(20, 10, 50, 40)); //! 10


//! Math.random(): 
//? -повертає випадкове число
//?  в діапазоні від 0 (включно) до 1 (за винятком)
//todo Приклад: Генерація випадкового числа між 0 і 1:
console.log(
    "%c Math.random(): ",
    "color: yellow; background-color: #2274A5",
);
console.warn("Math.random():", Math.random()); //! випадкове число від 0 до 1


//! Цікавий приклад - випадкова зміна кольору фона!
//todo Math.random() * (max - min) + min
console.log(
    "%c ПРИКЛАД: випадкова зміна кольору фона ",
    "color: yellow; background-color: #2274A5",
);
const arrayColors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
const min = 0;
const max = arrayColors.length - 1;
console.log("min =", min, ",", "max =", max);

const mathRandomNumber = Math.random() * (max - min) + min;
console.log("mathRandomNumber:", mathRandomNumber);
const index = Math.round(mathRandomNumber);
// const index = Math.round(Math.random() * (max - min) + min);
console.log("index:", index);

const color = arrayColors[index];
console.log("background-сolor:", color);
document.body.style.backgroundColor = color; //! увімкнути для демонстрації прикладу


//! Що таке "Рядок"
//? Рядок  — це індексований набір з нуля або більше символів,
//? укладених в одинарні або подвійні лапки. 

const course1 = 'JavaScript';
const courseArray = ['J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'];
console.log("course1:", course1); //! JavaScript
console.log("courseArray:", courseArray); //! 'J', 'a', 'v', 'a', 'S', 'c', 'r', 'i', 'p', 't'

const course2 = "JavaScript";
console.log("course2:", course2); //! JavaScript

const course3 = `JavaScript`;
console.log("course3:", course3); //! JavaScript
console.log("-------------------");

let emptyString;
emptyString = "";
// emptyString = " ";
// emptyString = "1";
// emptyString = 1;
// emptyString = null;
// emptyString = false;
// emptyString = true;
// emptyString = 0;
// emptyString = "0";
console.log("emptyString:", emptyString); //! 
console.log("typeof emptyString:", typeof emptyString); //! string
console.log("Number(emptyString):", Number(emptyString)); //! 0
console.log("-------------------");


//! Конкатенація рядків
//? Якщо застосувати оператор + до рядка та
//? будь-якого іншого типу даних, 
//? результатом буде новий рядок.
const myMessage = "Mango " + "is " + "happy";
console.log('("Mango " + "is " + "happy"):', myMessage); //! "Mango is happy"


//? Під час конкатенації можна використовувати значення змінних, 
//? щоб складати рядки з динамічними значеннями
const age = 24;
const newMessage = "Poly is " + age + " years old!";
console.log('("Poly is " + age + " years old!"):', newMessage); //! "Poly is 24 years old!"
console.log("---------------------------------------------------------");


//? Під час конкатенації будь-який тип даних
//? буде приведено до рядка та ЗШИВАЄТЬСЯ з іншим рядком.
console.log("'Mango' + 55:", 'Mango' + 55); //! "Mango55"
console.log("'Mango' + true:", 'Mango' + true); //! "Mangotrue"
console.log("---------------------------------------------------------");


//? Порядок операндів має значення.
//? Перетворення типів відбувається лише 
//? в момент операції додавання з рядком.
console.log("1 + '2':", 1 + '2'); //! "12"
console.log("1 + '2' + 4:", 1 + '2' + 4); //! "124"
console.log("1 + 2 + '4':", 1 + 2 + '4'); //! "34"



//todo Перетворення різних типів в рядки
//! ЯВНЕ - вбудована функція (або функція-конструктор) -> String(value)
//? Використовується для будь-яких перетворень.
//? Працює на будь-якому типі значень.
console.log(
    "%c ЯВНЕ приведення до рядка - String(value) ",
    "color: yellow; background-color: #2274A5",
);
console.log("String(5):", String(5)); //! "5"
console.log("String('5'):", String('5')); //! "5"
console.log("String(true):", String(true)); //! "true"
console.log("String(undefined):", String(undefined)); //! "undefined"
console.log("String(null):", String(null)); //! "null"
console.log("String(NaN):", String(NaN)); //! "NaN"


//! ЯВНЕ - метод .toString()
//? Використовується для об'єктів або примітивів.
//? Якщо застосовується до null або undefined, 
//? викличе помилку(TypeError).
//? Надає більше контролю над перетворенням 
//? деяких об'єктів (наприклад, Array, Object).
console.log(
    "%c ЯВНЕ приведення до рядка - .toString() ",
    "color: yellow; background-color: #2274A5",
);
console.log("(5).toString():", (5).toString()); //! "5"
console.log("('5').toString():", ('5').toString()); //! "5"
console.log("(true).toString:", (true).toString()); //! "true"
// console.log("(undefined).toString:", (undefined).toString()); //! Cannot read properties of undefined (reading 'toString')
console.error(`(undefined).toString: Cannot read properties of undefined (reading 'toString')`);
// console.log("(null).toString:", (null).toString()); //! Cannot read properties of null (reading 'toString')
console.error(`(null).toString: Cannot read properties of null (reading 'toString')`)
console.log("(NaN).toString:", (NaN).toString()); //! "NaN"


//? НЕЯВНЕ - автоматично під час виконання операцій або обчислень
console.log(
    "%c НЕЯВНЕ приведення до рядка - Конкатенація(+) ",
    "color: yellow; background-color: #2274A5",
);
console.log("'5' + 3:", '5' + 3); //! "53"
console.log("3 + '5':", 3 + '5'); //! "35"
console.log("'5' + true:", '5' + true); //! "5true"
console.log("'5' + undefined:", '5' + undefined); //! "5undefined"
console.log("5 + undefined:", 5 + undefined); //! NaN
console.log("'5' + null:", '5' + null); //! "5null"
console.log("5 + null:", 5 + null); //! 5
console.log("null + undefined:", null + undefined); //! NaN
console.log("undefined + undefined:", undefined + undefined); //! NaN
console.log("null + null:", null + null); //! 0
console.log("-----------------------------------");



//! Властивості та методи рядків
//todo Властивості - це описові характеристики сутності.

//! [1] .length
//? Властивість .length дозволяє отримати довжину рядка,
//? тобто кількість його символів
console.log(
    "%c Властивість .length ",
    "color: yellow; background-color: #2274A5",
);
const lifeMotto = "Live! Laugh! Love!";
console.log("lifeMotto.length:", lifeMotto.length); //! 18

console.log('"Repair droid".length:', "Repair droid".length); //! 12
console.log('"JavaScript is awesome".length:', "JavaScript is awesome".length); //! 21



//! [2.1] string[index]
//? Індексація рядків.
//? Отримуємо символи рядка згідно индекса - string[index]
console.log(
    "%c Індексація рядків: string[index] ",
    "color: yellow; background-color: #2274A5",
);
const myString = "JavaScript";
console.log("myString:", myString); //! "JavaScript"
console.log("myString.length:", myString.length); //! 10
console.log("------------------------------");

let firstSymbol = myString[0];
console.log("firstSymbol = myString[0]:", firstSymbol); //! "J"
let secondSymbol = myString[1];
console.log("secondSymbol = myString[1]:", secondSymbol); //! "a"
console.log("------------------------------");

console.warn("Останній символ:");
const lastElementIndex = myString.length - 1;
console.log("lastElementIndex = myString.length - 1:", lastElementIndex); //! 9

const lastSymbol = myString[lastElementIndex]; //todo var.1
// const lastSymbol = myString[myString.length - 1]; //todo var.2
console.log("lastSymbol = myString[lastElementIndex]:", lastSymbol); //! "t"


//! [2.2] charAt().
//? Індексація рядків.
//? Отримуємо символи рядка згідно индекса - метод charAt(index)
console.log(
    "%c Індексація рядків: метод charAt() ",
    "color: yellow; background-color: #2274A5",
);
console.log("myString:", myString); //! "JavaScript"
console.log("------------------------------");

firstSymbol = myString.charAt(0);
console.log("firstSymbol = myString.charAt(0):", firstSymbol); //! "J"
secondSymbol = myString.charAt(1);
console.log("secondSymbol = myString.charAt(1):", secondSymbol); //! "a"
console.log("------------------------------");


//! [3] Чи можна змінити рядок?
console.log(
    "%c Чи можна змінити рядок? ",
    "color: yellow; background-color: #2274A5",
);
let title = "Моя історія";
console.log("title:", title); //! "Моя історія"
// title[4] = ",";   //! НЕ МОЖНА!
console.error("Uncaught TypeError: Cannot assign to read only property '6' of string 'Моя історія'");
console.log("title:", title); //! "Моя історія"


//todo Методи — це дії, які можна виконати із сутністю
//todo Не можна викликати метод рядка без рядка
//todo синтаксис: objectName.method()

//! [4] toLowerCase() і toUpperCase()
//? Зміна регістру.
//? Ці методи не змінюють вихідний рядок.
console.log(
    "%c Зміна регістру:               \n toLowerCase() і toUpperCase() ",
    "color: yellow; background-color: #2274A5",
);
const myLifeMotto = "Live! Laugh! Love!";
console.log("myLifeMotto:", myLifeMotto); //! "Live! Laugh! Love!"
console.log("myLifeMotto.toLowerCase():", myLifeMotto.toLowerCase()); //! "live! laugh! love!"
console.log("myLifeMotto.toUpperCase():", myLifeMotto.toUpperCase()); //! "LIVE! LAUGH! LOVE!"
console.log("---------------------------------------------");

const message2 = "Welcome to Bahamas!";
console.log("message2.toLowerCase():", message2.toLowerCase()); //! "welcome to bahamas!"
console.log("message2.toUpperCase():", message2.toUpperCase()); //! "WELCOME TO BAHAMAS!"
//? методи toLowerCase() і toUpperCase() 
//? не змінюють вихідний рядок:
console.log("message2:", message2);  //! "Welcome to Bahamas!" 
console.log("---------------------------------------------");

//todo Для чого потрібні методи toLowerCase() і toUpperCase()?
console.warn("Використання toLowerCase() і toUpperCase():");
//? Бувають ситуації, коли всі символи в рядку
//? необхідно перетворити в один регістр, ВЕРХНІЙ або нижній.
//? Наприклад, для пошуку за ключовим словом,
//? коли користувач вводить рядок 'saMsUng',
//? а порівняти його потрібно з рядком 'samsung' або 'SAMSUNG'.
console.log('"saMsUng" === "samsung":', "saMsUng" === "samsung"); //! false
console.log('"saMsUng" === "SAMSUNG":', "saMsUng" === "SAMSUNG"); //! false
console.log("---------------------------------------------");
//? Щоб не вимагати абсолютно точне введення, 
//? можна зробити «нормалізацію» введеного користувачем рядка,
//? тобто перетворити всі його символи у верхній 
//? або нижній регістр.
//? Методи рядка toLowerCase() і toUpperCase() 
//? повернуть новий рядок у відповідному регістрі,
//? не змінюючи оригінальний.
const BRAND_NAME = "SAMSUNG";
console.log("BRAND_NAME:", BRAND_NAME);  //! "SAMSUNG"
const userInput = "saMsUng";
console.log("userInput:", userInput);  //! "saMsUng"
console.log('userInput === BRAND_NAME:', userInput === BRAND_NAME); //! false
console.log("---------------------------------------------");

const normalizedToUpperCaseInput = userInput.toUpperCase();
console.log("userInput.toUpperCase():", normalizedToUpperCaseInput);  //! "SAMSUNG"
console.log('userInput.toUpperCase() === BRAND_NAME:', normalizedToUpperCaseInput === BRAND_NAME); //! true


//! [5] indexOf()
//? Метод string.indexOf(substr, pos) - substr в  str, починаючи з pos
//? Повертає позицію(індекс), на якій знаходиться ПЕРШИЙ збіг підрядка
//? або - 1, якщо нічого не знайдено.



console.log(
    "%c Метод: indexOf() ",
    "color: yellow; background-color: #2274A5",
);
const message3 = "controlo";
console.log("message3:", message3);  //! "Welcome to Bahamas!" 
const index3 = message3.indexOf("o");
const index4 = message3.indexOf("o", index3 + 1)
const index5 = message3.indexOf("o", index4 + 1)
console.log('index3 = message3.indexOf("to"):', index3);  //! 8 
console.log('index4 = message3.indexOf("o", index3 + 1):', index4)
console.log('index5 = message3.indexOf("o", index4 + 1):', index5)

console.log('message3.indexOf("hello"):', message3.indexOf("hello"));  //! -1
console.log("---------------------------------------------");

const myLifeMotto1 = "Live! Laugh! Love!";
console.log("myLifeMotto1:", myLifeMotto1);  //! "Live! Laugh! Love!"

console.log('myLifeMotto1.indexOf("Lau"):', myLifeMotto1.indexOf("Lau"));  //! 6
console.log('myLifeMotto1.indexOf("Lau", 7):', myLifeMotto1.indexOf("Lau", 7));  //! -1

console.log('myLifeMotto1.indexOf("ve", 2):', myLifeMotto1.indexOf("ve", 2));  //! 2
console.log('myLifeMotto1.indexOf("ve", 5):', myLifeMotto1.indexOf("ve", 5));  //! 15



//! [6] includes()
//? Перевіряє, чи міститься підрядок в рядку,
//? повертає буль - true, якщо міститься,
//? і false - якщо НЕ міститься.
//? Регістр символів в рядку і підрядку має значення.
console.log(
    "%c Метод: includes() ",
    "color: yellow; background-color: #2274A5",
);
const username = "Jacob Mercer";
console.log("username:", username);  //! "Jacob Mercer"
console.log('username.includes("Jacob"):', username.includes("Jacob"));  //! true
console.log('username.includes("Jakob"):', username.includes("Jakob"));  //! false
console.log('username.includes("Mercer"):', username.includes("Mercer"));  //! true
console.log('username.includes("Jаcob"):', username.includes("Jаcob"));  //! false (літера "а" - ураїньска)!!!
console.log("---------------------------------------------");

//? Регістр символів у рядку й підрядку має значення
console.log('username.includes("jacob"):', username.includes("jacob"));  //! false
console.log('username.includes("mercer"):', username.includes("mercer"));  //! false
console.log("---------------------------------------------");

const myLifeMotto2 = "Live! Laugh! Love!";
console.log("myLifeMotto2:", myLifeMotto2);  //! "Live! Laugh! Love!"
console.log('myLifeMotto2.includes("Lau"):', myLifeMotto2.includes("Lau"));  //! true
console.log('myLifeMotto2.includes("Lau", 7):', myLifeMotto2.includes("Lau", 7));  //! false
console.log("---------------------------------------------");


//! [7] startsWith() і endsWith()
//? Методи startsWith() і endsWith() призначені
//? для перевірки початку й закінчення рядка відповідно.
//? Вони повертають булеве значення true або false, 
console.log(
    "%c Методи: startsWith() і endsWith() ",
    "color: yellow; background-color: #2274A5",
);
const myString2 = "Hello, world!";
console.log("myString2:", myString2);  //! "Hello, world!"
console.log('myString2.startsWith("Hello"):', myString2.startsWith("Hello"));  //! true
console.log('myString2.endsWith("world!"):', myString2.endsWith("world!"));  //! true

//? Метод чутливий до регістру
console.log('myString2.startsWith("hello"):', myString2.startsWith("hello"));  //! false
console.log('myString2.endsWith("World!):', myString2.endsWith("World!"));  //! false
console.log("---------------------------------------------");



//! [8] trim()
//? Метод trim() використовується для видалення(“обрізання”)
//? початкових і кінцевих пробілів із рядка.
console.log(
    "%c Метод: trim() ",
    "color: yellow; background-color: #2274A5",
);
const input = " JavaScript    ";
console.log(input); //! " JavaScript    "
console.log(
    `%c${input}`,
    "color: darkred; background-color: yellow",
); //! " JavaScript    "
console.log("input.length:", input.length); //! 15
console.log(". . . . . . . . .");

const trimmedInput = input.trim();
console.log(trimmedInput); //! "JavaScript"
console.log(
    `%c${trimmedInput}`,
    "color: yellow; background-color: green",
); //! "JavaScript!"
console.log("trimmedInput.length:", trimmedInput.length); //! 10


//! [9] padStart() і padEnd()
//?  padStart() і padEnd) доповнюють поточний рядок
//? іншим рядком(кілька разів, якщо потрібно),
//? доки отриманий рядок не досягне заданої довжини.
//? Відступ застосовується з кінця / початку поточного рядка.
console.log(
    "%c Методи: padStart() і padEnd() ",
    "color: yellow; background-color: #2274A5",
);
const input2 = "JavaScript";
console.log("input2:", input2);  //! "JavaScript"

console.log('input2.padEnd(20, "!"):', input2.padEnd(20, "!"));  //! JavaScript!!!!!!!!!!
console.log('input2.padEnd(input2.length + 1,"!"):', input2.padEnd(input2.length + 1, "!"));  //! JavaScript!
console.log("--------------------------------------------------");

console.log('input2.padStart(20, "<"):', input2.padStart(20, "<"));  //! <<<<<<<<<<JavaScript
console.log(
    '(input2.padStart(input2.length + 1, "<")).padEnd(input2.length + 2, ">"):',
    (input2.padStart(input2.length + 1, "<")).padEnd(input2.length + 2, ">")
);  //! <JavaScript>



//! [10] replace() і replaceAll()
//? Повертають новий рядок, в якому перше(replace)
//? або усі збіги(replaceAll) підрядка
//? замінені на вказане значення.
console.log(
    "%c Методи: replace() і replaceAll() ",
    "color: yellow; background-color: #2274A5",
);
const jsFileName = "script.js";
console.log("jsFileName:", jsFileName);  //! "script.js"
const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
console.log('jsFileName.replace(".js", ".min.js"):', minifiedJsFileName);  //! "script.min.js"
console.log("----------------------------------------------------");

const cssFileNames = "styles.css, about.css, portfolio.css";
console.log("cssFileNames:", cssFileNames);  //! "styles.css, about.css, portfolio.css"
const minifiedCssFileNames = cssFileNames.replaceAll(".css", ".min.css");
console.log('cssFileNames.replaceAll(".css", ".min.css"):', minifiedCssFileNames);  //! "styles.min.css, about.min.css, portfolio.min.css"



//! [11] slice()
//? Метод рядків slice(startIndex, endIndex) використовується
//? для створення копії частини або всього рядка.
//? Він робить копію елементів рядка від startIndex і до,
//? але не включно endIndex і повертає новий рядок,
//? не змінюючи оригінал.
console.log(
    "%c Метод: slice() ",
    "color: yellow; background-color: #2274A5",
);
const productName = "Repair droid";
console.log("productName:", productName);  //! "Repair droid"
console.log("productName.slice(0, 4):", productName.slice(0, 4)); //! "Repa"
console.log("productName.slice(3, 9):", productName.slice(3, 9)); //! "air dr"
console.log("productName.slice(0, productName.length):", productName.slice(0, productName.length)); //! "Repair droid"
console.log("productName.slice(0, productName.length - 1):", productName.slice(0, productName.length - 1)); //! "Repair droi"
console.log("productName.slice(7, productName.length):", productName.slice(7, productName.length)); //! "droid"

console.warn("Останній символ:");
console.log("productName.slice(-1):", productName.slice(-1)); //! "d"

console.warn("Від'ємні значення:");
console.log("productName.slice(-5):", productName.slice(-5)); //! "droid"
console.log("productName.length:", productName.length); //! 12
console.log("productName.length - 5 = 12 - 5 =", productName.length - 5); //! 7
console.log("productName.slice(7):", productName.slice(7)); //! "droid"
console.log("-------------------------------------------------------");



//! Шаблонні рядки та інтерполяція ${…}
//? Шаблонні рядки — це синтаксис, який полегшує об'єднання 
//? статичного тексту з динамічним(змінними)
//? за допомогою зворотніх(дивних) лапок(англ.backticks)(``)
//? Шаблонні рядки дозволяють підставляти значення змінних 
//? безпосередньо всередині рядка
//? за допомогою синтаксису інтерполяції -  ${змінна}.
const userName = "Clinton Eastwood";
const message = `Hello, ${userName}!`;
console.log("message:", message);
console.log("---------------------------------------------------");

const guestName = "Mango";
const roomNumber = 207;
//todo var.1
const greeting1 = "Welcome " + guestName + ", your room number is " + roomNumber + "!";
console.log("greeting1:", greeting1);
//todo var.1
const greeting2 = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log("greeting2:", greeting2);
console.log("---------------------------------------------------");



//? Формуємо декілька рядків
let text =
    `
Привіт!
Вітаю на нашому сайті!
Тут ти знайдеш все, що потрібно!
`;
console.log("text:", text);
console.log("---------------------------------------------------");

//? Все що в лапках -  буде рядком
const myString3 = "123";
const myNumber = 123;

console.log("myString3:", myString3);
console.log("typeof myString3:", typeof myString3);

console.log("myNumber:", myNumber);
console.log("typeof myNumber:", typeof myNumber);

//todo var.1
const result1 = myString3 + myNumber;
console.log("result1:", result1);

const result12 = "123" + 123;
console.log("result12:", result12);

//todo var.2
const result2 = `myString + myNumber`;
console.log("result2:", result2);

//todo var.3
const result3 = `${myString3} + ${myNumber}`;
console.log("result3:", result3);
console.log("---------------------------------------------------");



//! СПЕЦСИМВОЛИ
//todo Спеціальні символи:
console.log(
    "%c Спеціальні символи: ",
    "color: red; background-color: #95B46A",
    "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String"
);
//? Всередині рядків можна використов спецсимволи
//? які починаються на зворотний слеш  \ 


//! Перенос рядка \n
console.log(
    "%c Перенос рядка \\n ",
    "color: yellow; background-color: #2274A5",
);
const textOne = `Hello!
my dear!
`;
console.log(textOne);
console.log("----------");

const textTwo = "Hello! \nmy dear!";
console.log(textTwo);


//! Табуляція(відступ) \t
console.log(
    "%c Табуляція(відступ) \\t ",
    "color: yellow; background-color: #2274A5",
);
const text1 = "Hello! \n\tmy dear \n\t\tfriend!";
console.log(text1);


//! Зворотній слеш \\
console.log(
    "%c Зворотній слеш \\\\ ",
    "color: yellow; background-color: #2274A5",
);
const text2 = "Привіт, дорогий користувач\\відвідувач";
console.log(text2);


//! Лапки \' \"
console.log(
    `%c Лапки \\' та \\" `,
    "color: yellow; background-color: #2274A5",
);
const text3 = 'Привіт, моя сім\'я';
console.log(text3);

const text4 = "Привіт, моя \"сім'я\"";
console.log(text4);


//! Символи UTF-16: \uКОД, UTF-32: \u{КОД}
console.log(
    "%c Символи UTF-16: \\uКОД, UTF-32: \\u{КОД} ",
    "color: yellow; background-color: #2274A5",
);
const text5 = "This is my friend: \u{1F60D} \u1F60D";
console.log(text5);

const text6 = "Символ \"копірайт\":  ©";
console.log(text6);

const text7 = "[UTF-16] Символ \"копірайт\": \u00A9";
console.log(text7);

const text8 = "[UTF-32] Символ \"копірайт\": \u{00A9}";
console.log(text8);
