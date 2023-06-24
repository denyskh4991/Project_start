let first = prompt('Enter your first number');
let second = prompt('Enter your second number');
let title = "//User entered " + first + " and " + second + "";
let number1 = Number(first);
let number2 = Number(second);
let plus = number1 + number2;
let minus = number1 - number2;
let multiplication = number1 * number2;
let division = number1 / number2;
let roundedNumber = division.toFixed(0);
let result = "" + title + "\n" + number1 + "+" + number2 + "=" + plus + "\n" + number1 + "-" + number2 + "=" + minus + "\n" + number1 + "*" + number2 + "=" + multiplication + "\n" + number1 + "/" + number2 + "=" + roundedNumber + ""
alert(result);