//! Предикатні функції
//todo: Предика́т (лат. praedicatum «заявлене, згадане, сказане»)
//todo: - це твердження, висловлене про суб'єкт.
//? Функції-предикати (або функції-питання)
//? відповідають на якесь запитання
//? і завжди (без винятків!) повертають або true або false.
//? У JavaScript предикати зазвичай починаються
//? з префікса is, has або can,
//? але не обмежені цими словами.
//? Приклади:
//todo: isInfant() — «чи це немовля?»
//todo: hasChildren() — «чи є діти?»
//todo: isEmpty() — «чи порожній?»
//todo: hasErrors() — «чи є помилки?»


console.warn("Що таке Предикатна функція. Приклад:");
//todo: Функція-предикат isInfant відповідає на питання:
//todo: «чи це немовля?» та повертає true або false
const isInfant = function (age) {
    //todo: var.1
    // if (age <= 1) {
    //     return true;
    // } else {
    //     return false;
    // };
    //todo: var.2
    return (age <= 1);
};
console.log("isInfant(1):", isInfant(1)); //! true
console.log("isInfant(3):", isInfant(3)); //! false
console.log("--------------------------------------------");


//! Приклад-алгоритм приготування кави за допомогою функції "Приготування кави"
console.warn("Приклад функції \"Приготування кави\":");
let groundCoffee;
let hotWater;
let coffee;

//! 1 - функція "Приготування меленої кави"
function makesGroundCoffee() {
    groundCoffee = "30 грам";
    console.log("1️⃣ Мелена кава є?", Boolean(groundCoffee));
    return groundCoffee;
};

//! 2 - функція "Приготування окропу (гарячої води)".
function makesHotWater() {
    hotWater = "250 мілілітрів";
    console.log("2️⃣ Окріп (гаряча вода) є?", Boolean(hotWater));
    return hotWater;
};

//! 3 - функція "Приготування кави"
function makingCoffee() {
    if (!(makesGroundCoffee())) {
        return "Потрібна мелена кава!";
    };

    if (!(makesHotWater())) {
        return "Потрібна гаряча вода!";
    };

    coffee = groundCoffee + hotWater;
    coffee = "✅ Кава готова!"
    return coffee;
};

console.log(makingCoffee());
console.log("--------------------------------------------");





//! Приклад використання Функцій-предикатів
console.warn("Приклад використання Функцій-предикатів \n  (ДЗ-9, Завдання-7, додаткове):");
//? Є масив logins з логінами користувачів. 
//? Напиши скрипт додавання логіна в масив logins. 
//? Логін, який додається повинен:
//?  - проходити перевірку на довжину від 4 до 16-ти символів включно
//?  - бути унікальним, тобто бути відсутнім в масиві logins.
//? ⚠️ Розбий завдання на підзадачі за допомогою функцій.
//? 1️⃣ Напиши функцію isLoginValid(login), 
//? в якій перевір кількість символів параметра login 
//? і поверни true або false в залежності від того, 
//? чи потрапляє довжина параметра в заданий 
//? діапазон від 4-х до 16-ти символів включно.
//? 2️⃣ Напиши функцію isLoginUnique(allLogins, login), 
//? яка приймає список всіх логінів і логін, 
//? який додається, як параметри 
//? і перевіряє наявність login в массиве allLogins, 
//? повертає true якщо такого логіна ще немає і
//? false якщо логін вже використовується.
//? 3️⃣ Напиши функцію addLogin(allLogins, login) яка:
//?  - Приймає новий логін і масив всіх логінів як параметри
//?  - Перевіряє валідність логіна використовуючи допоміжну функцію isLoginValid
//?  - Якщо логін не валідний, припинити виконання функції addLogin 
//?    і повернути радок: 'Помилка! Логін повинен бути від 4 до 16 символів'
//?  - Якщо логін валідний, функція addLogin перевіряє унікальність логіна за допомогою функції isLoginUnique
//?  - Якщо isLoginUnique поверне false, тоді addLogin не додає логін в массив масив 
//?    і повертає рядок: 'Такий логін вже використовується!'
//?  - Якщо isLoginUnique поверне true, addLogin додає новий логін в logins 
//?    і повертає рядок: 'Логін успішно доданий!'
//? 🔔 Принцип єдиної відповідальності функції 
//?  — кожна функція робить щось одне. 
//? Це дозволяє перевикористати код і змінювати логіку роботи функції 
//? тільки в одному місці, не зачіпаючи роботу програми в цілому.
//? ❗️ ℹ️ ❓ Предикатні функції повертають тільки true або false. 
//?       Такі функції прийнято називати починаючи з is: 
//?       isLoginUnique і isLoginValid в нашому випадку.
//?        - isLoginUnique тільки перевіряє чи є такий логін в масиві і повертає true або false.
//?        - isLoginValid тільки перевіряє чи валідний логін і повертає true або false.
//? Не предикатна функція addLogin лише додає чи не додає логін в масив,
//? використовуючи, для перевірок умови додавання,
//? результати викликів інших предикатних функцій — isLoginUnique і isLoginValid. 
//! Код виконаного завдання
const logins = ["Rich", "UmaThurman"];

//! 1
function isLoginValid(login) {
    console.log("1.⏳ -> function isLoginValid(login)");
    console.log("login.length", login.length);
    if (login.length >= 4 && login.length <= 16) {
        return true;
    };
    console.log(". . . . . . . . . . . . . . .");
    return false;
};

//! 2
function isLoginUnique(allLogins, login) {
    console.log("2.⏱️ -> function isLoginUnique(allLogins, login)");
    console.log(". . . . . . . . . . . . . . .");
    return !(allLogins.includes(login));
};

//! 3
function addLogin(allLogins, login) {
    console.log("3.➕👨‍💼✔️ -> addLogin(allLogins, login)");

    if (!(isLoginValid(login))) {
        return "Помилка! Логін повинен бути від 4 до 16 символів.";
    };

    if (!(isLoginUnique(allLogins, login))) {
        return "Такий логін вже використовується!";
    };

    allLogins.push(login);
    console.log('logins:', logins);
    console.log(". . . . . . . . . . . . . . .");
    return "Логін успішно доданий!";
};





console.warn("1️⃣ - функція isLoginValid(login)");
console.log('isLoginValid("Dog"):', isLoginValid("Dog"));
console.log("--------------------------------------------");
console.log('isLoginValid("Rich"):', isLoginValid("Rich"));
console.log("--------------------------------------------");
console.log('isLoginValid("UmaThurman"):', isLoginValid("UmaThurman"));
console.log("--------------------------------------------");
console.log('isLoginValid("UmaKarunaThurman"):', isLoginValid("UmaKarunaThurman"));
console.log("--------------------------------------------");
console.log('isLoginValid("Uma_Karuna_Thurman"):', isLoginValid("Uma_Karuna_Thurman"));
console.log("*****************************************************************************************");

console.warn("2️⃣ - функція isLoginUnique(allLogins, login)");
console.log('isLoginUnique(logins, "UmaThurman"):', isLoginUnique(logins, "UmaThurman"));
console.log("--------------------------------------------");
console.log('isLoginUnique(logins, "HedyLamarr"):', isLoginUnique(logins, "HedyLamarr"));
console.log("*****************************************************************************************");

console.warn("3️⃣ - функція addLogin(allLogins, login)");
console.log('addLogin(logins, "Dog"):', addLogin(logins, "Dog"));
console.log("---------------------------------------------------------------------------");
console.log('addLogin(logins, "UmaThurman"):', addLogin(logins, "UmaThurman"));
console.log("---------------------------------------------------------------------------");
console.log('addLogin(logins, "HedyLamarr"):', addLogin(logins, "HedyLamarr"));
console.log("******************************************************************************");




//! Інлайн колбеки
console.warn("Інлайн колбеки:");
//? Якщо колбек-функція - маленька,
//? і потрібна тільки для передачі аргументом,
//? її можна оголосити безпосередньо
//? на момент виклику функції,
//? в яку передаємо колбек.
//? Така функція буде доступна тільки
//? у якості значення параметра і більше ніде в коді.

function greet2(nameGreet2) {
    console.log(`Ласкаво просимо ${nameGreet2}.`);
}

function notify2(nameNotify2) {
        console.log(`Шановний(а) ${nameNotify2}, ваш номер буде готовий за 30 хвилин.`);
    };

function registerGuest2(name, callback) {
    console.log(`Реєструємо гостя ${name}.`);
    callback(name);
    // function greet2(nameGreet2) {
    //     console.log(`Ласкаво просимо ${nameGreet2}.`);
    // }
    // greet2(name)
    // notify2(name)
}; 
// registerGuest2("Манго")

//todo: Передаємо інлайн функцію greet2 у якості колбека:
// registerGuest2(
//     "Манго",
//     function greet2(nameGreet2) {
//         console.log(`Ласкаво просимо ${nameGreet2}.`);
//     }
// );

//todo: Передаємо інлайн функцію notify2 у якості колбека:
registerGuest2("Манго", function notify2(nameNotify2) {
    console.log(`Шановний(а) ${nameNotify2}, ваш номер буде готовий за 30 хвилин.`);
});
console.log("-------------------------------------------------------");



