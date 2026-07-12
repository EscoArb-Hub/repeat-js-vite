//! Масиви. Створення масиву
console.warn("Створення масиву:");
//? Масив - структура даних для зберігання
//? і маніпулювання колекцією індексованих значень.
//? Використовується для зберігання впорядкованих
//? колекцій даних, наприклад, списку курортів,
//? товарів, клієнтів в готелі тощо.

//? Створення масива
//? Масив оголошується і береться
//? у квадратні дужки[] - літералом масиву.
//? Всередині дужок кожен елемент масиву розділяється комою.
const arrayEmpty = [];
console.log("arrayEmpty:", arrayEmpty); //! []
console.log("-----------------------------------------");
const clients = ["Mango", "Poly", "Ajax"];
console.log("clients:", clients); //! ['Mango', 'Poly', 'Ajax']
console.log("typeof clients:", typeof clients); //! object
console.log("typeof null:", typeof null); //! object
console.log("-----------------------------------------");


//! Доступ до елементів
console.warn("Доступ до елементів: \n https://ruslan379.github.io/course-fe-html-css/lesson-FE3_07/images/indexing-array-elements.jpg");
//? Для доступу до значення елемента масиву 
//? використовується синтаксис квадратних дужок масив[індекс]. 
//? Між іменем змінної, що зберігає масив, 
//? і квадратними дужками не повинно бути пробілу.
const newClients = ["Mango", "Poly", "Ajax"];
console.log("newClients:", newClients); //! ['Mango', 'Poly', 'Ajax']

//? Зазначаючи в дужках індекс елемента, ми отримуємо його значення
console.log("newClients[0]:", newClients[0]); //! Mango
console.log("newClients[1]:", newClients[1]); //! Poly
console.log("newClients[2]:", newClients[2]); //! Ajax
console.log("---------------------------------------------------------");

const newNumbers = [1, 2, 3, 4, 5, 6, 7];
console.log("newNumbers:", newNumbers); //! [1, 2, 3, 4, 5, 6, 7]

const newBooleans = [true, false, true, false];
console.log("newBooleans:", newBooleans); //! [true, false, true, false]

const differentDataTypes = ["Mango", 7, false, undefined, null];
console.log("differentDataTypes:", differentDataTypes); //! ['Mango', 7, false, undefined, null]


//! Перевизначення
console.warn("Перевизначення елементів масиву:");
const allClients = ["Mango", "Poly", "Ajax"];
console.log("allClients --> ДО:", allClients); //! ['Mango', 'Poly', 'Ajax']
allClients[0] = "Kiwi";
allClients[1] = "Pango";
console.log("allClients --> ПІСЛЯ:", allClients);; //! ['Kiwi', 'Pango', 'Ajax']
console.log("---------------------------------------------------------");



//! Довжина масиву
console.warn("Довжина масиву:");
//? Довжина масиву, тобто кількість його елементів,
//? зберігається у властивості length.
//? Це динамічна величина, яка змінюється автоматично
//? під час додавання або видалення елементів.
const myClients = ["Mango", "Poly", "Ajax"];
console.log("myClients:", myClients); //! ['Mango', 'Poly', 'Ajax']
console.log("myClients.length:", myClients.length); //! 3

//? Властивість length можна змінювати безпосередньо:
//? Якщо встановити для властивості length значення,
//? що перевищує кількість елементів в масиві,
//? нові елементи будуть додані з початковими значеннями undefined.
//? Якщо задати довжину масиву менше ніж поточна
//? кількість елементів в масиві то всі елементи,
//? що "не влізли" в нову довжину просто видаляються.
myClients.length = 5;
console.log("myClients.length:", myClients.length); //! 5
console.log("myClients:", myClients); //! ['Mango', 'Poly', 'Ajax', empty × 2]

myClients.length = 2;
console.log("myClients.length:", myClients.length); //! 2
console.log("myClients:", myClients); //! ['Mango', 'Poly']
console.log("---------------------------------------------------------");


//! Індекс останнього елемента
console.warn("Індекс останнього елемента:");
//? Для того, щоб отримати значення останнього елемента,
//? застосовується наступний підхід - довжина масиву
//? завжди на одиницю більша, ніж індекс останнього елемента.
//? Використовуючи формулу довжина_масиву - 1, можна отримати
//? значення останнього елемента масиву довільної довжини.
const allMyClients = ["Mango", "Poly", "Ajax"];
console.log("allMyClients:", allMyClients); //! ['Mango', 'Poly', 'Ajax']

const lastElementIndex = allMyClients.length - 1;
console.log("Останній індекс:", lastElementIndex); //! 2
console.log("Останній елемент:", allMyClients[lastElementIndex]); //! "Ajax"
console.log("Останній елемент:", allMyClients[allMyClients.length - 1]); //! "Ajax"
console.log("---------------------------------------------------------");


//! Ітерація по масиву
//? Для ітерації по масиву або перебору масиву, використовуються цикли


//! Використання циклу for
console.warn("Використання циклу for:");
//? Для доступу до елементів використовується
//? синтаксис квадратних дужок масив[індекс],
//? де індекс - це значення лічильника циклу
//? від 0 і до останнього індексу масиву,
//? тобто менше, але не дорівнює його довжині.
let clients1 = ["Mango", "Ajax8", "Poly7", "Mango4", "Ajax2", "Poly5"];
console.log("clients1:", clients1); //! ['Mango', 'Poly', 'Ajax']

for (let i = 0; i < clients1.length; i += 1) {
    console.log(`clients1[${i}]:`, clients1[i]);
};
console.log("-----------------------------------------");


//! Перевизначення елементів масиву
console.warn("Перевизначення елементів масиву за допомогою циклу for:");
//? За допомогою циклу for можна перевизначити всі елементи масиву.
// clients = [0, 1, 2]; //todo: інший приклад масиву
// for (let i = 0; i < clients1.length; i += 1) {
//     clients1[i] = clients1[i] + i;
//     console.log(`clients1[${i}]:`, clients1[i]);
// };
// console.log("clients1:", clients1); //! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]
console.log("---------------------------------------------");


// 1. На кожній ітерації знаходимо останній символ цього елемента

// 2. привести значення останнього символа елемента масиву до Number (NaN або число)

// 3. Результат приведення до Number покласти в констукцію розгалуження


for (let i = 0; i < clients1.length; i += 1){
    let lastSymbol = clients1[i].slice(-1)
    console.log("lastSymbol:", lastSymbol)
    if (!isNaN(lastSymbol)) {
        clients1[i] = clients1[i].slice(0, -1) + i
    }
    else {
        clients1[i] = clients1[i] + i
    }
    console.log(`clients1[${i}]:`, clients1[i])
}



//! Використання циклу for...of​
console.warn("Використання циклу for...of​:");
//? Конструкція for...of оголошує цикл, що перебирає
//? ітерабельні об'єкти, як-от масиви і рядки.
//? Тіло циклу буде виконуватися для значення кожного елемента.
//? Це хороша заміна циклу for,
//? якщо не потрібен доступ до лічильника ітерації.
//? variable — змінна,
//? яка буде зберігати значення елемента на кожній ітерації.
//? iterable — колекція,
//? яка містить ітерабельні(що можна порахувати) елементи, наприклад масив.
//todo: Використання циклу for...of​ для масиву

const clients4 = ["Mango", "Ajax", "Poly"];
console.log("clients4:", clients4); //! ['Mango0', 'Ajax1', 'Poly2'] або [0, 2, 4]

for (const client of clients4) {
    console.log(`client:`, client);
};
console.log(". . . . . . . .");

//todo: Використання циклу for...of​ для рядка
const string = "Java Script";
console.log("string:", string); //! 'Java Script'
for (const character of string) {
    console.log(`character:`, character);
};
console.log("-------------------------------------");



//! Оператори break і continue​
console.warn("Оператори break і continue​​:");
//todo: ПРИКЛАД-1:
//? Будемо шукати ім'я клієнта
//? в масиві імен, якщо знайшли - перериваємо цикл,
//? оскільки немає сенсу шукати далі, імена у нас унікальні.
//todo: ПРИКЛАД-1 (var.1)
console.warn("ПРИКЛАД-1 (var.1):");
const clients2 = ["Mango", "Poly", "Ajax"];
console.log("clients2:", clients2); //! ['Mango', 'Poly', 'Ajax']
const clientNameToFind1 = "Poly";
console.log("clientNameToFind1:", clientNameToFind1); //! 'Poly'

let message;

for (const client of clients2) {
    //? На кожній ітерації будемо перевіряти чи збігається елемент масиву з
    //? іменем клієнта. Якщо збігається - записуємо в message повідомлення
    //? про успіх і робимо break, щоб далі не шукати
    if (client === clientNameToFind1) {
        message = "Клієнт з таким ім'ям є в базі даних!";
        break;
    };
    //? Якщо вони не збігаються - записуємо в message повідомлення про відсутність імені
    message = "Клієнт з таким ім'ям відсутній в базі даних!";
};
console.log(message); //! "Клієнт з таким ім'ям є в базі даних!"
console.log(". . . . . . . . . . . . . . . . . . .");



//todo: ПРИКЛАД-1 (var.2)
console.warn("ПРИКЛАД-1 (var.2):");
//? Можна на початку задати message значення невдачі пошуку, 
//? а в циклі перезаписати його на успіх, якщо знайшли ім'я. 
//? Але break все одно нам знадобиться, оскільки, 
//? якщо у нас масив із 10000 клієнтів, 
//? а потрібний нам знаходиться на 2 позиції, 
//? то немає абсолютно жодного сенсу перебирати інші 9998 елементи.
const clients3 = ["Mango", "Poly", "Ajax"];
console.log("clients3:", clients3); //! ['Mango', 'Poly', 'Ajax']
const clientNameToFind2 = "Ajax";
console.log("clientNameToFind2:", clientNameToFind2); //! 'Ajax'
let message2 = "Клієнт з таким ім'ям відсутній в базі даних!";

for (const client of clients3) {
    if (client === clientNameToFind2) {
        message2 = "Клієнт з таким ім'ям є в базі даних!";
        console.log(`Клієнт з ім'ям ${clientNameToFind2} є в базі даних!`);
        break;
    }
    //? Якщо не збігається, то на цій ітерації нічого не робимо
};
console.log(message2); //! "Клієнт з таким ім'ям є в базі даних!"
console.log("-------------------------------------");


//todo: ПРИКЛАД-2:
console.warn("ПРИКЛАД-2:");
//? Використовуємо цикл для виведення
//? тільки чисел, більших за певне значення.
const numbers = [1, 3, 14, 18, 4, 7, 29, 6, 34];
console.log("Масив чисел:", numbers); //! [1, 3, 14, 18, 4, 7, 29, 6, 34]
const threshold = 15;
console.log("Число для порівняння:", threshold); //! 15

//? Для чисел, менших ніж порогове значення, спрацьовує continue, виконання тіла
//? припиняється і управління передається на наступну ітерацію.
for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < threshold) {
        continue;
    }
    console.log(`Число більше за ${threshold}: ${numbers[i]}`); //! 18, 29, 34
};


