const display = document.querySelector("#display")
//const buttons = document.querySelectorAll("button")
const clearButton = document.querySelector("#clear")
const backspaceButton = document.querySelector("#backspace")
const oneButton = document.querySelector("#one")
const twoButton = document.querySelector("#two")
const threeButton = document.querySelector("#three")
const fourButton = document.querySelector("#four")
const fiveButton = document.querySelector("#five")
const sixButton = document.querySelector("#six")
const sevenButton = document.querySelector("#seven")
const eightButton = document.querySelector("#eight")
const nineButton = document.querySelector("#nine")
const zeroButton = document.querySelector("#zero")
const decimalButton = document.querySelector("#decimal")
const addButton = document.querySelector("#add")
const subtractButton = document.querySelector("#subtract")
const multiplyButton = document.querySelector("#multiply")
const divideButton = document.querySelector("#divide")
const equalsButton = document.querySelector("#equals")

const operatorsArray = ["+", "-", "x", "÷"]

let num1 = 0
let num2 = 0
let operator = ""

const allButtons = document.querySelectorAll("button")

for (let i = 0; i < allButtons.length; i++){
    let buttonValue = allButtons[i].innerText
    allButtons[i].addEventListener("click", 
        buttonClicked.bind(this,buttonValue))
    
}

function buttonClicked(value){
    if (value == "="){
        num2 = parseInt(display.innerText)
        display.innerHTML = operate(operator,num1,num2)
    } 
    else if(value.toLowerCase() == "clear"){
        display.innerHTML = ""
        num1 = 0
        num2 = 0
        operator = ""
    }
    else if (value.toLowerCase() == "backspace"){
        display.innerText = (display.innerText).slice(0,
            (display.innerText.length)-1)
    }
    else if (operatorsArray.includes(value)){
        num1 = parseInt(display.innerText)
        operator = value
        display.innerHTML = ""
        display.innerText = value
    }
    else{
        if (operatorsArray.includes(display.innerText)){
            display.innerHTML = ""
            display.innerText = value
        }
        else {
            display.innerText = display.innerText + value
        }
    }
}


function changeDisplay(){

}


function add(num1, num2) {
    return num1 + num2
}

function subtract(num1,num2) {
    return num1 - num2
}

function multiply(num1,num2) {
    return num1 * num2
}

function divide(num1,num2) {
    return num1/num2
}

function operate(op, num1, num2) {
   switch (op) {
        case "+": 
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "x":
            return multiply(num1,num2);
        case "/":
            return division(num1,num2);
        default:
            console.log("Try again");
    }
}

/*Click button, display clicked button, if next button is */