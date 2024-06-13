

let display = document.getElementById('display');
let isResultDisplayed = false;

function insertNumber(number) {
    if (isResultDisplayed) {
        display.innerText = number;
        isResultDisplayed = false;
    } else if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

function insertOperator(operator) {
    let currentDisplay = display.innerText;

    if (isResultDisplayed) {
        isResultDisplayed = false;
    }

    if (currentDisplay.endsWith(' ') || currentDisplay === '0') {
        return;
    } else {
        display.innerText += ` ${operator} `;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function deletenum() {
    let currentDisplay = display.innerText;

    if (currentDisplay.length === 1) {
        display.innerText = '0';
    } else {
        display.innerText = currentDisplay.slice(0, -1);
        if (display.innerText.endsWith(' ')) {
            display.innerText = display.innerText.slice(0, -1);
        }
    }
}

function digitcalculate() {
    try {
        let currentDisplay = display.innerText;
        if (currentDisplay.endsWith(' ')) {
            display.innerText = 'Error';
        } else {
            let result = eval(currentDisplay.replace(/ /g, ''));
            display.innerText = result;
            isResultDisplayed = true;
        }
    } catch {
        display.innerText = 'Error';
    }
}
