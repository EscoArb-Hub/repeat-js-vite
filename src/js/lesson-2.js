//todo Методи window.alert(), window.confirm(), window.prompt()
//! alert() - виведення даних в модальне вікно
//! confirm() - oтримання даних з модального вікна
//! prompt() - oтримання додаткових даних з модального вікна
//! ___________________________


//! alert()
//? Виводить модальне вікно з ПОВІДОМЛЕННЯМ і КНОПКОЮ [OK] та чекає підтвердження.
// const myMessage = "alert() --> JavaScript is awesome!";
// console.log(myMessage);
// alert(myMessage);

//? Приклад того як alert() блокує інтерпретацію(компіляцію)
// //todo Тут код припиняє свою роботу до
// //todo підтерження повідомленя від alert(),
// //todo тобто до натискання на кнопку[OK]
// console.log('Після виконання alert()');
// console.log("---------------------------------");


//! confirm() - oтримання даних з модального вікна
//? Виводить модальне вікно з ПОВІДОМЛЕННЯМ і КНОПКАМИ [OK] і [Cancel].
//? Натискаючи на [OK] отримуємо в змінну isComing значення = true,
//? Натискаючи на [Cancel] отримуемо в змінну isComing значення = false.
//todo ПРИКЛАД: Просимо клієнта підтвердити бронювання готелю
//todo і зберігаємо результат роботи confirm у змінну isComing
// let isComing = confirm("confirm() --> Please confirm hotel reservation_[OK]");
// console.log('isComing_[OK]:', isComing);
// isComing = confirm("confirm() --> Please confirm hotel reservation_[Cancel]");
// console.log('isComing_[Cancel]:', isComing);
// console.log("---------------------------------");



// ! prompt() - oтримання додаткових даних з модального вікна
// ? Виводить модальне вікно з ПОВІДОМЛЕННЯМ та ПОЛЕМ ВВЕДЕННЯ ДАНИХ і КНОПКАМИ [OK] і [Cancel].
// ? Отримуємо в змінну hotelName значення = ТЕ, що  користувач ввів в ПОЛЕ ВВЕДЕННЯ ДАНИХ.
// ? Отримуємо в змінну hotelName значення = пустий рядок - якщо користувач НЕ ввів дані та натиснув КНОПКУ [OK].
// ? Отримуємо в змінну hotelName значення = null - якщо користувач НЕ ввів/ввів дані та натиснув КНОПКУ [Cancel].
// todo Запитуємо назву готеля, в якому хотів би зупинитися клієнт
// todo і зберігаємо результат виклику prompt у змінну.
// ? name + [OK]
// let hotelName = prompt("prompt() --> Please enter desired hotel name_(name+[OK])");
// console.log('hotelName_(name+[OK]):', hotelName);
// ? [OK]
// hotelName = prompt("prompt() --> Please enter desired hotel name_[OK]");
// console.log('hotelName_[OK]:', hotelName);
// ? [Cancel]
// hotelName = prompt("prompt() --> Please enter desired hotel name_[Cancel]");
// console.log('hotelName_[Cancel]:', hotelName);
// console.log("---------------------------------");

// console.log(typeof hotelName)


//todo Важлива особливість prompt полягає в тому,
//todo що незалежно від того, що ввів користувач,
//todo тип значення змінної буде - рядок(string)!
// let quantity = prompt('prompt() --> Введіть кількість товарів');
// console.log('quantity(before)):', quantity);
// console.log('typeof quantity(before) =', typeof quantity);

//? Якщо необхідно, перетворюємо тип значення
//? змінної quantity зі string на number:
// if (quantity === "" || quantity === null) {
//     alert(" ПОМИЛКА!\n Це не число!");
    // return;
// };
// quantity = Number(quantity);
// console.log('quantity(after)):', quantity);
// console.log('typeof quantity(after) =', typeof quantity);
// console.log("---------------------------------");


//todo Робимо Перевірку на NaN використовуючі метод Number.isNaN(val)
// function сheckForNumber() {
//     const itsNotAnumber = Number.isNaN(quantity);
//     console.log('itsNotAnumber:', itsNotAnumber);

//     if (itsNotAnumber) {
//         alert(" ПОМИЛКА!\n Це не число!\n Введіть ЧИСЛО!");
//         quantity = prompt('prompt() --> Введіть кількість товарів ще раз');
//         console.log('quantity(before)):', quantity);
//         console.log('typeof quantity(before) =', typeof quantity);

//         //todo Перетворюємо тип значення змінної quantity зі string на number:
//         quantity = Number(quantity);
//         console.log('quantity(after)):', quantity);
//         console.log('typeof quantity(after) =', typeof quantity);
//         console.log("---------------------------------");
//         сheckForNumber();
//     }
//     else {
//         alert(" ДЯКУЄМО!\n Кількість товару підтверджено!");
//         return;
//     }
// };
// сheckForNumber();




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//! Математичні оператори (Арифметичні операції)
//? Правила іменування складових виразу:
//? + - * / % називаються ОПЕРАТОРАМИ, 
//? а то на чому вони застосовуються - ОПЕРАНДАМИ.
//? ОПЕРАНД - це значення, до якого застосовується оператор, 
//? наприклад, в арифметичних або логічних виразах.
//todo: Літерали можуть бути операндами, коли вони беруть участь у виразі.
const userAge = 30 - 6; //? Числа 30 та 6 є операндами
const h = 180; //? 180 - числовий літерал
const t = 10; //? 10 - числовий літерал
const userHeight = h - t; //? h та t - операнди


//? Бінарні оператори застосов до двух операндів(літералів) (-)
const clientAge = 30 - 6;
//? Унарні застосов до одного операнда(літералів) (=)
const userCash = -800;


//? Задаємо змінні
const x = 8;
const y = 5;
const x2 = 10;
console.log("x =", x);
console.log("y =", y);
console.log("x2 =", x2);
console.log("--------------");

//? Додавання
console.log("x + y =", x + y);

//? Віднімання
console.log("x - y =", x - y);
console.log("y - x =", y - x);

//? Множення
console.log("y * x =", x * y);

//? Ділення
console.log("x / y =", x / y);
console.log("x2 / y =", x2 / y);

//? Залишок від ділення
console.log("Залишок від ділення x / y =", x % y);
console.log("Залишок від ділення x2 / y =", x2 % y);

//? Зведення у ступінь
console.log("x(8) у ступіні y(5) =", x ** y); //! 32768
console.log("2 у ступіні 3 =", 2 ** 3); //!  8
console.log("----------------------------------");




//! Комбіновані оператори
//! Арифметичні операції із заміною
//? Додавання із заміною
//todo: x += y еквівалентно x = x + y
let valueSum = 10;
// valueSum = valueSum + 5; //todo: var 1.
valueSum += 5;  //todo: var 2.
console.log("valueSum:", valueSum);

//? Віднімання із заміною
//todo: x -= y еквівалентно x = x - y
let valueX = 10;
let valueY = 4;
// valueX = valueX - valueY; //todo: var 1.
valueX -= valueY;  //todo: var 2.
console.log("Додавання - valueX:", valueX);

//? Множення із заміною
//todo: x *= y еквівалентно x = x * y
let valueG = 4;
let valueU = 3;
// valueG = valueG * valueU; //todo: var 1.
valueG *= valueU;  //todo: var 2.
console.log("Множення - valueG:", valueG);

//? Ділення із заміною
//todo: x /= y еквівалентно x = x / y
let valueM = 100;
let valueN = 5;
// valueM = valueM / valueN; //todo: var 1.
valueM /= valueN;  //todo: var 2.
console.log("Ділення - valueM:", valueM);

//? Залишок від ділення із заміною
//todo: x %= y еквівалентно x = x % y
let valueO = 30;
let valueP = 20;
// valueO = valueO % valueP; //todo: var 1.
valueO %= valueP;  //todo: var 2.
console.log("Залишок від ділення valueO/valueP --> valueO:", valueO);


// ============================================


//! Оператори порівняння
//? Використовуються для порівняння двох значень і 
//? повертають булеве значення (true або false)

// const a = 20;
// const b = 50;
// console.log("a =", a);
// console.log("b =", b);
// console.log("--------------");

// console.log("a > b:", a > b); //! false
// console.log("b > a:", b > a); //! true
// console.log("a >= b:", a >= b); //! false
// console.log("b >= a:", b >= a); //! true
// console.log("a < b:", a < b); //! true
// console.log("b < a:", b < a); //! false
// console.log("a <= b:", a <= b); //! true
// console.log("b <= a:", b <= a); //! false

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++




//! Оператори 
//! строгої(суворої) та 
//! нестрогої(несуворої)
//! рівності і нерівності
let a;
let b;
console.log(a, b)
a == b   //? нестрога (несувора) рівність
a === b  //? строга (сувора) рівність
a != b   //? нестрога (несувора) нерівність
a !== b  //? строга (сувора) нерівність

a = 100;
b = "100";
console.log("a =", a, ";", "typeof a =", typeof a);
console.log("b =", b, ";", "typeof b =", typeof b);
console.log("-----------------------------");

console.log("a == b:", a == b); //! true
console.log("a === b:", a === b); //! false
console.log("a != b:", a != b); //! false
console.log("a !== b:", a !== b); //! true

//? Оператори нестрогої (несуворої) рівності:
console.warn("Нестрога (несувора) рівність: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_02/images/not-strict-equality.png");

console.log("ПРИКЛАДИ:");
console.log("5 == 5:", 5 == 5); //! true 
console.log("5 == 3:", 5 == 3); //! false 
console.log("5 != 3:", 5 != 3); //! true
console.log("5 != 5:", 5 != 5); //! false 
//todo -  Погано, бо виконується неявне перетворення рядків
//todo    і булевого значення до ЧИСЛА:
console.log("------- неявне перетворення до ЧИСЛА -------");
console.log('5 == 5:', 5 == 5); //! true
console.log('5 == "5":', 5 == "5"); //! true 
console.log('5 != "5":', 5 != "5"); //! false 
//* Boolean
console.log("1 == true:", 1 == true); //! true
console.log('"1" == true:', "1" == true); //! true
console.log("[1] == true:", [1] == true); //! true
console.log("1 != true:", 1 != true); //! false


//? Оператори строгої (суворої) рівності:
console.warn("Строга (сувора) нерівність: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_02/images/strict-equality.png");

//todo -  Добре, перетворення типів не виконується:
console.log("---- перетворення до ЧИСЛА не виконується ----");
console.log("5 === 5:", 5 === 5); //! true 
console.log('5 === "5":', 5 === "5"); //! false 
console.log('5 !== "5":', 5 !== "5"); //! true
//* Boolean
console.log("1 === true:", 1 === true); //! false
console.log("1 != true:", 1 !== true); //! true


// +++++++++++++++++++++++++++++++++++++=



//! Перетворення типів у числа
//! Метод Number(val)
//? Більшість арифметичних операцій і математичних функцій 
//? перетворюють значення у число автоматично.
//? Для того, щоб зробити це явно, використовується функція Number(val), 
//? передаючи їй у val те, що потрібно привести до числа.
console.log(
    "%c Number(val) --> ЧИСЛО ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number(5):', Number(5));  //! 5
console.log('Number("5"):', Number("5"));  //! 5
console.log('Number(36 + "432"):', Number(36 + "432")); //? 36432
console.log('Number(true):', Number(true));  //! 1
console.log('Number(false):', Number(false));  //! 0
console.log('Number(null):', Number(null));  //! 0
console.log('Number(""):', Number(""));  //! 0
console.log('Number(""):', Number(36 + ""));  //! 36
console.log('Number(undefined):', Number(undefined));  //! NaN
console.log("---------------------------------------------");


//? Якщо значення привести до числа неможливо, результатом буде 
//? спеціальне числове значення NaN(Not a Number)
console.log(
    "%c Number(val) --> NaN ",
    "color: yellow; background-color: #2274A5",
);
console.log('Number(undefined):', Number(undefined)); //! NaN
console.log('Number("Jacob"):', Number("Jacob")); //! NaN
console.log('Number("36px"):', Number("36px")); //! NaN
console.log('Number(36 + "Привiт!"):', Number(36 + "Привiт!")); //! NaN
console.log("---------------------------------------------");



