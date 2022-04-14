'use strict'

let sum = 0;
let sumString = "";
let log = [];//not used but data is stored

const display = document.getElementById("display");

//-----------------------------Number buttons----------------------------------------
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
const btn0 = document.getElementById("btn0");

btn1.addEventListener("click", () => {sumString+="1"; display.innerHTML = sumString;});
btn2.addEventListener("click", () => {sumString+="2"; display.innerHTML = sumString;});
btn3.addEventListener("click", () => {sumString+="3"; display.innerHTML = sumString;});
btn4.addEventListener("click", () => {sumString+="4"; display.innerHTML = sumString;});
btn5.addEventListener("click", () => {sumString+="5"; display.innerHTML = sumString;});
btn6.addEventListener("click", () => {sumString+="6"; display.innerHTML = sumString;});
btn7.addEventListener("click", () => {sumString+="7"; display.innerHTML = sumString;});
btn8.addEventListener("click", () => {sumString+="8"; display.innerHTML = sumString;});
btn9.addEventListener("click", () => {sumString+="9"; display.innerHTML = sumString;});
btn0.addEventListener("click", () => {sumString+="0"; display.innerHTML = sumString;});

//-----------------------Operator Buttons---------------------------------------------

const btnDiv = document.getElementById("btnDiv");
const btnMlt = document.getElementById("btnMlt");
const btnAdd = document.getElementById("btnAdd");
const btnNeg = document.getElementById("btnNeg");
const btnLB = document.getElementById("btnLB");
const btnRB = document.getElementById("btnRB");
const btnEq = document.getElementById("btnEq");
const btnC = document.getElementById("btnC");

btnDiv.addEventListener("click", () => {sumString+= "/"; display.innerHTML = sumString;});
btnMlt.addEventListener("click", () => {sumString+= "*"; display.innerHTML = sumString;});
btnAdd.addEventListener("click", () => {sumString+= "+"; display.innerHTML = sumString;});
btnNeg.addEventListener("click", () => {sumString+= "-"; display.innerHTML = sumString;});
btnLB.addEventListener("click", () => {sumString+= "("; display.innerHTML = sumString;});
btnRB.addEventListener("click", () => {sumString+= ")"; display.innerHTML = sumString;});
btnC.addEventListener("click", () => {sumString = ""; display.innerHTML = sumString;});

//--------------------------------log-------------------------------------------------
const logE = document.getElementById("log");

const btnCLog = document.getElementById("clearLog");
btnCLog.addEventListener("click", () => {logE.innerHTML = ""; display.innerHTML = sumString;});


//---------------------------Equals logic------------------------------------------------

const equate = () => {
    if(sumString=="")return;
    sum = eval(sumString);
    log.push(sumString + " = " + sum);
    display.innerHTML = sum;
    logE.innerHTML += sumString + " = " + sum + "<br/>";
}

btnEq.addEventListener("click", equate);




