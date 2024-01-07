function addDigits(num) {
    while (num >= 10) {
        num = [...num.toString()].reduce((sum, digit) => sum + parseInt(digit, 10), 0);
    }
    return num;
}

let num = 38;
let result = addDigits(num);
console.log(result);