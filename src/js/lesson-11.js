//! Приклад-алгоритм "Приготування кави" за допомогою Колбек-функцій 
console.warn("Приклад функції \"Приготування кави\" за допомогою Колбек-функцій:");
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
function makingCoffee(callback1, callback2) {
    if (!(callback1())) {
        return "Потрібна мелена кава!";
    };

    if (!(callback2())) {
        return "Потрібна гаряча вода!";
    };

    coffee = groundCoffee + hotWater;
    coffee = "✅ Кава готова!"
    return coffee;
};

console.log(makingCoffee(makesGroundCoffee, makesHotWater));
console.log("--------------------------------------------");



//! Приклад використання Предикатних функцій за допомогою Колбек-функцій
console.warn("Приклад використання Предикатних функцій \n  за допомогою Колбек-функцій:");
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
function addLogin(allLogins, login, callback1, callback2) { 
    console.log("3.➕👨‍💼✔️ -> addLogin(allLogins, login)");

    if (!(callback1(login))) {
        return "Помилка! Логін повинен бути від 4 до 16 символів.";
    };

    if (!(callback2(allLogins, login))) {
        return "Такий логін вже використовується!";
    };


    allLogins.push(login);
    console.log('logins:', logins);
}



console.warn("3️⃣ - функція addLogin(allLogins, login)");
console.log('addLogin(logins, "Dog"):', addLogin(logins, "Dog", isLoginValid, isLoginUnique));
console.log("---------------------------------------------------------------------------");
console.log('addLogin(logins, "UmaThurman"):', addLogin(logins, "UmaThurman", isLoginValid, isLoginUnique));
console.log("---------------------------------------------------------------------------");
console.log('addLogin(logins, "HedyLamarr"):', addLogin(logins, "HedyLamarr", isLoginValid, isLoginUnique));
console.log("******************************************************************************");


const array1 = ["A1", "B1", "C1"]
const array2 = ["a2", "b2", "c2"]

// привести масив array1 до маленьких літер
// привести масив array2 до великих літер
// поєднати array1 та array2 в arrayAll

// todo - 1
// function arrayAll(arr1, arr2, callback1, callback2) {
//     // callback1 це toLowerCase
//     // callback2 це toUpperCase
//     // arr1 це array1
//     // arr2 це array2

//     const result1 = callback1(arr1)
//     console.log("result1:", result1)
//     const result2 = callback2(arr2)
//     console.log("result2:", result2)

//     const arrayAll = result1.concat(result2)
//     return arrayAll
// }

// function toUpperCase1(arr) {
//     // console.log("вхідний масив:", arr)
//     const resultJoin = arr.join(" ")
//     // console.log("resultJoin:", resultJoin)

//     const resultToUpper = resultJoin.toUpperCase()
//     // console.log("resultToUpper:", resultToUpper)

//     const resultArray = resultToUpper.split(" ")
//     // console.log("resultArray:", resultArray)
//     return resultArray
// }

// const result2 = toUpperCase(array2)
// console.log("result2:", result2)

// function toLowerCase1(arr) {
//     const resultJoin = arr.join(" ")
//     // console.log("resultJoin:", resultJoin)

//     const resultToLower = resultJoin.toLowerCase()
//     // console.log("resultToLower:", resultToLower)

//     const resultArray = resultToLower.split(" ")

//     // console.log("resultArray:", resultArray)

//     return resultArray
// }

// const result3 = toLowerCase(array1)
// console.log("result3:", result3)


// const result11 = arrayAll(array1, array2, toLowerCase2, toUpperCase2)
// console.log("result11:", result11)  //["a1", "b1", "c1", "A2", "B2", "C2" ]

// todo - 2


// function toUpperCase2(arr) {
//     const resultUpp = [];
//     for (let item of arr) {
//         resultUpp.push(item.toUpperCase())
//     }
//     console.log("resultUpp:", resultUpp)
//     return resultUpp
// }

// // const result2 = toUpperCase(array2)
// // console.log("result2:", result2)

// function toLowerCase2(arr) {
//     const resultLow = [];
//     for (const item of arr) {
//         resultLow.push(item.toLowerCase())
//     }
//     console.log("resultLow:", resultLow)

//     return resultLow
// }

// // const result3 = toLowerCase(array1)
// // console.log("result3:", result3)


// function arrayAll(arr1, arr2, callback1, callback2) {
//     // callback1 це toLowerCase
//     // callback2 це toUpperCase
//     // arr1 це array1
//     // arr2 це array2

//     const result1 = callback1(arr1)
//     console.log("result1:", result1)
//     const result2 = callback2(arr2)
//     console.log("result2:", result2)

//     const arrayAll = result1.concat(result2)
//     return arrayAll
// }


// const result22 = arrayAll(array1, array2, toLowerCase2, toUpperCase2)
// console.log("result22:", result22)  //["a1", "b1", "c1", "A2", "B2", "C2" ]


// todo - 3


const toUpperCase2 = arr => arr.map(item => item.toUpperCase()) 

// const result2 = toUpperCase(array2)
// console.log("result2:", result2)

const toLowerCase2 = arr => arr.map(item => item.toLowerCase())

// const result3 = toLowerCase(array1)
// console.log("result3:", result3)


const arrayAll = (arr1, arr2, callback1, callback2) => 
    callback1(arr1).concat(callback2(arr2))



const result22 = arrayAll(array1, array2, toLowerCase2, toUpperCase2)
console.log("result22:", result22)  //["a1", "b1", "c1", "A2", "B2", "C2" ]







// function toUpperCase2(arr) {
//     const resultUpp = [];
//     for (let item of arr) {
//         resultUpp.push(item.toUpperCase())
//     }
//     console.log("resultUpp:", resultUpp)
//     return resultUpp
// }

// // const result2 = toUpperCase(array2)
// // console.log("result2:", result2)

// function toLowerCase2(arr) {
//     const resultLow = [];
//     for (const item of arr) {
//         resultLow.push(item.toLowerCase())
//     }
//     console.log("resultLow:", resultLow)

//     return resultLow
// }

// // const result3 = toLowerCase(array1)
// // console.log("result3:", result3)


// function arrayAll(arr1, arr2, callback1, callback2) {
//     // callback1 це toLowerCase
//     // callback2 це toUpperCase
//     // arr1 це array1
//     // arr2 це array2

//     const result1 = callback1(arr1)
//     console.log("result1:", result1)
//     const result2 = callback2(arr2)
//     console.log("result2:", result2)

//     const arrayAll = result1.concat(result2)
//     return arrayAll
// }


// const result22 = arrayAll(array1, array2, toLowerCase2, toUpperCase2)
// console.log("result22:", result22)  //["a1", "b1", "c1", "A2", "B2", "C2" ]

// перетворити дз-2 на об'єкт