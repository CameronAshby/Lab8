let input = prompt('enter a space separated rpn expression');

$('.givenString').append(input);

let stack = new Stack();

let rpnArray = input.split(' ');

for(let i = 0; i < rpnArray.length; i++) {
    const element = rpnArray[i];

    if(element == '+') {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        let result = operand2 + operand1;
        stack.push(result);
    }
    else if(element == '-') {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        let result = operand2 - operand1;
        stack.push(result);
    }
    else if(element == '*') {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        let result = operand2 * operand1;
        stack.push(result);
    }
    else if(element == '/') {
        let operand2 = stack.pop();
        let operand1 = stack.pop();
        let result = operand2 / operand1;
        stack.push(result);
    }
    else {
        stack.push(+element);
    }
}

$('.answer').append(stack.peek());