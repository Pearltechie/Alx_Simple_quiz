function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}


function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero is undefined!";
    }
    return number1 / number2;
}

function handleCalculation(operation) {
    
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;

    let result;
    
    if (operation === 'add') {
        result = add(number1, number2);
    } else if (operation === 'subtract') {
        result = subtract(number1, number2);
    } else if (operation === 'multiply') {
        result = multiply(number1, number2);
    } else if (operation === 'divide') {
        result = divide(number1, number2);
    }

    
    document.getElementById('calculation-result').textContent = result;
}


document.getElementById('add').addEventListener('click', () => handleCalculation('add'));
document.getElementById('subtract').addEventListener('click', () => handleCalculation('subtract'));
document.getElementById('multiply').addEventListener('click', () => handleCalculation('multiply'));
document.getElementById('divide').addEventListener('click', () => handleCalculation('divide'));
