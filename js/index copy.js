function randomPin() {
    const random = Math.round(Math.random() * 10000);
    return random;
}

function getPin() {
    const pin = randomPin();
    const pinString = pin + '';

    if (pinString.length === 4) {
        return pin;
    } else {
        return getPin();
    }
}

document.getElementById('generate_pin').addEventListener('click', function () {
    const show_pin = document.getElementById('show_pin');
    const pin = getPin();

    show_pin.value = pin;
})


document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typedNumberField = document.getElementById('typed_number');
    const preTypedNumber = typedNumberField.value;

    if (isNaN(number)) {
        if (number === 'C') {
            typedNumberField.value = '';
        } else if (number === '<') {
            const digits = preTypedNumber.split('');
            digits.pop();
            const remainingDegits = digits.join('');
            typedNumberField.value = remainingDegits;
        }
    } else {
        const newTypedNumber = preTypedNumber + number;
        typedNumberField.value = newTypedNumber;
    }
})

document.getElementById('submit_btn').addEventListener('click', function () {
    const showPinField = document.getElementById('show_pin');
    const pinNumber = showPinField.value;

    const typedNumberField = document.getElementById('typed_number');
    const typedNumber = typedNumberField.value;

    let isMatched;
    if (pinNumber === typedNumber) {
        const matched = document.getElementById('matched');
        const notMatched = document.getElementById('notMatched');
        matched.style.display = 'block';
        notMatched.style.display = 'none';
    } else {
        const notMatched = document.getElementById('notMatched');
        const matched = document.getElementById('matched');
        matched.style.display = 'none';
        notMatched.style.display = 'block';
    }

})