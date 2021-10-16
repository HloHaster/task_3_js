// Первое задание

function howManyDays(month) {
    let days;
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            days = 31;
            break;
        case 2:
            days = 28;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            days = 30;
            break;
        default:
            days = `ошибка: месяца под номером ${month} не существует!`;
            break;
    }
    return days;
}

for (let i = 0; i <= 13; i++) {
    console.log(howManyDays(i));
}

// Второе задание

function max(a, b) {
    return a > b ? a : b;
}

console.log(max(10, 5));

// Третье задание

function pow(x, n) {
    let p = 1;
    for (let i = 0; i < n; i++) {
        p = p * x;
    }
    return p;
}

console.log(pow(2, 3));

// Четвертое задание

function calcMultiplication(numOne, numTwo, addNum, evenNum) {
    if (isNaN(numOne) || isNaN(numTwo)) {
        console.log("Не число");
        return;
    }
    let p = numOne * numTwo;
    p % 2 === 0 ? evenNum() : addNum();
}

function logAddNum() {
    console.log("Нечетное");
}

function logEvenNum() {
    console.log("Четное");
}

calcMultiplication(2, 3, logAddNum, logEvenNum);
calcMultiplication("гыгыгы", 3, logAddNum, logEvenNum);
