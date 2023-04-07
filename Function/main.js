'use strict'

function functionArguments(){
    alert('Створи функцію, яка буде виводити кількість переданих їй аргументів.')
    const userArguments = prompt('Введіть аргуметни які ви хочете передати в функцію через пробіл\nНаприклад "10 20 30 40 50"');
    const convertArray = userArguments.split(' ');
    function argumentsCalc(){
        alert('Ви передали до функції фргументів: ' + arguments.length);
    }
    argumentsCalc(...convertArray);
}

function returnFunction(){
    alert('Напиши функцію, яка приймає 2 числа і повертає :\n-1, якщо перше число менше, ніж друге; \n1 - якщо перше число більше, ніж друге; \n0 - якщо числа рівні.')
    let corectInput = 0;
    let number1 = null;
    let number2 = null;
    do{
        if(isNaN(number1) || isNaN(number2)){
            alert('Це не число')
            return
        }else if(corectInput == 0){
            number1 = prompt('Перше число для порівняння');
            corectInput++
        }else if(corectInput == 1){
            number2 = prompt('Друге число для порівняння');
            corectInput++
        }
    }while(!(corectInput == 2));
    number1 = Number(number1);
    number2 = Number(number2);
    function comparison(x, y){
        switch(true){
            case x < y:
                return -1
            case x > y:
                return 1
            case x == y :
                return 0
            default:
                return
        }
    }
    alert(comparison(number1, number2));
}

function factorial(){
    alert(`Напиши функцію, яка обчислює факторіал переданого їй числа.`);
    let number = null;
    let factorial = null;
    let corectInput = true;
    do{
        number = prompt('Введіть число факторіал чкого хочете порпхувати');
        isNaN(number)? corectInput = true : corectInput = false;
    }while(corectInput)
    if(number > 0){
        factorial = 1;
        for(let i = 1; i <= number; i++){
            factorial *= i;
        }
        alert(`Факторіал числа ${number} дорівнює ${factorial}`)
    }else{
        factorial = -1;
        for(let i = -1; i >= number; i--){
            factorial *= i;
        }
        alert(`Факторіал числа ${number} дорівнює ${factorial}`)
    }  
}

function sumNumbers(){
    let number1 = null;
    let number2 = null;
    let number3 = null;
    let corectInput = true
    do{
        number1 = prompt('Перше число');
        number2 = prompt('Друге число');
        number3 = prompt('Третє число');
        if(isNaN(number1) || isNaN(number2) || isNaN(number3)){
            corectInput = true;
        }else{
            corectInput = false;
        }
    }while(corectInput)
    number1 < 0? number1 *= -1: number1;
    number2 < 0? number2 *= -1: number2;
    number3 < 0? number3 *= -1: number3;
    alert(`Вийшло ${String(number1) + String(number2) + String(number3)}`)
}

function Area(){
    alert('Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.')
    let userHeight = prompt('Введіть висоту');
    let userWidth = prompt('Введіть ширину\nЯкщо потрібно пропустити значення нажміть або (Відміна) або (ОК)');
    function calcArea(height, width){
        if (width == undefined || width == ''){
            return height * height;
        }else{
            return height * width;
        }
    }
    alert('Площа ' +  calcArea(userHeight, userWidth));
}

function perfectNumber(perfectNumber){
    let sum = 0;
    for(let i = 1; i < perfectNumber; i++){
        if(perfectNumber % i == 0){
            sum += i
        }
    }
    return sum == perfectNumber;
}

function perfectNumberBTN(){
    let corectInput = true;
    let userNumber = null;
    do{
        userNumber = prompt('Введіть число яке вам здаєтсья досконалим');
        if(isNaN(userNumber)){
            alert('Тобі здалось, це взагалі літери');
        }else{
            corectInput = false
        }
    }while(corectInput)
    if(perfectNumber(userNumber)){
        alert(`Так ${userNumber} досконале`)
    }else{
        alert(`Йой лишкнько число ${userNumber} не доскона,число як число`)
    }
}

function perfectNumberInRange(){
    let phone = null
    let corectPhone = true
    do{
        phone = String(prompt(`Введіть ваш номер телефону`));
        if(phone.length == 10 || phone.length == 12 ){
            alert(`Скоро на номер ${phone} прийде СМС`);
            corectPhone = false
        }else if(isNaN(phone)){
            alert('В номері не повинно бути літер або інших симфолів');
        }else{
            alert(`В номері повинно бути 10 або 12 цифер`);
        }
    }while(corectPhone)
    alert(`Чудово тепер можна шукати досконалі числа в діапазоні`);

    let number1 = null;
    let number2 = null;
    let correcEnter = 0;
    do{
    number1 = prompt('Веддіть перше число\nМоже бути більшим або меншим віл наступнгого');
    if(isNaN(number1)){
        alert('Це не схоже на число(( спробу вести щось схоже на число')
    }else{
        correcEnter++
    }
    }while(correcEnter != 1)
    do{
    number2 = prompt('Введіть друге число\nМоже бути меншим або більшим');
    if(isNaN(number2)){
        alert('Це не схоже на число(( спробу вести щось схоже на число')
    }else{
        correcEnter++
    }
    }while(correcEnter != 2)

    number1 = Number(number1)
    number2 = Number(number2)
    let startRange = null;
    let endRange = null;
    if(number1 < number2){
        startRange = number1;
        endRange = number2
    }else if(number1 > number2){
        startRange = number2
        endRange = number1
    }

    let perfectNumberInRange = []
    for(let i = startRange; i <= endRange; i++){
        if(perfectNumber(i)){
            perfectNumberInRange.push(i)
        }
    }
    if(perfectNumberInRange.length > 0){
        alert(`Поняття немаю що в них досокналого АЛЕ\nВ цьому діапозні знайдено наступні ДОСКОНАЛІ чиса ${perfectNumberInRange.join(', ')}`)
    }else{
        alert('Немає жодного досконалого числа ,спробуй більший діапазон')
    }
}