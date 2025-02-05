
function checkProbabilityTheory(count){
    let doubleNum = 0;
    let notDobleNum = 0;
for (let i = 0; i < count; i++) {
  let min = 100;
  let max = 1000;
    let randomNamFromRange = Math.floor(Math.random() * (max - min +1) + min) ; // (max - min +1) -определение ширины диапазона, в котором будем получать рандомніе числа, +1 -это включение верхней границы max
    //Math.random() * (max - min +1) -ширина диапазона от 0 до max
    // + min  -включение минимальной границы в диапазон
     // Math.floor - функция округляет результат вниз до ближайшего целого числа,чтобі получить целое число в диапазоне [min.max]

    // интересный факт - Эта функция возвращает случайное целочисленное значение из заданного диапазона. Она используется для настройки характеристик цветов, таких, как тон, насыщенность и светлота.
    if (randomNamFromRange   %2 ===0){
        doubleNum++; 
      }
      else {
         notDobleNum++;
      }
    }
   let generalcount = doubleNum + notDobleNum;
   let doubleNumPercent = ((doubleNum/generalcount) * 100);
   let formatDoubleNumPercent= doubleNumPercent.toFixed(1); // сокращаем количество знаков после запятой. Значение може округляться в результате сокращения
   let notDoblPercent = ((notDobleNum/generalcount) * 100);
   let formatNotDoblPercent = notDoblPercent.toFixed(1);
   
   console.log("Количество сгенерированных рандомных чисел из диапазона [100, 1000]:\t", generalcount);
   console.log("\tКоличество парных рандомных чисел из диапазона [100, 1000]:\t\t\t", doubleNum);
   console.log("\tКоличество непарных рандомных чисел из диапазона [100, 1000]:\t\t", notDobleNum);
   console.log("\t\Процент парных рандомных чисел из диапазона [100, 1000]:\t\t\t", formatDoubleNumPercent);
   console.log("\t\Процент непарных рандомных чисел из диапазона [100, 1000]:\t\t\t", formatNotDoblPercent);

}
checkProbabilityTheory(1000);
   


//Черновик


// function randomRange(min, max)
//  {
   
//  min = Math.floor(min);
//    max = Math.ceil(max);
//     return Math.floor(Math.random() * (max - min +1) + min) // (max - min +1) -определение ширины диапазона, в котором будем получать рандомніе числа, +1 -это включение верхней границы max
//     //Math.random() * (max - min +1) -ширина диапазона от 0 до max
//     // + min  -включение минимальной границы в диапазон
//      // Math.floor - функция округляет результат вниз до ближайшего целого числа,чтобі получить целое число в диапазоне [min.max]


// let resultRange = randomRange(100, 1000)    // вызов функции randomRange с аргументами 100 и 1000
// console.log("Сгенерированное число из диапазона [100, 1000]:", resultRange);  // после вызова функции результат будет созраняться в переменной resultRange

// function checkProbabilityTheory(count)
// {

//     let doubleNum = 0;
//     let notDobleNum = 0;
// for (let i = 0; i < count; i ++) 
//     {
//         let dobNotDobres = resultRange;
//   if (dobNotDobres  %2 ===0){
//    return console.log(doubleNum++); 
//  }
//  else {
//     return console.log(notDobleNum++);
//  }
// }

// }




// Будемо заповнювати місця в готелі доти, доки поточна кількість клієнтів не буде дорівнювати максимально можливій.

// let clientCounter = 18;
// const maxClients = 25;

// while (clientCounter  <= maxClients) {
//   console.log(clientCounter);
//   clientCounter += 1;
// }



// Створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max)

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// console.log(random(1, 5));


//    min = Math.floor(100);
//    max = Math.ceil(1000);


// --- Класс Math

//     Один із вбудованих класів, який надає набір методів для роботи з числами. 
//     Знання всіх методів напам'ять не вимагається, тільки деяких, найбільш корисних.
//  */

// Округлення

// Math.floor(num) - повертає найменше ціле число, менше, або яке дорівнює зазначеному числу
// console.log(Math.floor(1.7)); // 1

// Math.ceil(num) - повертає найбільше ціле число, більше, або яке дорівнює зазначеному числу.
// console.log(Math.ceil(1.2)); // 2

// Math.round(num) - повертає значення числа, округленого до найближчого цілого
// console.log(Math.round(1.2)); // 1
// console.log(Math.round(1.5)); // 2


// Math.random() - повертає псевдовипадкове число в діапазоні [0, 1), тобто, від 0 включно до 1 не включно

// console.log(Math.random()); // випадкове число між 0 і 1

// let rnd = Math.random();
// console.log(rnd);

// Ми можемо перетворити повернене число на Integer

// let rnd = Math.random();
// console.log(rnd);

// rnd *= 10;
// console.log(rnd);

// rnd = Math.round(rnd);
// console.log(rnd);

// let rnd = Math.round(Math.random() * 100)
// console.log(rnd);

// Створення випадкового числа з плаваючою крапкою від min до max (не враховуючи max)

// function random(min, max) {
//   return min + Math.random() * (max - min);
// }

// console.log(random(1, 5));
