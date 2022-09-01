// Keyboard
const keyboardInput = document.getElementById('display')
document.addEventListener('keyup', (event) => {
    console.log(event)
    if(event.key == '0') {
        keyboardInput.innerHTML += "0"
    } else if(event.key == '1') {
        // keyboardInput.value += event.key
        keyboardInput.innerHTML += "1"
    } else if(event.key == '2') {
        keyboardInput.innerHTML += "2"
    } else if(event.key == '3') {
        keyboardInput.innerHTML += "3"
    } else if(event.key == '4') {
        keyboardInput.innerHTML += "4"
    } else if(event.key == '5') {
        keyboardInput.innerHTML += "5"
    } else if(event.key == '6') {
        keyboardInput.innerHTML += "6"
    } else if(event.key == '7') {
        keyboardInput.innerHTML += "7"
    } else if(event.key == '8') {
        keyboardInput.innerHTML += "8"
    } else if(event.key == '9') {
        keyboardInput.innerHTML += "9"
    } else if(event.key == '+') {
        keyboardInput.innerHTML += "+"
    } else if(event.key == '-') {
        keyboardInput.innerHTML += "-"
    } else if(event.key == '*') {
        keyboardInput.innerHTML += "*"
    } else if(event.key == '/') {
        keyboardInput.innerHTML += "/"
    } else if(event.key == '=') {
        display.innerText = eval(display.innerText)
    } else if(event.key == 'Enter') {
        display.innerText = eval(display.innerText)
    } else if(event.key == 'Backspace') {
        display.innerText = display.innerText.slice(0, -1)
    } else if(event.key == 'Enter') {
        display.innerText = eval(display.innerText)
    } else if(event.key == 'c' || event.key == 'C') {
        display.innerText = ''
    }
})


// Logic Calculator
let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            case 'C':
                display.innerText = ''
                break;
            case '←':
                if (display.innerText) {
                    display.innerText = display.innerText.slice(0, -1)
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch {
                    display.innerText = 'Invalid Calculation!'
                }
            break;
            default:
                display.innerText += e.target.innerText
        }
    });
});
