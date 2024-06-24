let currentInput = '';
let operator = '';
let resultDisplayed = false;

function appendNumber(number) {
    if (resultDisplayed) {
        clearDisplay();
        resultDisplayed = false;
    }
    currentInput += number;
    updateDisplay();
}

function setOperator(op) {
    if (currentInput !== '') {
        operator = op;
        currentInput += ` ${op} `;
        updateDisplay();
    } else {
        alert('Only numbers are allowed');
    }
}

function clearDisplay() {
    currentInput = '';
    operator = '';
    updateDisplay();
}

function calculate() {
    try {
        const result = eval(currentInput);
        currentInput = result;
        updateDisplay();
        resultDisplayed = true;
    } catch (error) {
        alert('Invalid input');
        clearDisplay();
    }
}
function displayValue(val) {
    document.getElementById("result").value += val;
  }
  
  
  function solve() {
    let x = document.getElementById("result").value;
    let y = eval(x);
    document.getElementById("result").value = y;
  }
  
  
  function clearResult() {
    document.getElementById("result").value = "";
  }

function updateDisplay() {
    document.getElementById('result').value = currentInput;
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/^[0-9]$/.test(key)) {
        appendNumber(key);
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        setOperator(key);
    } else if (key === 'Enter') {
        calculate();
    } else {
        alert('Only numbers are allowed');
    }
});