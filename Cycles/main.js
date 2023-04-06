function age(){
    const howOld = prompt('Скільки вам років?');
    if(isNaN(howOld)){
        alert('Потрібні цифери а не букови')
    }else{
        Number(howOld)
        switch(true){
            case (howOld < 0):
                alert('Якщо ваш вік менше ніж 0 тоді ви не можете скористаись цією прогрпмою але ви нею скористувались а це означає що ви брешете!!! Ведіть правдивий вік')
                break;
            case (howOld > 150):
                alert('Якщо вам більше 150 рокій дуже ймовірно що ви померли десь років 50 тому а якщо ви мертвий ви не можете скористатися цією програмою бо ви МЕРТВИЙ а це означає що це брехня, введіть справжній вік')
                break;
            case (howOld <= 11): 
                alert('Ти дитина')
                break;
            case (12 <= howOld && howOld <= 17): 
                alert('Ти кртути тінеджер')
                break;
            case (18 <= howOld && howOld <= 59):
                alert('Ти звичайтий мужик чи мужичеса')
                break;
            case (howOld >= 60):
                alert('Ти дід')
                break;
        }
    }
}

function symbol(){
    let number = null;
    do{
        number = Number(prompt('Введіть цифру від 1 до 9'));
    }  while (!(1 <= number && number <= 9));
    switch(number){
        case 1:
            alert(`Символ який відповідає ${number} це !`)
            break;
        case 2:
            alert(`Символ який відповідає ${number} це @`)
            break;
        case 3:
            alert(`Символ який відповідає ${number} це #`)
            break;
        case 4:
            alert(`Символ який відповідає ${number} це $`)
            break;
        case 5:
            alert(`Символ який відповідає ${number} це %`)
            break;
        case 6:
            alert(`Символ який відповідає ${number} це ^`)
            break;
        case 7:
            alert(`Символ який відповідає ${number} це &`)
            break;
        case 8:
            alert(`Символ який відповідає ${number} це *`)
            break;
        case 9:
            alert(`Символ який відповідає ${number} це (`)
            break;
    }
}

function rangeSum(){
    let correcEnter = 0
    let startRange = null;
    let endRange = null;
    let number1 = null;
    let number2 = null
    do{
    number1 = prompt('Веддіть перше число\nМоже бути додатнє або відємне');
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
    if( number1 <= number2){
        startRange = number1;
        endRange = number2;
    }else if(number1 >= number2 ){
        startRange = number2;
        endRange = number1;
    }

    let sumRange = 0;
    for(let i = startRange; i <= endRange; i++){
        sumRange += i;
    }
    alert("Сума чисел в діапазоні: " + sumRange);
}

function NSD(){
    let correcEnter = 0
    let largerNumber = null;
    let smallerNumber = null;
    let number1 = null;
    let number2 = null
    do{
    number1 = prompt('Веддіть перше число\nМоже бути додатнє або відємне');
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
    if( number1 <= number2){
        smallerNumber = number1;
        largerNumber = number2;
    }else if(number1 >= number2 ){
        smallerNumber = number2;
        largerNumber = number1;
    }

    let NSD = 0;
    for(let i = smallerNumber; i > 0 || i < 0;){
        i = largerNumber % i;
        smallerNumber -= i
        NSD = smallerNumber;
    }
    alert("НСД цих чисел: " + NSD);
}

function divider(){
    let number = null
    let correcEnter = 0
    let divider = ' '
    do{
        number = prompt('Веддіть число\nМоже бути додатнє або відємне');
        if(isNaN(number)){
            alert('Це не схоже на число(( спробу вести щось схоже на число')
        }else{
            correcEnter++
        }
    }while(correcEnter != 1)
    let remainder = null
    if(number > 0){
        for(let i = 1; i <= number; i++){
            remainder = number % i;
            if(remainder == 0){
                divider += String(i) + ' '
            }
        }
    }else{
        for(let i = -1; i >= number; i--){
            remainder = number % i;
            if(remainder == 0){
                divider += String(i) + ' '
            }
        }
    }
    
    alert(`Дільники числа це:${divider}`)
}

function palindrome(){
    const string = prompt('Веедіть текст чи число яке сам здається схожим на паліндром');
    let reversedString = ''
    for(let i = string.length - 1; i >= 0; i--){
        reversedString += string[i]
    }
    if(string == reversedString){
        alert(`Вам не здається ${string} дійсно паліднром`)
    }else{
        alert(`Вам здається ${string} насправді не паліднром`)
    }
}

function discount(){
    let correcEnter = 0
    let toPay = null;
    do{
    toPay = prompt('Скільки до оплати?\nвід 200 до 300 - знижка буде 3%\nвід 300 до 500 - 5%\nвід 500 і вище - 7%');
    if(isNaN(toPay)){
        alert('Це не схоже на сумму грошей')
    }else{
        correcEnter++
    }
    }while(correcEnter != 1)
    switch(true){
        case toPay < 200:
            alert(`Жодних знимжок ви нотримаєте!!!`);
            break;
        case toPay >= 200 && toPay <= 300:
            toPay = toPay - toPay*0.03;
            alert(`До сплати ${toPay}`);
            break;
        case toPay > 300 && toPay <= 500:
            toPay = toPay - toPay*0.05;
            alert(`До сплати ${toPay}`);
            break;
        case toPay > 500:
            toPay = toPay - toPay*0.07;
            alert(`До сплати ${toPay}`);
            break;
    }
}

function statistics(){
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    let evenCount = 0;
    let oddCount = 0;

    for(let i = 1; i <= 10; i++){
        const number = parseInt(prompt(`Введіть число №${i}`));
        if(isNaN(number)){
            alert('Це не схоже на число. Спробуйте ще раз.');
            i--;
            continue;
        }
        if(number > 0){
            positiveCount++;
        }else if(number < 0){
            negativeCount++;
        }else{
            zeroCount++;
        }
        if(number % 2 === 0){
            evenCount++;
        }else{
            oddCount++;
        }
}

alert(`Статистика введених чисел:\nДодатні: ${positiveCount}\nВід'ємні: ${negativeCount}\nНулі: ${zeroCount}\nПарні: ${evenCount}\nНепарні: ${oddCount}`);
}

function week(){
    let dayOfWeek = "Понеділок";
    let continueDisplay = true;

    do {
    alert(`День тижня: ${dayOfWeek}. Хочеш побачити наступний день?`);
    const userInput = prompt("Введіть 'Так' або 'Ні'").toLowerCase();
    if (userInput === "ні") {
        continueDisplay = false;
    } else if (userInput !== "так") {
        alert("Неправильне введення. Будь ласка, введіть 'Так' або 'Ні'.");
    }
    
    switch (dayOfWeek) {
        case "Понеділок":
        dayOfWeek = "Вівторок";
        break;
        case "Вівторок":
        dayOfWeek = "Середа";
        break;
        case "Середа":
        dayOfWeek = "Четвер";
        break;
        case "Четвер":
        dayOfWeek = "П'ятниця";
        break;
        case "П'ятниця":
        dayOfWeek = "Субота";
        break;
        case "Субота":
        dayOfWeek = "Неділя";
        break;
        case "Неділя":
        dayOfWeek = "Понеділок";
        break;
    }
    
    } while (continueDisplay);
}

function guessTheNumber(){
    let yourNumber = true;
    let rangeStart = 0;
    let rangeEnd = 100;
    
    do{
        let rangeMiddle = Math.floor((rangeStart + rangeEnd) / 2);
        let userPrompt = prompt(`ВІДГАДУЄМО\nЯкщо ви загадали\nБільше за ${rangeMiddle} введіть >\nМенше за ${rangeMiddle}<\nАбо якщо я якимось магічним чином відгадав і воно ${rangeMiddle} впиши =`);
        if(userPrompt == '>'){
            rangeStart = rangeMiddle + 1;
        }else if(userPrompt == '<'){
            rangeEnd = rangeMiddle - 1;
        }else if(userPrompt == '='){
            alert(`Вітаю себе з тим що відгадав твоє число, а твоє число це ${rangeMiddle}`)
            yourNumber = false;
        }else if(userPrompt == null){
            yourNumber = false;
        }else {
            alert(`Я просив вводити підказки > < або = а ти ввів ${userPrompt}`)
        }  
    }while(yourNumber)
}

function multiplicationTable(){
    const multiplicationTableStart = prompt('Ведіть число від якого буде починадиься таблиця множення');
    const multiplicationTableEnd = prompt('Ведіть число яким таблиця буде закінчуватись');
    const multiplicationTableStartNumber = prompt('Ведіть число з кого буде починатись кожна з таблиць');
    const multiplicationTableEndNumber = prompt('Ведіть число яким таблиці будуть закінчуватись');
    let multiplicationTable = ''
    for(let i = multiplicationTableStart; i <= multiplicationTableEnd; i++){
        multiplicationTable += `Таблиця множення для "${i}":`;
        for(let j = multiplicationTableStartNumber; j <= multiplicationTableEndNumber; j++){
            let result = String(j * i);
            multiplicationTable += ' ' + result;
        }
        multiplicationTable += '\n'
    }
    alert(multiplicationTable);
}

function nextDate(){
    const day = Number(prompt('Введіть день:'));
    const month = Number(prompt('Введіть місяць:'));
    const year = Number(prompt('Введіть рік:'));
    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    let daysInMonth;
    if (month == 2) {
        daysInMonth = isLeapYear ? 29 : 28;
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
        daysInMonth = 30;
    } else {
        daysInMonth = 31;
    }
    if (day < 1 || day > daysInMonth || month < 1 || month > 12) {
        alert('Введена неправильна дата.');
    } else {
        let nextDay = day + 1;
        let nextMonth = month;
        let nextYear = year;
        if (nextDay > daysInMonth) {
          nextDay = 1;
          nextMonth++;
          if (nextMonth > 12) {
            nextMonth = 1;
            nextYear++;
          }
        }
        alert(`Наступна дата: ${nextDay}/${nextMonth}/${nextYear}`);
    }
    
}