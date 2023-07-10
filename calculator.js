"use strict";

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
        console.log(a,b);
        if(isNaN(a) || isNaN(b)) return 0;
        return calculator[opr](a,b);
    }
};

module.exports = {...calculator};