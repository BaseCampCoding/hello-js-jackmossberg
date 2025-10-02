let digits1 = [2, 2, 1];
let digits2 = [1, 4, 3];

let number1 = parseInt(digits1.join(''));
let number2 = parseInt(digits2.join(''));

let twoSum = number1 + number2;

function isPalindrome(num) {
  const numStr = String(num);
  const reversedNumStr = numStr.split('').reverse().join('');
  return numStr === reversedNumStr;
}

let luckyInput = 123321;

let luckyNumber = isPalindrome(luckyInput);
let luckyInputStr = String(luckyInput);

let userInput = 5;

let errorMessage;
if (userInput === undefined || userInput === null) {
    errorMessage = 'Required field';
} else if (typeof userInput != 'number') {
    errorMessage = 'Must be a number besides 0'
}