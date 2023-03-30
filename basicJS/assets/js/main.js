/* КОМЕНТАРЙ  */
// коментар 

function YourAge() {
    let age = prompt('Year of your birth?');
    const year = 2023;
    alert('I think your age is ' + (year - age) + ' but it is not accurate');
}

function YourSquare() {
    let side = prompt('Side of the square?');
    alert('Perimeter of a square ' + (side * 4) + ' and area of a square ' + (side * side) + ' it is accurate');
}

function YourCircle() {
    const PI = 3.14;
    let R = prompt('Radius of the circle?');
    alert('Circuit is ' + (PI * R * 2) + ' and area of a circle ' + (PI * R * R) + ' it is accurate');
}

function YourSpeed() {
    let distance = prompt('Distance from city to city?');
    let time = prompt('How much time do you have?');
    let speed = distance / time;
    if (speed <= 60) {
        alert('You need crawl like a turtle :) move at a speed of ' + speed + ' kilometers per hour')
    } else {
        alert('Do you know the speed of light? you need to be closer to her at ' + speed + ' kilometers per hour')
    }
}

function YourConvert() {
    const USDtoUAH = 37;
    const USDtoEUR = 0.9;
    const USDtoYEN = 132;
    let WhatConvert = prompt('What currency do you want to convert?\n enter "1" if you want to convert USD to UAH\n enter "2" if you want to convert USD to EUR\n enter "3" if you want to convert USD to YEN');
    if (WhatConvert > 3) {
        alert('Enter a number from 1 to 3')
    } else {
        let HowMuch = prompt('How much USD do you want to convert?');
        if (WhatConvert == 1) {
            alert('You will get ' + HowMuch * USDtoUAH + ' UAH')
        } else if (WhatConvert == 2) {
            alert('You will get ' + HowMuch * USDtoEUR + ' EUR')
        } else if (WhatConvert == 3) {
            alert('You will get ' + HowMuch * USDtoYEN + ' YEN')
        }
    }
}

