
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const clacInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            clacInput.value = "";
        }
    } else {
        const previousNumber = clacInput.value;
        const newNumber = previousNumber + number;
        clacInput.value = newNumber;
    }

});

function verifyPin() {
    const PinNumber = document.getElementById('display-pin').value;
    const currentPin = document.getElementById('typed-numbers').value;

    const pinMatched = document.getElementById('matched');
    const pinNotMatched = document.getElementById('Not-matched');

    if (PinNumber == currentPin) {

        pinMatched.style.display = 'block'
        pinNotMatched.style.display = 'none'
    }
    else {

        pinNotMatched.style.display = 'block'
        pinMatched.style.display = 'none'
    }
}