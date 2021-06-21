"use strict"

// Написать функцию, которая принимает 2 числа
// и возвращает меньшее из них.

// const num1 = 1,
//       num2 = 2;
//  то же самое:
// const num1 = 1;
// const num2 = 2;


function minNumber(num1, num2) {
    // если первое число меньше или равно второго - вернут первое число
    // иначе вернуть второе число

    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}


// Написать функцию, которая возводит
// переданное число в указанную степень,
// (не используя оператор возведения в степень или Math.pow())

function powNumber(num, pow) {
    // умножить переданное число (num) само на себя столько раз (pow), 
    // сколько передано как степень

    // если степень равно 0, то вернуть нужно 1

    if (pow === 0) {
        return 1;
    } 


    let result = 1
    for (let i = 1; i <= pow; i++) {
        result *= num;
    }

    return result;




}




function divisionRest(num1, num2) {
    let tmp
    // 1.
    tmp = Math.floor(num1 / num2);
    // tmp = parseInt(num1 / num2, 10);

    // 2.
    tmp = tmp * num2;

    // 3.
    tmp = num1 - tmp;

    return tmp;
}




