

function randomNumber() {
    const number = Math.round(Math.random() * 10000);
    return number;
}

function getPin() {
    const pin = randomNumber();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}
document.getElementById('generate_pin').addEventListener('click', function () {
    const showPinField = document.getElementById('show_pin');
    showPinField.value = getPin();
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const typedNumberFileld = document.getElementById('typed_number');
    const number = event.target.innerText;
    const preTypedNumber = typedNumberFileld.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberFileld.value = '';
        } else if (number === '<') {
            const numberString = preTypedNumber.split('');
            numberString.pop();
            const remainNumber = numberString.join('');
            typedNumberFileld.value = remainNumber;
        }
    } else {
        const newNumber = preTypedNumber + number;
        typedNumberFileld.value = newNumber;
    }
})