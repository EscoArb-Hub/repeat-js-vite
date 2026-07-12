//! Багатовимірні масиви
//? Багатовимірні масиви
//? Масиви можуть містити інші масиви як елементи.
//? Це можна використовувати для створення матриць.
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];
console.log("Багатовимірний масив [matrix]:", matrix); //! [Array(3), Array(3), Array(3)]
console.log("matrix[0][0]:", matrix[0][0]); //! 1
console.log("matrix[1][1]:", matrix[1][1]); //! 5
console.log("matrix[2][2]:", matrix[2][2]); //! 9
console.log("----------------------------------------------");



//todo: ПРИКЛАД:
//? Використуємо вкладені цикли для того
//? щоб перебрати багатовимірний масив [matrix]
//? та знайти суму всіх його елементів.
let total = 0;

for (let i = 0; i < matrix.length; i += 1) {
    console.log(`Підмасив матриці matrix[${i}]:`, matrix[i]);

    for (let j = 0; j < matrix[i].length; j += 1) {
        console.log(`Елемент підмасив матриці matrix[${i}][${j}]:`, matrix[i][j]);
        total += matrix[i][j];
        // console.log("total in for:", total);
    }
}
console.log("Сума всіх елементів, <total> = ", total); //! 45

console.log("----------------------------------------------");
// Використати в цьому прикладі цикл for of
let total2 = 0;
for (const array of matrix) {
    console.log(`Підмасив матриці matrix[${array}]:`);

    for (const number of array) {
        console.log(`всі значення array[${number}]:`);
    total2 = total2 + number
    }
}
console.log("Сума всіх елементів, <total2> = ", total2); //! 45


//! Присвоєння за значенням і за посиланням
const relativePath = "lesson-FE3_12/lesson-FE3_12.html";
console.warn(`Присвоєння за значенням і за посиланням (Урок-JS-12): \n ${(window.location.href.split('/')).slice(0, -2).join('/') + '/'}${relativePath}`);


//! Присвоєння за значенням
console.warn("Присвоєння за значенням (копія):");

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
console.log("--------------------------------------");


//! Присвоєння за посиланням 
console.warn("Присвоєння за посиланням (Ярлик):");
//? ✴️ Складні типи - об'єкти, масиви, функції присвоюються за посиланням,
//? тобто змінна просто отримує посилання на вже існуючий об'єкт.
//? ✳️ Оскільки arrA - це масив, в arrB записується посилання на вже існуючий
//? в пам'яті масив arrA. Тепер arrA і arrB вказують на один і той же масив:
const arrA = ["Mango"];
const arrB = arrA;
console.log("arrA:", arrA); //! ['Mango']
console.log("arrB:", arrB); //! ['Mango']
console.log(". . . . . . . . . . . . . . . . . . . .");

//? ✳️ Змінимо масив, додавши ще один елемент,
//? використовуючи вказівник з arrA:
arrA[1] = "Poly"; //todo: var.1
// arrA.push("Poly"); //todo: var.2
console.log("arrA:", arrA); //! ['Mango', 'Poly']

//? ✳️ arrB також змінилось, тому що arrB,
//? як і arrA, просто містять посилання на 
//? одне і те ж саме місце в пам'яті:
console.log("arrB:", arrB); //! ['Mango', 'Poly']
console.log(". . . . . . . . . . . . . . . . . . . .");

//? ✳️ Результат повторюється, 
//? якщо додати ще один елемент до arrB:
arrB[arrB.length] = "Ajax"; //todo: var.1
// arrB.push("Ajax"); //todo: var.2
console.log("arrA:", arrA); //! ['Mango', 'Poly', 'Ajax']
console.log("arrB:", arrB); //! ['Mango', 'Poly', 'Ajax']
console.log("--------------------------------------");



//! Метод split()
console.warn("Метод split():");
//? Метод split(delimiter) перетворює рядок в масив,
//? «розбиваючи» його роздільником delimiter.
//? Якщо роздільник - це порожній рядок,
//? то створиться масив окремих символів.
//? Роздільником може бути один або декілька символів.
const string = "Mango";
console.log('string:', string);

const stringToArr1 = string.split("");
console.log('string.split(""):', stringToArr1); //! ['M', 'a', 'n', 'g', 'o']

const stringToArr2 = string.split("n");
console.log('string.split("n"):', stringToArr2); //! ['Ma', 'go']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . .");

const message = "JavaScript - це цікаво";
console.log('message:', message);
let messageArr = message.split(" ");
console.log('messageArr = message.split(" "):', messageArr); //! ['JavaScript', '-', 'це', 'цікаво']
console.log("--------------------------------------------------------------------------");



//! Метод join()
console.warn("Метод join():");
//? Метод масивів join(delimiter)
//? об'єднує елементи масиву у рядок.
//? У рядку елементи будуть розділені символом
//? або групою символів, зазначених в delimiter.
//? Тобто ця операція протилежна методу рядків split(delimiter).
messageArr = ["JavaScript", "це", "цікаво"];
console.log('messageArr:', messageArr);
console.log('messageArr.join(""):', messageArr.join("")); //! "JavaScriptцецікаво"
console.log('messageArr.join(" "):', messageArr.join(" ")); //! "JavaScript це цікаво"
console.log('messageArr.join("-"):', messageArr.join("-")); //! "JavaScript-це-цікаво"
console.log("--------------------------------------------------------------------------");


//! Метод indexOf()
console.warn("Метод indexOf():");
//? indexOf(value) повертає перший індекс,
//? в якому елемент зі значенням value
//? був знайдений в масиві, або число -1,
//? якщо такий елемент відсутній.
//? Використовуйте indexOf тоді,
//? коли необхідно отримати сам індекс елемента.
let clientsArr = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("clientsArr:", clientsArr); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.indexOf("Poly"):', clientsArr.indexOf("Poly")); //! 2
console.log('clientsArr.indexOf("Monkong"):', clientsArr.indexOf("Monkong")); //! -1
console.log("----------------------------------------------------");


//! Метод includes()
console.warn("Метод includes():");
//? includes(value) перевіряє, чи містить масив
//? елемент зі значенням value і повертає true
//? або false відповідно.
//? Застосування цього методу корисне в ситуаціях,
//? коли необхідно перевірити,
//? чи є елемент в масиві і не важлива його позиція (індекс).
clientsArr = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("clientsArr:", clientsArr); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log('clientsArr.includes("Poly"):', clientsArr.includes("Poly")); //! true
console.log('clientsArr.includes("Monkong"):', clientsArr.includes("Monkong")); //! false
console.log("----------------------------------------------------");



//! 4.Методи push() і pop() та unshift() і shift()
console.warn("Методи push() і pop() та unshift() і shift(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/methods-push-pop-unshift-shift.jpg");
//? Додають або видаляють крайні елементи масиву.
//? Працюють тільки з крайнім лівим
//? і крайнім правим елементом,
//? і не можуть вставити або видалити
//? елемент з довільної позиції.


//! Метод push()
console.warn("Метод push(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/push.png");
//? Метод push() додає один або декілька елементів
//? наприкінці масиву, без необхідності зазначати
//? індекси елементів, що додаються.
//? ПОВЕРТАЄ довжину масиву після додавання елементів.
const array = [];
console.log("array:", array); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const first = "first"
let push = array.push(first);
console.log('array.push("first"):', array); //! ['first']
console.log("push:", push); //! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("second");
console.log('array.push("second"):', array); //! ['first', 'second']
console.log("push:", push); //! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("third");
console.log('array.push("third"):', array); //! ['first', 'second', 'third']
console.log("push:", push); //! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("fourth");
console.log('array.push("fourth"):', array); //! ['first', 'second', 'third', 'fourth']
console.log("push:", push); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

push = array.push("fifth");
console.log('array.push("fifth"):', array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("push:", push); //! 5
console.log("-------------------------------------------------------------------------------");


//! Метод pop()
console.warn("Метод pop(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/pop.png");
//? Метод pop() видаляє останній елемент з кінця масиву
//? і ПОВЕРТАЄ видалений елемент. 
//? Якщо масив порожній, метод ПОВЕРТАЄ undefined.
console.log("array:", array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second', 'third', 'fourth']
console.log("pop:", pop); //! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second', 'third']
console.log("pop:", pop); //! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first', 'second']
console.log("pop:", pop); //! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! ['first']
console.log("pop:", pop); //! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! []
console.log("pop:", pop); //! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

pop = array.pop();
console.log('array.pop():', array); //! []
console.log("pop:", pop); //! undefined
console.log("-------------------------------------------------------------------------------");


//! Метод unshift()
console.warn("Метод unshift():");
//? Метод unshift() додає один або декілька елементів
//? в початок масиву, без необхідності зазначати
//? індекси елементів, що додаються.
//? ПОВЕРТАЄ довжину масиву після додавання елементів.
console.log("array:", array); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");





let unshift = array.unshift("fifth");
console.log('array.unshift("fifth"):', array); //! ['fifth']
console.log("unshift:", unshift); //! 1
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("fourth");
console.log('array.unshift("fourth"):', array); //! ['fourth', 'fifth']
console.log("unshift:", unshift); //! 2
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("third");
console.log('array.unshift("third"):', array); //! ['third', 'fourth', 'fifth']
console.log("unshift:", unshift); //! 3
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("second");
console.log('array.unshift("second"):', array); //! ['second', 'third', 'fourth', 'fifth']
console.log("unshift:", unshift); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

unshift = array.unshift("first");
console.log('array.unshift("first"):', array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log("unshift:", unshift); //! 5
console.log("-------------------------------------------------------------------------------");


//! Метод shift()
console.warn("Метод shift():");
//? Метод shift() видаляє елемент з початку масиву
//? і ПОВЕРТАЄ видалений елемент. 
//? Якщо масив порожній, метод ПОВЕРТАЄ undefined.
console.log("array:", array); //! ['first', 'second', 'third', 'fourth', 'fifth']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

let shift = array.shift();
console.log('array.shift():', array); //! ['second', 'third', 'fourth', 'fifth']
console.log("shift:", shift); //! 'first'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! ['third', 'fourth', 'fifth']
console.log("shift:", shift); //! 'second'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! ['fourth', 'fifth']
console.log("shift:", shift); //! 'third'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! ['fifth']
console.log("shift:", shift); //! 'fourth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! []
console.log("shift:", shift); //! 'fifth'
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

shift = array.shift();
console.log('array.shift():', array); //! []
console.log("shift:", shift); //! undefined
console.log("-------------------------------------------------------------------------------");


// const numArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200]
// const array51Elements = []
// const array52Elements = []
// const array53Elements = []
// let numOfElements = 0
// for (const item of numArray) {
    
//     if (numOfElements < 5) {
//         numOfElements = array51Elements.push(item)
//         console.log("numOfElements:", numOfElements)
//     }
//     else if (numOfElements < 10) {
//         numOfElements = array52Elements.push(item)
//         numOfElements = numOfElements + 5
//         console.log("numOfElements-else1:", numOfElements)

//     }
//     else if (numOfElements < 15) { 
//         numOfElements = array53Elements.push(item)
//         numOfElements = numOfElements + 10
//         console.log("numOfElements-else2:", numOfElements)
//     }
// };
// console.log("array5Elements:", array51Elements)
// console.log("array6Elements:", array52Elements)
// console.log("array6Elements:", array53Elements)

console.log("-------------------------------------------------------------------------------");
// array5Elements.shift()
// console.log("numArray:", numArray)
// console.log("array5Elements:", array5Elements)

// зробити так щоб кількість масивів по 5 елементів
// створюваляся автоматично з урахуванням аналізу початкового масиву
// 1 вимірюємо довжину віхдного масиву, n
// 2 якщо n ділиться на 5 без залишку тоді кількість нових масивів = n/5 якщо n/5 із залишком тоді додаємо n/5 + 1

const numArray2 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 22, 34, 44]
let resultArray = []
for (let i = 0; i < numArray2.length; i += 5) {
    let pieceArray = numArray2.slice(i, i + 5);
    resultArray.push(pieceArray);
}

console.log("resultArray:", resultArray);
// console.log("-------------------------------------------------------------------------------");

const numArray3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 22, 34, 44]

let resultArray3 = []
let arraySize = 5;
let numOfElements3 = 0;
for (let i = 0; numOfElements3 < numArray3.length; i += 1){
    let temp = []
    for (let value of numArray3.slice(numOfElements3, numOfElements3 + arraySize)) {

        temp.push(value);
    }
    resultArray3.push(temp)
    numOfElements3 += arraySize
}
console.log("resultArray3:", resultArray3)
// console.log("-------------------------------------------------------------------------------");


// const numArray3 = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 22, 34, 44]

// let resultArray3 = []
// let arraySize = 1;
// let numOfElements3 = 0;
// for (let i = 0; numOfElements3 < numArray3.length; i += 1) {
//     let temp = []
//     for (let value of numArray3.slice(numOfElements3, numOfElements3 + arraySize)) {

//         temp.push(value);
//     }
//     resultArray3.push(temp)
//     numOfElements3 += arraySize
// }
// console.log("resultArray3:", resultArray3)
// console.log("-------------------------------------------------------------------------------");



//? Сформуфати початковий масив arrayIn будь якої довжини, наприклад, m=13,
//? та розділити його на масиви по n=5 елементів,
//? і скласти з них вихідний масив масивів finalArr
let arrayIn = [];
const m = 21;
// const m = 21;
const n = 5;
// const n = 3;
//! Код виконаного завдання
//todo-1: Використовуємо готовий масив:
// arrayIn = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130];
for (let i = 1; i <= m; i += 1){
    arrayIn.push(i * 10)
}

console.log("arrayIn:", arrayIn);

let finalArrlength = Math.ceil(arrayIn.length / n);
console.log("finalArrlength:", finalArrlength);

let finalArr = [];

for (let i = 0; i < finalArrlength; i++) {
    const arr = [];

    for (let j = 0 + (i * n); j < n + (i * n); j++) {
        if (arrayIn[j]) arr.push(arrayIn[j]);
        // console.log("arr:", arr);
    };

    finalArr[i] = arr;
    console.log(`finalArr[${i}]`, finalArr[i]);
};
console.log("finalArr:", finalArr);

//todo: логіка роботи циклів
// n = 5:
// i = 1, j = 1 --- 5
// i = 2, j = 6 --- 10
// i = 3, j = 11 --- 13
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");



//! 5.Метод slice()
console.warn("Метод slice(): \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_08/images/slice.png");
//? .slice(start, end)  - ПОВЕРТАЄ новий масив, що містить
//? КОПІЮ частини початкового масиву, не змінюючи його.
//? КОПІЯ нового масиву створюється ВІД start і ДО end, але НЕ ВКЛЮЧНО end.
//? start та end - індекси елементів початкового масиву.
const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("clients:", clients); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']

const clientsSlice = clients.slice(1, 3);
console.log("clients.slice(1, 3):", clientsSlice); //! ['Ajax', 'Poly']

console.log("--------------------------------------------------------------");



//? Якщо start та end не зазначені,
//? буде створена повна копія початкового масиву.
const clientsSliceAll = clients.slice();
console.log("clients.slice():", clientsSliceAll); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("--------------------------------------------------------------");



//? Якщо не зазначено end, копіювання буде
//? зі start і до кінця початкового масиву.
const clientsSliceStart1 = clients.slice(1);
console.log("clients.slice(1):", clientsSliceStart1); //! ['Ajax', 'Poly', 'Kiwi']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSliceStart3 = clients.slice(3);
console.log("clients.slice(3):", clientsSliceStart3); //! ['Kiwi']
console.log("--------------------------------------------------------------");



//? У методі slice() можна не вказувати перший аргумент(start),
//? але при цьому треба вказати другий аргумент(end).
//? Якщо перший аргумент опущений, треба замість нього
//? задати значення undefined, яке інтерпретується як 0.
//? Тоді, копія початкового масиву створиться з початку масиву ДО end.
const clientsSliceEnd2 = clients.slice(undefined, 2);
console.log("clients.slice(undefined, 2):", clientsSliceEnd2); //! ['Mango', 'Ajax']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSliceEnd3 = clients.slice(undefined, 3);
console.log("clients.slice(undefined, 3):", clientsSliceEnd3); //! ['Mango', 'Ajax', 'Poly']
console.log("--------------------------------------------------------------");


//? Якщо start чи end негативні(від'ємні), тоді вони
//? інтерпретуються як довжина об'єкта плюс ix значення.
const clientsLength = clients.length;
console.log("clients.length:", clientsLength); //! 4
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSliceNegative = clients.slice(-3, -1);
console.log("clients.slice(-3, -1):", clientsSliceNegative); //! ['Ajax', 'Poly']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const clientsSlicePositive = clients.slice(1, 3);
console.log("clients.slice(1, 3):", clientsSlicePositive); //! ['Ajax', 'Poly']
console.log("--------------------------------------------------------------");





//! Метод splice()
//? Швейцарський ніж для роботи з масивами,
//? якщо вихідний масив необхідно змінити.
//? Видаляє, додає і замінює елементи у довільному місці масиву.


//! Видалення елементів масиву за допомогою splice()
console.warn("splice() - видалення елементів масиву:");
//? Щоб видалити елементи в масиві, передаються два аргументи:
//todo: splice(index, num);
//? index — вказує індекс першого елемента для видалення
//? num — визначає кількість елементів, що видаляються.
//? Метод splice змінює вихідний масив і
//? ПОВЕРТАЄ масив, що містить видалені елементи.
const scores = [10, 20, 30, 40, 50];
console.log("scores:", scores); //! [10, 20, 30, 40, 50]

//? Видаляємо три елементи масиву, починаючи з другого елемента (індекс = 1):
// console.log(scores.splice(1, 3)); //! [20, 30, 40]
const deletedScores = scores.splice(1, 3);

//? Тепер масив scores містить лише два елементи:
console.log("scores.splice(1, 3) --> scores:", scores); //! [10, 50]

//? А масив deletedScores містить три видалені елементи:
console.log("deletedScores:", deletedScores); //! [20, 30, 40]
console.log("-----------------------------------------------------------");


//! Додавання елементів в масив за допомогою splice()
console.warn("splice() - додавання елементів в масив:");
//? Для того, щоб додати один або декілька елементів в масив,
//? необхідно передати ТРИ або більше аргументи,
//? за такої умови, що другий аргумент повинен дорівнювати нулю.
//todo: splice(index, 0, new_element_1, new_element_2, ...)
//? Аргумент index вказує на початковий індекс масива,
//? куди будуть вставлені нові елементи.
//? Другий аргумент - 0, він вказує методу splice() не видаляти
//? елементи в місці додавання нових, починаючи з index.
//? Третій, четвертий і всі наступні аргументи
//? - це нові елементи, які додаються в масив, починаючи з index.
//? ПОВЕРТАЄ пустий масив.
const colors = ["red", "green", "blue"];
console.log("colors:", colors); //! ['red', 'green', 'blue']

//? Додаємо два елементи масиву, починаючи з третього елемента (індекс = 2):
// console.log(colors.splice(2, 0, "yellow", "pink")); //! []
const colorsAdding = colors.splice(2, 0, "yellow", "pink");

//? Тепер масив colors містить лише п'ть елементів:
console.log('colors.splice(2, 0, "yellow", "pink") --> colors:', colors); //! ['red', 'green', 'yellow', 'pink', 'blue']

console.log("colorsAdding:", colorsAdding); //! []
console.log("-----------------------------------------------------------");


//! Заміна елементів в масиві за допомогою splice()
console.warn("splice() - заміна елементів в масиві:");
//? Заміна - це операція видалення елементів, в якій
//? додаються нові елементи в місці видалення старих.
//? Для цього необхідно передати мінімум ТРИ аргументи:
//todo: splice(index, num, new_element_1, new_element_2, ...)
//? index - вказує на індекс першого елемента для видалення
//? num - визначає кількість елементів, що видаляються
//? третій, четвертий і всі наступні аргументи
//? - це нові елементи, які додаються в масив замість видалених(старих).
//? Кількість елементів, що видаляються і додаються, може не збігатися.
//? ПОВЕРТАЄ масив, що містить видалені елементи.
const languages = ["C", "C++", "Java", "JavaScript"];
console.log("languages:", languages); //! ['C', 'C++', 'Java', 'JavaScript']

//? Заміняємо ОДИН елемент з індексом = 1
//? на ОДИН новий елемент: "Python"
let languagesReplacing = languages.splice(1, 1, "Python");
console.log('languages.splice(1, 1, "Python") --> languages:', languages); //! ['C', 'Python', 'Java', 'JavaScript']

console.log("languagesReplacing:", languagesReplacing); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? Заміняємо ОДИН елемент з індексом = 2
//? на ДЕКІЛЬКА нових елементів: "C#", "Swift", "Go"
languagesReplacing = languages.splice(2, 1, "C#", "Swift", "Go");
console.log('languages.splice(2, 1, "C#", "Swift", "Go") --> languages:', languages); //! ['C', 'Python', 'C#', 'Swift', 'Go', 'JavaScript']




console.log("languagesReplacing:", languagesReplacing); //! []
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

//? Заміняємо ТРИ елемента з починаючи з індекса = 2
//? на ОДИН новий елемент: "C Sharp"
languagesReplacing = languages.splice(2, 3, "C Sharp");
console.log('languages.splice(2, 3, "C Sharp") --> languages:', languages); //! ['C', 'Python', 'C Sharp', 'JavaScript']

console.log("languagesReplacing:", languagesReplacing); //! []
console.log("-----------------------------------------------------------");


//! 7.Метод concat()
//? Об'єднує два або більше масивів в один.
//? Він не змінює масив, на якому викликається,
//? а ПОВЕРТАЄ новий масив.
//? Порядок аргументів методу впливає
//? на порядок елементів нового масиву.
const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
console.log("oldClients:", oldClients); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
const newClients = ["Monkong", "Singu"];
console.log("newClients:", newClients); //! ['Monkong', 'Singu']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const allClientsWithOldFirst = oldClients.concat(newClients);
console.log("oldClients.concat(newClients):", allClientsWithOldFirst); //! ['Mango', 'Ajax', 'Poly', 'Kiwi', 'Monkong', 'Singu']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

const allClientsWithNewFirst = newClients.concat(oldClients);
console.log("newClients.concat(oldClients):", allClientsWithNewFirst); //! ['Monkong', 'Singu', 'Mango', 'Ajax', 'Poly', 'Kiwi']
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");

console.log("oldClients:", oldClients); //! ['Mango', 'Ajax', 'Poly', 'Kiwi']
console.log("newClients:", newClients); //! ['Monkong', 'Singu']
console.log("--------------------------------------------------------------");


const oldClients2 = oldClients.concat("kiwi3")
console.log("oldClients2:", oldClients2);

const oldClients3 = "kiwi3".concat(oldClients)
console.log("oldClients3:", oldClients3);