"use strict";

const OPRERATORS = ["+","-","*","/"];
const add = (a,b) => a+b;
const subtract = (a,b) => a-b;
const multiply = (a,b) => a*b;
const divide = (a,b) => a/b;

let calculator = {
    "+" : add,
    "-" : subtract,
    "*" : multiply,
    "/" : divide,
    "operate" : (str) => {
        let split = str.split(' ');
        let a = +split[0], opr = split[1], b = +split[2];
        if(isNaN(a) || isNaN(b)) return 0;
        return Math.round(calculator[opr](a,b) * 10) / 10;
    }
};

let display = document.querySelector(".display");
// changing color of buttons when pressed
let tokenButtons = [...document.querySelectorAll(".token")];
tokenButtons.forEach(tokenButton => {
    tokenButton.addEventListener('click', (e) => {
        e.target.classList.add('pressed');
    });
});

function removeTransition(e){
    if(e.propertyName !== "background-color") return;
    e.target.classList.remove('pressed');
};
tokenButtons.forEach(tokenButton => {
    tokenButton.addEventListener('transitionend', removeTransition);
});
// Create the functions that populate the 
// display when you click the number buttons.
let numberButtons = tokenButtons.filter((token) =>{
    let val = token.textContent;
    return (val >= '0' && val <= '9');
});
numberButtons.forEach((numberButton) => numberButton.addEventListener('click',(e) => {
    if(OPRERATORS.includes(display.innerText.at(-1))) display.innerText += ` ${numberButton.innerText}`;
    else display.innerText += `${numberButton.innerText}`
}));

// when operators are pressed concat them to display
function evaluatePrevious(){
    let expr = display.textContent;
    console.log(expr);
    let split = expr.split(" ");
    console.log(split);
    if(split.length === 3){
        display.innerText = calculator.operate(expr);
    }
}

function concatToDisplay(e){
    if(display.textContent === "") return;
    if(OPRERATORS.includes(display.innerText.at(-1))){
        let str = display.textContent;
        let strSplit = str.split('');
        strSplit.pop();
        strSplit.push(`${e.target.textContent}`);
        display.innerText = strSplit.join('');
    }
    else display.innerText += ` ${e.target.textContent}`;
}
let operatorButtons = tokenButtons.filter((token) => OPRERATORS.includes(token.innerText));
operatorButtons.forEach((operatorButton) => {
    operatorButton.addEventListener('click', (e) => {
        evaluatePrevious();
        concatToDisplay(e);
    });
});

// equal and CE
let equal = document.querySelector(".equal");
equal.addEventListener('click', (e) => {
    let expr = display.textContent;
    if(expr.split(" ").filter(i => i!= '').length === 3) display.innerText = calculator.operate(expr);
    else return;
});

let clear = document.querySelector(".clear");
clear.addEventListener('click',() => {
    display.innerText = "";
    console.clear();
});

// module.exports = {...calculator};