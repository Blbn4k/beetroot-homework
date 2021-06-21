
function validateNumber(input) {
    if (input !== null) {

        if (isNaN(input) || input === '') {
            alert ('Вы ввели не число!!!')
        } else {
            return true
        } 
    } else {
        alert('Нужно было нажать ОК')
    }

    return false
}

function checkUserNumber() {
    const x = prompt('Введите число:');

    // в этой функции нам больше делать нечего
    if (!validateNumber(x)) return

    checkNumber(x);
}

function checkNumber(numeric) {
    if (numeric < 0) {
        // ${} используется только при обратных кавычках, как вверху
            alert(`Введенное число ${numeric}  является отрицательным`);
        } else if (numeric > 0) {
            alert(`Вы ввели положительное ${numeric}`);
        } else {
            alert(`Вы ввели ноль`);
        }
}


function checkNumberModule () {
    const x = prompt('Введите число:')

    if (validateNumber(x)) {
      alert(Math.abs(x));
    }  
}
