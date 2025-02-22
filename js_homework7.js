//Вариант,поиска целых слов по параметрам
const text = "Video game development is the process of creating a video game. And It is a multidisciplinary practice, involving programming, design, art, audio, user interface, and writing";
const pattern = /\b[^(A|a)/\s/,]{6,}\b/g;
const matches = text.match(pattern)
if(matches){
    console.log("Найденные слова длинной 6 и более символов (не содержащие Aa, пробел и запятую):", matches);
}else{
    console.log("Слов, длинной 6 и более символов (не содержащих Aa, пробел и запятую) не найдено");
}


//Рабочий вариант решения домашки -поиск символов от 6 и более длинной,с обрезанными словами
const str = "Video game development is the process of creating a video game. And It is a multidisciplinary practice, involving programming, design, art, audio, user interface, and writing";
const patterns = /[^(A|a)/\s/,]{6,}/g;
const result = str.match(patterns)
if(result){
    console.log("Найдена последовательность длиной 6 и более символов (не содержащие Aa, пробел и запятую):", result);
}else{
    console.log("Не найдена последовательность длиной 6 и более символов (не содержащие Aa, пробел и запятую)");
}


// Черновик 
//проверка негативного кейса,если нет слов с нужными параметрами

// const text = "Video audio, user interface, and wri";
// const pattern = /\b[^(A|a)/\s/,]{6,}\b/g;
// const matches = text.match(pattern)
// if(matches){
//      console.log("Найденна последовательность длиной 6 и более символов (не содержащие Aa, пробел и запятую):", matches);
// }else{
//     console.log("Слов, длинной 6 и более символов (не содержащих Aa, пробел и запятую) не найдено");
// }


//проверка негативного кейса,если нет символами с нужными параметрами
// const text = "Video game  is the user face, and ";
// const pattern = /[^(A|a)/\s/,]{6,}/g;
// const matches = text.match(pattern)
// if(matches){
//     console.log("Найдена последовательность длиной 6 и более символов, не содержащие Aa, пробел и запятую:", matches);
// }else{
//     console.log("Не найдена последовательность длиной 6 и более символов, не содержащие Aa, пробел и запятую");
// }
