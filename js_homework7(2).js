const arr = [
    {
        userName:"TestPass",
        lastName:"TestPass",
        email:"test.test@gmail.com"
    },
    {
        userName:"TestFail",
        lastName:"TestFail",
        email:"test.test.gmail.com" // Нам такі не підходять
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com>" // Нам такі не підходять
    },
    {
        userName:"Sashko Pass",
        lastName:"Shevchenko Pass",
        email:"sashko_shevchenko@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
    {
        userName:"Alina Savchenko",
        lastName:"Savchenko Pass",
        email:"alinka.v.savchenk0@gmail.com"
    },
    {
        userName:"Alina Savchenko",
        lastName:"Savchenko Pass",
        email:"v.@gmail.com"
    },
];
const pattern = /^[\w]+[\w.-]*@(gmail|yahoo)\.com$/;
const trustedEmails = arr.filter(domen => pattern.test(domen.email)); // для создания нового массива, в кот будут запистываться обьекты трушных адресов

if (trustedEmails.length > 0) {
    trustedEmails.filter(domen => {
        console.log("Адрес, которому стоит доверять:", domen.email);
    });
} else {
    console.log("Подозрительный адрес");
}


// тоже рабочий вариант, но выводит подробное описание трушного адреса
// arr.findIndex((domen) => {
//     const pattern = /^[\w]+[\w.-]{1,}(@gmail|@yahoo)[.]com$/;
//     const trustedEmails = (domen.email).match(pattern);
//    if(trustedEmails){
//     console.log("Адрес, которому стоит доверять:", trustedEmails);
//    }
//    else {
//    console.log("Подозрительный адрес");
//    }
// }
// )







//Черновик
// arr.findIndex((domen) => {
//     const pattern = /[\w]{1,}(@gmail|@yahoo)[.]com/;
//     const result = (domen.email).match(pattern)
//     // domen.email = result;
//     console.log("Список адресов, которым доверяем:", result);

// })


// const pattern = /(@gmail|@urknet)[.]com/; // 3 крапкою тут не все так просто

// console.log(str1 + ": " + pattern.test(str1));

// У нас параноя, ми не довіряємо жодним адресам, окрім зареєстрованих на доменах gmail.com та yahoo.com.
// За допомогою регулярного виразу створіть масив з адресами, гідними довіри. Постарайтеся також зробити просту валідацію до @
// одне, або два слова які можуть містити (латинські букви, цифри) яке може бути розділене крапкою.


  
// Дозволяє виконувати пошук за складнішими умовами, ніж просто рівність. 
// Використовується як для пошуку у масиві примітивів, так і в масиві об'єктів.
// */

/* 
array.findIndex((element, index, array) => {
  // Тіло колбек-функції
}); 
*/

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

// console.log(colorPickerOptions.findIndex((option) => option.label === "blue"));
// console.log(colorPickerOptions.findIndex((option) => option.label === "pink"));
// console.log(colorPickerOptions.findIndex((option) => option.label === "white"));  // Результат: -1

