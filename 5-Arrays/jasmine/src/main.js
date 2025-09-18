let position = 5;
let stack = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let getItemResult = stack[position];

position = 6;
let replacementCard = 17;
stack[position] = replacementCard;

let newCardTop = 3;
stack[0] = newCardTop;

stack.splice(position, position);

stack.pop();

let newCardBottom = 12;
stack[stack.length - 1] = newCardBottom

stack.splice(stack.length - 1, stack.length - 1);

let stackSize = 3;
let checkSizeOfStackResult = (stackSize == stack.length)

console.log(stack);

