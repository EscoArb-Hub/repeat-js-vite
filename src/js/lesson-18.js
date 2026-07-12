//! Об'єктна модель документа(DOM-дерево)
console.warn(`Об'єктна модель документа(DOM-дерево): \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_17/images/browser-js.png"}`);
//? ✳️ Коли ми працюємо з браузером,
//? доступний функціонал складається з декількох модулів,
//? оскільки JavaScript не має інструментів для роботи з браузером.
//? ✴️ ECMAScript — мова програмування, 
//? яка вбудовується розширюваною мовою програмування, 
//? що не має засобів введення-виведення, 
//? і використовується як основа для побудови інших скриптових мов.
//? ✴️ Об'єктна модель документа (Document Object Model)
//? - незалежний від мови інтерфейс для роботи з HTML-документом.
//? Містить набір властивостей і методів, що дозволяють шукати,
//? створювати і видаляти елементи, реагувати на дії користувача
//? і багато іншого.
//? Тобто з'єднує сторінку з мовою програмування.
//? ✳️ DOM - це відображення HTML-документа,
//? деревоподібна структура, в якій кожен вузол
//? - це JavaScript-об'єкт з властивостями і методами,
//? що становить частину HTML-документа.
//? Кожен елемент в документі, весь документ в цілому, заголовок,
//? посилання, абзац - це частини DOM цього документа,
//? тому всі вони можуть бути змінені з JavaScript-коду.
//? ✴️ Об'єктна модель браузера (Browser Object Model) 
//? - незалежний від мови інтерфейс для роботи з вкладкою браузера. 
//? Містить набір властивостей і методів, 
//? що дозволяють отримати доступ безпосередньо до поточної вкладки 
//? і ряду функцій браузера. 
//? Містить об'єкт роботи з історією навігації, 
//? місцем розташування та багато іншого.
console.log(
    `%c
    🟨 ECMAScript — мова програмування
    🟦 Document Object Model - для відображення HTML-документа
    🟥 Browser Object Model -  для роботи з вкладкою браузера
    `,
    'color: gray; font-size: 16px',
);
console.log("---------------------------------------------------------------------------------------------");




//! HTML-документ і DOM
console.warn(`HTML-документ і DOM: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_17/images/dom-tree.png"}`);
//? ✴️ Згідно з DOM-моделлю,
//? 🔸 кожен тег утворює окремий елемент-вузол,
//? 🔸 кожен фрагмент тексту - текстовий елемент.
//? HTML-документ - це ієрархічне дерево,
//? в якому у кожного елемента (крім кореневого)
//? є тільки один батьківський елемент,
//? тобто елемент, всередині якого він розташовується.
//? Це дерево утворюється за рахунок
//? вкладеної структури тегів і текстових елементів.
//? ✳️ Щоб відобразити HTML-документ,
//? браузер спочатку перетворює його у формат,
//?  який він розуміє - DOM.
//? Рушій браузера має спеціальний фрагмент коду
//? - HTML-парсер, який використовується для перетворення HTML в DOM.
//? ✳️ В HTML вкладеність визначає відносини батько-дитина між елементами.
//? В DOM об'єкти пов'язані у деревоподібній структурі даних, фіксуючи ці відносини.
//? ✳️ Браузер будує DOM поступово,
//? щойно надходять перші фрагменти коду,
//? він починає парсити HTML,
//? додаючи вузли у деревоподібну структуру.
//? ❗️❗️❗️ Після того, як DOM-дерево побудовано, 
//? у ньому можна знайти елемент за допомогою JavaScript 
//? і виконувати з ним певні дії, 
//? оскільки кожен елемент має інтерфейс 
//? з безліччю властивостей і методів.
console.log("---------------------------------------------------------------------------------------------");



//! DOM-дерево
console.warn("DOM-дерево:");
console.warn("генератор DOM-дерева: \n  https://software.hixie.ch/utilities/js/live-dom-viewer");
//? ✴️ Візуалізуємо дерево HTML-документа (приклад нижче),
//? використовуючи сервіс генератора DOM-дерева:
console.log(
    `%c
    <!DOCTYPE html>
    <html>
        <head>
            <title>Document title</title>
        </head>
        <body>
            <h1>Page title</h1>
            <ul>
                <li>
                    <a href="#">Link 1</a>
                </li>
                <li>
                    <a href="#">Link 2</a>
                </li>
            </ul>
        </body>
    </html>
    `,
    'color: blue; font-size: 16px',
);
//? ✳️ У цьому дереві виділені два типи вузлів:
//? 🔸 Вузли-елементи (element node)
//?    - утворюються тегами, звичайним чином одні елементи вкладені в інші.
//?    Структура дерева утворена виключно за рахунок них.
//? 🔸 Текстові вузли (text node)
//?    - утворюються текстом всередині елементів.
//?    Текстовий вузол містить тільки рядок тексту
//?    і не може мати дочірніх елементів,
//?    тобто він завжди на найнижчому рівні ієрархії.
//?    Пробіли і перенесення рядків - це теж текстові вузли.
//? ❗️❗️❗️ З цього правила є винятки:
//? 🔸 пробіли до head ігноруються,
//? 🔸 а будь-який вміст після body не створює елемент,
//?    браузер переносить його в кінець 'body'.
console.log("---------------------------------------------------------------------------------------------");



//! Навігація по DOM
//? ✳️ DOM надає широкий спектр можливостей
//? для роботи з елементом і його вмістом,
//? але для цього, спочатку потрібно
//? отримати посилання на нього.
//? Доступ до DOM починається з об'єкта ❗️document❗️,
//? з нього можна дістатися до будь-яких елементів.
//? ✴️ ❗️document❗️ - це частина глобального об'єкта window,
//? який доступний у скрипті, коли він виконується в браузері.
//? Так само як alert, console.log, prompt і багато інших.
//? ✴️ Елементи DOM-дерева мають ієрархічне
//? відношення один до іншого.
//? Для опису відносин використовуються терміни:
//? 🔸 предок (ancestor),
//? 🔸 нащадок (descendant),
//? 🔸 батько (parent),
//? 🔸 дитина (child)
//? 🔸 і сусід (sibling).
console.warn(`Навігаця між вузлами DOM: \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_17/images/dom-traversal.png"}`);
//? ✴️ Для навігації по цій ієрархії елементи мають наступні властивості:
console.log(
    `%c
    elem.parentNode - вибере батьківський elem.

    elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
    elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.

    elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
    elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.

    elem.previousSibling - вибере елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.previousElementSibling - вибере вузол-елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.nextSibling - вибере елемент «праворуч» (той, що нижче) від elem (його наступного сусіда)
    elem.nextElementSibling - вибере вузол-елемент «праворуч» (той, що нижче) від elem (його наступного сусіда).
    `,
    'color: darkred; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------------------------------------------------------------------");



//! Навігація або пошуку елементів в DOM-дереві
console.warn("Навігація або пошуку елементів в DOM-дереві:");
// console.log(document);
console.log("document:", document);

const body = document.body;
// console.log(body);
console.log("body = document.body:", body);
console.log("document.body.parentNode:", document.body.parentNode); //! </html>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");



const list = document.querySelector(".list");
// console.log(list);
console.log('list = document.querySelector(".list"):', list);
console.log("list.parentNode:", list.parentNode); //! <div class="part part_2">...</div>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");



const listItemsNodes = list.childNodes;
// console.log(listItemsNodes);
console.log('listItemsNodes = list.childNodes:', listItemsNodes); //! [text, li, text, li, text, li, text, li, text, li, text]

const listItems = list.children;
// console.log(listItems);
console.log('listItems = list.children:', listItems); //! HTMLCollection(5) [li, li, li, li, li]
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");



const firstListChild = list.firstChild;
// console.log(firstListChild);
console.log('firstListChild = list.firstChild:', firstListChild); //! #text 

const firstListElementChild = list.firstElementChild;
// console.log(firstListElementChild);
console.log('firstListElementChild = list.firstElementChild:', firstListElementChild); //! <li>First item</li>

const lastListChild = list.lastChild;
// console.log(lastListChild);
console.log('lastListChild = list.lastChild:', lastListChild); //! #text 

const lastListElementChild = list.lastElementChild;
// console.log(lastListElementChild);
console.log('lastListElementChild = list.lastElementChild:', lastListElementChild); //! <li>Fifth item</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");



const previousListSibling = list.previousSibling;
// console.log(previousListSibling);
console.log('previousListSibling = list.previousSibling:', previousListSibling); //! #text 

const previousListElementSibling = list.previousElementSibling;
// console.log(previousListElementSibling);
console.log('previousListElementSibling = list.previousElementSibling:', previousListElementSibling); //! <h2 class="title-section">...</h2>

const nextListSibling = list.nextSibling;
// console.log(nextListSibling);
console.log('nextListSibling = list.nextSibling:', nextListSibling); //! #text 

const nextListElementSibling = list.nextElementSibling;
// console.log(nextListElementSibling);
console.log('nextListElementSibling = list.nextElementSibling:', nextListElementSibling); //! <button class="button-2" style="background-color: green; color: yellow; box-shadow: rgb(150, 150, 150) 3px 3px 4px;">On</button>



//! Методи elem.querySelector* 
console.warn("Методи elem.querySelector*:");
//? ✳️ Отже, ми вже знаємо що DOM-елемент
//? - це об'єкт з властивостями і методами.
//? Навчимось швидко знаходити елемент
//? за довільним CSS-селектором.
//? Група методів ❗️elem.querySelector*❗️
//? - це сучасний стандарт для пошуку елементів.
//? Вони дозволяють знайти елемент або групу елементів 
//? за CSS-селектором будь-якої складності.
console.log(
    `%c
    element.querySelector(selector);
    `,
    'color: darkred; font-size: 16px',
);
//? ✴️ Використовується, якщо необхідно знайти тільки ❗️один❗️,
//? найчастіше унікальний елемент.
//? 🔸 Повертає перший знайдений елемент всередині element,
//?    що відповідає CSS-селектору selector.
//? 🔸 Якщо нічого не знайдено, поверне null.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
console.log(
    `%c
    element.querySelectorAll(selector);

    `,
    'color: darkred; font-size: 16px',
);
//? ✴️ Використовується, якщо необхідно знайти ❗️колекцію❗️ елементів,
//? тобто отримати масив посилань на елементи з однаковим селектором.
//? Наприклад, всі елементи списку з класом menu-item.
//? 🔸 Повертає псевдомасив всіх елементів всередині element,
//?    які відповідають CSS-селектору selector.
//? 🔸 Якщо нічого не знайдено, поверне порожній масив.
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");



// const listWithId = document.querySelector('#menu'); //todo: var.1
const listWithId = document.getElementById('menu'); //todo: var.2
listWithId.style.textTransform = 'uppercase'; //todo: зміна властивості:  text-transform: uppercase;
listWithId.style.fontSize = '24px'; //todo: зміна властивості:  font-size: 24px;
console.log("listWithId = document.querySelector('#menu'):", listWithId);

const listWithClass = document.querySelector('.menu');
console.log("listWithClass = document.querySelector('.menu'):", listWithClass);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");



const menuItemsByTagName = document.querySelectorAll("li");
console.log('menuItemsByTagName = document.querySelectorAll("li"):', menuItemsByTagName);

const menuItemsByClass = document.querySelectorAll(".menu-item");
console.log('menuItemsByClass = document.querySelectorAll(".menu-item"):', menuItemsByClass);
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");



const alltMenuItem = document.querySelectorAll(".menu-item");
console.log(typeof alltMenuItem)
console.log(alltMenuItem)
// alltMenuItem.style.color = 'green'; //! Error: Cannot set properties of undefined (setting 'color')
//todo: зміна властивості ВСІХ елементів :  color: green;
for (const element of alltMenuItem) {
    element.style.color = 'green';
};
console.log('alltMenuItem = document.querySelectorAll(".menu-item"):', alltMenuItem);

const firstMenuItem = document.querySelector(".menu-item");
firstMenuItem.style.color = 'tomato';
console.log('firstMenuItem = document.querySelector(".menu-item"):', firstMenuItem);
console.log("---------------------------------------------------------------------------------------------------------------------------------------------");




//! Використання властивостей елементів DOM-дерева
//? ✴️ Під час побудови DOM-дерева,
//? деякі стандартні HTML-атрибути
//? стають властивостями елементів.
//? Подивимося на декілька властивостей, які часто використовуються.
//? 🔸 hidden — контролює видимість елемента.
//? 🔸 value — містить поточний текстовий контент елементів форм: input, select, textarea.
//? 🔸 checked — зберігає стан чекбокса або радіо кнопки.
//? 🔸 name — зберігає значення вказане в HTML-атрибут name.
//? 🔸 src — шлях до зображення тега <img>.

//! Властивість textContent​
console.warn("Властивість textContent​:");
//? ✴️ elem.textContent 
//? - повертає текстовий контент всередині елемента. 
//? Доступний для читання і запису. 
//? Неважливо, що буде передано в textContent, 
//? дані завжди будуть записані як текст.
const elementFirst = document.querySelector(".menu-item2");
console.log("elementFirst:", elementFirst); //! <li class="menu-item2">logo</li>

const textElementFirst = elementFirst.textContent;
console.log("textElementFirst = elementFirst.textContent:", textElementFirst); //! logo
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

const elementSecond = elementFirst.nextElementSibling;
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

elementSecond.textContent = 'HOME-page';
console.log("elementSecond.textContent:", elementSecond.textContent); //! home
console.log("elementSecond = elementFirst.nextElementSibling:", elementSecond); //! <li class="menu-item2">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");



//! Властивість classList
console.warn("Властивість classList:");
//? ✴️ У властивості classList
//? зберігається об'єкт з методами
//? для роботи з класами елемента:
//? 🔸 elem.classList.contains(class)
//?  - повертає true або false,
//?  залежно від наявності класу class в елемента.
//? 🔸 elem.classList.add(class)
//?  - додає клас class до списку класів елемента.
//? 🔸 elem.classList.remove(class)
//?  - видаляє клас class зі списку класів елемента.
//? 🔸 elem.classList.toggle(class)
//?  - якщо відсутній клас class, то додає його,
//?  якщо - присутній, навпаки - видаляє.
//? 🔸 elem.classList.replace(oldClass, newClass)
//? - замінює існуючий клас oldClass на вказаний newClass.
//todo: Перевірка на наявність:
console.log('elementSecond.classList.contains("menu-item"):', elementSecond.classList.contains("menu-item")); //! false
console.log('elementSecond.classList.contains("menu-item2"):', elementSecond.classList.contains("menu-item2")); //! true
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Додавання:
elementSecond.classList.add("second"); //todo: додаємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Видалення:
elementSecond.classList.remove("second"); //todo: видаляємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Додавання або видалення:
elementSecond.classList.toggle("second"); //todo: додаємо або видаляємо клас "second"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false або true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 second">HOME-page</li>
console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

//todo: Заміна:
elementSecond.classList.replace("second", "secondNew"); //todo: замінюємо клас "second" на клас "secondNew"
console.log('elementSecond.classList.contains("second"):', elementSecond.classList.contains("second")); //! false
console.log('elementSecond.classList.contains("secondNew"):', elementSecond.classList.contains("secondNew")); //! true
console.log("elementSecond:", elementSecond); //! <li class="menu-item2">HOME-page</li> або <li class="menu-item2 secondNew">HOME-page</li>
console.log("----------------------------------------------------------------------------------------------------------------------------------------");



//! Властивість style
console.warn("Властивість style:");
//? ✴️ Використовується для
//? читання та зміни інлайнових стилів.
//? Повертає об'єкт CSSStyleDeclaration,
//? який містить список усіх властивостей,
//? визначених тільки у вбудованих стилях елемента,
//? а не весь CSS❗️❗️❗️.
//? ❗️Під час запису властивості записуються в camelCase❗️, 
//? тобто background-color перетворюється на element.style.backgroundColor тощо.
const elementLast = document.querySelector(".menu-itemLast");

const textElementLast = elementLast.textContent;
console.log("textElementLast = elementLast.textContent:", textElementLast); //! blog

//todo var1: Змінюємо властивості:
// elementLast.style.fontSize = "24px";
// elementLast.style.textAlign = "center";
// elementLast.style.color = "tomato";
// elementLast.style.backgroundColor = "teal";

//todo var2: Змінюємо властивості:
const newStyle = {
    fontSize: "24px",
    textAlign: "center",
    color: "tomato",
    backgroundColor: "teal"
}
Object.assign(elementLast.style, newStyle)


console.log("`  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `  `");

console.log("elementFirst:", elementLast); //! <li class="menu-itemLast" style="font-size: 24px; text-align: center; color: tomato; background-color: teal;">blog</li>
console.log("elementLast.style:", elementLast.style); //! CSSStyleDeclaration - inline styles object
console.log("----------------------------------------------------------------------------------------------------------------------------------------");


//! Атрибути
console.warn("Атрибути:");
//? ✴️ DOM-елементам відповідають HTML-теги,
//? які містять текстові атрибути.
//? Доступ до атрибутів здійснюється
//? за допомогою стандартних методів.
//? Ці методи працюють зі значенням, яке знаходиться в HTML.
//? 🔸 elem.hasAttribute(name) - перевіряє наявність атрибута, повертає true або false.
//? 🔸 elem.getAttribute(name) - отримує значення атрибута і повертає його.
//? 🔸 elem.setAttribute(name, value) - встановлює атрибут.
//? 🔸 elem.removeAttribute(name) - видаляє атрибут.
//? 🔸 elem.attributes - властивість, що повертає об'єкт усіх атрибутів елемента.
const image = document.querySelector(".image");

//todo: Перевірка на наявність:
console.log('image.hasAttribute("src"):', image.hasAttribute("src")); //! true

//todo: Отримуємо значення атрибута
console.log('image.getAttribute("alt"):', image.getAttribute("alt")); //! "Rocks and waterfall"

//todo: Встановлюємо або змінюємо атрибут та його значення:
image.setAttribute("alt", "Amazing nature");
console.log('image.getAttribute("alt"):', image.getAttribute("alt")); //! Amazing nature

image.setAttribute("width", "320");
image.width = "480"
console.log('image.getAttribute("width"):', image.getAttribute("width")); //! 320

//todo: Видаляємо атрибут:
image.removeAttribute("height");

//todo: Повертаємо об'єкт усіх атрибутів елемента:
console.log("image.attributes:", image.attributes); //! NamedNodeMap {0: class, 1: src, 2: alt, 3: width, class: class, src: src, alt: alt, width: width, length: 4}
console.log("---------------------------------------------------------------------------------------------------------------------------------");



//! data-атрибути
console.warn("data-атрибути:");
//? ✴️ Дозволяють додати до тегу довільний атрибут
//? і отримати його значення в JavaScript.
//? Цю можливість використовують для того,
//? щоб спростити написання коду, наприклад,
//? зв'язати дані і розмітку за унікальним ідентифікатором,
//? вказати тип дії кнопки тощо.
//? ✳️ Для отримання значення data-атрибута
//? використовується властивість ❗️dataset❗️, 
//? після якого стоїть ім'я атрибута. 
//? Тобто data- відкидається, 
//? а інша частина імені записується 
//? як ім'я властивості об'єкта.
const saveBtn = document.querySelector('button[data-action="save"]');
console.log("saveBtn.dataset.action:", saveBtn.dataset.action); //! "save"
saveBtn.setAttribute("data-action", "saveOn")
saveBtn.dataset.action = "saveOff"
console.log("saveBtn.dataset.action:", saveBtn.dataset.action); //! "saveOn"

const closeBtn = document.querySelector('button[data-action="close"]');
console.log("closeBtn.dataset.action:", closeBtn.dataset.action); //! "close"
closeBtn.setAttribute("data-action", "closeOn")
console.log("closeBtn.dataset.action:", closeBtn.dataset.action); //! "closeOn"
console.log("---------------------------------------------------------------------------------------------------------------------------------");

console.log(
    `%c
    elem.parentNode - вибере батьківський elem.

    elem.childNodes - псевдомасив, зберігає всі дочірні елементи, включно з текстовими.
    elem.children - псевдомасив, зберігає тільки дочірні вузли-елементи, тобто ті, що відповідають тегам.

    elem.firstChild - вибере перший дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.firstElementChild - вибере перший дочірній вузол-елемент всередині elem.
    elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
    elem.lastElementChild - вибере останній дочірній вузол-елемент всередині elem.

    elem.previousSibling - вибере елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.previousElementSibling - вибере вузол-елемент «зліва» (той, що вище) від elem (його попереднього сусіда).
    elem.nextSibling - вибере елемент «праворуч» (той, що нижче) від elem (його наступного сусіда)
    elem.nextElementSibling - вибере вузол-елемент «праворуч» (той, що нижче) від elem (його наступного сусіда).
    `,
    'color: darkred; font-size: 16px',
);

console.log("---------------------------------------------------------------------------------------------------------------------------------");

// Задача пофарбувати 1, 3, 5 в зелений а 2, 4 в червоний

// 1 знаходимо елемент ul в якого id="list2" за допомогою document.querySelector

// const list2 = document.querySelector("#list2")
const list2 = document.getElementById("list2")
console.log("list2:", list2)

// 2 знаходимо почерзі всі елементи за допомогою таблички пошуку елементів та фарбуємо іх згідно задачі

const firstElem = list2.firstElementChild 
console.log("firstElem:", firstElem)
firstElem.style.color = "green";
console.log("firstElem:", firstElem)


// elementSecond.classList.add("second");
const secondElem = firstElem.nextElementSibling
console.log("secondElem:", secondElem)
secondElem.classList.add("red")
console.log("secondElem:", secondElem)
secondElem.style.color = "red"

console.log("---------------------------------------------------------------------------------------------------------------------------------");





//! Створення та видалення елементів
//? ✳️ DOM API дозволяє не тільки вибирати
//? або змінювати вже існуючі, але й видаляти,
//? а також створювати нові елементи,
//? після чого додавати їх в документ.


//! Створення елементів
console.warn("Створення елементів:");
//? ✴️ Створює елемент з ім'ям tagName 
//? і повертає посилання на нього 
//? як результат свого виконання. 
//? tagName - це рядок, 
//? що вказує тип елемента, який створюється. 
//? Елемент створюється в пам'яті, в DOM його ще немає.
console.log(
    `%c
    🔸 document.createElement(tagName);
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . .");

//todo:
const heading = document.createElement("h1");
console.log("heading:", heading); //! <h1></h1>

heading.textContent = "This is a heading";
console.log("heading:", heading); //! <h1>This is a heading</h1>

const image1 = document.createElement("img");
image1.src = "https://picsum.photos/id/17/320/240";
image1.alt = "Nature";
console.log("image1:", image1); //! <img src="https://picsum.photos/id/17/320/240" alt="Nature" />
console.log("--------------------------------------------------------------------------------------------");



//! Додавання елементів
console.warn("Додавання елементів:");
console.log(
    `%c
    🔸 element.append(el1, el2, ...) - після всіх дітей елемента
    🔸 element.prepend(el1, el2, ...) - перед усіма дітьми елемента
    🔸 element.after(el1, el2, ...) - після елемента
    🔸 element.before(el1, el2, ...) - перед елементом
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Щоб створений елемент відображався на сторінці,
//? його необхідно додати до вже існуючого елемента в DOM-дереві.
//? Припустимо, що додаємо до певного елемента element,
//? для цього існують такі методи:
//? 🔸 element.append(el1, el2, ...) - додає один або декілька елементів
//?    ❗️після всіх дітей елемента element❗️.
//? 🔸 element.prepend(el1, el2, ...) - додає один або декілька елементів
//?    ❗️перед усіма дітьми елемента element❗️.
//? 🔸 element.after(el1, el2, ...) - додає один або декілька елементів
//?    ❗️після елемента element❗️.
//? 🔸 element.before(el1, el2, ...) - додає один або декілька елементів
//?    ❗️перед елементом element❗️.
//? ✴️ У всіх цих методах el - це елементи або рядки, в будь-якому поєднанні і кількості. Рядки додаються як текстові вузли.
const list1 = document.querySelector(".usernames");

//todo: Додає елемент до кінця списку.
const lastItem1 = document.createElement("li");
lastItem1.textContent = "Poly-1";
list1.append(lastItem1);

const lastItem2 = document.createElement("li");
lastItem2.textContent = "Poly-2";
list1.appendChild(lastItem2);

//? ✴️ Різниця appendChild() та append()
//? Метод.append()схожий, але він:
//?   ✅ Приймає відразу кілька елементів або рядки
//?   ✅ Не повертає доданий елемент
//?   ✅ Працює з текстом без createTextNode()

//todo: Додає елемент на початок списку.
const firstItem = document.createElement("li");
firstItem.textContent = "Ajax";
list1.prepend(firstItem);

//todo: Додає елемент після списку.
const afterElement = document.createElement("a");
afterElement.href = "#";
afterElement.textContent = "Read more...";
list1.after(afterElement);

//todo: Додає елемент перед списком.
const beforeElement = document.createElement("h3");
beforeElement.textContent = "Usernames";
list1.before(beforeElement);

//? ✳️ Якщо елемент для додавання вже знаходиться в DOM, 
//? то він видаляється зі свого старого місця і додається у нове. 
//? З цього випливає правило - один і той самий елемент 
//? не може бути одночасно у двох місцях.
console.log("--------------------------------------------------------------------------------------------");



//! Видалення елементів
console.warn("Видалення елементів:");
console.log(
    `%c
    🔸 element.remove()
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Для того, щоб видалити елемент,
//? використовується метод ❗️remove()❗️. 
//? Він викликається на елементі elem, 
//? який необхідно видалити.
const text = document.querySelector('.text1');
text.remove();
console.log("--------------------------------------------------------------------------------------------");




//! Оптимізація роботи з DOM
//? ✴️ Сучасні браузери намагаються оптимізувати
//? процес відтворення сторінки без втручання розробника.
//? Проте, зміна DOM-дерева - це дорога операція,


//! Repaint 
console.warn("Repaint :");
//? ✴️ Repaint - відбувається,
//? коли зміни торкнулися стилів,
//? що впливають на зовнішній вигляд елемента,
//? але не на геометрію.
//? ✳️ Наприклад,
//? 🔸 opacity, 
//? 🔸 background-color, 
//? 🔸 visibility,
//? 🔸 outline. 
//? Браузер повторно створює елемент, 
//? з урахуванням нового стилю. 
//? Також перевіряється видимість інших елементів, 
//? один або більше можуть виявитися 
//? прихованими під елементом, 
//? що змінив зовнішній вигляд.
console.log(
    `%c
        ✴️ Repaint - відбувається,
    коли зміни торкнулися стилів,
    що впливають на зовнішній вигляд елемента,
    але не на геометрію.
        ✳️ Наприклад,
    🔸 opacity,
    🔸 background-color,
    🔸 visibility,
    🔸 outline.
    `,
    'color: blue; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------");



//! Оптимізація роботи з DOM
//? ✴️ Сучасні браузери намагаються оптимізувати
//? процес відтворення сторінки без втручання розробника.
//? Проте, зміна DOM-дерева - це дорога операція,


//! Repaint 
console.warn("Repaint :");
//? ✴️ Repaint - відбувається,
//? коли зміни торкнулися стилів,
//? що впливають на зовнішній вигляд елемента,
//? але не на геометрію.
//? ✳️ Наприклад,
//? 🔸 opacity, 
//? 🔸 background-color, 
//? 🔸 visibility,
//? 🔸 outline. 
//? Браузер повторно створює елемент, 
//? з урахуванням нового стилю. 
//? Також перевіряється видимість інших елементів, 
//? один або більше можуть виявитися 
//? прихованими під елементом, 
//? що змінив зовнішній вигляд.
console.log(
    `%c
        ✴️ Repaint - відбувається,
    коли зміни торкнулися стилів,
    що впливають на зовнішній вигляд елемента,
    але не на геометрію.
        ✳️ Наприклад,
    🔸 opacity,
    🔸 background-color,
    🔸 visibility,
    🔸 outline.
    `,
    'color: blue; font-size: 16px',
);
console.log("--------------------------------------------------------------------------------------------");

//! Reflow
console.warn("Reflow:");
//? ✴️ Reflow - відбувається,
//? коли зміни впливають на:
//? 🔸 вміст,
//? 🔸 структуру документу,
//? 🔸 положення елементів.
//? Відбувається перерахунок позиціонування і розмірів,
//? що призводить до повторного створення частини
//? або всього документу.
//? Зміна розміру одного батьківського контейнера
//? вплине на всіх його дітей і предків.
//? ❗️Має значно більший вплив на продуктивність, ніж repaint❗️.
console.log(
    `%c
        ✴️ Reflow - відбувається,
    коли зміни впливають на:
    🔸 вміст,
    🔸 структуру документу,
    🔸 положення елементів.
        ✳️❗️Має значно більший вплив на продуктивність, ніж repaint❗️.
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Усі перераховані вище операції блокують браузер.
//? Сторінка не може виконувати жодні інші операції у той час,
//? коли відбувається reflow або repaint.
//? ✴️ Причинами можуть бути:
//? 🔸 Маніпуляції з DOM (додавання, видалення, зміна, перестановка елементів).
//? 🔸 Зміна вмісту, зокрема тексту в полях форм.
//? 🔸 Розрахунок або зміна CSS-властивостей.
//? 🔸 Додавання і видалення таблиць стилів.
//? 🔸 Маніпуляції з атрибутом class.
//? 🔸 Маніпуляції з вікном браузера (зміни розмірів, прокручування).
//? 🔸 Активація псевдокласів (наприклад, ':hover').
console.log("--------------------------------------------------------------------------------------------");



//! 3.Властивість innerHTML
//? ✴️ Ще один спосіб створити DOM-елементи
//? і помістити їх в дерево
//? - це використовувати рядки з тегами
//? і дозволити браузеру зробити всю важку роботу.
//? У такого підходу є свої плюси і мінуси.


//! Читання
console.warn("Читання:");
//? ✴️ Властивість innerHTML зберігає вміст елемента, 
//? включно з тегами, у вигляді рядка. 
//? Значення, що повертається, - це завжди валідний HTML-код.
const article31 = document.querySelector(".article31");
console.log("article.innerHTML:", article31.innerHTML);

const title31 = document.querySelector(".article31 .title31");
console.log("title31.innerHTML:", title31.innerHTML);
console.log("title31:", title31);


const text31 = document.querySelector(".article31 .text31");
console.log("text.innerHTML:", text31.innerHTML);

const link31 = document.querySelector(".article31 .link31");
console.log("link.innerHTML:", link31.innerHTML);
console.log("-----------------------------------------------------------------------------------------");



//! Зміна/видалення
console.warn("Зміна/видалення:");
//? ✴️ Властивість innerHTML доступна
//? і для читання, і для запису.
//? Якщо записати в неї рядок з HTML-тегами,
//? то браузер під час парсингу рядка
//? перетворить їх у валідні елементи і додасть в DOM-дерево.
console.log(
    `%c
    title32.innerHTML = '<span class="accent">Replacement</span>';
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const title32 = document.querySelector(".article32 .title32");
title32.innerHTML = '<span class="accent">Replacement</span>';
console.log("title32:", title32)


//? ✴️ Якщо у властивість innerHTML записати порожній рядок,
//? то вміст елемента буде очищено.
//? Це простий і швидкий спосіб видалення всього вмісту.
console.log(
    `%c
    link32.innerHTML = "";
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const link32 = document.querySelector(".article32 .link32");
link32.innerHTML = "";
console.log("link32:", link32)
console.log("-----------------------------------------------------------------------------------------");



const technologies = ["HTML2", "CSS2", "JavaScript2", "React2", "Node2"];

// const heading = document.createElement("h1");
// elementSecond.classList.add("second"); //todo: додаємо клас "second"
// list1.after(afterElement);
// elem.lastChild - вибере останній дочірній елемент всередині elem, включно з текстовими вузлами.
// elem.lastElementChild - вибере останній дочірній вузол - елемент всередині elem.
    
const body2 = document.body;
const bodyLastElem = document.body.lastElementChild
console.log("bodyLastElem:", bodyLastElem)


const list333 = document.createElement("ul")
// const list33After = document.querySelector(".box")
// console.log("list33After:", list33After)
list333.classList.add("list333")
// list33.textContent = "це мій список";
bodyLastElem.before(list333)
console.log("list33:", list333)

// elem.previousElementSibling
// element.append

// article34.innerHTML = htmlString
for (const element of technologies) {
    const elemLi = document.createElement("li")
    console.log("elemLi:", elemLi)
    // elemLi.textContent = element
    elemLi.innerHTML = element
    list333.append(elemLi)
}


//! Шаблонізація
console.warn("Шаблонізація:");
//? ✴️ За такого підходу,
//? на відміну від document.createElement(),
//? ми не отримуємо посилання на створений DOM-елемент.
//? Це перший крок на шляху до шаблонізації
//? - створення великої кількості однотипної розмітки
//? з різними даними за наперед визначеним шаблоном.
//? Наприклад, як у списку товарів інтернет магазину тощо.
//? ✳️ Однотипна (шаблонна) розмітка
//? створюється із масиву даних.
//? Прийом полягає у перебиранні цього масиву
//? і складанні одного рядка з HTML-тегами,
//? який потім записуємо в innerHTML елемента.
const technologies1 = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const technologies = ["C#", "C++", ".NET", "PHP", "Python", "Java", "SQL", "Django", "C", "iOS"];
const list33 = document.querySelector(".list33");

const markup = technologies1
    .map((technology) => `<li class="list-item">${technology}</li>`)
    .join("");

//todo: У консолі бачимо один рядок з HTML-тегами:
console.log("markup:", markup);

//todo: Додаємо всю розмітку за одну операцію.
list33.innerHTML = markup;
console.log("-----------------------------------------------------------------------------------------");



//! Додавання
console.warn("Додавання:");
//? ✴️ Зміна elem.innerHTML повністю видалить
//? і повторно створить всі нащадки елемента elem.
//? Якщо елемент спочатку не був порожній,
//? то виникнуть додаткові витрати на збереження
//? вже існуючої розмітки, а це погано.
console.log(
    `%c
    article34.innerHTML += htmlString;
    `,
    'color: blue; font-size: 16px',
);
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const article34 = document.querySelector(".article34");
const htmlString = `<p class="article-text">Nullam quis ante. Vestibulum dapibus nunc ac augue. In consectetuer turpis ut velit.</p>
<a class="link" href="#">Read more...</a>`;

//todo: Додаємо розмітку до вже існуючої за одну операцію.
// article34.innerHTML = htmlString; //todo: видаляє всі елементи та додає htmlString
article34.innerHTML += htmlString; //todo: додає htmlString до вже існуючих елементів
// article34.innerHTML = article34.innerHTML + htmlString;



//! Метод insertAdjacentHTML()
console.warn(`Метод insertAdjacentHTML(): \n ${((window.location.href).split('/')).slice(0, -2).join('/') + '/'}${"lesson-FE3_18/images/insert-adjacent.png"}`);
//? ✴️ Метод insertAdjacentHTML() - це сучасний метод для додавання рядка 
//? з HTML-тегами перед, після або всередину елемента. 
//? Вирішує проблему innerHTML пов'язану зі збереженням 
//? вмісту елемента під час додавання розмітки до вже існуючої.
console.log(
    `%c
    elem.insertAdjacentHTML(position, string);

        🔸 "beforebegin" - перед elem
        🔸 "afterbegin" - всередині elem, перед усіма дітьми
        🔸 "beforeend" - всередині elem, після усіх дітей
        🔸 "afterend" - після elem
    `,
    'color: blue; font-size: 16px',
);
//? ✴️ Аргумент position - це рядок,
//? позиція щодо елемента elem.
//? Приймає одне з чотирьох значень:
//? 🔸 "beforebegin" - перед elem
//? 🔸 "afterbegin" - всередині elem, перед усіма дітьми
//? 🔸 "beforeend" - всередині elem, після усіх дітей
//? 🔸 "afterend" - після elem
//? ✳️❗️❗️❗️ "beforebegin" і "afterend" працюють тільки тоді,
//? коли elem вже знаходиться в DOM-дереві.
console.log(". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .");
const list4 = document.querySelector(".list4");

const newTechnologies = ["React", "TypeScript", "Node.js"];
const markup1 = newTechnologies
    .map((technology) => `<li class="list-item new">${technology}</li>`)
    .join("");

list4.insertAdjacentHTML("beforebegin", "<h3>Popular technologies</h3>");
list4.insertAdjacentHTML("afterbegin", '<li class="list-item new">C++</li>');
list4.insertAdjacentHTML("beforeend", markup1);
list4.insertAdjacentHTML("afterend", '<a class="link4" href="">Read more...</a>');
console.log("----------------------------------------------------------------------------------");
