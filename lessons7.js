----- МАССИВИ
  
  Масив - структура даних для зберігання і маніпулювання колекцією індексованих значень.
  Використовується для зберігання впорядкованих колекцій даних, наприклад, списку курортів, 
  товарів, клієнтів в готелі тощо.
 */

/* 
  ---- Створення
  
  Масив оголошується і береться у квадратні дужки [] - літералом масиву. 
  Всередині дужок кожен елемент масиву розділяється комою.
  
*/

/* 
  Літеральний спосіб:
*/

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients);

/*
  Використання конструктора Array:
*/

// // Порожній масив
// const emptyArray = new Array();
// console.log(emptyArray);

// // Масив з визначеними елементами
// const numbers = new Array(1, 2, 3, 4, 5);
// console.log(numbers);

// // Масив з певною довжиною (без ініціалізації елементів)
// const emptySlots = new Array(6); // створює масив з 5 "порожніми" місцями
// console.log(emptySlots); // [ <6 empty items> ]

/*
  Додавання елементів
*/
// const emptySlots = new Array(6); // створює масив з 5 "порожніми" місцями
// console.log(emptySlots); // [ <6 empty items> ]

// emptySlots[0] = "A";
// emptySlots[1] = "B";
// emptySlots[3] = "C";
// console.log(emptySlots);

// За допомогою розгорнутих виразів (spread operator):

// Розгорнутий масив з іншого масиву:

// const oldClients = ["Mango", "Poly", "Ajax"];
// const newClients = [...oldClients, "Kiwi"];

// console.log(oldClients);
// console.log(newClients);

/* 
  ---- Доступ до елементів
  
  Для доступу до значення елемента масиву використовується синтаксис квадратних дужок масив[індекс].
  Між іменем змінної, що зберігає масив, і квадратними дужками не повинно бути пробілу.
 */

// const clients = ["Mango", "Poly", "Ajax"];

// // Зазначаючи в квадратних дужках індекс елемента, ми отримуємо його значення
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

/* 
  ---- Перевизначення
  
  На відміну від рядків, елементи масиву можна змінювати, звернувшись до них за індексом 
  і присвоївши інше значення.
*/

// const clients = ["Mango", "Poly", "Ajax"];
// clients[0] = "Kiwi";
// clients[1] = "Pango";
// console.log(clients); // ["Kiwi", "Pango", "Ajax"]

/* 
  --- Delete не змінює довжину масиву: Метод delete видаляє елемент із масиву
  але не змінює його довжину.
  Це залишає "пусте" місце в масиві, яке буде представлене, як undefined 
  в місцях, де елементи були видалені.
*/

// const array = ["apple", "banana", "cherry", "date", "elderberry"];
// console.log(array.length);

// delete array[2];
// delete array[4];

// console.log(array);
// console.log(array.length);

/* 
  Щоб зменшити розмір масиву та видалити елементи, краще використовувати методи,
  такі як splice() або фільтрування за допомогою методів filter() чи reduce().
*/

/* 
  --- Розряджені масиви (Sparse Arrays) в JavaScript - це масиви, які мають "порожні" 
  або відсутні індекси між елементами.
*/

// const sparseArray = [1, 2, , 4, 5];

// console.log(sparseArray);
// console.log(sparseArray.length);
// console.log(sparseArray[2]);

/* 
  ----- Багатовимірні масиви (масиви масивів)
*/

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // Доступ до елементів багатовимірного масиву:
// console.log(matrix[0][1]); // Результат: ?
// console.log(matrix[2][0]); // Результат: ?

// Зміна значення елементів багатовимірного масиву:

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// // Зміна значення елемента на позиції [1][2] (другий рядок, третій стовпець)
// matrix[1][2] = 10;

// // Тепер масив виглядає так:
// console.log(matrix);

/*
  ---- Деструктуризація масивів
*/

// const numbers = [1, 2, 3];
// const [first, second, third] = numbers;

// console.log(first);
// console.log(second);
// console.log(third);

// // Деструктуризація масиву з пропуском значень

// const colors = ['red', 'green', 'blue'];
// const [, secondColor] = colors;

// console.log(secondColor);

/* 
  ---- Залишок масиву (rest parameters)
*/

// const fruits = ["apple", "banana", "cherry", "date"];
// const [firstFruit, secondFruit, ...otherFruits] = fruits; // ...otherFruits: використовує оператор розширення (...), який збирає всі залишкові елементи масиву, починаючи з третього, в новий масив otherFruits.

// console.log(firstFruit);
// console.log(secondFruit);
// console.log(otherFruits);

/* 
  ---- Довжина масиву
  
  Довжина масиву, тобто кількість його елементів, зберігається у властивості length. 
  Це динамічна величина, яка змінюється автоматично під час додавання або видалення елементів.
*/

// const clients = ["Mango", "Poly", "Ajax"];
// console.log(clients.length);

// clients[3] = "Kovbaska";
// console.log(clients.length);

/* 
  ---- Індекс останнього елемента 
  
  Найчастіше, ми заздалегідь не знаємо яка буде довжина масиву в коді. 
  Для того, щоб отримати значення останнього елемента, застосовується наступний підхід - 
  довжина масиву завжди на одиницю більша, ніж індекс останнього елемента. 
  Використовуючи формулу довжина_масиву - 1, можна отримати значення останнього елемента масиву 
  довільної довжини.
*/

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;

// console.log(lastElementIndex); // Результат: ?
// console.log(clients[lastElementIndex]); // Результат: ?

/*  
  ---- Методи масивів 
*/

/* 
  --- push та pop
  
  Додають або видаляють крайні елементи масиву. 
  Працюють тільки з крайнім лівим і крайнім правим елементом, і не можуть вставити або 
  видалити елемент з довільної позиції.
*/

/* 
  Метод push() додає один або декілька елементів наприкінці масиву, 
  без необхідності зазначати індекси елементів, що додаються. 
 */

// const numbers = [];

// numbers.push(1);
// console.log(numbers);

// numbers.push(2);
// console.log(numbers);

// numbers.push(3);
// console.log(numbers);

// numbers.push(4);
// console.log(numbers);

// numbers.push(5, 6);
// console.log(numbers);

/* 
  Метод pop() видаляє останній елемент з кінця масиву і повертає видалений елемент.
  Якщо масив порожній, метод повертає undefined.
*/

// const numbers = [1, 2, 3, 4, 5];

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);

// console.log(numbers.pop());
// console.log(numbers);


/* 
  --- unshift і shift — це методи масиву в JavaScript, які використовуються для додавання 
  та видалення елементів на початку масиву.
  Ці методи змінюють оригінальний масив і повертають різні значення залежно від операції. 
*/

/* 
  Метод unshift() додає елемент або елементи на початок масиву і 
  повертає довжину масиву із вже доданими значеннями.
  Якщо масив порожній, метод повертає undefined.
*/

// const fruits = ["Apple", "Banana"];
// // console.log(fruits);

// // Додаємо елементи на початок масиву
// fruits.unshift("Mango", "Orange");
// console.log(fruits);

// // Повертає нову довжину масиву
// console.log(fruits.unshift("Grapes"));
// console.log(fruits);

/* 
  Метод shift() видаляє перший елемент з масиву і повертає його значення.
  Масив змінюється — його довжина зменшується на одиницю. 
*/

// const numbers = [10, 20, 30, 40];
// console.log(numbers); // [10, 20, 30, 40]

// // Видаляємо перший елемент масиву
// let firstElement = numbers.shift();
// console.log(firstElement); // 10
// console.log(numbers); // [20, 30, 40]

// // Якщо викликаємо shift на порожньому масиві, повернеться undefined
// let emptyShift = [].shift();
// console.log(emptyShift); // undefined

/* 
  --- concat(). 
  
  Об'єднує два або більше масивів в один. Він не змінює масив, на якому викликається, а повертає новий. 
  Порядок аргументів методу впливає на порядок елементів нового масиву.
*/

// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Monkong", "Singu"];

// const allClientsWithOldFirst = oldClients.concat(newClients);
// console.log(allClientsWithOldFirst); // ["Mango", "Ajax", "Poly", "Kiwi", "Monkong", "Singu"]

// const allClientsWithNewFirst = newClients.concat(oldClients);
// console.log(allClientsWithNewFirst); // ["Monkong", "Singu", "Mango", "Ajax", "Poly", "Kiwi"]

// console.log(oldClients); // ["Mango", "Ajax", "Poly", "Kiwi"]
// console.log(newClients); // ["Monkong", "Singu"]

/* 
 --- slice(begin, end).

  Повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. 
  Копія створюється з begin і до end, але НЕ включно, end - індекси елементів вихідного масиву.
*/

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1, 3)); // Результат: ?
// console.log(clients); // Результат: ?

// // Якщо begin і end не зазначені, буде створена повна копія вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice()); // Результат: ?

// // Якщо не зазначено end, копіювання буде зі start і до кінця вихідного масиву.
// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // Результат: ['Ajax', 'Poly', 'Kiwi']
// console.log(clients.slice(2)); // Результат: ?

/* 
  --- splice(position, num)
  
  Метод splice змінює вихідний масив і повертає масив, що містить видалені елементи.  
*/
// const scores = [1, 2, 3, 4, 5];

// // Видаляємо три елементи масиву, починаючи з першого елемента (індекс 0)
const deletedScores = scores.splice(0, 3);

// // Тепер масив scores містить два елементи
console.log(scores); // Результат: ?

// // А масив deletedScores містить три видалені елементи
console.log(deletedScores); // Результат: ?


const numbers = [5, 10, 15, 20, 25];

// // Оголошення функції
numbers.forEach(function (number, index) {
console.log(`Індекс ${index}, значення ${number}`);
});

console.log("---------------------");

// Анонімна стрілочна функція 
numbers.forEach((number, index) => {
  console.log(`Індекс ${index}, значення ${number}`);
 });

 --- Метод map(callback) використовується для трансформації масиву. 
  
//  Він викликає колбек-функцію для кожного елемента вихідного масиву, 
//  а результат її роботи записує у новий масив, який і буде результатом виконання методу.
*/

/* 
 array.map((element, index, array) => {
   // Тіло колбек-функції
 }); 
*/

 
 const numbers = [1, 2, 3, 4, 5];

const detailedNumbers = numbers.map((number, index, array) => {
return `Елемент ${number} має індекс ${index} у масиві ${array}`;
 });

 console.log(detailedNumbers);


 /*  
  --- Метод filter(callback) використовується для єдиної операції - фільтрації масиву, 
  тобто, коли необхідно вибрати більше одного елемента з колекції за певним критерієм. 
*/

/* 
  array.filter((element, index, array) => {
    // Тіло колбек-функції
  }); 
*/

const values = [51, -3, 27, 21, -68, 42, -37];

const positiveValues = values.filter((value) => value >= 0);

// console.log(positiveValues); // Результат: [51, 27, 21, 42]

const negativeValues = values.filter((value) => value < 0);
console.log(negativeValues); // Результат: [ -3, -68, -37 ]

const bigValues = values.filter((value) => value > 1000);
console.log(bigValues); // Результат:  []

// // Оригінальний масив не змінився
 console.log(values); // Результат: [51, -3, 27, 21, -68, 42, -37]
