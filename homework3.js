
function pow(x, y, func) {
    let result = func(x, y); 


        // if ( x === NaN || y === NaN) {
        //   return console.log("Веденное значение не является числом"); //хотела дополнительно выполнить проверка параметров на не число ,но что-то под разными вариантами не получается,пробовала так же в самой degree функции
        // } else {
  
        
  return console.log("Результат возведение числа в степень =", result);
}
// }
function degree(x, y){       
let res = x;
 for (let i = 1; i < y; i++) {
    res *= x;
 }
 return res; 
}
pow(5, 3, degree);






//черновик
 // {
    // if (typeof x == NaN || typeof y == NaN ) {
    //     console.log("Веденное значение не является числом");
    // } else 
    // { 
        return console.log("Результат возведение числа в степень =", result);
//     }
// }

   //     if ( x == NaN|| y == NaN) {
    //         console.log("Веденное значение не является числом"); //хотела дополнительно выполнить проверка параметров на не число ,но что-то под разніми вариантами не получается,пробовала так же в самой degree функции
    //     } 
    //     
    //     {


    // function pow(a, b) {
    //     let result = a;
    //     for (let i = 1; i < b; i++) {
    //       result *= a;
    //     }
    //     return result;
    //   }
      



      // for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     console.log(`Результат множення ${i} * ${j} = ${i * j}`);
//   }
//   console.log("------------------------------------");
// }


// function degree(x, y){       
//      for (let x = 1; x < 10; x++) {
//         for (let y = 1; y < 10; y++)
//         console.log("Результат res = ${x *= y}"); 
//      } 
//      }