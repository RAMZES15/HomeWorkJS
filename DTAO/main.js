'use strict'

function fractions() {
    let number1 = prompt('Веддіть перше дробове число');
    let number2 = prompt('Веддіть друге дробове число');
    alert(`Ваш резудьтат ${Number(number1) + Number(number2)}`);
}

function sum() {
    let number1 = '1';
    let number2 = 2;
    alert(`ну як не дивно але вийшло ${Number(number1) + Number(number2)} `);
}

function flashDriver() {
    let driverSize = (document.getElementById('flash-drive').value);
    let fileSize = (document.getElementById('file-size').value);
    let calc = Number(driverSize) * 1000 / Number(fileSize);
    let roundedCalc = Math.round(calc);
    let resault = document.getElementById('resault');
    resault.value = roundedCalc + ' file';
}

function chocolate() {
    let howMoney = Number(document.getElementById('how-money').value);
    let howPrice = Number(document.getElementById('how-price').value);
    let remainder = howMoney % howPrice;
    let calc = (howMoney - remainder) / howPrice;
    let resault = document.getElementById('resaultChocolate');
    resaultChocolate.value = `${calc} chocolate and ${remainder} remainder`
    if (howMoney < howPrice) {
        resaultChocolate.value = 'You need more money! GO TO JOB!!!'
    } else if (remainder == 0) {
        resaultChocolate.value = `${calc} chocolate`
    } else {
        resaultChocolate.value = `${calc} chocolate and ${remainder} remainder`
    }
}
function threeDigit() {
    let number = prompt('Enter a three-digit number');
    number = Number(number);
    if (number !== NaN || number < 100 || number > 999) {
        alert('Enter a three-digit number!!!')
    } else {
        let n1 = number % 10;
        let n2 = (number % 100 - n1) / 10;
        let n3 = (number - (number % 100)) / 100
        alert(String(n1) + String(n2) + String(n3));
    }
}

function bank() {
    let valuta = (document.getElementById('valute').value);
    switch (valuta) {
        case 'UAH':
            valuta = 17;
            break;
        case 'USD':
            valuta = 6;
            break;
        case 'EUR':
            valuta = 3;
            break;
    }
    valuta = valuta / 12 / 100;
    let month = Number(document.getElementById('month').value);
    console.log(month)
    let money = Number(document.getElementById('money').value);
    let reinvest = Boolean(document.getElementById('reinvest').checked)
    let resaultBank = document.getElementById('resaultBank');
    if (reinvest == true) {
        while (month > 0) {
            money = money * valuta + money
            month--
        }
        resaultBank.value = `Ви отримаєте ${money} `
    } else {
        let calc = valuta * month * money;
        let resault = calc + money
        resaultBank.value = `Ви отримаєте ${resault} `
    }
}

function work(){
    let hours = Number(document.getElementById('hours').value);
    let vacation = Number(document.getElementById('vacation').value);
    let dayWeek = Number(document.querySelector('input[name="dayWeek"]:checked').value);
    let resaultWork = document.getElementById('resaultWork')
    let dayWork = hours / 5;
    let money = hours * 80
    if (vacation < 7){
        let timeManagement = dayWeek + dayWork;
        if(timeManagement <= 5) {
            resaultWork.value = `Ви встигаєте і отримаєте ${money}$`
        }else {
            resaultWork.value = `Йой! схоже грошей ти не отримаєш(`
        }
    } else {
        let timeManagement = Math.floor(vacation / 7)*5 + (vacation % 7);
        console.log(timeManagement)
        if(timeManagement >= dayWork){
            resaultWork.value = `Ви встигаєте і отримаєте ${money}$`
        }else{
            resaultWork.value = `Йой! схоже грошей ти не отримаєш(`
        }
    }
}

function olegBank(){
    let year = Number(document.getElementById('year').value);
    let money = Number(document.getElementById('olegMoney').value);
    let house = Number(document.getElementById('house').value);
    let resaultOlegBank = document.getElementById('resaultOlegBank');
    let calc = money * (1 + 0.07/1) ** (1 * year);
    console.log(calc)
    let moneyManagement = calc - house;
    if (moneyManagement < 0 ) {
        moneyManagement = moneyManagement * -1;
    }
    if(calc >= house ){
        resaultOlegBank.value = `Олег купить собі будинок і буде радий що в нього залишилось ${moneyManagement}`
    }else {
        resaultOlegBank.value = `Бідолашний олег йому доведеться жити у коробці поки не назбирає ще ${moneyManagement}`
    }
}

function wellDone(){
    let question = Number(prompt('Дай відповідь на одне з питань\n1.Скільки буде 10 + 20?\n2.Скільки буде 10 - 20?\nПитання легке не стань лузером :)'));
    if(question == 30 || question == -10 ){
        alert('Молодець козаче ;)\nВ консолі також є');
        console.log('Молодець козаче ;)');
    }else{
        alert('Йой схоже ти лузер :(\nЗаглянь в консоль');
        console.log('Лузер')
        let mistake = prompt('у всіх є прво на помилку спробуй ще:');
        if(Number(mistake) == 30 || Number(mistake) == -10 ){
            console.log('Молодець з 2 спроби :)')
        }else if(String(mistake) == 'Я не лузер'){
            console.log('Добре будь ти не лузер')
        }else{
            console.log('Лузер')
        }
    }
}

function server(){
    let role = String(document.getElementById('role').value)
    let size = Number(document.getElementById('serverFileSize').value)
    switch (role){
        case 'User':
            if(size <= 10){
                alert('Успішний успіх')
            }else{
                alert('Треба більше праав')
            }
            break;
        case 'Admin':
            let paswordAdmin = String(prompt('Введіть пароль адміну\nПпроль:Admin2023'))
            if(size <= 50 && paswordAdmin == 'Admin2023'){
                alert('Успішний успіх')
            }else if(paswordAdmin != 'Admin2023'){
                alert('Пароль невірний')
            }else{
                alert('Треба більше праав')
            }
            break;
        case 'SEO':
            let paswordSEO = String(prompt('Введіть пароль адміну\nПпроль:SEO1234'))
            if(size <= 100 && paswordSEO == 'SEO1234'){
                alert('Успішний успіх')
            }else if(paswordSEO != 'SEO1234'){
                alert('Пароль невірний')
            }else{
                alert('Більше прав не може бути але більші файи залити неможна')
            }
            break;
    }
}
