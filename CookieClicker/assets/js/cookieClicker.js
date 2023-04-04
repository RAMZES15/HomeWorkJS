const cookie = document.getElementById('cookie');
const balanceDisplay = document.getElementById('balance');
const balanceDisplayShop = document.getElementById('balanceShop');
const balanceDisplayTheme = document.getElementById('balanceTheme');
let cookieImg = document.getElementById('cookieImg');
let balance = 0;
let cookieLevel = 0;
let plusBalance = 0;
function shop(index, price) {
    const status = document.getElementById('cookieStatus' + index)
    let buyIndex = 0;
    if (index == 0) {
        buyIndex = 1
    }
    document.getElementById('cookieLevel' + index).addEventListener('click', function () {
        if (buyIndex == 0 && balance >= price) {
            balance = balance - price;
            balanceDisplay.textContent = balance;
            balanceDisplayShop.textContent = balance;
            balanceDisplayTheme.textContent = balance;
            cookieLevel = index;
            buyIndex = 1;
            status.textContent = 'Вітаю з покупкою'
            setTimeout(function() {
                status.textContent = 'Статус: Це печево у вас є';
              }, 2000);
            cookieImg.src = './assets/img/cookie/cookieLevel' + index + '.png'
        } else if (buyIndex == 1) {
            status.textContent = 'У вас вже є це печево'
            setTimeout(function() {
                status.textContent = 'Статус: Це печево у вас є';
              }, 2000);
        } else {
            status.textContent = 'Треба більше грошей'
            setTimeout(function() {
                status.textContent = 'Статус: У вас немає цього печева';
              }, 2000);
        }
    });
    document.getElementById('cookieSelect' + index).addEventListener('click', function () {
        if (buyIndex == 1) {
            cookieLevel = index;
            cookieImg.src = './assets/img/cookie/cookieLevel' + index + '.png'
            status.textContent = 'Гарний вибір'
            setTimeout(function() {
                status.textContent = 'Статус: Це печево у вас є';
              }, 2000);
        } else {
            console.log('Спочатку купи це печево')
            status.textContent = 'Спочатку купи це печево'
            setTimeout(function() {
                status.textContent = 'Статус: У вас немає цього печева';
              }, 2000);
        }
    });
}

shop(0, 0);
shop(1, 200);
shop(2, 400);
shop(3, 1000);
shop(4, 2400);
shop(5, 5000);
shop(6, 8000);

cookie.addEventListener('click', function () {
    switch (cookieLevel) {
        case 0:
            plusBalance = 5;
            break;
        case 1:
            plusBalance = 10;
            break;
        case 2:
            plusBalance = 30;
            break;
        case 3:
            plusBalance = 50;
            break; 
        case 4:
            plusBalance = 100;
            break; 
        case 5:
            plusBalance = 200;
            break;
        case 6:
            plusBalance = Math.floor(Math.random() * 901);
            break;
    }
    balance += plusBalance;
    balanceDisplay.textContent = balance;
    balanceDisplayShop.textContent = balance;
    balanceDisplayTheme.textContent = balance;
});


function shopOpen(){
    const cookieShop = document.getElementById('cookieShop').classList.toggle('--open');
}

function themeOpen(){
    const themeShop = document.getElementById('themeShop').classList.toggle('--open');
}


const theme = document.body
function themeShop(index, price) {
    const status = document.getElementById('themeStatus' + index)
    let buyIndex = 0;
    if (index == 0) {
        buyIndex = 1
    }
    document.getElementById('themeLevel' + index).addEventListener('click', function () {
        if (buyIndex == 0 && balance >= price) {
            balance = balance - price;
            buyIndex = 1;
            balanceDisplay.textContent = balance;

            while (theme.classList.length > 0) {
                theme.classList.remove(theme.classList.item(0));
            }
            theme.classList.add('theme' + index)

            status.textContent = 'Вітаю з покупкою'
            setTimeout(function() {
                status.textContent = 'Статус: Ця тема у вас є';
              }, 2000);
        } else if (buyIndex == 1) {
            status.textContent = 'У вас вже є ця тема'
            setTimeout(function() {
                status.textContent = 'Статус: Ця тема у вас є';
              }, 2000);
        } else {
            status.textContent = 'Треба більше грошей'
            setTimeout(function() {
                status.textContent = 'Статус: У вас немає цієї теми';
              }, 2000);
        }
    });
    document.getElementById('themeSelect' + index).addEventListener('click', function () {
        if (buyIndex == 1) {

            while (theme.classList.length > 0) {
                theme.classList.remove(theme.classList.item(0));
            }
            theme.classList.add('theme' + index)

            status.textContent = 'Гарний вибір'
            setTimeout(function() {
                status.textContent = 'Статус: Ця тема у вас є';
              }, 2000);
        } else {
            console.log('Спочатку купи це печево')
            status.textContent = 'Спочатку купи цю тему'
            setTimeout(function() {
                status.textContent = 'Статус: У вас немає цієї теми';
              }, 2000);
        }
    });
}

themeShop(0, 0)
themeShop(1, 7000)
themeShop(2, 10000)
themeShop(3, 15000)
themeShop(4, 25000)