//? Арифметичні операції (+, -, *, /) виконують неявне перетворення типів.
console.log(
    "%c Арифметичні операції (+, -, *, /) --> перетворення типів ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number("5" * 2):', Number("5" * 2));  //! 10
console.log('Number("2" * "5"):', Number("2" * "5"));  //! 10
console.log('Number("10" - 7):', Number("10" - 7));  //! 3
console.log('Number(15 - "10"):', Number(15 - "10"));  //! 5
console.log('Number(15 - "10px"):', Number(15 - "10px"));  //! NaN
console.log('Number(5 + 5):', Number(5 + 5));  //! 10
console.log('???_Number(5 + "5"):', Number(5 + "5"));  //todo 55 ????
console.log('???_Number(5 + "5" + 5):', Number(5 + "5" + 5));  //todo 555 ????
console.log('???_Number(5 + 5 + "5"):', Number(5 + 5 + "5"));  //todo 105 ????
console.log('Number(true + 5):', Number(true + 5));  //! 6
console.log('???_Number(true + "5"):', Number(true + "5"));  //todo NaN
console.log('???_(true + "5"):', true + "5");  //todo true5
console.log('Number(5 - true):', Number(5 - true));  //! 4
console.log('Number(true - 1):', Number(true - 1));  //! 0
console.log("---------------------------------------------");


//? Порівняння (<, >, <=, >=) також виконується неявне перетворення типів. 
//?  перед порівнянням вони приводяться до числа.
console.log(
    "%c Порівняння (<, >, <=, >=) --> ЧИСЛО ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number("10" > 5):', Number("10" > 5));  //! true -> 1
console.log('Number(10 > "5"):', Number(10 > "5"));  //! true -> 1
console.log('Number(5 > true):', Number(5 > true));  //! true -> 1
console.log('Number(5 < true):', Number(5 < true));  //! false -> 0
console.log('Number("5" < true):', Number("5" < true));  //! false -> 0
console.log("---------------------------------------------");


// =========================================



//! Перетворення рядків у число. 
//? Методи Number.parseInt() і Number.parseFloat()​
//? Перетворюють рядок символ за символом, ДОКИ ЦЕ МОЖЛИВО.
//? У разі виникнення помилки повертається підсумкове число.

//! Метод Number.parseInt()
//? Number.parseInt() парсить з рядка ціле число.
//? 2 аргументи:
//? 1- Рядок - обовязково 
//? 2- Система числення, до якої відноситься рядок (за замовчуванням десяткова система). 
//? Наприклад, для десяткової системи буде 10, для шістнадцяткової - 16 тощо..

//? Метод аналізує рядок зліва направо, видаляючи пробіли на початку і
//? перетворюючи допустимі символи у число до тих пір, поки не зіткнеться 
//? з першим недопустимим символом.
console.log(
    "%c Number.parseInt() ",
    "color: yellow; background-color: #2274A5",
);
console.warn("Decimal system:");
console.log('Number.parseInt("5"):', Number.parseInt("5"));  //! 5
console.log('Number.parseInt("5.5"):', Number.parseInt("5.5"));  //! 5
console.log('Number.parseInt("5cm"):', Number.parseInt("5cm"));  //! 5
console.log('Number.parseInt("12qwe74"):', Number.parseInt("12qwe74"));  //! 12
console.log('Number.parseInt("12.46qwe79"):', Number.parseInt("12.46qwe79"));  //! 12
console.log('Number.parseInt("cm5"):', Number.parseInt("cm5"));  //! NaN
console.log('Number.parseInt(""):', Number.parseInt(""));  //! NaN
console.log('Number.parseInt("qweqwe"):', Number.parseInt("qweqwe"));  //! NaN
console.warn("Hexadecimal system:");
console.log('Number.parseInt("0xff", 16):', Number.parseInt("0xff", 16));  //! 255
console.log('Number.parseInt("ff", 16):', Number.parseInt("ff", 16));  //! 255
//todo Калькулятор:
console.log(
    "%c Калькулятор: ",
    "color: red; background-color: #95B46A",
    "https://calculat.io/ru/number/hex-to-dec/ff"
);
console.log("------------------------------------------------------------");



//! Метод Number.parseFloat() 
//? - перетворює рядок на число з плаваючою крапкою.
//? Number.parseFloat() парсить з рядка дробове число.
console.log(
    "%c Number.parseFloat() ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number.parseFloat("5"):', Number.parseFloat("5"));  //! 5
console.log('Number.parseFloat("5"):', Number.parseFloat("5"));  //! 5
console.log('Number.parseFloat("5.5"):', Number.parseFloat("5.5"));  //! 5.5
console.log('Number.parseFloat("5cm"):', Number.parseFloat("5cm"));  //! 5
console.log('Number.parseFloat("12qwe74"):', Number.parseFloat("12qwe74"));  //! 12
console.log('Number.parseFloat("12.46qwe79"):', Number.parseFloat("12.46qwe79"));  //! 12.46
console.log('Number.parseFloat("cm5"):', Number.parseInt("cm5"));  //! NaN
console.log('Number.parseFloat(""):', Number.parseFloat(""));  //! NaN
console.log('Number.parseInt("qweqwe"):', Number.parseFloat("qweqwe"));  //! NaN
console.warn("Hexadecimal system:");
console.log('Number.parseFloat("0xff", 16):', Number.parseFloat("0xff", 16));  //! 0
console.log('Number.parseFloat("ff", 16):', Number.parseFloat("ff", 16));  //! NaN
console.log("---------------------------------------------");




//! Перетворення деяких типів даних у рядок
//! Метод .toString()
//? Метод.toString() перетворює об'єкт або примітивне значення в рядок у потрібному форматі.
console.log(
    "%c Перетворення деяких типів даних у рядок. \n Метод .toString()                        ",
    "color: yellow; background-color: darkred",
);
const integerValue = 432369;
let convertedString = integerValue.toString();
console.log('convertedString = (432369).toString():', convertedString);  //! "432369"
console.log('typeof convertedString:', typeof convertedString);  //! string
let convertedNumber = Number.parseInt(convertedString); //! var.1 - парсить з рядка ціле число
// let convertedNumber = Number(convertedString); //! var.2 - явно приводить до числа
console.log('convertedNumber = Number.parseInt(convertedString):', convertedNumber);  //! 432369
console.log('typeof convertedNumber:', typeof convertedNumber);  //! number
console.log("-------------------------------------------------------------------------");


//todo Методи: parseInt() и Number.parseInt()
//? Функціонально методи ідентичні,
//? але використання Number.parseInt() переважно



//! Явне приведення(перетворення) до числа - Number(val)
//? Для явного перетворення значення у число 
//? використовується функція Number(val).
//? У val передають те, що потрібно привести до числа.
//? Якщо значення привести до числа неможливо, 
//? результатом буде спеціальне числове значення NaN(Not a Number).
console.log(
    "%c Number(val) ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number(false):', Number(false)); //? 0
console.log('Number(true):', Number(true)); //? 1
console.log('Number("qwerty"):', Number("qwerty")); //? NaN
console.log('Number(36 + "Привiт!"):', Number(36 + "Привiт!")); //? NaN
console.log('Number(36 + "432"):', Number(36 + "432")); //? 36432
console.log(typeof NaN)
console.log("----------------------------------");


//! Перевірка на число  - метод isNaN(val)
//? Він перевіряє, чи Є(true) вказане значення НЕ ЧИСЛО(NaN) чи НІ(false),
//? намагаючись зробити ПРИВЕДЕННЯ ДО ЧИСЛА, якщо це можливо.
//? Цей метод відповідає на питання "Це Not A Number (NaN)?" (це НЕ ЧИСЛО?), 
//? та повертає:
//* true — якщо значення val це "NaN" (тобто, "ТАК, це НЕ ЧИСЛО!")
//! false — якщо значення val це ЧИСЛО, "не NaN", або його вдалось привести до ЧИСЛА (тобто, "НІ, це - ЧИСЛО!")
console.log(
    "%c isNaN(val) ",
    "color: yellow; background-color: #2274A5",
);
console.log('isNaN(36):', isNaN(36)); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("36"):', isNaN("36")); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("      36      "):', isNaN("      36      ")); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("36px"):', isNaN("36px")); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN(36 + "Привiт!"):', isNaN(36 + "Привiт!")); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN("Привiт!"):', isNaN("Привiт!")); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN(NaN):', isNaN(NaN)); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log('isNaN(undefined):', isNaN(undefined)); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log("----------------------------------");



//? Три дивні значення isNaN()
//todo: [1]
console.log('isNaN(""):', isNaN("")); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN("    "):', isNaN("    ")); //! false, "НІ, це - ЧИСЛО!"
//todo: [2]
console.log('isNaN(true):', isNaN(true)); //! false, "НІ, це - ЧИСЛО!"
console.log('isNaN(false):', isNaN(false)); //! false, "НІ, це - ЧИСЛО!"
//todo: [3]
console.log('isNaN(null):', isNaN(null)); //! false, "НІ, це - ЧИСЛО!"
console.log("----------------------------------");



//? Як уникнути трьох дивних значення isNaN()
console.log('parseFloat(null):', parseFloat(null)); //! NaN
console.log('parseFloat(" "):', parseFloat(" ")); //! NaN
console.log('parseFloat(true):', parseFloat(true)); //! NaN
console.log('isNaN(NaN):', isNaN(NaN)); //* true, "ТАК, це НЕ ЧИСЛО!"
console.log("----------------------------------");
console.log('Number.parseFloat(null):', Number.parseFloat(null)); //! NaN
console.log('Number.parseFloat(" "):', Number.parseFloat(" ")); //! NaN
console.log('Number.parseFloat(true):', Number.parseFloat(true)); //! NaN
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); //* true, "ТАК, це НЕ ЧИСЛО!"



//! Перевірка на NaN - метод Number.isNaN(val)
//? Для всіх значень val крім NaN, при передачі в Number.isNaN(val) поверне false.
//? Цей метод НЕ виробляє спробу перетворити val до числа, а просто виконує перевірку на NaN.
//? Для більшої точності рекомендується використовувати
//? Number.isNaN() замість isNaN() у сучасних проектах.
console.log(
    "%c Number.isNaN(val) ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number.isNaN("qwerty"):', Number.isNaN("qwerty")); //! false
console.log('Number.isNaN(36 + "Привiт!"):', Number.isNaN(36 + "Привiт!")); //! false
console.log('Number.isNaN(36):', Number.isNaN(36)); //! false
let valueNaN = Number("qwerty");
console.log('valueNaN = Number("qwerty"):', valueNaN); //! NaN
console.log('Number.isNaN(valueNaN):', Number.isNaN(valueNaN)); //! true
console.log('Number.isNaN(NaN):', Number.isNaN(NaN)); //! true
console.log("----------------------------------");

console.log('Number.isNaN(parseFloat(null)):', Number.isNaN(parseFloat(null))); //! true
console.log('Number.isNaN(parseFloat(" ")):', Number.isNaN(parseFloat(" "))); //! true
console.log('Number.isNaN(parseFloat(true)):', Number.isNaN(parseFloat(true))); //! true




