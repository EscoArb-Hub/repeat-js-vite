//! 🅰️ Операція rest (збирання всіх аргументів функції)
console.warn("🅰️ Операція rest \n  (збирання всіх аргументів функції):");
//? ✴️ Операція ...(rest) дозволяє
//? зібрати групу незалежних елементів у нову колекцію)(масив).
//? ✳️ Синтаксично, ...(rest) - це близнюк операції розподілу,
//? але відрізнити їх просто:
//? - розподіл, (spread) - коли ... знаходиться у ПРАВІЙ❗️ частині операції присвоювання,
//? а збирання, (rest) - коли ... знаходиться в її ЛІВІЙ❗️ частині операції присвоювання.
//? ✴️ Операція ... (rest) може
//? зібрати в масив ВСІ аргументи функції.
function multiply(...args) {
    console.log("args:", args); //todo: масив усіх аргументів
    let sum = 0;
    for (let item of args) {
        sum = sum + item
        console.log("item:", item)
        console.log("args:", args)
    }
    // let sum = item + args
    console.log("sum:", sum)
    return sum;
};

// multiply(1, 2);
// multiply(1, 2, 3);
multiply(1, 2, 3, 4);
// multiply([1, 2, 3, 4]); //! ❓❓❓
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



//! 🅱️ Операція rest (збирання частини аргументів функції)
console.warn("🅱️ Операція rest \n  (збирання частини аргументів функції):");
//? ✴️ Операція ... (rest) також дозволяє
//? зібрати в масив тільки ту ЧАСТИНУ аргументів,
//? яка необхідна, оголосивши деякі параметри до «збирання».
//? ✳️ Всі аргументи, для яких будуть оголошені параметри,
//? передадуть їм свої значення,
//? інші аргументи будуть поміщені в масив.
//? ✳️❗️ Операція rest збирає решту усіх аргументів,
//? а тому повинна бути останньою❗️ у списку усіх параметрів функції, 
//? інакше виникне помилка.
function multiply2(firstNumber, secondNumber, ...otherArgs) {
    console.log("firstNumber:", firstNumber); //todo: Значення першого аргументу
    console.log("secondNumber:", secondNumber); //todo: Значення другого аргументу
    console.log("otherArgs:", otherArgs); //todo: Масив інших аргументів
    console.log("`  `  `  `  `  `  `  `  `");
};

multiply2(1, 2);
multiply2(1, 2, 3);
multiply2(1, 2, 3, 4);
multiply2([1, 2, 3, 4]); //! ❓❓❓
console.log("---------------------------------------------------------");




//! Присвоєння за значенням
console.warn("Присвоєння за значенням:");
//? ✴️ За умови передачі за значенням,
//? змінним виділяється нова комірка пам'яті
//? і в неї копіюються дані.
//? ✳️ Присвоєння за значенням: в пам'яті буде створена ще
//? одна комірка, в яку буде скопійоване значення 5
let a = 5;
let b = a;
console.log("a:", a); //! 5
console.log("b:", b); //! 5
console.log(". . . .");

//? ✳️ Змінимо значення a на 10:
a = 10;
console.log("a:", a); //! 10
//? ✳️ Значення b не змінилося, оскільки це окрема копія:
console.log("b:", b); //! 5
console.log("------------------------------------------------");



//! Присвоєння за посиланням 
console.warn("Присвоєння за посиланням:");
//? ✴️ Складні типи - об'єкти, масиви, функції присвоюються за посиланням,
//? тобто змінна просто отримує посилання на вже існуючий об'єкт.
//? ✳️ Оскільки objA - це об'єкт, в objB записується посилання на вже існуючий
//? в пам'яті об'єкт objA. Тепер objA і objB вказують на один і той же об'єкт:
const objA = { name: 'Mango', age: 2 };
const objB = objA;
console.log("objA:", objA); //! {name: 'Mango', age: 2}
console.log("objB:", objB); //! {name: 'Mango', age: 2}
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Змінимо об'єкт, змінивши значення властивості,
//? використовуючи вказівник з objA:
objA.age = 3;
console.log("objA:", objA); //! {name: 'Mango', age: 3}

//? ✳️ objB також змінилось, тому що objB,
//? як і objA, просто містять посилання на 
//? одне і те ж саме місце в пам'яті:
console.log("objB:", objB); //! {name: 'Mango', age: 3}
console.log(". . . . . . . . . . . . . . . . .");

//? ✳️ Результат повторюється, 
//? якщо додати ще одину влистивість до objB:
objB.gender = "male";
console.log("objA:", objA); //! {name: 'Mango', age: 3, gender: 'male'}
console.log("objB:", objB); //! {name: 'Mango', age: 3, gender: 'male'}
console.log("------------------------------------------------");


const objC = objB
const objD = objA

objC.age = 5;

objD.city = 'Kiyv'

// console.log("objC:", objC); 
// console.log("objD:", objD); 
// console.log("objA:", objA); 
// console.log("objB:", objB);

const objF = { ...objA }

console.log("objA:", objA);
console.log("objF:", objF);

// delete book3.genres2
delete objF.city
delete objA.gender

console.log("objA:", objA);
console.log("objF:", objF);



//! Деструкткризація об'єктів
console.warn("Деструкткризація об'єктів:");
//? ✴️ Під час розробки програм дані приходять,
//? як правило, у вигляді масивів і об'єктів,
//? значення яких необхідно записати у локальні змінні.
//? Для того, щоб робити це максимально просто,
//? в сучасному стандарті існує
//? синтаксис деструктуризованого присвоювання.

//? ✳️ Складні дані завжди представлені об'єктом.
//? Багаторазові звернення до властивостей об'єкта
//? візуально забруднюють код, 
//? якщо потрібно отримати значення окремих змінних:
const book = {
    title: "The Last Kingdom1",
    author: "Bernard Cornwell",
    genres: ["historical prose", "adventure"],
    isPublic: false,
    rating: 8.38,
};
console.log("book:", book);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const accessType1 = book.isPublic ? "публічному" : "закритому";
console.log("accessType1:", accessType1)
const message1 = `Книга ${book.title} автора ${book.author} з рейтингом ${book.rating} знаходиться в ${accessType1} доступі.`;
console.log("message1:", message1);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✳️ Якщо потрібно окремо отримати змінні
//? з такими ж назвами як власивості об'єкта
//? та їх значеннями, то можна просто створити їх:
// const title = "The Last Kingdom";
// const author = "Bernard Cornwell";
// const genres = ["historical prose", "adventure"];
// const isPublic = true;
// const rating = 8.38;

// console.log("title:", title);
// console.log("author:", author);
// console.log("genres:", genres);
// console.log("isPublic:", isPublic);
// console.log("rating:", rating);
// console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

// const accessType2 = isPublic ? "публічному" : "закритому";
// const message2 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType2} доступі.`;
// console.log("message2:", message2);
// console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");


//? ✴️ Для отримання змінних з такими ж назвами
//? як власивості об'єкта та їх значеннями,
//? використаємо синтаксис ❗️деструктуризованого присвоювання❗️. 
//? ✳️ Деструктуризація завжди знаходиться у лівій частині операції присвоєння. 
//? Змінним всередині фігурних дужок присвоюються значення властивостей об'єкта. 
//? Якщо ім'я змінної та ім'я властивості збігаються, відбувається присвоювання, 
//? в іншому випадку, їй буде присвоєно undefined. 
//? Порядок оголошення змінних у фігурних дужках - неважливий.
const { title, author, genres, isPublic, rating, coverImage } = book;

console.log("title:", title);
console.log("author:", author);
console.log("genres:", genres);
console.log("isPublic:", isPublic);
console.log("rating:", rating);
console.log("coverImage:", coverImage); //! undefined
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const accessType2 = isPublic ? "публічному" : "закритому";
const message2 = `Книга ${title} автора ${author} з рейтингом ${rating} знаходиться в ${accessType2} доступі.`;
console.log("message2:", message2);
console.log("----------------------------------------------------------------------------------------------------------------------");



//! Значення за замовчуванням
console.warn("Значення за замовчуванням:");
//? ✳️ Додамо зображення обкладинки, якщо воно відсутнє в об'єкті книги
const book1 = {
    title1: "The Last Kingdom",
    author1: "Bernard Cornwell",
    genres1: ["historical prose", "adventure"],
    isPublic1: true,
    rating1: 8.38,
    // coverImage1: "https://480",
};
console.log("book1:", book1);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title1,
    author1,
    genres1,
    isPublic1,
    rating1,
    coverImage1 = "https://via.placeholder.com/640/480",
} = book1;

console.log("title1:", title1);
console.log("author1:", author1);
console.log("genres1:", genres1);
console.log("isPublic1:", isPublic1);
console.log("rating1:", rating1);
console.log("coverImage1:", coverImage1); //! "https://via.placeholder.com/640/480"
console.log("----------------------------------------------------------------------------------------------------------------------");



//! Зміна імені змінної
console.warn("Зміна імені змінної:");
//? ✴️ Під час деструктуризації можна змінити ім'я змінної, 
//? в яку розпаковується значення властивості. 
//? Спочатку пишемо ім'я властивості, з якої хочемо отримати значення, 
//? після чого ставимо двокрапку і пишемо ім'я змінної, 
//? в яку необхідно помістити значення цієї властивості.
const firstBook = {
    title: "The Last Kingdom",
    coverImage: "https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg",
};
console.log("firstBook:", firstBook);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    title: firstTitle,
    coverImage: firstCoverImage = "https://via.placeholder.com/640/480",
} = firstBook;

console.log("firstTitle:", firstTitle); //! The Last Kingdom
console.log("firstCoverImage:", firstCoverImage);  //! https://images-na.ssl-images-amazon.com/images/I/51b5YG6Y1rL.jpg
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const secondBook = {
    title: "Сон смішної людини",
};
console.log("secondBook:", secondBook);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");


const {
    title: secondTitle,
    coverImage: secondCoverImage = "https://via.placeholder.com/640/480",
} = secondBook;

console.log("secondTitle:", secondTitle);  //! Сон смішної людини
console.log("secondCoverImage:", secondCoverImage); //! https://via.placeholder.com/640/480
console.log("----------------------------------------------------------------------------------------------------------------------");



//! Деструктуризація в циклах
console.warn("Деструктуризація в циклах:");
//? ✴️ Перебираючи масив об'єктів циклом for...of,
//? утворюються багаторазові звернення до властивостей об'єкта.
console.warn("Приклад-1:");
const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "На березі спокійних вод",
        author: "Роберт Шеклі",
        rating: 8.51,
    },
];

for (const book of books) {
    console.log("book.title:", book.title);
    console.log("book.author:", book.author);
    console.log("book.rating:", book.rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



console.warn("Приклад-2:");
//? ✴️ Для того, щоб скоротити кількість повторень, 
//? можна деструктуризувати властивості об'єкта 
//? у локальні змінні в тілі циклу.
for (const book of books) {
    const { title, author, rating } = book;

    console.log("title:", title);
    console.log("author:", author);
    console.log("rating:", rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



console.warn("Приклад-3:");
//? ✴️ Якщо в об'єкті небагато властивостей,
//? можна виконати деструктуризацію
//? безпосередньо у місці оголошення змінної book.
for (const { title, author, rating } of books) {
    console.log("title:", title);
    console.log("author:", author);
    console.log("rating:", rating);
    console.log("`  `  `  `  `  `  `  `  `  `  `  `  `");
};
console.log("----------------------------------------------------------------------------------------------------------------------");



//! Глибока деструктуризація
console.warn("Глибока деструктуризація:");
//? ✴️ Для деструктуризації властивостей
//? вкладених об'єктів використовуються
//? ті самі принципи, що й в трьох попередніх вправах.
const user = {
    name: "Jacques Gluke",
    tag: "jgluke",
    stats: {
        followers: 5603,
        views: 4827,
        likes: 1308,
    },
};
console.log("user:", user);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const {
    name,
    tag,
    stats,
    stats: { followers, views: userViews, likes: userLikes = 0 },
} = user;

console.log("name:", name); //! Jacques Gluke
console.log("tag:", tag); //! jgluke
console.log("stats:", stats); //! {followers: 5603, views: 4827, likes: 1308}  або Uncaught ReferenceError: stats is not defined
console.log("followers:", followers); //! 5603
console.log("userViews:", userViews); //! 4827
console.log("userLikes:", userLikes); //! 1308
console.log("----------------------------------------------------------------------------------------------------------------------");



const plane = {

    id: "0001",
    aircraftType: "plane",
    name: {
        brief: "F4U",
        full: "Chance Vought F4U Corsair",
        nickname: "Корсар («Corsair»)"
    },
    info: {
        year: 1940,
        country: "США",
        type: "Палубний винищувач-бомбардувальник",
        price: "$75000, (20,2 мільйони фунтів стерлінгів)",
        description: "Винищувач відмінно зарекомендував себе в ході бойових дій, перебував на озброєнні американської палубної авіації, в морській піхоті, а також у флотах Великої Британії, Нової Зеландії, Франції та інших країнах світу. Деякі японські пілоти вважали його найпотужнішим винищувачем Другої світової війни, а експерти американських ВМС підрахували співвідношення бойових втрат у повітряних боях за участю «Корсарів», як 11:1 на користь останнього"
    },
    url: {
        wikipedia: "https://ru.wikipedia.org/wiki/Chance_Vought_F4U_Corsair",
        main: "https://upload.wikimedia.org/wikipedia/commons/6/66/Vought_F4U_Corsair_%28USMC%29.jpg",
        promotional: "https://lh3.googleusercontent.com/pw/AP1GczNh-CpdG_a_fuuSMlc9VCN7ShubGyMaFx52L4FclMvqYWeuC99keF6BY8Wy5KTY1Tfqf0Q9Pa8LRYtV4ihBl5Un2hRhdm0yqIpu6RmKUVSXNqcipmN-iuBpIYlHtdP9vIiZEnvhs34g4B623cFbalwF=w1354-h938-s-no-gm?authuser=0"
    },
    manufacturing: {
        start: "1940-01-01T00:00:00",
        end: "1952-01-01T00:00:00"
    },
    model: {
        colorsPrice: {
            silver: 540,
            darkGreen: 580,
            blue: 0,
            navyBlue: 0,
            darkGrey: 0,
            white: 0
        },
        actualImages: [
            "/airplane-model-store3-state2/images/planes-actual/f4u-comp-1.jpg",
            "/airplane-model-store3-state2/images/planes-actual/f4u-comp-2.jpg",
            "/airplane-model-store3-state2/images/planes-actual/f4u-comp-3.jpg",
            "/airplane-model-store3-state2/images/planes-actual/f4u-comp-4.jpg"
        ],
        actualFullImages: [
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
        _actualFullImages: [
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
        _actualFullImages_none: [
            "https://photos.fife.usercontent.google.com/pw/AP1GczNHb6oX_TXg7Htgp-nMi96FW5ZZlldN5KR_PdDT3e3Hm1ta0FUiot-o=w2450-h1838-s-no-gm?authuser=0",
            "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/preview",
            "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/view?usp=sharing",
            "https://drive.google.com/file/d/1QsOD3fUJvnKaDZ9HbJOLfIG_Xi6_hkPt/view?usp=drive_link",
            "https://drive.google.com/file/d/1naBi6ZcMfplM2b62Jxoh7p3Wn5MvBNwV/view?usp=sharing",
            "https://drive.google.com/drive/folders/1FrWCDHIzbj8ADx5LykHr1uwrSKc1m_cX"
        ]
    }
}

const {
    manufacturing: { start, end },
    model: { colorsPrice: {silver, blue} },
} = plane;
 

console.log("start:", start)
console.log("end:", end)
console.log("silver:", silver)
console.log("blue:", blue)



//! Часткова деструктуризація
console.warn("Часткова деструктуризація:");
//? ✴️ Використовуючи операцію ... (rest)
//? можна робити часткову деструктуризацію,
//? взявши з об'єкта необхідні поля,
//? а решту зібрати в змінну під ім'ям rest (ім'я змінної довільне),
//? це буде об'єкт з тими полями,
//? які ми явно НЕ деструктуризували в змінні.
const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100,
};
console.log("hotel:", hotel);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const { name: hotelName, ...restRemainingObjectProperties } = hotel;

console.log("hotelName(= name):", hotelName); //! // 'Resort Hotel'
console.log("restRemainingObjectProperties:", restRemainingObjectProperties); //! {stars: 5, capacity: 100}
console.log("----------------------------------------------------------------------------------------------------------------------");

// const objF = { ...objA }
// delete objF.city

const hotel2 = { ...hotel }
delete hotel2.name

console.log("hotel2:", hotel2)

//! Деструкткризація масивів
console.warn("Деструкткризація масивів:");
//? ✴️ Деструктуризоване присвоювання можна використовувати
//? і для масивів, але з деякими особливостями.
//? ❗️➖ Замість фігурних дужок {} використовуються квадратні [].
//? ❗️➖ Змінним, зазначеним у квадратних дужках [],
//?      будуть послідовно присвоюватися значення елементів масиву.
//? ✳️ Після ключового слова const або let ставимо
//? квадратні дужки, як і у випадку з оголошенням масиву.
//? Всередині дужок, через кому, вказуємо імена змінних,
//? в які будуть поміщені значення масиву.
//? ✳️ Внаслідок такого запису будуть створені 3 змінні, 
//? і в них будуть поміщені елементи в нумерованому порядку
//?  - від 0 і до кінця масиву.
const rgb1 = [200, 255, 100];
console.log("rgb1:", rgb1);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red1, green1, blue1] = rgb1;

console.log(`Red1:${red1}, Green1:${green1}, Blue1:${blue1}`); //! 'Red1:200, Green1:255, Blue1:100'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");



//! Присвоєння значення змінної після її оголошення
console.warn("Присвоєння значення змінної після її оголошення:");
//? ✴️ Під час деструктуризації масивів,
//? значення змінної може присвоюватися після її оголошення.
//? На практиці це рідко використовується.
const rgb2 = [128, 100, 255];
console.log("rgb2:", rgb2);
console.log("`  `  `  `  `  `  `  `  `  `");

let red2, green2, blue2;

[red2, green2, blue2] = rgb2;

console.log(`Red2:${red2}, Green2:${green2}, Blue2:${blue2}`); //! 'Red2:128, Green2:100, Blue2:255'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");



//! Значення за замовчуванням
console.warn("Значення за замовчуванням:");
//? ✴️ Якщо змінних більше, ніж елементів масиву,
//? їм буде присвоєно undefined,
//? тому можна вказувати значення за замовчуванням.
const rgb3 = [100, 128, 200];
console.log("rgb3:", rgb3);
console.log("`  `  `  `  `  `  `  `  `  `");

const [red3, green3, blue3, alfa3 = 0.3] = rgb3;

console.log(`Red3:${red3}, Green3:${green3}, Blue3:${blue3}, Alfa3:${alfa3}`); //! 'Red3:100, Green3:128, Blue3:200, Alfa3:0.3'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");



//! Часткова деструктуризація
console.warn("Часткова деструктуризація:");
//? ✴️ Іноді з масиву необхідно деструктуризувати тільки перші N елементів,
//? а інші зберегти в одну змінну у вигляді масиву.
//? Деструктуруючи масив, можна розпакувати і присвоїти
//? іншу частину елементів масиву змінної, використовуючи операцію ... (rest).
const rgb4 = [128, 56, 13, 150, 220, 50];
console.log("rgb4:", rgb4);
console.log("`  `  `  `  `  `  `  `  `  `");

const [rg1, rg2, , rg3, rg4, rg5] = rgb4;

// const result = []
// let result;
const [g1, g2, , ...restArray] = rgb4
restArray.unshift(g1, g2)
console.log("restArray:", restArray)

const v = [].concat(rg1, rg2, rg3, rg4, rg5)
const v2 = [rg1, rg2, rg3, rg4, rg5]
// result.concat([rg1, rg2, rg3, rg4, rg5])



console.log("v:", v)
console.log("v:", v)
// console.log("result:", result)


const [, ...restOthercColors4] = rgb4;


// console.log("red4:", red4); //! 150
console.log("restOthercColors4:", restOthercColors4); //! [220, 50]
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . .");



//! Пропуск елементів
console.warn("Пропуск елементів:");
const rgb5 = [11, 112, 213];
console.log("rgb5:", rgb5);
console.log("`  `  `  `  `  `  `  `  `  `");

const [, , blue5] = rgb5;

console.log(`Blue5: ${blue5}`); //! 'Blue5: 213'
console.log("---------------------------------------------------");



//! Патерн «Об'єкт параметрів»
//? ✴️ Якщо функція приймає більше двох-трьох аргументів,
//? дуже просто заплутатись, в якій послідовності і що передавати.
//? В результаті виходить дуже неочевидний код в місці її виклику.
function doStuffWithBook1(title, numberOfPages, downloads, rating, isPublic) {
    //todo: Робимо щось з параметрами:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

//? ❓❓❓ Що таке The Last Kingdom? Що таке 736? Що таке 10283? Що таке 8.38? Що таке true?
doStuffWithBook1("The Last Kingdom", 736, 10283, 8.38, true);
console.log(". . . . . . . . . . . . . . . . .");



//? ✳️ Патерн «Об'єкт параметрів» допомагає вирішити цю проблему,
//? замінюючи набір параметрів всього одним об'єктом з іменованими властивостями.
  const  book22 = {
    title: "The Last Kingdom",
    numberOfPages: 736,
    downloads: 10283,
    rating: 8.38,
    isPublic: true,
};
console.log("book22:", book22);
console.log("`  `  `  `  `  `  `  `  `  `  `  `");

function doStuffWithBook2(bookObj) {
    //todo: // Робимо щось з властивостями об'єкта:
    console.log("bookObj.title:", bookObj.title);
    console.log("bookObj.numberOfPages:", bookObj.numberOfPages);
    console.log("bookObj.downloads:", bookObj.downloads);
    console.log("bookObj.rating:", bookObj.rating);
    console.log("bookObj.isPublic:", bookObj.isPublic);
};

doStuffWithBook2(book22);
console.log(". . . . . . . . . . . . . . . . .");



//? ✳️ Ще один плюс у тому, 
//? що можна деструктуризувати об'єкт в параметрі book. 
//? Це можна зробити в тілі функції.
function doStuffWithBook3(bookObj) {
    const { title, numberOfPages, downloads, rating, isPublic } = bookObj;
    //todo: Робимо щось вже з значеннями, деструктуризуваними з об'єкта:
    console.log("title:", title);
    console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

doStuffWithBook3(book22);
console.log(". . . . . . . . . . . . . . . . .");



//? ✳️ Або відразу деструктуризуємо об'єкт
//? в сигнатурі (підписі) функції - немає різниці.
function doStuffWithBook4({
    isPublic,
    title,
    // numberOfPages,
    downloads,
    rating}) {
    //todo: Робимо щось вже з значеннями, деструктуризуваними з об'єкта в сигнатурі (підписі) функції:
    console.log("title:", title);
    // console.log("numberOfPages:", numberOfPages);
    console.log("downloads:", downloads);
    console.log("rating:", rating);
    console.log("isPublic:", isPublic);
};

doStuffWithBook4(book22);
console.log("---------------------------------");

