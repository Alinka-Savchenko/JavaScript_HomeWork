const services = {
nails: "650 грн",
lash : "400.75 грн",
cosmetology: "-10500 грн",
generalPrice(){  //создаем метод,который возвращает общую стоимость всех услуг
    let allPrice = 0;
    for (let key in this) {
        if(typeof this[key] === "number"){
            this[key] = this[key] + "грн"; // если число укуазано без строки "грн", то мы  добавим "грн")
        } else if(typeof this[key] === "string" && !!this[key].includes("грн")){  //рассматриваем кейс,если в свойстве обьекта недобавлена "грн" в строку,которая конвертнется в число
            this[key] += "грн";
        }

        if(typeof this[key] === "string" && this[key].includes("грн")){ // конвертируем из сторки число и выкидываем грн
            let price = parseFloat(this[key]); //используем parseFloat для работі с дробными числами
            let formatPrice = price.toFixed(2);
            allPrice += Math.abs(formatPrice);  //Math.abs используем для превращения отрицательного числа в положительное 
        }
        
    }
    return allPrice + "\tгрн"; 
},
generalMin(){  //создаем метод,который возвращает минимальную стоимость всех услуг
    let generalMinPrice = []; 
    for (let key in this) {
        if(typeof this[key] === "number"){
            this[key] = this[key] + "грн"; // если число укуазано без строки "грн", то мы  добавим "грн")
        } else if(typeof this[key] === "string" && !!this[key].includes("грн")){  //рассматриваем кейс,если в свойстве обьекта не добавлена "грн" в строку,которая конвертнется в число
            this[key] += "грн";
        }

        if(typeof this[key] === "string" && this[key].includes("грн")) // конвертируем из сторки число и выкидываем грн
        {
            let minPrice = parseFloat(this[key]); //используем parseFloatlkz для работі с дробными числами
             generalMinPrice.push(Math.abs(minPrice)); // generalMinPrice -массив, .push()используем для накопления в массив значений,которые затем используются для вычисления минимальной цены
        } 
    }
    return Math.min(...generalMinPrice).toFixed(2) + "\t\tгрн";
},
generalMax(){ //создаем метод,который возвращает максимальную стоимость всех услуг
    let generalMaxPrice = [];
    for (let key in this) {
        if(typeof this[key] === "number"){
            this[key] = this[key] + "грн"; // если число укуазано без строки "грн", то мы  добавим "грн")
        } else if(typeof this[key] === "string" && !!this[key].includes("грн")){  //рассматриваем кейс,если в свойстве обьекта не добавлена "грн" в строку,которая конвертнется в число
            this[key] += "грн";
        }

        if(typeof this[key] === "string" && this[key].includes("грн")) // конвертируем из сторки число и выкидываем грн
        {
            let maxPrice = parseFloat(this[key]); //используем parseFloatlkz для работі с дробными числами
             generalMaxPrice.push(Math.abs(maxPrice));
        } 
    }
    return Math.max(...generalMaxPrice).toFixed(2) + "\tгрн";
}
};
services.botoxForHair = 3500;
services["massage"] = 800; 
console.log(services);
console.log("Общая стоимость услуг:\t\t\t" + services.generalPrice());
console.log("Мнимальная стоимость услуг:\t\t" + services.generalMin());
console.log("Максимальная стоимость услуг:\t" + services.generalMax());





// Черновик экспериментов)))

//console.log(Object.keys(services)); // -практикую вытягивание имена свойств
// console.log(Object.values(services)); //возвращение значений свойств обьекта
//console.log(Object.entries(services)); // возвращение массива пар [ключ,значение]


//    let intAllPrice = Math.round(allPrice);

for (let key in object) {
    // Виконати код для кожної властивості
  }

// const services = {
//     age : 10,
//     name: "Alina",
//     res () {
//         return console.log(this.age);
//     }
//     };
//     services.res();


// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     console.log("Цей метод буде повертати всі книги - властивість books");
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
//     console.log("Цей метод буде додавати нову книгу у властивість books");
//   },
// };
// console.log(bookShelf);
// bookShelf.getBooks();
// bookShelf.addBook("Нова книга");
// return Math.max(...generalMaxPrice).toFixed(2)





// let str = "DataTypes";
// let letter = str[1];
// console.log(letter);


// let text = "Джаваскріпт - це цікаво";
// let length = text.length;
// console.log(length);


// let divisionResult = "qwerty" / 0;
// console.log(divisionResult, typeof divisionResult);

// var guessWho = 3.14;
// guessWho = "А тепер тут строка";
// guessWho = false;
// guessWho = 8.97;
// console.log(guessWho);


// let n = 5;
// n *= 2;
// console.log(n);

// let sex = "female";
// let birthday = 29;
// let discount;
// if (sex === "male") {
//   discount = birthday >= 25 ? "30%" : "10%";
// } else if (sex === "female") {
//   discount = birthday === 19 ? "30%" : "10%";
// } else {
//   discount = birthday === 7 ? "10%" : "5%";
// }
// console.log(discount);


// console.log(null || 1); 


// let i = 0;
// do {
//   i += 4;
//   console.log("i = " + i);
// } while (i < 11);


// const scores = [1, 2, 3, 4, 5];
