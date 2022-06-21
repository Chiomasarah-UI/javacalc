//let x,y;
//x = parseFloat(parseint(prompt("enter the first number")));
//x = parseFloat(parseint(prompt("enter the second number")));
//let z = x+y;
//let a = x-y;
//let b = x*y;
//let c = x/y;

//alert("the sum of given number is" +z);
//alert("the difference of given number is" +a);
//alert("the product of given number is" +b);
//alert("the quotient of given number is" +z);


//document.write("hello world")

const num1 = parseFloat(prompt('enter first number: '));
const num2 = parseFloat(prompt('enter second number: '));

const operator = prompt('Enter operator (+, -, /, *)');

let result = 0;
if(isNaN(num1) || isNaN(num2)){
    alert('wrong input, refresh the page to provide fresh input')
} else{
    if(operator == '+'){
        result = num1 + num2;
    }else if(operator == '-'){
        result = num1 - num2;
    }else if (operator ==  '*'){
        result = num1 * num2;
    }else if (operator == '/'){
        result = num1 / num2;
    }
    document.write(num1 + operator + num2 + '=' + result);
}