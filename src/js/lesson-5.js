//! Приведення типів
//? Приведення явне на - Boolean(value)
//? в логічних операціях, здійснюється приведення типів операндів
//? до true або false - Truthy і Falsy
//? необхідно на вході мати два значення та між ними логічний оператор

//todo ❗️❗️❗️ 6 хибних (falsy) значень, які приводять
//todo     до false в логічному перетворенні:
//!  0, null, NaN, порожній рядок: "" (або ''), false, undefined 

console.log("Boolean(0):", Boolean(0)); //! false
console.log("Boolean(null):", Boolean(null)); //! false
console.log("Boolean(NaN):", Boolean(NaN)); //! false
console.log('Boolean(""):', Boolean("")); //! false
console.log("Boolean(false):", Boolean(false)); //! false
console.log("Boolean(undefined):", Boolean(undefined)); //! false
console.log("---------------------------");

//?  Абсолютно все інше приводиться до true.
console.log("Boolean(1456):", Boolean(1456)); //! true
console.log("Boolean(-1456):", Boolean(-1456)); //! true
console.log('Boolean("world"):', Boolean("world")); //! true
console.log('Boolean("[]"):', Boolean([])); //! true



//! 2.Логічні оператори
//? ​Існує три логічні оператори, які використовуються 
//? для перевірки виконання множинних виразів:
//? «І»(оператор &&), «АБО»(оператор ||), «НЕ»(оператор !).
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/boolean-operators.png");


//! 2-1.Логічне «І» (оператор &&)
console.log(
    "%c 2-1.Логічне «І» (оператор &&) ",
    "color: yellow; background-color: #2274A5",
);
//todo: вираз && вираз
//? ❗️❗️❗️ Запинається на БРЕХНІ.
//* Повертає ТЕ на чому запнулось або останній операнд.
//? Оператор && приводить всі операнди до булю і повертає одне зі значень.
//? Щоб оператор && повернув true, потрібно щоб 
//? всі операнди були істинними (truthy)
console.log("false && false:", false && false); //! false
console.log("false && true:", false && true); //! false
console.log("true && false:", true && false); //! false
console.log("true && true:", true && true); //! true
console.log("----------------------------");

//? Приклади:
console.log('1 && 4:', 1 && 4); //! 4
console.log('1 && 4 && 0:', 1 && 4 && 0); //! 0
console.log('1 && 4 && "mango":', 1 && 4 && "mango"); //! mango
console.log('1 && 4 && 0 && "mango":', 1 && 4 && 0 && "mango"); //! 0
console.log('1 && 4 && "":', 1 && 4 && ""); //! пустий рядок 
console.log('1 && "" && 4:', 1 && "" && 4); //! також пустий рядок
console.log("----------------------------");

let num = 20;
const result1 = num > 10 && num < 30;
console.log("num > 10 && num < 30:", result1); //! true

const result2 = num > 10 && num < 10;
console.log("num > 10 && num < 10:", result2); //! false
console.log("----------------------------");



//! 2-2.Логічне «АБО» (оператор ||)
console.log(
    "%c 2-2.Логічне «АБО» (оператор ||) ",
    "color: yellow; background-color: #2274A5",
);
//todo: вираз || вираз
//? ❗️❗️❗️ Запинається на ПРАВДІ.
//* Повертає TE на чому запнулось або останній операнд.
//? Оператор || приводить всі операнди до булю і повертає одне зі значень.
//? Щоб оператор || повернув true, достатньо щоб 
//? хоч би один операнд був істинним (truthy)
console.log("false || false:", false || false); //! false
console.log("false || true:", false || true); //! true
console.log("true || false:", true || false); //! true
console.log("true || true:", true || true); //! true
console.log("----------------------------");

//? Приклади:
console.log('1 || 4:', 1 || 4); //! 1
console.log('1 || 4 || 0:', 1 || 4 || 0); //! 1
console.log('1 || 4 || "mango":', 1 || 4 || "mango"); //! 1
console.log('1 || 4 || 0 || "mango":', 1 || 4 || 0 || "mango"); //! 1
console.log('1 || 4 || "":', 1 || 4 || ""); //! 1 
console.log('1 || "" || 4:', 1 || "" || 4); //! 1
console.log('"" || 1 || 4:', "" || 1 || 4); //! 1
console.log('false || 0 || "":', false || 0 || ""); //! пустий рядок
console.log("----------------------------");

num = 20;
const result3 = num > 10 || num < 30;
console.log("num > 10 || num < 30:", result3); //! true

const result4 = num > 10 || num < 10;
console.log("num > 10 || num < 10:", result4); //! true
console.log("----------------------------");


//! 2-3.Логічне «НЕ» (оператор !)
console.log(
    "%c 2-3.Логічне «НЕ» (оператор !) ",
    "color: yellow; background-color: #2274A5",
);
//todo: !вираз
//? ❗️❗️❗️ Робить інверсію:
//? правда => брехня, брехня => правда
//* Повертає true або false
//? призводить операнд до булю, якщо необхідно,
//? а потім замінює його на протилежний.
console.log("!false:", !false); //! true
console.log("!true:", !true); //! false
console.log("----------------------------");

//? Подвійна інверсія - повернення до початкового стану:
console.log("!!false:", !!false); //! false 
console.log("!!true:", !!true); //! true
console.log("----------------------------");
console.log('Boolean("9"):', Boolean("9")); //! true
console.log('!!("9"):', !!("9")); //! true
console.log('Boolean(1 && 4 || 0 || "mango"):', Boolean(1 && 4 || 0 || "mango")); //! true
console.log('!!(1 && 4 || 0 || "mango"):', !!(1 && 4 || 0 || "mango")); //! true
// !!(value) робить теж саме що і Boolean(value) тобто приводить значення value до Булю 
//? Приклади:
console.log("!1:", !1); //! false
console.log("!0:", !0); //! true
console.log("----------------------------");
console.log('!(1 || 4):', !(1 || 4)); //! false
console.log('!(1 || 4 || 0):', !(1 || 4 || 0)); //! false
console.log('!(1 || 4 || "mango"):', !(1 || 4 || "mango")); //! false
console.log('!(1 || 4 || 0 || "mango"):', !(1 || 4 || 0 || "mango")); //! false
console.log('!(1 && 4 || 0 || "mango"):', !(1 && 4 || 0 || "mango")); //! false
console.log('!(1 || 4 || ""):', !(1 || 4 || "")); //! false
console.log('!(1 || "" || 4):', !(1 || "" || 4)); //! false
console.log('!("" || 1 || 4)', !("" || 1 || 4)); //! false
console.log('!(false || 0 || ""):', !(false || 0 || "")); //! true
console.log("-------------------------------");

num = 20;
const result5 = num > 10 || num < 30;
console.log("!(num > 10 || num < 30):", !result5); //! false

const result6 = num > 10 || num < 10;
console.log("!(num > 10 || num < 10):", !result6); //! false

//? Подвійна інверсія:
const result7 = !(num > 10 || num < 10);
console.log("!!(num > 10 || num < 10):", !result7); //! true
console.log("-------------------------------");



//! 2-4.Порядок обчислення
console.log(
    "%c 2-4.Порядок обчислення ",
    "color: yellow; background-color: #2274A5",
);
//? При виконанні логічних операцій,
//? правий операнд може не обчислюватися.
//todo:  false && (цей операнд не обчислюється)
//todo:  true || (цей операнд не обчислюється)
console.log("false && (цей операнд не обчислюється)");
console.log("true || (цей операнд не обчислюється)");
console.log("---------------------------------------");

//! УВАГА!
//! Приклад обчислення послідовності операторів && та || 
//todo: Послідовність виконання визначається пріоритетами:
//todo: спочатку обчислюється &&, потім ||
console.warn("Приклад обчислення послідовності операторів && та ||");
console.log('1 && 4 || 0 && "mango":', 1 && 4 || 0 && "mango"); //! 4
console.log('Крок_1 -> (1 && 4):', 1 && 4); //! 4
console.log('Крок_2 -> (0 && "mango"):', 0 && "mango"); //! 0
console.log('Крок_3 -> (4 || 0):', 4 || 0); //! 4
console.log(". . . . . . . . . . . . . . . . . . . .");

console.log('1 && "mango" || 1 && undefined:', 1 && "mango" || 1 && undefined); //! "mango"
console.log('0 && 1 || 1 && "mango":', 0 && 1 || 1 && "mango"); //! "mango"
console.log("---------------------------------------");



//! Оператори розгалуження.
//? Логічні оператори не можуть самостійно
//? управляти потоком виконання програми.
//? Для цього використовуються розгалуження.
//? Всі вони влаштовані за одним принципом —
//? вхідні дані приводяться до булю(true або false) і,
//? в залежності від результату цього значення(умова(condition)),
//? потік програми направляється в ту чи іншу гілку.


//! 3-1.Інструкція: «if»
console.log(
    "%c 3-1.Інструкція: «if» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/01_instructions-if.jpg");
//? Вхідні дані, які приводяться до булевого типу називаються умовою(condition).
//? Умову поміщають за оператором if у круглих дужках.
//? Якщо умова приводиться до true, то виконується код в фігурних дужках(гілка).
//? Якщо умова приводиться до false, код у фігурних дужках буде пропущений.
// let condition1 = true;
let condition1 = false;
if (condition1) {
    // тіло if
    console.log("тіло if1");
};
if (condition1 === false) {
    // тіло if
    console.log("тіло if2");
};
console.log("_____________________________");

//? ПРИКЛАДИ:
//? Якщо умова приводиться до true,
//? то виконується код у фігурних дужках тіла if.
let cost11 = 0;
const subscription11 = "pro";

if (subscription11 === "pro") {
    cost11 = 100;
}

console.log("cost11:", cost11); //! 100

//? Якщо умова приводиться до false,
//? код у фігурних дужках буде пропущений.
let cost12 = 0;
const subscription12 = "free";

if (subscription12 === "pro") {
    cost12 = 100;
}

console.log("cost12:", cost12); //! 0
console.log("-----------------------------");



//! 3-2.Інструкція: «if...else»
console.log(
    "%c 3-2.Інструкція: «if...else» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/02_instructions-if...else.jpg");
//? Розширює синтаксис if таким чином,
//? що якщо умова приводиться до false, виконається код у
//? фігурних дужках після оператора else.
let condition2 = true;
// let condition2 = false;
if (condition2) {
    // тіло if
    console.log("тіло if");
} else {
    // тіло else
    console.log("тіло else");
}
console.log("_____________________________");

//? ПРИКЛАДИ:
//? Якщо умова приводиться до true,
//? тіло блока else ігнорується.
let cost21;
const subscription21 = "pro";

if (subscription21 === "pro") {
    cost21 = 100;
} else {
    cost21 = 0;
}

console.log("cost21:", cost21); //! 100

//? Якщо умова приводиться до false,
//? тіло блока if ігнорується.
let cost22;
const subscription22 = "free";

if (subscription22 === "pro") {
    cost22 = 100;
} else {
    cost22 = 0;
}

console.log("cost22:", cost22); //! 0
console.log("-----------------------------");



//! 3-3.Інструкція: «else...if»
console.log(
    "%c 3-3.Інструкція: «else...if» ",
    "color: yellow; background-color: #2274A5",
);
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_04/images/03_instructions-else...if.jpg");
//? Конструкція if...else може перевірити і зреагувати
//? на виконання або невиконання лише однієї умови.
//? Блок else...if дозволяє додати після else
//? ще один оператор if з умовою.
//? В кінці ланцюжка може бути класичний блок else,
//? який виконається лише у тому випадку,
//? якщо жодна умова не приведеться до true.
// let condition31 = true;
let condition31 = false;

// let condition32 = true;
let condition32 = false;

// let condition33 = true;
let condition33 = false;

if (condition31) {
    // тіло if-1
    console.log("тіло if-1");
} else if (condition32) {
    // тіло else if-2
    console.log("тіло else if-2");
} else if (condition33) {
    // тіло else if-3
    console.log("тіло else if-3");
}
console.log("_____________________________");

//? ПРИКЛАД:
//? При першому true перевірки припиняться і виконається 
//? лише один сценарій, який відповідає цьому true.
//? Тому, такий запис варто читати як: 
//? шукаю перший збіг умови, ігнорую все інше.
let cost3;
// const subscription3 = "free";
// const subscription3 = "pro";
const subscription3 = "premium";
// const subscription3 = "personal";

if (subscription3 === "free") {
    cost3 = 0;
} else if (subscription3 === "pro") {
    cost3 = 100;
} else if (subscription3 === "premium") {
    cost3 = 500;
} else {
    console.log("Invalid subscription type");
}

console.log("cost3:", cost3); //! 500




//! 4.Тернарний оператор
//todo:  Тернарний оператор повинен використовуватися
//todo:  в простих операціях привласнення або повернення.
//todo:  Його використання для опису складних розгалужень
//todo:  - це погана практика(антипатерн).
//? Тернарний оператор використовується у якості
//? синтаксично коротшої заміни інструкції if...else,
//? коли одній і тій самій змінній необхідно присвоїти
//? різні значення за умовою.
//todo:  (умова) ? <вираз_якщо_умова_правдива(true)> : <вираз_якщо_умова_хибна(false)>

//? ПРИКЛАД-1 (if...else):
console.log(
    "%c ПРИКЛАД-1 (if...else): ",
    "color: yellow; background-color: #2274A5",
);
let type1;
const age1 = 20;

if (age1 >= 18) {
    type1 = "adult";
    console.log("Вітаю ви вже дорослий")
} else {
    type1 = "child";
    console.log("Нажаль ви ще дитина")
}

console.log('type1:', type1);  //! "adult"
console.log("---------------------------------");


//? ПРИКЛАД-2 (тернарний оператор):
console.log(
    "%c ПРИКЛАД-2 (тернарний оператор): ",
    "color: yellow; background-color: #2274A5",
);
const age2 = 20;
const type2 = age2 >= 18 ? "adult" : "child";

console.log('type2:', type2);  //! "adult"
console.log("---------------------------------");


//? ПРИКЛАД-3. Пошук більшого числа (if...else):
console.log(
    "%c ПРИКЛАД-3 (if...else):  ",
    "color: yellow; background-color: #2274A5",
);
const num13 = 5;
const num23 = 10;
let biggerNumber3;

if (num13 > num23) {
    biggerNumber3 = num13;
} else {
    biggerNumber3 = num23;
}

console.log('biggerNumber3:', biggerNumber3); //! 10
console.log("---------------------------------");


//? ПРИКЛАД-4. Пошук більшого числа (тернарний оператор):
console.log(
    "%c ПРИКЛАД-4 (тернарний оператор): ",
    "color: yellow; background-color: #2274A5",
);
const num14 = 5;
// const num14 = 20;
const num24 = 10;
const biggerNumber4 = (num14 > num24)
    ? num14
    : num24;

const color = (num14 > num24) ? "red" : "grean"

console.log('biggerNumber4:', biggerNumber4); //! 10
console.log("---------------------------------");




//! 1.Інструкція switch
//? У деяких випадках незручність читання складних
//? розгалужень if...else можна уникнути, використовуючи
//? «плоскіший» синтаксис інструкції розгалуження switch.

//? Межі застосування switch обмежені задачами з одним
//? загальним запитанням(що порівнювати) і рядом
//? варіантів відповідей(з чим порівнювати).
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_05/images/switch.jpg");

//? Його синтаксис складається із блоку switch (значення)
//? - що потрібно порівняти і набору окремих випадків case значення
//? - з чим потрібно порівняти.
//? Для порівняння використовується оператор строгої рівності ===.
//? Тобто, не можна порівняти більше або менше, лише рівність.
const valueOriginal = 50;
// const valueOriginal = 100;
// const valueOriginal = 200;
// const valueOriginal = 400;

const valueToCompare1 = 50;
const valueToCompare2 = 100;
const valueToCompare3 = 200;

console.log("valueOriginal:", valueOriginal);
console.log(". . . . . . . . . . .");
console.log("valueToCompare1:", valueToCompare1);
console.log("valueToCompare2:", valueToCompare2);
console.log("valueToCompare3:", valueToCompare3);

switch (valueOriginal) {
    case valueToCompare1:
        console.log("Спрацював код ПЕРШОГО блока"); //! інструкції ПЕРШОГО блока;
        console.log("Спрацював код ПЕРШОГО блока"); //! інструкції ПЕРШОГО блока;
        break;

    case valueToCompare2:
        console.log("Спрацював код ДРУГОГО блока"); //! інструкції ДРУГОГО блока;
        break;

    case valueToCompare3:
        console.log("Спрацював код ТРЕТЬОГО блока"); //! інструкції ТРЕТЬОГО блока;
        break;

    default:
        console.warn("НЕ спрацював ЖОДЕН блок!"); //! інструкції default блока;
};
console.log("----------------------------");

//? Приклад:
let cost;
// const subscription = "free";
const subscription = "pro";
// const subscription = "premium";
// const subscription = "personal";

switch (subscription) {
    case "free":
        cost = 0;
        // break;

    case "pro":
        cost = 100;
        // break;

    case "premium":
        cost = 500;
        break;

    default:
        console.log("Invalid subscription type");
}
console.log("cost:", cost); //! 100



//! 2.Область видимості (variable scope)
//? Область видимості змінних (variable scope)
//? - доступність змінних в певному місці коду.

//? Глобальна область видимості використовується за замовчуванням.
//? Кожен має доступ до змінних, оголошених в ній.
//? Наприклад, змінна value оголошена у глобальній області видимості,
//? тобто поза будь - яким блоком, і доступна в будь - якому місці після оголошення.
const value1 = 11;

if (true) {
    // const value1 = 101; //todo: це локальна(блокова) змінна
    console.log("Block scope: ", value1); //! 11 або 101
}

console.log("Global scope: ", value1); //! 11
console.log("---------------------------");

//? Будь - яка конструкція, яка використовує
//? фігурні дужки { } (умови, цикли, функції тощо),
//? створює нову локальну область видимості, і змінні,
//? оголошені в цій області видимості, з використанням let або const,
//? - недоступні за межами цього блоку.
if (true) {
    const value2 = 22;
    console.log("Block scope: ", value2); //! 22
}

// console.log("Global scope: ", value2); //! Uncaught ReferenceError: value2 is not defined
console.log("---------------------------");

//? Глибина вкладеності областей видимості - необмежена,
//? і всі вони будуть працювати за одним принципом -
//? область видимості має доступ до всіх змінних,
//? оголошених вище по ієрархії вкладеності,
//? але не може отримати доступ до змінних,
//? оголошених у вкладених областях видимості.

//? Створимо декілька областей видимості
//? і дамо їм імена для наочності.
console.warn("https://ruslan379.github.io/course-fe-html-css/lesson-FE3_05/images/variable-scope.jpg");

const global = "global";

if (true) {
    const blockA = "block-A";

    //todo: Бачимо глобальну + локальну A
    console.log("Block scope A:", global); //! "global"
    console.log("Block scope A:", blockA); //! block-A

    //todo: Змінні blockB і blockC не знайдені в доступних областях видимості.
    //todo: Буде помилка звернення до змінної.
    // console.log(blockB); //! ReferenceError: blockB is not defined
    // console.log(blockC); //! ReferenceError: blockC is not defined
    console.log("-----------------------");

    if (true) {
        const blockB = "block-B";

        //todo: Бачимо глобальну + зовнішню A + локальну B
        console.log("Block scope B:", global); //! "global"
        console.log("Block scope B:", blockA); //! "block-A"
        console.log("Block scope B:", blockB); //! "block-B"

        //todo: Змінна blockC не знайдена в доступних областях видимості.
        //todo: Буде помилка звернення до змінної.
        // console.log(blockC); //! ReferenceError: blockC is not defined
        console.log("-----------------------");
    }
}

if (true) {
    const blockC = "block-C";

    //todo: Бачимо глобальну + локальну C
    console.log("Block scope C:", global); //! "global"
    console.log("Block scope C:", blockC); //! "block-C"

    //todo: Змінні blockA і blockB не знайдені в доступних областях видимості.
    //todo: Буде помилка звернення до змінної.
    // console.log(blockA); //! ReferenceError: blockA is not defined
    // console.log(blockB); //! ReferenceError: blockB is not defined
    console.log("-----------------------");
}

//todo: Бачимо лише глобальну
console.log("Block scope GLOBAL:", global); //! "global"

//todo: Змінні blockA, blockB і blockC не знайдені в доступних областях видимості.
//todo: Буде помилка звернення до змінної.
console.log("Block scope GLOBAL:", blockA); //! ReferenceError: blockA is not defined
console.log("Block scope GLOBAL:", blockB); //! ReferenceError: blockB is not defined
console.log("Block scope GLOBAL:", blockC); //! ReferenceError: blockC is not defined
console.log("-----------------------");
