//! Функція з побічними ефектами
console.warn("Функція з побічними ефектами:")
//? ✴️ Функція з побічними ефектами - це функція,
//? яка в процесі виконання може змінювати
//? або використовувати глобальні змінні,
//? змінювати значення аргументів посилального типу,
//? виконувати операції введення-виведення тощо.
//? ✳️ Функція dirtyMultiply(array, value) множить 
//? кожен елемент масиву array на число value. 
//? Вона змінює (мутує) вихідний масив за посиланням.
const dirtyMultiply = (array, value) => {
    for (let i = 0; i < array.length; i += 1) {
        array[i] = array[i] * value;
    };
};

const numbers = [1, 2, 3, 4, 5];
console.log("numbers_before:", numbers); //! [1, 2, 3, 4, 5]

dirtyMultiply(numbers, 2);

//todo: Відбулася мутація вихідних даних - масиву numbers:
console.log("numbers_after:", numbers); //! [2, 4, 6, 8, 10]
console.log(". . . . . . . . . . . . . . . . . . . .");




//! Чиста функція
console.warn("Чиста функція:");
//? ✴️ Чиста функція (pure function) - це функція,
//? результат якої залежить тільки від
//? значень переданих аргументів.
//? За умови однакових аргументів вона
//? завжди повертає один і той самий результат
//? і не має побічних ефектів,
//? тобто не змінює значення аргументів.
//? ✳️ Напишемо реалізацію чистої функції 
//? множення елементів масиву, 
//? що повертає новий масив, не змінюючи вихідний.
const pureMultiply = (array, value) => {
    const newArray1 = [];
    const newArray2 = [];

    //todo: var.1
    for (let i = 0; i < array.length; i += 1) {
        newArray1.push(array[i] * value);
    };

    //todo: var.2
    array.forEach(element => {
        newArray2.push(element * value);
    });

    // return newArray1;
    // return newArray2;
    return {
        newArray1,
        newArray2
    };
};

const numbers2 = [1, 2, 3, 4, 5];
console.log("numbers2_before:", numbers2); //! [1, 2, 3, 4, 5]

const doubledNumbers = pureMultiply(numbers2, 2);

//todo: Мутація вихідних даних - масиву numbers2 не відбулася:
console.log("numbers2_after:", numbers2); //! [1, 2, 3, 4, 5]

//todo: Функція повернула новий масив зі зміненими даними:
console.log("doubledNumbers:", doubledNumbers); //! [2, 4, 6, 8, 10]
console.log("---------------------------------------");



//! 3.Перебираючі методи
//? ✴️ В JavaScript є методи масивів,
//? що прийшли з функціональних мов.
//? Більшість з них - це чисті функції.
//? Вони створюють новий масив, заповнюють його,
//? застосовуючи до значення кожного елемента
//? зазначену колбек-функцію,
//? після чого повертають цей новий масив.
//? ✳️ Усі перебираючі методи масивів мають схожий синтаксис.
//? Вихідний масив array,
//? виклик методу method
//? і callback-функція callback як аргумент методу.
console.log(
    `%c
    масив.method(callback[currentValue, index, array]);
    `,
    'color: red; font-size: 20px',
);

//? ✴️ У більшості методів аргументами callback-функції є:
//? 🔹 значення елемента  currentValue (перший параметр),
//? 🔹 позиція елемента index (другий параметр)
//? 🔹 і сам вихідний масив array (третій параметр).
console.log(
    `%c
    масив.method((item, idx, arr) => {
        // логіка, яка буде застосовуватися на кожній ітерації
    });
    `,
    'color: blue; font-size: 20px',
);

//? ✳️ Всі параметри, крім значення елемента item, - необов'язкові. 
//? Назви параметрів можуть бути будь-які, 
//? але є неофіційні домовленості.
console.log(
    `%c
    масив.method(item => {
        // логіка, яка буде застосовуватися на кожній ітерації
    });
    `,
    'color: green; font-size: 20px',
);
console.log("---------------------------------------------------------------------------------------------------------");



console.log(
    '%c 4.Метод forEach. ',
    'color: white; background-color: #D33F49',
);

//! 4.Метод forEach
console.warn("Синтаксис методу forEach:");
//? ✴️ Метод перебирання масиву,
//? який використовується для заміни циклів
//? for і for...of в роботі з колекцією даних.
//? 🔸 Поелементно перебирає масив.
//? 🔸 Викликає колбек-функцію для кожного елемента масиву.
//? 🔸 Нічого не повертає.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.forEach(function callback(element, index, array) {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);


//? ✳️ Можна оголошувати тільки необхідні параметри,
//? найчастіше - це елемент, головне не забувати про їх порядок.
const numbers11 = [5, 10, 15, 20, 25];
console.log("numbers11:", numbers11);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");

console.warn("Функціональний forEach:");
//todo: Функціональний forEach:
numbers11.forEach(num => console.log(num));
console.log(". . . . . . . . . . . .");

console.warn("Перебирання за допомогою Класичного for:");
//todo: Перебирання за допомогою Класичного for:
for (let i = 0; i < numbers11.length; i += 1) {
    console.log(`Індекс: ${i}, значення: ${numbers11[i]}`);
};
console.log(". . . . . . . . . . . .");

console.warn("Метод перебирання forEach (var.1):");
//todo: Метод перебирання forEach (var.1):
numbers11.forEach(function (number, index) {
    console.log(`Індекс: ${index}, значення: ${number}`);
});
console.log(". . . . . . . . . . . .");

console.warn("Метод перебирання forEach (var.2):");
//todo: Метод перебирання forEach (var.2):
numbers11.forEach((num, idx) => console.log(`index: ${idx}, value: ${num}`));
console.log("------------------------");

//? ❗️ Єдиним випадком, коли варто використовувати
//? цикли for або for...of для перебирання масиву,
//? - це задачі з перериванням виконання циклу.
//? ❗️❗️❗️ Перервати виконання методу forEach не можна,
//? він завжди перебирає масив до кінця.



//! Метод map()
console.warn("Синтаксис методу map():");
//? ✴️ Метод map(callback) використовується
//? для трансформації масиву.
//? Він викликає колбек-функцію
//? для кожного елемента вихідного масиву,
//? а результат її роботи записує у новий масив,
//? який і буде результатом виконання методу.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Результат роботи колбек-функції записується у новий масив.
//? 🔸 Повертає новий масив однакової довжини.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.map((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода map():");
//? ✳️ Його можна використовувати для того,
//? щоб змінити кожен елемент масиву.
//? Оригінальний масив використовується як еталон,
//? на основі якого можна зробити іншу колекцію.
const planets = ["Земля", "Марс", "Венера", "Юпітер"];
console.log("planets_before:", planets); //! ['Земля', 'Марс', 'Венера', 'Юпітер']

const planetsInUpperCase = planets.map(planet => planet.toUpperCase());
console.log("planetsInUpperCase:", planetsInUpperCase); //! ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПІТЕР']

const planetsInLowerCase = planets.map(planet => planet.toLowerCase());
console.log("planetsInLowerCase:", planetsInLowerCase); //! ['земля', 'марс', 'венера', 'юпітер']

//todo: Оригінальний масив не змінився:
console.log("planets_after:", planets); //! ['Земля', 'Марс', 'Венера', 'Юпітер']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✳️ Ми вже знаємо, що повсякденне завдання
//? - це маніпуляція масивом об'єктів.
//? Наприклад, отримати масив значень властивості 
//? з усіх об'єктів. 
//? У нас є масив студентів, 
//? а потрібно отримати окремий масив їхніх імен.
const students1 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
];
console.log("students1:", students1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const names = students1.map(student => student.name);
console.log("names:", names); //! ['Манго', 'Полі', 'Аякс', 'Ківі', 'Х'юстон']
console.log("------------------------------------------------------------------");

const airCraft = [
    {
        "id": "0004",
        "aircraftType": "plane",
        "name": {
            "brief": "A-10",
            "full": "Fairchild-Republic A-10 Thunderbolt II",
            "nickname": "Бородавочник («Warthog»)"
        },
        "info": {
            "year": 1976,
            "country": "США",
            "type": "Штурмовик",
            "price": "$18,8 млн",
            "description": "Одномісний дводвигуновий штурмовик, призначений для надання безпосередньої підтримки сухопутних військ, ураження танків, бронемашин та інших наземних цілей"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Fairchild_Republic_A-10_Thunderbolt_II",
            "main": "https://upload.wikimedia.org/wikipedia/commons/8/8d/USAF_A-10_Thunderbolt_II_after_taking_on_fuel_over_Afghanistan.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNHIIMUhJ_Aaep26EjuzzY6weX6Jg-vGVpL_62tWD9Ue-RxQR77-893d0qfKlohj8kvaSC7L72pMCJw9WkO4y2delL3l58a2oeNHR8cYpCnkxJzryZ9USP7bZN_F5cVNe-7UmhmFC_xX2_SaEZhLMud=w1359-h1437-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1975-01-01T00:00:00",
            "end": "1984-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "dark": 750,
                "green": 780
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/a-10-dark-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/a-10-green-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/a-10-green-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/a-10-green+dark-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0011",
        "aircraftType": "helicopter",
        "name": {
            "brief": "EC-665",
            "full": "Eurocopter EC665 Tiger",
            "nickname": "Тигр («Tiger»)"
        },
        "info": {
            "year": 1991,
            "country": "Франція, Німеччина",
            "type": "Ударний вертоліт",
            "price": "$39 млн",
            "description": "Чотирилопатний, двомоторний ударний вертоліт, який має відзнаку першого повністю композитного вертольота, такі як «скляна кабіна», технології малопомітності та висока маневровість для підвищення живучості"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Eurocopter_Tiger",
            "main": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Eurocopter_EC_655_Tigre._Festival_A%C3%A9reo_Internacional_De_Gij%C3%B3n._Gij%C3%B3n_2016._%2827900053383%29_%28cropped%29.jpg/1920px-Eurocopter_EC_655_Tigre._Festival_A%C3%A9reo_Internacional_De_Gij%C3%B3n._Gij%C3%B3n_2016._%2827900053383%29_%28cropped%29.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczPiy9v8KfUC_t5tRJrspcxBwYn51NwPkDONZ7YqnKCdnXQU_RLRMFuMTDvSeLw7H8L85J_sThjTBQ425WFvUmcihoxOt7BGmDKbyRcQDFfWYC5ywTQp6spBMyV9k9xDftkW98a1i2qu9zCRcvrkYxpj=w1319-h1315-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1991-01-01T00:00:00",
            "end": "now"
        },
        "model": {
            "colorsPrice": {
                "main": 670
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0010",
        "aircraftType": "plane",
        "name": {
            "brief": "F-14",
            "full": "Grumman F-14 Tomcat",
            "nickname": "Котяра, Ловелас («Tomcat»)"
        },
        "info": {
            "year": 1970,
            "country": "США",
            "type": "Палубний винищувач-перехоплювач",
            "price": "$60–70 млн",
            "description": "Двомісний реактивний палубний винищувач-перехоплювач четвертого покоління з крилом змінної стріловидності, здатний завоювати повну повітряну перевагу в безпосередній близькості від авіанесучих кораблів, з яких передбачалося використовувати ці літаки, а також повинен був бути здатний завдавати ударів по тактичним наземним і надводним цілям"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Grumman_F-14_Tomcat",
            "main": "https://upload.wikimedia.org/wikipedia/commons/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNyRJlWO2ki4tSpbCXhowMOcD6DCnUOqdDbrrMuObFy8W7mv6uKdL8K_HUO2N7OlNQaN2U5BDQTuatfMaaVjuhD9s9rJYSCq_tZQAxaQ-ydFSJ8EwF8rPsFPoZvJXyI60CKHc_YSo4y17xUPf0yiSr_=w913-h847-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1974-01-01T00:00:00",
            "end": "1992-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "white": 830,
                "black": 850,
                "desert": "_900"
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/f-14-white-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f-14-black-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f-14-white+black-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f-14-white-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0001",
        "aircraftType": "plane",
        "name": {
            "brief": "F4U",
            "full": "Chance Vought F4U Corsair",
            "nickname": "Корсар («Corsair»)"
        },
        "info": {
            "year": 1940,
            "country": "США",
            "type": "Палубний винищувач-бомбардувальник",
            "price": "$75000, (20,2 мільйони фунтів стерлінгів)",
            "description": "Винищувач відмінно зарекомендував себе в ході бойових дій, перебував на озброєнні американської палубної авіації, в морській піхоті, а також у флотах Великої Британії, Нової Зеландії, Франції та інших країнах світу. Деякі японські пілоти вважали його найпотужнішим винищувачем Другої світової війни, а експерти американських ВМС підрахували співвідношення бойових втрат у повітряних боях за участю «Корсарів», як 11:1 на користь останнього"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Chance_Vought_F4U_Corsair",
            "main": "https://upload.wikimedia.org/wikipedia/commons/6/66/Vought_F4U_Corsair_%28USMC%29.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNh-CpdG_a_fuuSMlc9VCN7ShubGyMaFx52L4FclMvqYWeuC99keF6BY8Wy5KTY1Tfqf0Q9Pa8LRYtV4ihBl5Un2hRhdm0yqIpu6RmKUVSXNqcipmN-iuBpIYlHtdP9vIiZEnvhs34g4B623cFbalwF=w1354-h938-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1940-01-01T00:00:00",
            "end": "1952-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "silver": 540,
                "darkGreen": 580,
                "blue": 0,
                "navyBlue": 0,
                "darkGrey": 0,
                "white": 0
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-4.jpg"
            ],
            "actualFullImages": [
                "https://lh3.googleusercontent.com/pw/AP1GczOPkbQOQaJ-OXoP8Vi0VWXbomtAYgnpeUR5r8m4QP896B7WW0e0zq2BQt32wMTAyUCkgWhF3nWEIdBJsEwFOQsIpwnuxOFR_hkxUKgqg3lBuZTE-PqoZMxf3RV6uPOQM9DtP_JE6v3Wjm4yraP4IS9z=w2450-h1838-s-no-gm?authuser=0",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-02.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-03.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-04.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-05.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-06.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-07.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-08.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-09.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-10.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-11.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-12.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-13.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-14.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-15.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-16.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-17.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-18.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-19.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-20.jpg"
            ],
            "_actualFullImages": [
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-01.jpg",
                "https://lh3.googleusercontent.com/pw/AP1GczPL7iT8Y--wf0kFsl_BQY_fmBdQlBDuAxX7L9Joqz6NIHKhXgy7ztuuYzvdvdV7N92JCjGUmKabv8YAKs5JqwcXQVXowzcGLB_WAjLzFCFiZszDr9j35ZcaY2wc-Bs7cwTGEw0cJP5cn-FMB78XJl7a=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczM9ypcpGR_MLEyw2Qp8BXdHg4gLcZIScyHfT6Qbj49T8ShyEsOYdE_CDeTxYiQLd_pPn0oDZ-P41uaiXQkQNCagQ2MgDS3hBdvtT_MNlw2kKjsdobK9qPQyKy_AGLnQ5r6h43k0wJANB4q3Lkc96Ww7=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOwnujmmCo45CUKTOEtOGe-8QsXtcvz8SQoNTFt3H6BU8waWfo2dfBxsDJkB6_mEqABFh-vboKxNF6baHSojhHIGQtWi9S-GFAQWvpLu5eqs9epkQT_hmvZCFMUwSm-VDSx9B80E5BQp2Oe6pZkxx3E=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNiYKXkmL344a7bUji7lt-VOIfnHXijtFXEM-OH-99J_VoondrwarixVDkLVGRMx73xRGR64UEIxQLI2_-ZgBhRk15wZN8PuT61dCxv29A-5Ldqlkzhi4WuLKkIikuzc7YP4WlaQ96f6uqN3-pqrchY=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPFX54roZdFTRxMOj5ketM8vNdPs5_4gq3ZbQ2pxcFvfdjNuby3Sqeew32KiHhvhtHsOq-V76q3Mk7phfpmrkDNVfCGbPra0eRUWhkTCadcz0n4sSvdnEFxbIvIG9DfL9rUeqYPRWFSRENxHdo54c2n=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOIiUigCgTa6C5x9CqQ0Btl9LVBqkl67Ugg5iUHwqbSk31pMOqSK_5qFbs6_7W0Padof1_DqoEZrTGOg0zVfw4Rs9UDmacA5VuSACn2TTDPENy8MlPo6gWeGNW0fnMDKxaXARUuPgfn4YT8ZHlBMYWu=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMCZQ7c8mvMkk66uKCsCRYcYsUwOf0eDIFOiS4qIp7u3BVrXZoTVCXB7Q_cGuHxAJHejvvy1ZUcYE9O9hdzIheJ9bfbHtqq3yTWWK0ZPavuRrR5PigcOdxYESHki_tp4SvpUNtQZhqr4I1Vg9ayLvrq=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNKHLZyqA-CIJBQcn1zqlneHFKbBZsL9l8sRRoIu3kWwZrD1C8-H0-VJj24EKd9T79td1oA5OGGBmS9U79UEx5_kI-4FzLHFtaKW2toSYKkXNY_dZM4ik6xIhpNu9ZwelY55HD_4KaXgCKIUzvilLyu=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPhIamqkXRcXq0fwM-F0dYdY-GsrYy5aRs-LFIVOqFnhQUQU1AoPaX4VJoJErn7Op6dzh6jssStYapW3U0jVYQErJkfRPNujBlq7wPqgmLT8FvEoKPdEa9EAN_V8F50dVg7mlGguoS3F3QsstLqd-iD=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPD0RQXqFluYapoDw_h3MpCsM4--BF7OPoOmUR9MkK1bHm1uEf_cN2BDiLD1dPmugTbfTKEnRrZcr9BlvL5hHDt34bxViEJ-R89etkYPMolByEdfItU5Dq_NSeXktfmWVPf1_81UN8hCOSsqXQ4COxw=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczO4bHgQ8Wy6TCIf3R5EGY5mwbLPh_EPpA9g34KaGvtUMbNCf0fx2AgXGxoBasVLBn-Nf6AiY0DZooMzZq0Hv0xj4eulqjnisVvxvb98oH8t-yfxScnVK5VV7ZZwRqxZ5dhlENp-3IG7NRF_UYBkfS9j=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczM-oY1mL5uBeaMObpXtiEAi3SapYxYFrYvIPQWDWYKp6U6LVzSmRLFPQO2x9spPgjAHl8bTgy7bLS8kiGy7SkngLLdX3gZBV-kq_PCwwSlQH2mzBvhC9fves6jgLyyLou7ogcd4P0EoxskHMfY5IbBf=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczO16V9sRN95Tx7IveYarAb8SKowFIbRWInU6x6HBEA935iXiN_H_OnCNdFSuhSKZrPGHx9V57jF1b0mv0HMk4HhYUhZSdJtfpj2wThVtBHVjf0MryjbFNAfp_QJD0JtPz3oKDh-vq6RA2D12tgnKCSG=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNgz9Flb01mZJfJ_tMboudLIMQzF2N9SVSswwTqQR7YOzsuiCxxdvNO-6umAsf4EFayYUS_-4EMxwyOltafH2TjAG23yE_493wbv4_zTSbFPm4iaKuAqOaxZ4pZxq-jnp4vQvvyUwHh3izZdH0GqkoL=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNlU8fc6iBCf2pZdBQL7PWMYDoTSVGvKJYDTs9RXMDG05-_zzmCxOIPalOiMbnmnhyuL2rI1VS9_Wi_qNiw_yHX7CHxA2VrHGON5BlfM6hDi7tLXBpELKg4IIYo4g_xpzXF08BADxI0ePWn8CvJPKTo=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOTY_dKWbbD6lDtITWCM2ixLN1fI1SAGGE1gw1o-I_d3cFp22dpeQTWNIa6Y9Wg7UCxnte7FveeGKVuuLvU5ooYjt3nNZEobLey4NRS0X19LLDbgoPQ_Fuhua1DLdGUneCgnhsVmLCaj4MnNpLz73vQ=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczN8E1OlGJk8x6yvTojUkp-djyF7mYkPfzC7-lh8c7G1aOe7IYJYUOasO_yjE2Hv9TVv-Lce67aHs8_GH5S6BXoT28DQ3DlDw0x2HTdtkGtxmZbpo828UMRzwnZJrfIz8f3QrR1TWLO9xzUSBqK88YWO=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPxkzN9zSoT3A-rNngwquXtuXWq-UB0pkzyW3EYhUggSVm8wIWWZ4fsNJ4Wgooo1-6lenIjejGHX6yER63Aai6G7w-k0xvXDbCndK-HlxLiE3DH7YEax5M7rO8qoJpHTzEJ6yHzPTm0Q9Pv_-xgggB-=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczN6YOBBF_Bhh5sXz4yoGnpc6gxVsXvL5zu__jsgNUNsHvuYMVvNcWsDx-JnMsfZOyE3fTgxNXwuHqQDLiRuR4mNRHNMrmphdP5sPTTZ37HL3F-8crxNbBQRXwTeuEqQ856_4u7d1DoNqNAu6kCfOVv1=w2450-h1838-s-no-gm?authuser=0"
            ],
            "_actualFullImages_none": [
                "https://photos.fife.usercontent.google.com/pw/AP1GczNHb6oX_TXg7Htgp-nMi96FW5ZZlldN5KR_PdDT3e3Hm1ta0FUiot-o=w2450-h1838-s-no-gm?authuser=0",
                "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/preview",
                "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/view?usp=sharing",
                "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/view?usp=drive_link",
                "https://drive.google.com/file/d/1naBi6ZcMfplM2b62Jxoh7p3Wn5MvBNwV/view?usp=sharing",
                "https://drive.google.com/drive/folders/1FrWCDHIzbj8ADx5LykHr1uwrSKc1m_cX"
            ]
        }
    },
    {
        "id": "0013",
        "aircraftType": "biplane",
        "name": {
            "brief": "O2U",
            "full": "Vought O2U Corsair",
            "nickname": "Воут Корсар («Vought Corsair»), Ленин («列宁号»)"
        },
        "info": {
            "year": 1926,
            "country": "США",
            "type": "Біплан-розвідник, корабельний розвідник, легкий ударний літак, зв'язковий та навчальний літак, патрульний літак",
            "price": "$15000 — 16000",
            "description": "Палубний біплан-розвідник та літак спостереження 1920-х років. В 1930 став першим літаком Червоної армії Китаю з назвою «Ленін» і використовувався для розвідки, розкидання листівок і бомбардувань урядових військ. Одним із найвідоміших епізодів стало бомбардування позицій Гоміньдану в Хуан'яні в 1931 році"
        },
        "url": {
            "wikipedia": "https://en.wikipedia.org/wiki/Vought_O2U_Corsair",
            "main": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Vought_O2U.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNiPFosEO9ESpvC-kJru1VOYYYhMIxHym3j_PhATKDCghvYMpYqGmuWr1OcG97jJTQjFx2JcyUN5H0qej6gpl3lVlkb0rqymMgDDWsRimNcBGBc08CFAxR8dACwmW-fGhyt99_IktgF33lI9RP_IlaL=w1309-h1222-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1927-01-01T00:00:00",
            "end": "1930-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "skyBlue": 1040,
                "grey": 0,
                "yellowGreen": 0,
                "yellowGreenWhite": "_1060"
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-4.jpg"
            ]
        }
    }
]


const briefs = airCraft.map(element => {
    console.log("element.name.brief:", element.name.brief)
    return element.name.brief  
})

console.log("briefs:", briefs)


//! Метод flatMap()
console.warn("Синтаксис методу flatMap():");
//? ✴️ Метод flatMap(callback)
//? - аналогічний методу map(),
//? але застосовується у випадках,
//? коли результат - це багатовимірний масив,
//? який необхідно «розгладити»,
//? тобто він розгортає вкладені масиви на один рівень
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Результат роботи колбек-функції записується у новий масив.
//? 🔸 Повертає новий розгладжений масив,
//?    який «розгладжується» на глибину,
//?    що дорівнює одиниці (одна вкладеність).
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.flatMap((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода flatMap():");
const students2 = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"] },
    { name: "Ківі", courses: ["фізика", "біологія"] },
];
console.log("students2:", students2);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const coursesByMap = students2.map(student => student.courses);
console.log("coursesByMap:", coursesByMap); //! [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']]

const coursesByFlatMap = students2.flatMap(student => student.courses);
console.log("coursesByFlatMap:", coursesByFlatMap); //! ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log("------------------------------------------------------------------");



const actualImages = airCraft.flatMap(element => element.model.actualImages)

console.log("actualImages:", actualImages)


//! 6.Метод filter()
console.warn("Синтаксис методу filter():");
//? ✴️ Метод filter(callback) використовується
//? для єдиної операції - фільтрації масиву,
//? тобто, коли необхідно вибрати
//? більше одного елемента з колекції за певним критерієм.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає новий масив.
//? 🔸 Додає у масив, що повертається, елементи,
//?    які задовольняють умови колбек-функції.
//? 🔸 Якщо колбек повернув true,
//?    елемент додається у масив, що повертається.
//? 🔸 Якщо колбек повернув false,
//?    елемент не додається у масив, що повертається.
//? 🔸 Якщо жоден елемент не задовольнив умову,
//?     повертає порожній масив.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.filter((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода filter():");
//? ✳️ Метод filter() викликає колбек-функцію
//? для кожного елемента вихідного масиву і,
//? якщо результат її виконання - true,
//? додає поточний елемент у новий масив.
const values = [51, -3, 27, 21, -68, 42, -37];
console.log("values_before:", values); //! [51, -3, 27, 21, -68, 42, -37]

const positiveValues = values.filter(value => value >= 0);
console.log("positiveValues:", positiveValues); //! [51, 27, 21, 42]

const negativeValues = values.filter(value => value < 0);
console.log("negativeValues:", negativeValues); //! [-3, -68, -37]

const bigValues = values.filter(value => value > 1000);
console.log("bigValues:", bigValues); //! []

//todo: Оригінальний масив не змінився:
console.log("values_after:", values); //! [51, -3, 27, 21, -68, 42, -37]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");



const plane = airCraft.filter(element => {
    const result = element.aircraftType === "plane"
    console.log("result:", result)
    console.log("element:", element)
     
    return result
})
console.log("plane:", plane)

const biplane = airCraft.filter(element => element.aircraftType === "biplane")
console.log("biplane:", biplane)


const helicopter = airCraft.filter(element => element.aircraftType === "helicopter")
console.log("helicopter:", helicopter)



//! Фільтрація унікальних елементів​
console.warn("Фільтрація унікальних елементів:");
//? ✴️ Використовуючи метод filter(),
//? можна виконати фільтрацію масиву таким чином,
//? що у ньому залишаться тільки унікальні елементи.
//? Цей прийом працює тільки
//? з масивом примітивних значень - не з об'єктами.
//? ✳️ Повернемося до групи студентів
//? і масиву усіх відвідуваних предметів,
//? які ми отримали методом flatMap().
const students = [
    { name: "Манго", courses: ["математика", "фізика"] },
    { name: "Полі", courses: ["інформатика", "математика"] },
    { name: "Ківі", courses: ["фізика", "біологія"] },
    { name: "Полі2", courses: ["інформатика", "математика"] },
];
console.log("students:", students);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const allCoursesByMap = students.map(student => student.courses); // ❌
console.log("allCoursesByMap:", allCoursesByMap); //! [['математика', 'фізика'], ['інформатика', 'математика'], ['фізика', 'біологія']];

const allCourses = students.flatMap(student => student.courses); // ✅
console.log("allCourses:", allCourses); //! ['математика', 'фізика', 'інформатика', 'математика', 'фізика', 'біологія'];
console.log("INDEX:", allCourses.indexOf("фізика"))
//? ✳️ У змінній allCourses зберігається
//? масив усіх відвідуваних предметів,
//? які можуть повторюватися.
//? Завдання полягає у тому,
//? щоб створити новий масив,
//? в якому будуть тільки унікальні предмети,
//? тобто без повторень.
//? ❓❓❓ ЯК ЦЕ ПРАЦЮЄ:
//? 🟡 Для елемента 'математика' під індексом 0:
//?    ⏩ indexOf() поверне 0, тому що шукає перший збіг
//?    ⏩ Значення параметра index буде 0
//?    🟩 Вони рівні, а отже, це унікальний елемент
//? 🟡 Для елемента 'математика' під індексом 3:
//?    ⏩ indexOf() поверне 0, тому що шукає перший збіг
//?    ⏩ Значення параметра index буде 3
//?    🟥 Вони не рівні, а отже, це повторюваний - не унікальний елемент.
const uniqueCourses = allCourses.filter(
    (course, index, array) => array.indexOf(course) === index
);
console.log("Масив унікальних курсів:", uniqueCourses); //! ['математика', 'фізика', 'інформатика', 'біологія']
console.log("----------------------------------------------------------------------------------------------");



//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✴️ Під час роботи з масивом об'єктів виконується
//? фільтрація за значенням певної властивості.
//? У підсумку, утворюється новий масив відфільтрованих об'єктів.
//? ✳️ Наприклад, у нас є масив студентів з балами за тест.
//? Необхідно відфільтрувати:
//?  - кращих(бал вище 80),
//?  - середніх студентів(бал від 50 до 80) і,
//?  - гірших(бал нижче 50).
const LOW_SCORE = 50;
const HIGH_SCORE = 80;
const disciples = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
];
console.log("disciples:", disciples);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const best = disciples.filter(student => student.score >= HIGH_SCORE);
console.log("Кращі учні:", best); //! Масив об'єктів з іменами Манго і Ківі

//todo: В колбек-функції зручно деструктуризувати властивості об'єкта:
const average = disciples.filter(
    ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
);
console.log("Середні учні:", average); //! Масив об'єктів з іменами Полі і Х'юстон

// const worst = disciples.filter(student => student.score < LOW_SCORE);
const worst = disciples.filter(
    ({ score }) => score < LOW_SCORE
)
console.log("Гірші учні:", worst); //! Масив з одним об'єктом Аякс
console.log("----------------------------------------------------------------------------------------------");

// отримати масив назв літаків рік випуску яких до 1940 включно і рік випуску яких після 1940 року

const before = airCraft.filter(names => names.info.year <= 1940)

const lastBefore = before.map(item => item.name.brief)

console.log("lastBefore:", lastBefore)

console.log("before:", before)




//! Метод find()
console.warn("Синтаксис методу find():");
//? ✴️ Якщо метод filter(callback) використовується
//? для пошуку всіх елементів, що задовольняють умову,
//? то метод find(callback) дозволяє
//? знайти і повернути перший відповідний елемент,
//? після чого перебирання масиву припиняється.
//? Тобто він шукає до першого збігу.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає перший елемент, що задовольняє умову,
//?    тобто коли колбек повертає true.
//? 🔸 Якщо жоден елемент не задовольнив умову, 
//?    тобто для всіх елементів колбек повернув false, 
//?    метод повертає undefined.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.find((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода find():");
//? ✴️ Метод find() використовується для одного завдання
//? - пошуку елемента за унікальним значенням властивості.
//? ✳️ Наприклад, 
//? пошук користувача за поштою, 
//? автомобіля - за серійним номером, 
//? книги - за назвою тощо.
const colorPickerOptions1 = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
];
console.log("colorPickerOptions1:", colorPickerOptions1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log('Пошук за позначкою "blue:"', colorPickerOptions1.find(option => option.label === "blue")); //! { label: 'blue', color: '#2196F3' }
console.log('Пошук за позначкою "pink:"', colorPickerOptions1.find(option => option.label === "pink")); //! { label: 'pink', color: '#E91E63' }
console.log('Пошук за позначкою "white:"', colorPickerOptions1.find(option => option.label === "white")); //! undefined
console.log("-------------------------------------------------------------------------");


const resultName1 = airCraft.find(element => element.name.brief === "A-10")
console.log("resultName1:", resultName1)

// знайти ім'я(це властивість brief) літака прізвисько якого(це властивість nickname) було  vought
const findSymbols = "vought"
// 1. створюємо новий масив за допомогою  map із всіма значеннями nickname
const newArray3 = airCraft.map(element => {
   return element.name.nickname
 })
console.log("newArray3:", newArray3)

// 2. знаходимо елемент який містить значення vought за допомогою перебиючого методу
//  і на кожній ітерації задати собі питання
//  чи мітить цей елемент послідовність символів vought 
const findElement = newArray3.find(element => element.toLowerCase().includes(findSymbols.toLowerCase()))
// const findElement = "Воут Корсар («Vought Corsair»), Ленин («列宁号»)"
console.log("findElement:", findElement)
// 3. знаходимо об'єкт який містить повну назву властивості nickname
const findObject = airCraft.find(element => element.name.nickname === findElement)
console.log("findObject:", findObject)
// 4. знаходимо ім'я літака в (властивості brief)
const findName = findObject.name.brief
// const findName = findObject.filter(element => element.name.brief)
console.log("findName:", findName)

// ДЗ знайти краще рішення вирішення цієї задачі

// const resultNikname2 = airCraft.find(element => element.name.nickname !== "vought")

// console.log("result.Nikname2:", resultNikname2)
// console.log("airCraft:", airCraft[0].name.nickname !== "vought")


const resultNikname3 = airCraft.find(element => element.name.nickname.toLowerCase().includes(findSymbols.toLowerCase()))
console.log("result.Nikname3:", resultNikname3)
console.log("resultNikname3.name.brief:", resultNikname3.name.brief)




// {
//     "id": "0004",
//         "aircraftType": "plane",
//             "name": {
//         "brief": "A-10",
//             "full": "Fairchild-Republic A-10 Thunderbolt II",
//                 "nickname": "Бородавочник («Warthog»)"
//     },
//     "info": {
//         "year": 1976,
//             "country": "США",
//                 "type": "Штурмовик",
//                     "price": "$18,8 млн",
//                         "description": "Одномісний дводвигуновий штурмовик, призначений для надання безпосередньої підтримки сухопутних військ, ураження танків, бронемашин та інших наземних цілей"
//     },
//     "url": {
//         "wikipedia": "https://ru.wikipedia.org/wiki/Fairchild_Republic_A-10_Thunderbolt_II",
//             "main": "https://upload.wikimedia.org/wikipedia/commons/8/8d/USAF_A-10_Thunderbolt_II_after_taking_on_fuel_over_Afghanistan.jpg",
//                 "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNHIIMUhJ_Aaep26EjuzzY6weX6Jg-vGVpL_62tWD9Ue-RxQR77-893d0qfKlohj8kvaSC7L72pMCJw9WkO4y2delL3l58a2oeNHR8cYpCnkxJzryZ9USP7bZN_F5cVNe-7UmhmFC_xX2_SaEZhLMud=w1359-h1437-s-no-gm?authuser=0"
//     },
//     "manufacturing": {
//         "start": "1975-01-01T00:00:00",
//             "end": "1984-01-01T00:00:00"
//     },
//     "model": {
//         "colorsPrice": {
//             "dark": 750,
//                 "green": 780
//         },
//         "actualImages": [
//             "/airplane-model-store3-state2/images/planes-actual/a-10-dark-comp-1.jpg",
//             "/airplane-model-store3-state2/images/planes-actual/a-10-green-comp-2.jpg",
//             "/airplane-model-store3-state2/images/planes-actual/a-10-green-comp-3.jpg",
//             "/airplane-model-store3-state2/images/planes-actual/a-10-green+dark-comp-4.jpg"
//         ]
//     }
// },



//! Метод findIndex()
console.warn("Синтаксис методу findIndex():");
//? ✴️ Метод findIndex(callback)
//? - це сучасна заміна методу indexOf().
//? Дозволяє виконувати пошук за складнішими умовами,
//? ніж просто рівність.
//? Використовується як для пошуку
//? у масиві примітивів, так і в масиві об'єктів.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає індекс першого елемента, що задовольняє умову,
//?    тобто коли колбек повертає true.
//? 🔸 Якщо жоден елемент не задовольнив умову,
//?    тобто для всіх елементів колбек повернув false,
//?    метод повертає -1.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.findIndex((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода findIndex():");
//? ✳️ Приклад-1:
const colorPickerOptions2 = [
    { label: "red", color: "#F44336" },
    { label: "green", color: "#4CAF50" },
    { label: "blue", color: "#2196F3" },
    { label: "pink", color: "#E91E63" },
    { label: "indigo", color: "#3F51B5" },
];
console.log("colorPickerOptions2:", colorPickerOptions2);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log('Індекс мітки "blue:"', colorPickerOptions2.findIndex(option => option.label === "blue")); //! 2
console.log('Індекс мітки "pink:"', colorPickerOptions2.findIndex(option => option.label === "pink")); //! 3
console.log('Індекс мітки "white:"', colorPickerOptions2.findIndex(option => option.label === "white")); //! -1
console.log("-------------------------------------------------------------------------");


const aircrafts = [
    {
        "id": "0001",
        "aircraftType": "plane",
        "name": {
            "brief": "F4U",
            "full": "Chance Vought F4U Corsair",
            "nickname": "Корсар («Corsair»)"
        },
        "info": {
            "year": 1940,
            "countries": ["США"],
            "type": "Палубний винищувач-бомбардувальник",
            "price": 75000,
            "description": "Винищувач відмінно зарекомендував себе в ході бойових дій, перебував на озброєнні американської палубної авіації, в морській піхоті, а також у флотах Великої Британії, Нової Зеландії, Франції та інших країнах світу. Деякі японські пілоти вважали його найпотужнішим винищувачем Другої світової війни, а експерти американських ВМС підрахували співвідношення бойових втрат у повітряних боях за участю «Корсарів», як 11:1 на користь останнього"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Chance_Vought_F4U_Corsair",
            "main": "https://upload.wikimedia.org/wikipedia/commons/6/66/Vought_F4U_Corsair_%28USMC%29.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNh-CpdG_a_fuuSMlc9VCN7ShubGyMaFx52L4FclMvqYWeuC99keF6BY8Wy5KTY1Tfqf0Q9Pa8LRYtV4ihBl5Un2hRhdm0yqIpu6RmKUVSXNqcipmN-iuBpIYlHtdP9vIiZEnvhs34g4B623cFbalwF=w1354-h938-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1940-01-01T00:00:00",
            "end": "1952-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "silver": 540,
                "darkGreen": 580,
                "blue": 0,
                "navyBlue": 0,
                "darkGrey": 0,
                "white": 0
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f4u-comp-4.jpg"
            ],
            "actualFullImages": [
                "https://lh3.googleusercontent.com/pw/AP1GczOPkbQOQaJ-OXoP8Vi0VWXbomtAYgnpeUR5r8m4QP896B7WW0e0zq2BQt32wMTAyUCkgWhF3nWEIdBJsEwFOQsIpwnuxOFR_hkxUKgqg3lBuZTE-PqoZMxf3RV6uPOQM9DtP_JE6v3Wjm4yraP4IS9z=w2450-h1838-s-no-gm?authuser=0",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-02.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-03.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-04.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-05.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-06.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-07.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-08.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-09.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-10.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-11.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-12.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-13.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-14.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-15.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-16.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-17.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-18.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-19.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-20.jpg"
            ],
            "_actualFullImages": [
                "/airplane-model-store3-state2/images/planes-actual-full/f4u/f4u-full-01.jpg",
                "https://lh3.googleusercontent.com/pw/AP1GczPL7iT8Y--wf0kFsl_BQY_fmBdQlBDuAxX7L9Joqz6NIHKhXgy7ztuuYzvdvdV7N92JCjGUmKabv8YAKs5JqwcXQVXowzcGLB_WAjLzFCFiZszDr9j35ZcaY2wc-Bs7cwTGEw0cJP5cn-FMB78XJl7a=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczM9ypcpGR_MLEyw2Qp8BXdHg4gLcZIScyHfT6Qbj49T8ShyEsOYdE_CDeTxYiQLd_pPn0oDZ-P41uaiXQkQNCagQ2MgDS3hBdvtT_MNlw2kKjsdobK9qPQyKy_AGLnQ5r6h43k0wJANB4q3Lkc96Ww7=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOwnujmmCo45CUKTOEtOGe-8QsXtcvz8SQoNTFt3H6BU8waWfo2dfBxsDJkB6_mEqABFh-vboKxNF6baHSojhHIGQtWi9S-GFAQWvpLu5eqs9epkQT_hmvZCFMUwSm-VDSx9B80E5BQp2Oe6pZkxx3E=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNiYKXkmL344a7bUji7lt-VOIfnHXijtFXEM-OH-99J_VoondrwarixVDkLVGRMx73xRGR64UEIxQLI2_-ZgBhRk15wZN8PuT61dCxv29A-5Ldqlkzhi4WuLKkIikuzc7YP4WlaQ96f6uqN3-pqrchY=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPFX54roZdFTRxMOj5ketM8vNdPs5_4gq3ZbQ2pxcFvfdjNuby3Sqeew32KiHhvhtHsOq-V76q3Mk7phfpmrkDNVfCGbPra0eRUWhkTCadcz0n4sSvdnEFxbIvIG9DfL9rUeqYPRWFSRENxHdo54c2n=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOIiUigCgTa6C5x9CqQ0Btl9LVBqkl67Ugg5iUHwqbSk31pMOqSK_5qFbs6_7W0Padof1_DqoEZrTGOg0zVfw4Rs9UDmacA5VuSACn2TTDPENy8MlPo6gWeGNW0fnMDKxaXARUuPgfn4YT8ZHlBMYWu=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMCZQ7c8mvMkk66uKCsCRYcYsUwOf0eDIFOiS4qIp7u3BVrXZoTVCXB7Q_cGuHxAJHejvvy1ZUcYE9O9hdzIheJ9bfbHtqq3yTWWK0ZPavuRrR5PigcOdxYESHki_tp4SvpUNtQZhqr4I1Vg9ayLvrq=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNKHLZyqA-CIJBQcn1zqlneHFKbBZsL9l8sRRoIu3kWwZrD1C8-H0-VJj24EKd9T79td1oA5OGGBmS9U79UEx5_kI-4FzLHFtaKW2toSYKkXNY_dZM4ik6xIhpNu9ZwelY55HD_4KaXgCKIUzvilLyu=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPhIamqkXRcXq0fwM-F0dYdY-GsrYy5aRs-LFIVOqFnhQUQU1AoPaX4VJoJErn7Op6dzh6jssStYapW3U0jVYQErJkfRPNujBlq7wPqgmLT8FvEoKPdEa9EAN_V8F50dVg7mlGguoS3F3QsstLqd-iD=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPD0RQXqFluYapoDw_h3MpCsM4--BF7OPoOmUR9MkK1bHm1uEf_cN2BDiLD1dPmugTbfTKEnRrZcr9BlvL5hHDt34bxViEJ-R89etkYPMolByEdfItU5Dq_NSeXktfmWVPf1_81UN8hCOSsqXQ4COxw=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczO4bHgQ8Wy6TCIf3R5EGY5mwbLPh_EPpA9g34KaGvtUMbNCf0fx2AgXGxoBasVLBn-Nf6AiY0DZooMzZq0Hv0xj4eulqjnisVvxvb98oH8t-yfxScnVK5VV7ZZwRqxZ5dhlENp-3IG7NRF_UYBkfS9j=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczM-oY1mL5uBeaMObpXtiEAi3SapYxYFrYvIPQWDWYKp6U6LVzSmRLFPQO2x9spPgjAHl8bTgy7bLS8kiGy7SkngLLdX3gZBV-kq_PCwwSlQH2mzBvhC9fves6jgLyyLou7ogcd4P0EoxskHMfY5IbBf=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczO16V9sRN95Tx7IveYarAb8SKowFIbRWInU6x6HBEA935iXiN_H_OnCNdFSuhSKZrPGHx9V57jF1b0mv0HMk4HhYUhZSdJtfpj2wThVtBHVjf0MryjbFNAfp_QJD0JtPz3oKDh-vq6RA2D12tgnKCSG=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNgz9Flb01mZJfJ_tMboudLIMQzF2N9SVSswwTqQR7YOzsuiCxxdvNO-6umAsf4EFayYUS_-4EMxwyOltafH2TjAG23yE_493wbv4_zTSbFPm4iaKuAqOaxZ4pZxq-jnp4vQvvyUwHh3izZdH0GqkoL=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNlU8fc6iBCf2pZdBQL7PWMYDoTSVGvKJYDTs9RXMDG05-_zzmCxOIPalOiMbnmnhyuL2rI1VS9_Wi_qNiw_yHX7CHxA2VrHGON5BlfM6hDi7tLXBpELKg4IIYo4g_xpzXF08BADxI0ePWn8CvJPKTo=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOTY_dKWbbD6lDtITWCM2ixLN1fI1SAGGE1gw1o-I_d3cFp22dpeQTWNIa6Y9Wg7UCxnte7FveeGKVuuLvU5ooYjt3nNZEobLey4NRS0X19LLDbgoPQ_Fuhua1DLdGUneCgnhsVmLCaj4MnNpLz73vQ=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczN8E1OlGJk8x6yvTojUkp-djyF7mYkPfzC7-lh8c7G1aOe7IYJYUOasO_yjE2Hv9TVv-Lce67aHs8_GH5S6BXoT28DQ3DlDw0x2HTdtkGtxmZbpo828UMRzwnZJrfIz8f3QrR1TWLO9xzUSBqK88YWO=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPxkzN9zSoT3A-rNngwquXtuXWq-UB0pkzyW3EYhUggSVm8wIWWZ4fsNJ4Wgooo1-6lenIjejGHX6yER63Aai6G7w-k0xvXDbCndK-HlxLiE3DH7YEax5M7rO8qoJpHTzEJ6yHzPTm0Q9Pv_-xgggB-=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczN6YOBBF_Bhh5sXz4yoGnpc6gxVsXvL5zu__jsgNUNsHvuYMVvNcWsDx-JnMsfZOyE3fTgxNXwuHqQDLiRuR4mNRHNMrmphdP5sPTTZ37HL3F-8crxNbBQRXwTeuEqQ856_4u7d1DoNqNAu6kCfOVv1=w2450-h1838-s-no-gm?authuser=0"
            ],
            "_actualFullImages_none": [
                "https://photos.fife.usercontent.google.com/pw/AP1GczNHb6oX_TXg7Htgp-nMi96FW5ZZlldN5KR_PdDT3e3Hm1ta0FUiot-o=w2450-h1838-s-no-gm?authuser=0",
                "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/preview",
                "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/view?usp=sharing",
                "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/view?usp=drive_link",
                "https://drive.google.com/file/d/1naBi6ZcMfplM2b62Jxoh7p3Wn5MvBNwV/view?usp=sharing",
                "https://drive.google.com/drive/folders/1FrWCDHIzbj8ADx5LykHr1uwrSKc1m_cX"
            ]
        }
    },
    {
        "id": "0002",
        "aircraftType": "plane",
        "name": {
            "brief": "J-20",
            "full": "Chengdu J-20",
            "nickname": "Чорний орел"
        },
        "info": {
            "year": 2011,
            "countries": ["Китай"],
            "type": "Важкий винищувач четвертого (п'ятого) покоління",
            "price": 120000000,
            "description": "Вважається одним із ключових досягнень у сфері військової авіації для Китаю і є першим китайським винищувачем п'ятого покоління, призначеним для виконання ролі багатофункціонального винищувача"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Chengdu_J-20",
            "main": "https://upload.wikimedia.org/wikipedia/commons/a/a2/J-20_at_Airshow_China_2016.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczOTj8ZD9RuRaphQgMDL1v_TlbRuOvT4XQ4pjOtVNkYlJ5UOMLlgS2ICFEuqTO0GCdstNp2fc8Afqji071tQzaHeqhw43MgrFt3tqqcpUHvPm9Mu6GX8uowuspCGXYyHAHl84SXBllsrKX-mWmcXNEkG=w1345-h1007-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "2011-01-01T00:00:00",
            "end": "now"
        },
        "model": {
            "colorsPrice": {
                "main100": 480,
                "main72": "_820"
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/j-20-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/j-20-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/j-20-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/j-20-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0003",
        "aircraftType": "plane",
        "name": {
            "brief": "A-10",
            "full": "Fairchild-Republic A-10 Thunderbolt II",
            "nickname": "Бородавочник («Warthog»)"
        },
        "info": {
            "year": 1976,
            "countries": ["США"],
            "type": "Штурмовик",
            "price": 18000000,
            "description": "Одномісний дводвигуновий штурмовик, призначений для надання безпосередньої підтримки сухопутних військ, ураження танків, бронемашин та інших наземних цілей"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Fairchild_Republic_A-10_Thunderbolt_II",
            "main": "https://upload.wikimedia.org/wikipedia/commons/8/8d/USAF_A-10_Thunderbolt_II_after_taking_on_fuel_over_Afghanistan.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNHIIMUhJ_Aaep26EjuzzY6weX6Jg-vGVpL_62tWD9Ue-RxQR77-893d0qfKlohj8kvaSC7L72pMCJw9WkO4y2delL3l58a2oeNHR8cYpCnkxJzryZ9USP7bZN_F5cVNe-7UmhmFC_xX2_SaEZhLMud=w1359-h1437-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1975-01-01T00:00:00",
            "end": "1984-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "dark": 750,
                "green": 780
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/a-10-dark-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/a-10-green-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/a-10-green-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/a-10-green+dark-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0004",
        "aircraftType": "plane",
        "name": {
            "brief": "SU-25",
            "full": "Су-25 Грач",
            "nickname": "Грач, Лягушачья лапа («Frogfoot»)"
        },
        "info": {
            "year": 1975,
            "countries": ["СРСР"],
            "type": "Штурмовик",
            "price": 12000000,
            "description": "Призначений для безпосередньої підтримки сухопутних військ за прямої видимості мети, а також знищення об'єктів із заданими координатами цілодобово в будь-яких метеоумовах"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/%D0%A1%D1%83-25",
            "main": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Sukhoi_Su-25SM_%C2%ABRoman_Filipov%C2%BB_05.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczO8jD-mHi9beAi08EtchDq7UWaoJbXCMaGZ6OHulXsFEZLP-_IRMaEtDuFZu4c1rmU0TiF_DjlfQMOK-Ac6uhlgRe8qe5LYmE_2njF4NFyZ7WwyFbvb6KXHo5NxAZguxz83Q76r7Ebk0XHpCoFAOfFT=w1298-h935-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1978-01-01T00:00:00",
            "end": "2005-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "rus": 730,
                "ukr": 750
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/su-25rus-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/su-25ukr-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/su-25ukr-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/su-25rus+su-25ukr_comp-4.jpg"
            ]
        }
    },
    {
        "id": "0005",
        "aircraftType": "plane",
        "name": {
            "brief": "BF-109",
            "full": "Messerschmitt Bf 109",
            "nickname": "Мессершмітт («Ме-109»)"
        },
        "info": {
            "year": 1935,
            "countries": ["Німеччина"],
            "type": "Фронтовий винищувач, винищувач-перехоплювач, винищувач-бомбардувальник, винищувач-розвідник, розвідник, навчально-тренувальний винищувач",
            "price": 27000,
            "description": "Одномоторний поршневий винищувач-низькоплан, що складався на озброєнні «Люфтваффе» та ВПС різних країн майже 30 років і був одним із двох основних винищувачів «Люфтваффе», наймасовішим літаком Німеччини протягом усієї Другої світової війни, а також наймасовішим винищувачем в історії"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Messerschmitt_Bf_109",
            "main": "https://upload.wikimedia.org/wikipedia/commons/9/95/Messerschmitt_Bf_109E_at_Thunder_Over_Michigan.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczOWVFojsM7hwkdx3rmAVLM8AAi-j_hnPT3Udrm7eUQT3cx5NHYTEhaNj-grL2Nm4oKkCpHuBO-EX8VYbq-0iCwgn1Eco5yMATFdm0p4yzUYpgib9qwCtNRhyrbIAla7i_iDZhystPFeW2KqC5oK6tcO=w1330-h1159-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1936-01-01T00:00:00",
            "end": "1958-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "green": "_690",
                "black": "_620",
                "yellow": 690,
                "grey": "_650",
                "blue": "_670",
                "White": "_630"
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/bf-109-yellow-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/bf-109-yellow-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/bf-109-yellow-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/bf-109-yellow-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0006",
        "aircraftType": "plane",
        "name": {
            "brief": "F-14",
            "full": "Grumman F-14 Tomcat",
            "nickname": "Котяра, Ловелас («Tomcat»)"
        },
        "info": {
            "year": 1970,
            "countries": ["США"],
            "type": "Палубний винищувач-перехоплювач",
            "price": 6000000,
            "description": "Двомісний реактивний палубний винищувач-перехоплювач четвертого покоління з крилом змінної стріловидності, здатний завоювати повну повітряну перевагу в безпосередній близькості від авіанесучих кораблів, з яких передбачалося використовувати ці літаки, а також повинен був бути здатний завдавати ударів по тактичним наземним і надводним цілям"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Grumman_F-14_Tomcat",
            "main": "https://upload.wikimedia.org/wikipedia/commons/f/f7/US_Navy_051105-F-5480T-005_An_F-14D_Tomcat_conducts_a_mission_over_the_Persian_Gulf-region.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNyRJlWO2ki4tSpbCXhowMOcD6DCnUOqdDbrrMuObFy8W7mv6uKdL8K_HUO2N7OlNQaN2U5BDQTuatfMaaVjuhD9s9rJYSCq_tZQAxaQ-ydFSJ8EwF8rPsFPoZvJXyI60CKHc_YSo4y17xUPf0yiSr_=w913-h847-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1974-01-01T00:00:00",
            "end": "1992-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "white": 830,
                "black": 850,
                "desert": "_900"
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/f-14-white-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f-14-black-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f-14-white+black-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/f-14-white-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0007",
        "aircraftType": "helicopter",
        "name": {
            "brief": "EC-665",
            "full": "Eurocopter EC665 Tiger",
            "nickname": "Тигр («Tiger»)"
        },
        "info": {
            "year": 1991,
            "countries": ["Франція", "Німеччина"],
            "type": "Ударний вертоліт",
            "price": 39000000,
            "description": "Чотирилопатний, двомоторний ударний вертоліт, який має відзнаку першого повністю композитного вертольота, такі як «скляна кабіна», технології малопомітності та висока маневровість для підвищення живучості"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/Eurocopter_Tiger",
            "main": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Eurocopter_EC_655_Tigre._Festival_A%C3%A9reo_Internacional_De_Gij%C3%B3n._Gij%C3%B3n_2016._%2827900053383%29_%28cropped%29.jpg/1920px-Eurocopter_EC_655_Tigre._Festival_A%C3%A9reo_Internacional_De_Gij%C3%B3n._Gij%C3%B3n_2016._%2827900053383%29_%28cropped%29.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczPiy9v8KfUC_t5tRJrspcxBwYn51NwPkDONZ7YqnKCdnXQU_RLRMFuMTDvSeLw7H8L85J_sThjTBQ425WFvUmcihoxOt7BGmDKbyRcQDFfWYC5ywTQp6spBMyV9k9xDftkW98a1i2qu9zCRcvrkYxpj=w1319-h1315-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1991-01-01T00:00:00",
            "end": "now"
        },
        "model": {
            "colorsPrice": {
                "main": 670
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/ec-665-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0008",
        "aircraftType": "plane",
        "name": {
            "brief": "MiG-15",
            "full": "МиГ-15",
            "nickname": "Фагот («Fagot»), Карлик («Midget»)"
        },
        "info": {
            "year": 1947,
            "countries": ["СРСР"],
            "type": "Реактивний винищувач",
            "price": 300000,
            "description": "Найбільш масовий реактивний бойовий літак в історії авіації, що складався на озброєнні багатьох країн світу, що став одним з основних винищувачів, що брали участь у Корейській війні, застосовувався в перших арабо-ізраїльських війнах, і в численних менш значних військових конфліктах по всьому світу"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%93-15",
            "main": "https://armedman.ru/wp-content/uploads/2015/09/mig-15-6.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNLy69q5N36C6lbTE48x-oGU1MYHstJsEJdEsv-sHAhcLywlXtCbZ2_5IJXYXKeL6Yquom5hXyT0chFc02LREQeLe6g32eN0YnHJif-SOv3_Oi8WilcKWxWKu1toPnmLd0ydSQVwllAkKWA6TsuiQJi=w1275-h912-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1947-01-01T00:00:00",
            "end": "1959-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "61035": 0,
                "61036": 0,
                "61037": 0,
                "61038": 1210,
                "61039": 0
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/mig-15-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/mig-15-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/mig-15-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/mig-15-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0009",
        "aircraftType": "biplane",
        "name": {
            "brief": "O2U",
            "full": "Vought O2U Corsair",
            "nickname": "Воут Корсар («Vought Corsair»), Ленин («列宁号»)"
        },
        "info": {
            "year": 1926,
            "countries": ["США"],
            "type": "Біплан-розвідник, корабельний розвідник, легкий ударний літак, зв'язковий та навчальний літак, патрульний літак",
            "price": 16000,
            "description": "Палубний біплан-розвідник та літак спостереження 1920-х років. В 1930 став першим літаком Червоної армії Китаю з назвою «Ленін» і використовувався для розвідки, розкидання листівок і бомбардувань урядових військ. Одним із найвідоміших епізодів стало бомбардування позицій Гоміньдану в Хуан'яні в 1931 році"
        },
        "url": {
            "wikipedia": "https://en.wikipedia.org/wiki/Vought_O2U_Corsair",
            "main": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Vought_O2U.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczNiPFosEO9ESpvC-kJru1VOYYYhMIxHym3j_PhATKDCghvYMpYqGmuWr1OcG97jJTQjFx2JcyUN5H0qej6gpl3lVlkb0rqymMgDDWsRimNcBGBc08CFAxR8dACwmW-fGhyt99_IktgF33lI9RP_IlaL=w1309-h1222-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1927-01-01T00:00:00",
            "end": "1930-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "skyBlue": 1040,
                "grey": 0,
                "yellowGreen": 0,
                "yellowGreenWhite": "_1060"
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/o2u-comp-4.jpg"
            ]
        }
    },
    {
        "id": "0010",
        "aircraftType": "plane",
        "name": {
            "brief": "P-51",
            "full": "P-51 Mustang",
            "nickname": "Мустанг («Mustang»)"
        },
        "info": {
            "year": 1940,
            "countries": ["США"],
            "type": "Одномісний винищувач далекого радіусу дії",
            "price": 50985,
            "description": "Був одним із найефективніших та універсальних літаків Другої світової війни. Використовувався як винищувач супроводу далекого радіусу дії. Виконував завдання винищувача-бомбардувальника, пікіруючого бомбардувальника, тактичної розвідки. Мав відмінну швидкість і маневреність на великих висотах"
        },
        "url": {
            "wikipedia": "https://ru.wikipedia.org/wiki/North_American_P-51_Mustang",
            "main": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/P-51-361.jpg/3840px-P-51-361.jpg",
            "promotional": "https://lh3.googleusercontent.com/pw/AP1GczM9J9cv8oKAH_dInLqEzeCDPiAm9tVnQe1_8Kq79P9337qKXLhXnFagxsdXRU51R6OfNaUUwXtie38UlIMoSCTUEe7NvBDKZ7pQhbHLCLGF6-J1rd6TIBBqrpnG_9J_ptJOQOl0B8a9NKUc9EoyIwL5=w1276-h1293-s-no-gm?authuser=0"
        },
        "manufacturing": {
            "start": "1941-01-01T00:00:00",
            "end": "1951-01-01T00:00:00"
        },
        "model": {
            "colorsPrice": {
                "white": 0,
                "silverlLight": 0,
                "silver": 0,
                "silverlDark": 660,
                "grey": 680,
                "green": 690
            },
            "actualImages": [
                "/airplane-model-store3-state2/images/planes-actual/p-51-comp-1.jpg",
                "/airplane-model-store3-state2/images/planes-actual/p-51-comp-2.jpg",
                "/airplane-model-store3-state2/images/planes-actual/p-51-comp-3.jpg",
                "/airplane-model-store3-state2/images/planes-actual/p-51-comp-4.jpg"
            ],
            "actualFullImages": [
                "/airplane-model-store3-state2/images/planes-actual-full/p-51/p-51-full-01.jpg",
                "https://lh3.googleusercontent.com/pw/AP1GczPJ7UL1IR8yatxiN1TqrqtaX-zoGVC3t8z3OHROCYMB5JajC7mKEKJgcQk0Qb4WeN1MpzW7ev_HngI0BbWvEpFqn8s7jatKllnvHtHBwsRZ6jtK8YbmkCIzEArCaLUfraNPPV8Azvy8sokCX2wGyMaK=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMYyRQF_TuL8YACBkN0m3pePjpv8aIuO85e78qHoHd9aBU61ErtNhgGcxKc2brhM1KQKbkh2qUvu1RMak69HZX2C_XJFPLXMZ1WgFYw7aZJksZuHm90WsH16HFt3rM4IWahsTAtliPlgLQdoBUh1EKs=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczM2cjVQf6mO_ILefGnMrpyV3cB8w7hfFFqlYDsJmxTkxDRWFxo_pSolkPQ3f2c5Rn28axB2uKfgy7R9FGGbbqShe_9jpyAFrqmp66MOW0HfsnIZJ4KpqwKTucRrbuXqh-a04HnUmdkJgUMMcbVQBE6O=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOpGAPvh9Ks74NCBeGXdr0zLxkfouIOlvX0kNqpxlz39VFO1emsfWdNxQ18mllD8JfgsyM6d1SidxiFwCpiwPi1h0UfeLukRRuwCaH8J-Gi7gaWQ9jkEc4E3DXNzWKZSz3ulvG55UxxL2i9SHeizK9e=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMw_C_L5WKCHg5tJ746mF7ecVgWxXDTAs6s53YRIzfR38BGerLz1ab5PgQS1bPXE6ATZ_9EdWe-f-Yc9tBak2VHLn9J6Klvcf4gyNdYPXSJbjjxFrRiXloRgi5evJCt-IrPGn0DWO6s1o6iumV5y_sR=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczN-Fw9qIHXqoQN5l0OQQuGKWhbyDiooRubZElboIDlMDDLDypX8H9uCrnqAZ-eL5L3VxcieueaTXFQqiJ5GvhuM3qRzfBDkgNjscEbfZpmOl7b3c9QWEwo1yQJ7iQXk3pVOkgFS0wWTov6BAlSumZtk=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPyM7pEYfUBO3qsLYzQQRRSF-Py3NpyvQ8KxdObQk2ecgPMC_fOQDKBqjM6QI1gm9exsJSaHk7xXBrJXXz5rMO6SB_Sm7QUmCTBLQerW69bGTkJU_2heLw1MhVwuLWgbNOa_X7FhK0eAUf289OANdtb=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNYA6hOWVIni1ZvIv9UJnOVPW9OBUaVsjqA5qh9ciACj-ycBBxVyGY5S-RGJ-CHIF_HacTNFN7-J0IqLf3xwhCznlWZkY-chIvQYSrEaQBs5YRgvfPsgkJIw4CJc-6Md5BUrnjs-AclavXyW_QZUTA-=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPvTzoIUfhMqTw1Btn1RAnyfBG9WKoS0Iwz0c87x8UmGzgjQFfC_w9djM2a6SDUS0_hyKtNZDTTT8d49BcxRWaDdOuqnbaC-oa1QY3fh17_Of7tjnUeJXPVCCxBKs11-KXaNoggaLn30ehNY_hE66FK=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOCiDpxXJxNF6GYjv7KwxeKZ8R-kTunDTXWu85NecvQfvSW57ub43uKZBIyPEsNokaqtXuCFovywM5Il6WU1uDZV4Q_AQPx6aNVHSJJvXQAjqMDMdaZw2ZzNPfCJHNJ4GvFQq-Pmi1a075t8-ye-uo4=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPZQ-My7d9mxQec4d0Cn2ueBXpCNqgqaHHR79d0LAY2MGmH-CqDTzez7chRFSHNMvnsZ46LyZXfmiC9S0RNovRHmq9-xD1-RS8j_kSLqTlPCDHyD0xOFiaiiGGsTnUD9xjTkWJE-Q3Lvrf1RAvK1XJC=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczM8kTbWyOWnFM0FdhvSwtMouZtSEekBjjGbhUIkKyM2q8Mik1cZbKaHIMl-1vJjjDKrruozxQZbm00YaBEOPmCUCsSXRkrZwFiL3QQypzsuTIk4Rhc7Xm2lBIS_KrNb4rBYw3lWGDvxUFHbq_6KiTXg=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNJWzWjUZKN9aJo1EgdYjeFGqrEd1f0XWR5bjP2GtaSiY9oArcE3wVH2YSyoeVNAgf__Q1YocOAkEyjoJjdTU1s4Usccll58riDLXjiVGSLMBoU3WeVcx_5n_4A-4YaIfNaJ-p1vMAxE50DRPciQZaE=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPmJZT0MspVFbU-IME2wmqumr-vse-MOM4NNcXnZMr5o9OIPQ9iXkb4id9j3zGz1voYBZAavXqF6WU9TsEhvbErhGRBibkOQi71dl_hLGhIfiWik7IGzUQO0bolKKkOvSC42tGZBKetUOKO9F2s8hkr=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNVw0Vt_IcoXwI3SvRJC7qSRsPqhh-gfOXzdeMojr1mA8e4F1lf8x_LdLsDu2IOmlBNc6Cm2Vj5aZHZJyq-13PVPT0-Nqc0Fu-KFrOItYOIjo1GiWXxJaH_hnq0tIepq9DPPtZgjGIBO9QIUSn1fnpC=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNMHbbdzx9pq7cxrivc2l5tkMZ-c7johc2atGwKHlmnYVBhGEHd0CvcrvXb6OKIMEvZ4t9MAtyzFfruSzOERvaIOFjZrvZLwo6An8iVyFfusObnEDKxM2hbsq5JVDN8CfVUjLSQx2K7jV9Lljc-8XVK=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPyQpCcQi_PzCfDpmyHJBsKmpiCfVn44z80FLjpz6yHgKyTCG0lZkqcknvLtgI75SoYjquYVJ4mciM_c4d1VM-XshJNsunwti9-NYkLu6i9eFZM7EFm_JIPPhA7xQZo9ke-SQQqDf0ZCUiArBPK-Qmq=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPur9kCe76M3Oxd_2IyhD295ZrMUv4maXdGCrgeRJMQFjazuDIsBGOMHrdRz1clzwMu9ukVXbhRi8JSnVbzLm2TTr0QS2nlRjhy7P8lLq6rHDfmH65ExY8NWe9zwLynQvRRBjJzc96XeLH7MX__bEt_=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNw9FiisIK9JnlG55S-f640ZrZJ-FXKPF1KorCtyx-0QJv79K3gCmw-oNepft0EjNPzQcikhH_E2ZNby1qWH_I28FKikMi-rnZ5woUH3qy2SSmAOzCW72tM03NzwWequQF7Cb3Kan9nCnnKciieCOUR=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPTp53TankCOlIwVzGcFYLT70rAolW3fi25xZQcrryQebB5cq_vBsjkQ3OFdV-JX2ce5xuBPaG67ywPqX-soM9giFTvzpkLRPPBc15WxJpF2G_F7iQDG7MfpG0DrJuA8NwMmw5ppo1pzlcOHLK178Gd=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMkf299nzaT2xYmw9PivKjVi7YlZQh3-S8W-9brNpogPhLMfyl35tFCQgUJyYsxVR3PmgYdy4o2g-9C0D_RS98rf9aBHcurUQsd1aR_GblCvC7gKAayIDCvuNVPBH7DEt6ENXQPW-o2J7TXyHgGYZin=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczND0pyU2GhrhV0-1-dtoxti0Npol4OQQ0j8f-6FDbK8jRjCmvEHNIAl-x6MytuaNUL4Q4q8BQZUN3Jz-DwsTTsWabwg2q2pUoVXrCb4uNXWdBt9JhhtN7agzEnT-O51wecoH1wAXPRz2h__xk_LpfpM=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczPBSkQGCsyj4CNvuibDUz8eVofJZv86TGdnVI48971k2GOqT5EW4cLU80vgzRjM9SfZLipcEL6FrXKs-pc4-I4vtb-hc-6-cMgYY40xVV9yEaGtdCxyi5phf2nb1BnSBlQ7h8KKF2dkjx3RDf0I1hI-=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMOmmAfptYddhBVwHSGzgIyG2GVJuyQuqQPGGxisgiaVmDF9CKC1c03CoDbrIRz-TNoeWudIY7x3CkLTbmK3YrLUXOX6xXxpZjy5-kZ8NvClPsB9g98Mum9dyrUgKSOE44X_yN4pp7FTdN5JTaEmLpe=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNUr9l1SlkxZNM9FszUqhkmKj9HnehM6-UGP0T5r-hDioqN11NmSpogzm5h3PaYVRSeb8xTHqrHYfGq3zCRH1zeVjz_nYTtqHDJms-y2IaRj1PzHR_quiCX76iImrQbYKRfaCD65DySP2p19Xlwg5Kf=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOX5_x4pbZOeD8-oOijzbwi1s6PN-WtIaNjZ0V8P4wUAAJi49yC8Ckpbr_n7SAjtvyuyrye-CuliozoDV4YKL_PY0eTI_78dIrsfT3FB5CaDwYT2J86GyYHY8af-HhzosaGfXpy8I3-C1_Un_24o0ag=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMwmNtVHHY74v4iSKXrl4-mFpCbKPIMST7gRLRkk11avgecWMhldDSWywY0Qhw7-yXC7voBRXaQ9qA4KDXP9r7GB9TZsR1qDDzgOZgJomrl1SEACY32NBljoCBBkBnWUbebYMzij39ND23GkhLQNe55=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczO1zfVNOIlqRFerfDiUy6joeU961kerenIQE7unwsQUIGBy7ZIcX8P9JzLnYqHcRRWnVtUeeRj6Infd7miS4wpdNypL6ZmlTo7EFs8QzzUew7nFghRFQDVUXxcIrAOVK5xB9K1cmiOByBh6aKrWUpZ5=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczOsTWs0_uEc2E79Qqob9hUTRjRiPBXbh1EfBtBRQKj5zBq2xqsVsW1JbjnNrCY0vLaYYNQC9WuUjfBmUvqOp58TEiLIohevmlirZfrAZUSzZNuDspH-h5MxlnR_I2QSF_bA53HCkUwJBaZU0x8dJHh8=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMZNtviibyr6ZCWoVNKOARSHtTAdHF2JMUBAPxh7QChbn4af-DTbJLTL8fRQ86GsbIMBMgf2eXs6DUOiJD4EW7q-majH5e0faDdReWLoqJRfOXu1oLNfZqwUyBqSQD90IRnJZLRaLrG59aHKG5wZAOF=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczN4N1_kO11fgzzLyRhwUg9Qj2wJ1ICxUMJSJrYuB1QdlgJCCkxAFJSCXpdwA-1pCZTFIuzyOeS7Fcpjlmfm9Fg_za026zg7TdPI8e5ehi_IYCS8QR1i7J2H8DG55SMuiIg8beFW2N1GecD2tCJPWJuf=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczMcH2PXQJ9V6AE9qou1bLNR0e4aIiTcG1aX3e3ppn4siU9gQJ5y8epZeHyqLINv_B5AWkR7babMQX-5iFLuWMzbhi4kJhMrFQhydNTZz21tImMuggrw8sCc6XJGgaXfEOm_obdosM29wwdq7PLpJGNk=w2450-h1838-s-no-gm?authuser=0",
                "https://lh3.googleusercontent.com/pw/AP1GczNWUjVyplsPGcuk_2ep6TESA-x4DOl8JtZkk1JmUA8D6AvsgDLcuqdB6EX1mrC9LnvB3ZvAfFbxC5dhUdWu7Kg_1jNfZlgOVwYvz83TOkUcLfMHGFqtZBqDq-4k8nVz-Uysj4k7vCbSpGIaBPWWd7p_=w2450-h1838-s-no-gm?authuser=0"
            ],
            "_actualFullImages": [
                "https://lh3.googleusercontent.com/pw/AP1GczPH5VAx0na14pJoBr3F804IerAJJrvdoJgaR4PD-fjLtq4ZYGqgVrOFVe1klx4v_Ywux9NriAORyNzMGWDKRbJBgEjNytY30XIiYqdsMRYWRU4ksnMdfLfxf8E4aG7Q6IcQw6wtyq347YMjL6DFADX_=w2450-h1838-s-no-gm?authuser=0",
                "/airplane-model-store3-state2/images/planes-actual-full/p-51/p-51-full-02.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/p-51/p-51-full-03.jpg",
                "/airplane-model-store3-state2/images/planes-actual-full/p-51/p-51-full-04.jpg"
            ]
        }
    }
]


// 1. знайти індекс літака рік випуску якого після 2000 року

const indexMore2000 = aircrafts.findIndex(airCraft => airCraft.info.year >= 2000)

console.log("indexMore2000:", indexMore2000 )

// 2. знайти назву літака рік випуску якого після 2000 року

const planeMore2000 = aircrafts.find(airCraft => airCraft.info.year >= 2000)

console.log("planeMore2000:", planeMore2000)

const namePlaneMore2000 = planeMore2000.name.brief

console.log("namePlaneMore2000:", namePlaneMore2000)

// 3. знайти назву всіх літаків рік випуску яких більше чи дорівнює 1940 року

const arrayPlaneYearMore1940 = aircrafts.filter(airCraft => airCraft.info.year >= 1940)
console.log("arrayPlaneYearMore1940:", arrayPlaneYearMore1940)

const arrayNamePlaneYearMore1940 = arrayPlaneYearMore1940.map(elements => elements.name.brief)
console.log("arrayNamePlaneYearMore1940:", arrayNamePlaneYearMore1940)

// 4. створити масив унікальних елементів в якому будуть назви всіх країн виробників

const arrayCountries = aircrafts.flatMap(airCraft => airCraft.info.countries)
console.log("arrayCountries:", arrayCountries)



const uniqueArrayCourses = arrayCountries .filter(
    (country, index, array) => array.indexOf(country) === index
);

console.log("uniqueArrayCourses:", uniqueArrayCourses)



//! Метод every()
console.warn("Синтаксис методу every():");
//? ✴️ Перевіряє, чи проходять ВСІ елементи масиву
//? тест колбек-функції.
//? Повертає true або false.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає true, якщо ВСІ елементи масиву задовольняють умову.
//? 🔸 Повертає false, якщо хоча б один елемент масиву не задовольняє умову.
//? 🔸 Перебирання масиву припиняється, якщо колбек повертає false.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.every((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода every():");
//? ✳️ Приклад-1:
//todo: УСІ елементи більші або дорівнюють нулю? - ТАК
console.log("УСІ елементи [1, 2, 3, 4, 5] більші або дорівнюють нулю? -", [1, 2, 3, 4, 5].every(value => value >= 0)); //! true


//todo:  УСІ елементи більші або дорівнюють нулю? - НІ
console.log("УСІ елементи [1, 2, 3, -10, 4, 5] більші або дорівнюють нулю? -", [1, 2, 3, -10, 4, 5].every(value => value >= 0)); //! false
console.log("-----------------------------------------------------------------------------------------");


// 5. перевірити чи рік випуску всіх літаків більше ніж 1920

const arrayAuditYearAllPlaneMore1920 = aircrafts.every(airCraft => airCraft.info.year >= 1930)

console.log("arrayAuditYearAllPlaneMore1920:", arrayAuditYearAllPlaneMore1920)



//! Метод some()
console.warn("Синтаксис методу some():");
//? ✴️ Перевіряє, чи проходить хоча б ОДИН елемент масиву
//?  тест колбек-функції.
//? Повертає true або false.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає true, якщо хоча б ОДИН елемент масиву задовольняє умову.
//? 🔸 Повертає false, якщо жоден елемент масиву не задовольняє умову.
//? 🔸 Перебирання масиву припиняється, якщо колбек повертає false.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
console.log(
    `%c
    масив.some((element, index, array) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода some():");
//? ✳️ Приклад-2:
//todo:  Чи є хоча б один елемент, що більший або дорівнює нулю? - ТАК
console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що більший або дорівнює нулю? -", [1, 2, 3, 4, 5].some(value => value >= 0)); //! true

//todo:  Чи є хоча б один елемент, що більший або дорівнює нулю? - ТАК
console.log("Чи є хоча б один елемент з [-7, -20, 3, -10, -14], що більший або дорівнює нулю? -", [-7, -20, 3, -10, -14].some(value => value >= 0)); //! true

//todo:  Чи є хоча б один елемент, що менший нуля? - НІ
console.log("Чи є хоча б один елемент з [1, 2, 3, 4, 5], що менший нуля? -", [1, 2, 3, 4, 5].some(value => value < 0)); //! false

//todo:  Чи є хоча б один елемент, що менший нуля? - ТАК
console.log("Чи є хоча б один елемент з [1, 2, 3, -10, 4, 5], що менший нуля? -", [1, 2, 3, -10, 4, 5].some(value => value < 0)); //! true
console.log("-----------------------------------------------------------------------------------------");


// 6. знайти індекс літака рік випуску якого менше чи дорівнює 1926

const indexPlane = aircrafts.map(airCraft => airCraft.info.year)
console.log("indexPlane:", indexPlane)
console.log("indexPlane:", indexPlane.includes(1926))
console.log("indexPlane:", indexPlane.indexOf(1926))



const indexPlaneMetodSome = aircrafts.some(airCraft => airCraft.info.year <= 1926)
console.log("indexPlaneMetodSome:", indexPlaneMetodSome,)

const indexPlane1926 = aircrafts.findIndex(airCraft => airCraft.info.year <= 1926)
console.log("indexPlane1926:", indexPlane1926,)



//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✴️ Під час роботи з масивом об'єктів перевіряється
//? значення певної їх властивості.
//? ✳️ Наприклад, у нас є масив об'єктів фруктів,
//? необхідно дізнатися, чи є ВСІ фрукти в наявності
//? та чи є в наявності хоча б ЯКІСЬ фрукти,
//? тобто більше 0 штук.
const fruits = [
    { name: "apples", amount: 100 },
    { name: "bananas", amount: 0 },
    { name: "grapes", amount: 50 },
];
console.log("fruits:", fruits);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo:  every поверне true тільки, якщо усіх фруктів буде більше 0 штук:
const allAvailable = fruits.every(fruit => fruit.amount > 0);
console.log("allAvailable:", allAvailable); //! false

//todo:  some поверне true, якщо хоча б одного фрукту буде більше 0 штук:
const anyAvailable = fruits.some(fruits => fruits.amount > 0);
console.log("anyAvailable:", anyAvailable); //! true
console.log("-----------------------------------------------------------------------------------------");



//! 1.Метод reduce()
console.warn("Синтаксис методу reduce():");
//? ✴️ Метод reduce(callback, initialValue)
//? використовується для послідовної обробки кожного елемента масиву
//? із збереженням проміжного результату, як акумулятор.
//? Трохи складніший за інші методи для засвоєння,
//? але результат вартий того.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Робить все, що завгодно.
//? 🔸 Повертає що завгодно.
//? ✳️ Аргументи колбек-функції - це:
//? 🔹 Перший параметр колбек-функції
//?    (previousValue) - це акумулятор, тобто проміжний результат.
//?    Значення, яке поверне колбек-функція на поточній ітерації,
//?    буде значенням цього параметра на наступній ітерації.
//? 🔹 наступний - значення поточного елемента element,
//? 🔹 його індекс index
//? 🔹 і власне вихідний масив array.
//? 🔹 Другий аргумент - необов'язкове початкове значення акумулятора
//?    - параметр initialValue.
console.log(
    `%c
    масив.reduce((previousValue, element, index, array) => {3
        // тіло колбек-функції
    }, initialValue);
    `,
    'color: blue; font-size: 18px',
);

console.warn("Приклад використання метода reduce():");
//? ✳️ Найлегше уявити його роботу метода reduce()
//? на прикладі підрахунку суми елементів масиву.
//? ✳️ Спочатку метод reduce()
//? створює внутрішню змінну-акумулятор (previousValue)
//? і присвоює їй значення параметра initialValue
//? або першого елемента масиву, що перебирається,
//? якщо initialValue не задане.
//? 🔹 previousValue = initialValue = 0; (або previousValue = array(0) = 2).
//? Потім колбек - функція викликається для кожного елемента масиву.
//? Поточне значення параметра previousValue
//? - це те, що повернула колбек - функція на минулій ітерації.
//?     🔹 Ітерація 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
//?     🔹 Ітерація 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
//?     🔹 Ітерація 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
//?     🔹 Ітерація 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
//?     🔹 Ітерація 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32
//? Після завершення перебирання всього масиву, метод reduce() повертає значення акумулятора.
//?       Результат = 32
const array = [2, 7, 3, 14, 6];
console.log("array:", array);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `")

//! Варіант OlD
// let total = 0;
// for (const value of array) {
//     total += value
// }

//! Варіант NEW
const total = array.reduce((previousValue, number, index) => {
    console.log(`Iteration-${index + 1}:  previousValue: ${previousValue},  number: ${number}  ->  return ${previousValue + number}`);
    return previousValue + number;
}, 0);

console.log("total:", total); //! 32
//? ✳️ Тобто метод reduce() використовується,
//? коли необхідно взяти «багато» і привести до «одного».
//? У повсякденних завданнях його застосування зводиться до роботи з числами.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



//? ❗️❗️❗️ Важливий приклад вірного використання синтаксису метода reduce():
console.warn("Приклад-1: ВІРНЄ використання синтаксису метода reduce():");
//todo var.1
function example1(arr) {
    arr.reduce((acc, element, index) => {
        console.log(`Acc: ${acc}; Index-${index}:  Element: ${element}`);
    }, undefined);
}
example1(["Робітник1", "Робітник2", "Робітник3"]);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


console.warn("Приклад-2: ПОМИЛКОВЕ використання синтаксису метода reduce():");
//todo var.2 
function example2(arr) {
    arr.reduce((element, index) => {
        console.log(`Index-${index}:  Element: ${element}`); //todo var.2
    }, undefined);
};
example2(["Робітник1", "Робітник2", "Робітник3"]);
console.log("-------------------------------------------------------------");


//! Масив об'єктів
console.warn("Масив об'єктів:");
//? ✳️ Під час роботи з масивом об'єктів
//? виконується редукування (змінювання в бік зменшення)
//? за значенням певної властивості.
//? Наприклад, у нас є масив студентів з балами за тест.
//? Необхідно отримати середній бал.
const students22 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
    { name: "Х'юстон", score: 64 },
];
console.log("students:", students22);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


//todo: Назва акумулятора може бути довільною, це просто параметр функції
const totalScore = students22.reduce((total, student) => {
    return total + student.score;
}, 0);
console.log("totalScore:", totalScore); //! 337

const averageScore = totalScore / students22.length; //! 67.4
console.log("averageScore:", averageScore);
console.log("-------------------------------------------------------------");



const totalPricePlane = aircrafts.reduce((total, element) => {
    console.log(element)
    return total + element.info.price;
}, 0);

console.log("totalPricePlane:", totalPricePlane)

const averageScorePlane = totalPricePlane / aircrafts.length
console.log("averageScorePlane:", averageScorePlane);


// порахувати загальну вартість літаків випущених в 21 столітті

// 1. перебрати масив об'єктів та створити новий масив всіх літаків випущених після 2000 року включно

const arrayPlaneMore2000 = aircrafts.filter(element => element.info.year >= 2000)
console.log("arrayPlaneMore2000:", arrayPlaneMore2000)

const arrayPlaneYears = aircrafts.map(element => element.info.year)
console.log("arrayPlaneYears:", arrayPlaneYears)


// 2. взяти вже новий створений масив об'єктів та порахувати загальну вартість літаків
// let resultPlaneMore200 = 0

// const totalPlaneMore2000 = arrayPlaneMore2000.reduce((acc, element) => {
//     console.log(element)
//     // resultPlaneMore200 = acc + element.info.price
//     // return resultPlaneMore200
//     return acc + element.info.price
// }, 0);

const totalPlaneMore2000 = arrayPlaneMore2000.reduce((acc, element) => acc + element.info.price, 0)
console.log("totalPlaneMore2000:", totalPlaneMore2000)
// console.log("resultPlaneMore200:", resultPlaneMore200)



//! Просунутий reduce (масив усіх тегів)
console.warn("Просунутий reduce (масив усіх тегів):");
//? ✳️ Продовжуючи тему reduce, 
//? ми зберемо в масив усі теги, 
//? які зустрічаються в постах.
const tweets2 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets2:", tweets2);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `")

//todo: Пройдемо по всіх елементах колекції і додамо значення властивості tags
//todo: до акумулятора, початкове значення якого вкажемо порожнім масивом [].
//todo: На кожній ітерації пушимо в акумулятор усі елементи tweet.tags і повертаємо його.
const tags2 = tweets2.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);
    return allTags;
}, []);

console.log("tags2:", tags2); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

//todo: Мабуть, збирання тегів - не одиночна операція, тому напишемо функцію
//todo: для збирання тегів з колекції
const getTags2 = arr =>
    arr.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

console.log("Tags-2 with countLikes:", getTags2(tweets2)); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']
console.log("-------------------------------------------------------------");

// створити ноивй масив значень (із назвою всіх країн виробників літаків)
//  використовуючи метод reduce та синтаксис function declaration



const getCountries = arr =>
    arr.reduce((acc, el) => {
        // console.log("acc:", acc)
        // console.log("el:", el)
        // console.log(":",)
        acc.push(...el.info.countries);
        return acc;
    }, []);

console.log("getCountries:", getCountries(aircrafts));


// const uniqueArrayCourses = arrayCountries.filter(
//     (country, index, array) => array.indexOf(country) === index
// );

// console.log("uniqueArrayCourses:", uniqueArrayCourses)


const uniqueArrayCountries = getCountries(aircrafts).filter(
    (country, index, array) => array.indexOf(country) === index
);

console.log("uniqueArrayCountries:", uniqueArrayCountries)


//! Просунутий reduce (об'єкт унікальних тегів)
console.warn("Просунутий reduce (об'єкт унікальних  тегів):");
//? ✳️ Продовжуючи тему reduce, 
//? ми зберемо в масив усі теги, 
//? які зустрічаються в постах.
const tweets3 = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("tweets3:", tweets3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const getTags3 = tweets =>
    tweets.reduce((allTags, tweet) => {
        allTags.push(...tweet.tags);
        return allTags;
    }, []);

const tags3 = getTags3(tweets3);
console.log("Tags-3 with countLikes:", tags3); //! ['js', 'nodejs', 'html', 'css', 'html', 'js', 'nodejs', 'css', 'react', 'js', 'nodejs', 'react']

//todo: Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
//todo: Це стандартна практика, якщо callback-функція досить велика.

//todo: Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
//todo: то створюємо її і записуємо їй значення 0.
//todo: В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//     if (!acc.hasOwnProperty(tag)) {
//         acc[tag] = 0;
//     };
//     acc[tag] += 1;
//     return acc;
// };

//todo: Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = tags => tags.reduce(getTagStats, {});
const countTags = tags =>
    tags.reduce((acc, tag) => {
        console.log("acc:", acc);
        console.log("tag:", tag);
        console.log("!acc.hasOwnProperty(tag):", !acc.hasOwnProperty(tag));
        if (!acc.hasOwnProperty(tag)) {
            acc[tag] = 0;
        };
        acc[tag] += 1;
        console.log("acc[tag]:", acc[tag]);
        console.log("_____________________________________________________");
        return acc;
    }, {});

const tagCount = countTags(tags3);
console.log("tagCount:", tagCount); //! {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
console.log("-------------------------------------------------------------");


const allCountries = getCountries(aircrafts);
console.log("allCountries:", allCountries)

const countCountries = countries =>
    countries.reduce((acc, country) => {
        if (!acc.hasOwnProperty(country)) {
            acc[country] = 0
        };
        acc[country] += 1
        return acc
    }, {});

console.log("countCountries", countCountries(allCountries))
    


//! Метод sort()
console.warn("Синтаксис методу sort():");
//? ✴️ Метод sort() сортує елементи масиву,
//? але на відміну від інших методів перебирання,
//? він сортує вихідний масив.
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Сортує і змінює вихідний (оригінальний) масив.
//? 🔸 Повертає змінений масив, тобто посилання на відсортований вихідний (оригінальний) масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.sort();
    `,
    'color: blue; font-size: 18px',
);


console.warn("Приклад використання метода sort():");
//? ✳️ Такий масив чисел буде відсортований за зростанням:
const scores1 = [61, 19, 74, 35, 92, 56];
console.log("scores1_before:", scores1); //! [61, 19, 74, 35, 92, 56]
scores1.sort();
console.log("scores1_after:", scores1); //! [19, 35, 56, 61, 74, 92]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

// відсортувати мисив aircrafts за роком випуску

// console.log("aircrafts-before:", aircrafts)
// // 1 створюємо мисив років

// const arrayYearPlanes = aircrafts.map(element => element.info.year)

// console.log("arrayYearPlanes-before:", arrayYearPlanes)
// // 2 сортуємо мисив років
// const sortAircrafts = arrayYearPlanes.sort()

// console.log("sortAircrafts", sortAircrafts)
// console.log("arrayYearPlanes-after:", arrayYearPlanes)

// // 3 з відсортованого мисиву років створюємо масив об'єктів

// const sortedPlanesObjects = sortAircrafts.map(year =>
//     aircrafts.find(element => element.info.year === year)
// );

// console.log("sortedPlanesObjects:", sortedPlanesObjects)
// console.log("aircrafts-after:", sortAircrafts)

// загальна кількість ітерацій методу find() = 1+2+3+4+5+6+7+8+9+10 = 55 


// 2 Варіант

const sortedAircrafts = aircrafts.sort(
    (a, b) => a.info.year - b.info.year
);

console.log(sortedAircrafts);



//? ✳️ Але, оскільки за замовчуванням значення приводяться до рядка,
//? стандартне сортування чисел працює незвично.
const scores2 = [27, 2, 41, 4, 7, 3, 75];
console.log("scores2_before:", scores2); //! [27, 2, 41, 4, 7, 3, 75]
scores2.sort();
console.log("scores2_after:", scores2); //! [2, 27, 3, 4, 41, 7, 75]


//? ✳️ Тому, у наступній вправі ми розглянемо як задавати свій порядок сортування.
//? ✳️ Для прикладу, відсортуємо масив рядків за алфавітом:
const students11 = ["Віка", "Андрій", "Олег", "Юля", "Борис", "Катя"];
console.log("students11_before:", students11); //! ['Віка', 'Андрій', 'Олег', 'Юля', 'Борис', 'Катя']
students11.sort();
console.log("students11_after:", students11); //! ['Андрій', 'Борис', 'Віка', 'Катя', 'Олег', 'Юля']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const students222 = ["Віка", "андрій", "Олег", "юля", "Борис", "катя"];
console.log("students222-before:", students222); //! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']

students222.sort();
console.log("students222-after:", students222); //! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']



//? ✴️ Через те, що сортується вихідний масив, 
//? порушується принцип чистоти функцій 
//? і не можна зручно створити декілька похідних колекцій 
//? на основі вихідної. 
//? Наприклад, створити колекцію, відсортовану за зростанням, 
//? а іншу - за спаданням. 
//? Тому перед сортуванням роблять 
//? повну копію вихідного масиву і сортують вже її.
const scores3 = [61, 19, 74, 35, 92, 56];
const ascendingScores3 = [...scores3].sort();

console.log("scores3:", scores3); //! [61, 19, 74, 35, 92, 56]
console.log("ascendingScores3:", ascendingScores3);  //! [19, 35, 56, 61, 74, 92]
console.log("-------------------------------------------------------------------------------");



//! Свій порядок сортування чисел
console.warn("Свій порядок сортування чисел:");
//? ✳️ Для зазначення свого порядку сортування методу sort(compareFunction)
//? потрібно передати колбек-функцію з двома параметрами.
//? Це функція порівняння (compare function),
//? порядок сортування залежить від її результату.
//? Метод sort() буде викликати її для двох довільних елементів.
console.log(
    `%c
    массив.sort((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores4 = [27, 2, 41, 4, 7, 3, 75];
const ascendingScores4Old = [...scores4].sort();
const ascendingScores4New = [...scores4].sort((a, b) => a - b);
const descentingScores4New = [...scores4].sort((a, b) => b - a);
// const scoreLocaleCompareNumber = [...scores4].sort((a, b) => a.localeCompare(b)); //! так не працює

console.log("scores4:", scores4); //! [27, 2, 41, 4, 7, 3, 75]
console.log("ascendingScores4Old:", ascendingScores4Old);  //! [2, 27, 3, 4, 41, 7, 75]
console.log("ascendingScores4New:", ascendingScores4New);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores4New:", descentingScores4New);  //! [75, 41, 27, 7, 4, 3, 2]




//! Свій порядок сортування рядків
console.warn("Свій порядок сортування рядків:");
//? ✴️ Для сортування рядків в алфавітному порядку, 
//? за зростанням або спаданням, 
//? використовується метод рядків localeCompare().
console.log(
    `%c
    firstString.localeCompare(secondString)
    `,
    'color: blue; font-size: 18px',
);
console.log("-------------------------------------------------------------------------------");

//? ✳️ Він викликається на рядку,
//? який потрібно порівняти (firstString) з тим,
//? що був переданий йому як аргумент (secondString).
console.log('"a".localeCompare("b"):', "a".localeCompare("b")); //! -1
console.log('"b".localeCompare("a"):', "b".localeCompare("a")); //! 1
console.log('"a".localeCompare("a"):', "a".localeCompare("a")); //! 0
console.log('"b".localeCompare("b"):', "b".localeCompare("b")); //! 0
//? 🔸 Повертає від'ємне значення, якщо firstString повинен бути перед secondString.
//? 🔸 Повертає додатне значення більше нуля, якщо firstString повинен бути після secondString.
//? 🔸 Якщо рядки однакові, повертається нуль.
console.log("-------------------------------------------------------------------------------");

//? ✳️ Це зручно використовувати для сортування рядків,
//? оскільки метод sort() очікує такі самі значення від колбек-функції.
const students223 = ["Віка", "андрій", "Олег", "юля", "Борис", "катя"];
console.log("students2:", students2); //! ['Віка', 'андрій', 'Олег', 'юля', 'Борис', 'катя']

const inAlphabetOrder2Old = [...students223].sort();
console.log("inAlphabetOrder2Old:", inAlphabetOrder2Old); //! ['Борис', 'Віка', 'Олег', 'андрій', 'катя', 'юля']

const inAlphabetOrder2New = [...students223].sort((a, b) => a.localeCompare(b));
console.log("inAlphabetOrder2New:", inAlphabetOrder2New); //! ['андрій', 'Борис', 'Віка', 'катя', 'Олег', 'юля']

const inReversedOrder2New = [...students223].sort((a, b) => b.localeCompare(a));
console.log("inReversedOrder2New:", inReversedOrder2New); //! ['юля', 'Олег', 'катя', 'Віка', 'Борис', 'андрій']


// зробити сортування за зростанням за полем brief
console.log("aircrafts-before:", aircrafts)
const aircraftSortByName= [...aircrafts].sort((a, b) => a.name.brief.localeCompare(b.name.brief))
console.log("aircrafts-after:", aircrafts)
console.log("aircraftSortByName:", aircraftSortByName)


//! Сортування об'єктів
console.warn("Сортування об'єктів:");
//? ✴️ Під час роботи з масивом об'єктів, 
//? сортування виконується за числовим 
//? або рядковим значенням певної властивості. 
//? Наприклад, у нас є група студентів з балами за тест. 
//? Необхідно відсортувати масив об'єктів за зростанням 
//? і спаданням кількості балів, і за ім'ям студента.
const students3 = [
    { name: "Манго", score: 83 },
    { name: "Полі", score: 59 },
    { name: "Аякс", score: 37 },
    { name: "Ківі", score: 94 },
];
console.log("students3:", students3);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const inAscendingScoreOrder = students3.sort(
//     (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log("inAscendingScoreOrder:", inAscendingScoreOrder); //! 

// const inDescendingScoreOrder = students3.sort(
//     (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log("inDescendingScoreOrder:", inDescendingScoreOrder); //!

const inAlphabeticalOrder = students3.sort((firstStudent, secondStudent) =>
    firstStudent.name.localeCompare(secondStudent.name)
);
console.log("inAlphabeticalOrder:", inAlphabeticalOrder); //! 
console.log("-------------------------------------------------------------------------------");



//! Метод toSorted()
console.warn("Синтаксис методу toSorted():");
//? ✴️ Метод toSorted() працює також як метод sort(),
//? але на відміну від метод sort()
//? він НЕ змінює вихідний (оригінальний) масив,
//? 🔸 Поелементо перебирає оригінальний масив.
//? 🔸 Не змінює оригінальний масив.
//? 🔸 Повертає НОВИЙ відсортований масив.
//? 🔸 За замовчуванням сортує за зростанням.❗️
//? 🔸 Сортування відбувається шляхом приведення значень
//?    до рядка і порівняння порядкових номерів у таблиці Unicode.
console.log(
    `%c
    массив.toSorted();
    `,
    'color: blue; font-size: 18px',
);
console.log(
    `%c
    массив.toSorted((a, b) => {
        // тіло колбек-функції
    });
    `,
    'color: blue; font-size: 18px',
);
//? 🔸 a - перший елемент для порівняння.
//? 🔸 b - другий елемент для порівняння.
//? ✴️ Якщо виклик compareFunction(a, b)
//? повертає будь-яке від'ємне значення,
//? тобто a менше b,
//? сортування поставить a перед b.
//? Це сортування за зростанням.
//? ✳️ Якщо виклик compareFunction(a, b) поверне 0, 
//? сортування залишить a і b незмінними 
//? по відношенню один до одного, 
//? але відсортує їх по відношенню до всіх інших елементів. 
//? Але взагалі неважливо, що повертати, 
//? якщо їх взаємний порядок не має значення.
const scores5 = [27, 2, 41, 4, 7, 3, 75];
console.log("scores5_before:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const ascendingScores5 = scores5.toSorted((a, b) => a - b);
const descentingScores5 = scores5.toSorted((a, b) => b - a);

console.log("ascendingScores5:", ascendingScores5);  //! [2, 3, 4, 7, 27, 41, 75]
console.log("descentingScores5:", descentingScores5);  //! [75, 41, 27, 7, 4, 3, 2]

console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");
console.log("scores5_after:", scores5); //! [27, 2, 41, 4, 7, 3, 75]
console.log("-------------------------------------------------------------------------------");

const aircraftsSortedByPrice = aircrafts.toSorted((a, b) => a.info.price - b.info.price);
console.log("aircraftsSortedByPrice:", aircraftsSortedByPrice)
const arrayPricePlane = aircraftsSortedByPrice.map(element => element.info.price)
console.log("arrayPricePlane:", arrayPricePlane)



//! 3.Ланцюжки методів
//? ✳️ У нас є масив об'єктів з іменами, балами і відвідуваними предметами кожного студента.
const students221 = [
    { name: "Манго", score: 83, courses: ["математика", "фізика"] },
    { name: "Полі", score: 59, courses: ["інформатика", "математика"] },
    { name: "Аякс", score: 37, courses: ["фізика", "біологія"] },
    { name: "Ківі", score: 94, courses: ["література", "інформатика"] },
];

//? ✳️ Необхідно отримати масив їхніх імен,
//? відсортованих за зростанням балів за тест.
//? З цією метою ми відсортуємо копію масиву методом sort(),
//? після чого методом map() створимо масив значень властивості name
//? з відсортованого масиву.
const sortedByAscendingScore = [...students221].sort((a, b) => a.score - b.score);
const names1 = sortedByAscendingScore.map(student => student.name);

console.log("names1:", names1); //! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Проблема в тому, що у нас з'являються проміжні змінні
//? після кожної операції, крім фінальної.
//? Змінна sortedByAscendingScore - зайва
//? і необхідна тільки для зберігання проміжного результату.
//? ✳️ Позбутися таких «мертвих» змінних можна
//? за допомогою групування викликів методів у ланцюжку.
//? Кожний наступний метод буде виконуватися
//? на основі результату роботи попереднього.
//? 🔸 Робимо копію вихідного масиву перед сортуванням.
//? 🔸 На копії викликаємо метод sort().
//? 🔸 До результату роботи методу sort() застосовуємо метод map().
//? 🔸 Змінній names присвоюється результат роботи методу map().

const names2 = [...students221]
    .sort((a, b) => a.score - b.score)
    .map(student => student.name);

console.log("names2:", names2); //! ['Аякс', 'Полі', 'Манго', 'Ківі']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? ✳️ Отримаємо масив унікальних відвідуваних предметів, відсортований за алфавітом.
//? 🔸 На вихідному масиві викликаємо flatMap() і робимо розгладжений масив усіх курсів.
//? 🔸 До результату методу flatMap() застосовуємо метод filter() для фільтрації унікальних елементів.
//? 🔸 На результаті методу filter() викликаємо sort().
//? 🔸 Змінній uniqueSortedCourses присвоюється результат роботи методу sort().
const uniqueSortedCourses = students221
    .flatMap(student => student.courses)
    .filter((course, index, array) => array.indexOf(course) === index)
    .sort((a, b) => a.localeCompare(b));

console.log("uniqueSortedCourses:", uniqueSortedCourses);  //! ['біологія', 'інформатика', 'література', 'математика', 'фізика']
console.log("----------------------------------------------------------------------------------------------");


// створити масив ціни літаків відсортований за зростанням

const arrayPricePlane2 = aircrafts
    .toSorted((a, b) => a.info.price - b.info.price)
    .map(element => element.info.price); 

console.log("arrayPricePlane2:", arrayPricePlane2)

// ДЗ передивитися всі приклади із літаками і використати в рішеннях цих задач лянцюжки методів