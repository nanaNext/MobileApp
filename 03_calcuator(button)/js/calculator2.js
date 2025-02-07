'use strict';

var wkFirst = "1";
var wkTotal = 0;
var wkInput = "";
var wkCalc = "+";
var wkBefore = "1";

const elementcalcLog = document.getElementById("calclog");
const elementResult = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num0 = document.getElementById("num0");
const elementAdd = document.getElementById("add");
const elementSub = document.getElementById("sub");
const elementMult = document.getElementById("mult");
const elementDiv = document.getElementById("div");
const elementEqual = document.getElementById("equal");
const elementCancel = document.getElementById("cancel");

num1.addEventListener("click", () => edit(1));
num2.addEventListener("click", () => edit(2));
num3.addEventListener("click", () => edit(3));
num4.addEventListener("click", () => edit(4));
num5.addEventListener("click", () => edit(5));
num6.addEventListener("click", () => edit(6));
num7.addEventListener("click", () => edit(7));
num8.addEventListener("click", () => edit(8));
num9.addEventListener("click", () => edit(9));
num0.addEventListener("click", () => edit(0));

elementAdd.addEventListener("click", () => update("+"));
elementSub.addEventListener("click", () => update("-"));
elementMult.addEventListener("click", () => update("*"));
elementDiv.addEventListener("click", () => update("/"));

elementEqual.addEventListener("click", dispResult);
elementCancel.addEventListener("click", clear);

function edit(wkInput) {
  if (wkBefore === "0") {
    elementResult.innerHTML = Number(elementResult.innerHTML + wkInput);
  } else {
    elementResult.innerHTML = wkInput;
  }
  wkFirst = "0";
  wkBefore = "0";
}

function update(calcType) {
  if (wkBefore === "0") {
    elementcalcLog.innerHTML += Number(elementResult.innerHTML) + calcType;
    calculator();
  } else {
    if (wkFirst === "1") {
      elementcalcLog.innerHTML = Number(elementResult.innerHTML) + calcType;
    } else {
      let wkLogLastWord = elementcalcLog.innerHTML.slice(-1);
      if (["+", "-", "*", "/"].includes(wkLogLastWord)) {
        elementcalcLog.innerHTML = elementcalcLog.innerHTML.slice(0, -1) + calcType;
      } else {
        elementcalcLog.innerHTML += calcType;
      }
    }
  }
  wkCalc = calcType;
  wkBefore = "1";
}

function dispResult() {
  if (wkFirst === "0" && wkBefore === "0") {
    elementcalcLog.innerHTML += Number(elementResult.innerHTML);
    calculator();
    wkCalc = "=";
    wkBefore = "1";
  }
}

function clear() {
  elementResult.innerHTML = 0;
  elementcalcLog.innerHTML = "";
  wkFirst = "1";
  wkTotal = 0;
  wkCalc = "+";
  wkBefore = "1";
}

function calculator() {
  switch (wkCalc) {
    case "+":
      wkTotal += Number(elementResult.innerHTML);
      break;
    case "-":
      wkTotal -= Number(elementResult.innerHTML);
      break;
    case "*":
      wkTotal *= Number(elementResult.innerHTML);
      break;
    case "/":
      if (Number(elementResult.innerHTML) !== 0) {
        wkTotal /= Number(elementResult.innerHTML);
      } else {
        alert("Cannot divide by zero!");
        clear();
      }
      break;
    default:
      break;
  }
  elementResult.innerHTML = wkTotal;
}
document.addEventListener("keydown", keydownEvent, false);
function keydownEvent(event){
if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(event.key)) edit(event.key)
if(["+", "-", "*", "/"].includes(event.key)) update(event.key);
if(["=", "Enter"].includes(event.key)) dispResult();
if(["c", "C", "Escape", "Backspace", "Delete"].includes(event.key)) clear();
}