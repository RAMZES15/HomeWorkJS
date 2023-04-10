'use strict'
//------------------------------------------------------------------------Пошук авто і багто іншого-------------------------------------------------------------------------------\\
const cars = [];

const matiz = {
    manufacturer: 'Daewoo',
    model: 'Matiz',
    year_of_manufacture: 2005,
    average_speed: 115,
    engine_capacity: 5,
    average_fuel_consumption: 20,
    color: 'white',
    mileage:  120000,
    drivers: ['Zhmihenko Anatoli', 'Ander Oleg'],
    photo: './assets/img/Matiz.jpg',
    getDrivers(){
        return this.drivers
    },
    addDriver(driver){
        this.drivers.push(driver)
    },
    timeCalc(distance){
        let time = distance/this.average_speed;
        const fuel = distance * this.average_fuel_consumption/100;
        if(time > 4){
            let hours = Math.floor(time / 4);
            time += hours;
        }
        time = time.toFixed(2);
        const result = [time, fuel];
        return result;
    }   
}

const BMW = {
    manufacturer: 'BMW',
    model: '3 serie',
    year_of_manufacture: 1998,
    average_speed: 72,
    engine_capacity: 2,
    average_fuel_consumption: 10,
    color: 'darkred',
    mileage:  400000,
    drivers: ['BMW Stepan', 'Mersedesenko Evgeni'],
    photo: './assets/img/BMW.jpg',
    getDrivers(){
        return this.drivers
    },
    addDriver(driver){
        this.drivers.push(driver)
    },
    timeCalc(distance){
        let time = distance/this.average_speed;
        const fuel = distance * this.average_fuel_consumption/100;
        if(time > 4){
            let hours = Math.floor(time / 4);
            time += hours;
        }
        time = time.toFixed(2);
        const result = [time, fuel];
        return result;
    }        
}

const mercedes = {
    manufacturer: 'Mercedes',
    model: '230E',
    year_of_manufacture: 2004,
    average_speed: 85,
    engine_capacity: 4,
    average_fuel_consumption: 12,
    color: 'gold',
    mileage:  180000,
    drivers: ['Zhmihenko Anatoli'],
    photo: './assets/img/Mercedes.jpg',
    getDrivers(){
        return this.drivers
    },
    addDriver(driver){
        this.drivers.push(driver)
    },
    timeCalc(distance){
        let time = distance/this.average_speed;
        const fuel = distance * this.average_fuel_consumption/100;
        if(time > 4){
            let hours = Math.floor(time / 4);
            time += hours;
        }
        time = time.toFixed(2);
        const result = [time, fuel];
        return result;
    }   
}

const audi = {
    manufacturer: 'Audi',
    model: 'A4',
    year_of_manufacture: 1999,
    average_speed: 90,
    engine_capacity: 2,
    average_fuel_consumption: 9,
    color: 'green',
    mileage:  240000,
    drivers: ['Zhmihenko Anatoli', 'Valakas Anatoli'],
    photo: './assets/img/Audi.jpg',
    getDrivers(){
        return this.drivers
    },
    addDriver(driver){
        this.drivers.push(driver)
    },
    timeCalc(distance){
        let time = distance/this.average_speed;
        const fuel = distance * this.average_fuel_consumption/100;
        if(time > 4){
            let hours = Math.floor(time / 4);
            time += hours;
        }
        time = time.toFixed(2);
        const result = [time, fuel];
        return result;
    }   
}

cars.push(matiz)
cars.push(BMW)
cars.push(mercedes)
cars.push(audi)

function carInfo(carInfo){
    document.getElementById('manufacturer').textContent = carInfo.manufacturer;
    document.getElementById('model').textContent = carInfo.model;
    document.getElementById('year_of_manufacture').textContent = carInfo.year_of_manufacture;
    document.getElementById('average_speed').textContent = carInfo.average_speed + 'km/h';
    document.getElementById('engine_capacity').textContent = carInfo.engine_capacity + 'L';
    document.getElementById('average_fuel_consumption').textContent = carInfo.average_fuel_consumption +'L';
    document.getElementById('color').textContent = carInfo.color;
    document.getElementById('mileage').textContent = carInfo.mileage + 'km';
    document.getElementById('drivers').textContent = carInfo.drivers;
    document.getElementById('car-photo').src = carInfo.photo;
}

function findCar(){
    const userRequest = String(document.getElementById('find-car').value).toLowerCase();
    let foundCar = null;
    
    for (let i = 0; i < cars.length; i++) {
        if (cars[i].model.toLowerCase() == userRequest || cars[i].manufacturer.toLowerCase() == userRequest) {
            foundCar = cars[i];
            break;
        }
    }
    
    if (foundCar) {
        carInfo(foundCar);
        return foundCar;
    } else {
        alert('Автомобіль не знайдено');
    }
    
}

document.getElementById('find-car-btn').addEventListener('click', findCar);

function chekingDrivers(){
    const userRequest = String(document.getElementById('driver').value).toLowerCase();
    if(findCar()){
        const driversList = findCar().getDrivers().map(driver => driver.toLowerCase());
        if(driversList.includes(userRequest)){
            alert('Таке ім\'я є в списку водіїв');
        } else {
            alert('Такого імені немає в списку водіїв');
        }
    } else {
        alert('Автомобіль не знайдено');
    }
}

document.getElementById('driver-btn').addEventListener('click', chekingDrivers);

function addDriverToList(){
    const userDriver = String(document.getElementById('add-driver').value);
    if(findCar()){
        findCar().addDriver(userDriver);
    }else if(userDriver == ''){
        alert('Введіть імя');
    }else{
        alert('Автомобіль не знайдено');
    }
}

document.getElementById('add-driver-btn').addEventListener('click', addDriverToList);

function calcParams(){
    const userRequest = String(document.getElementById('time-calculation').value);
    document.getElementById('time-calculation-output').textContent = findCar().timeCalc(userRequest);
}

document.getElementById('time-calculation-btn').addEventListener('click', calcParams);

//------------------------------------------------------------------------Об'єкт час-------------------------------------------------------------------------------\\

const objectTime = {
    hour: 0,
    minute: 0,
    second: 0,
    addHour(userHour){
        this.hour = userHour;
    },
    addMinute(userMinute){
        this.minute = userMinute
        while(this.minute > 60){
            this.minute -= 60;
            this.hour++
        }
    },
    addSecond(userSecond){
        this.second = userSecond
        while(this.second > 60){
            this.second -= 60;
            this.minute++
        }
        while(this.minute > 60){
            this.minute -= 60;
            this.hour++
        }
    },
    
}

function outputTime(){
    document.getElementById('time-output').textContent = `${objectTime.hour}:${objectTime.minute}:${objectTime.second}`
}
document.getElementById('time-output-btn').addEventListener('click', outputTime)





function addTime(type) {
    const value = Number(document.getElementById(`user${type}`).value);
    objectTime[`add${type}`](value);
}

document.getElementById('addHour').addEventListener('click', () => addTime('Hour'));
document.getElementById('addMinute').addEventListener('click', () => addTime('Minute'));
document.getElementById('addSecond').addEventListener('click', () => addTime('Second'));

//------------------------------------------------------------------------Об'єкт дріб-------------------------------------------------------------------------------\\
const fractions = [
    {
        numerator: 0, 
        denominator: 0,
    },
    {
        numerator: 0, 
        denominator: 0,
    }
];

function addFraction(index){
    let fraction = String(document.getElementById('fraction' + index).value);
    const arrFraction = fraction.split('/');
    console.log(arrFraction);
    fractions[index].numerator = Number(arrFraction[0]);
    fractions[index].denominator = Number(arrFraction[1]);
}
document.getElementById('fraction0-btn').addEventListener('click', () => addFraction(0));
document.getElementById('fraction1-btn').addEventListener('click', () => addFraction(1));


function addFractions(index1, index2) {
    const result = [0, 0];
    result[0] = fractions[index1].numerator * fractions[index2].denominator + fractions[index2].numerator * fractions[index1].denominator;
    result[1] = fractions[index1].denominator * fractions[index2].denominator;
    return result;
}


function subtractFractions(index1, index2) {
    const result = [0, 0];
    result[0] = fractions[index1].numerator * fractions[index2].denominator - fractions[index2].numerator * fractions[index1].denominator;
    result[1] = fractions[index1].denominator * fractions[index2].denominator;
    return result;
}

function multiplyFractions(index1, index2) {
    const result = [0, 0];
    result[0] = fractions[index1].numerator * fractions[index2].numerator;
    result[1] = fractions[index1].denominator * fractions[index2].denominator;
    return result;
}

function divideFractions(index1, index2) {
    const result = [0, 0];
    result[0] = fractions[index1].numerator * fractions[index2].denominator;
    result[1] = fractions[index1].denominator * fractions[index2].numerator;
    return result;
}

document.getElementById('add-btn').addEventListener('click', () => {
    const result = addFractions(0, 1);
    const resultSTR = result.join('/')
    alert("Результат додавання: " + resultSTR);
});

document.getElementById('subtract-btn').addEventListener('click', () => {
    const result = subtractFractions(0, 1);
    const resultSTR = result.join('/')
    alert("Результат віднімання: " + resultSTR);
});

document.getElementById('multiply-btn').addEventListener('click', () => {
    const result = multiplyFractions(0, 1);
    const resultSTR = result.join('/')
    alert("Результат множення: " + resultSTR);
});

document.getElementById('divide-btn').addEventListener('click', () => {
    const result = divideFractions(0, 1);
    const resultSTR = result.join('/')
    alert("Результат ділення: " + resultSTR);
});

//------------------------------------------------------------------------Склад-------------------------------------------------------------------------------\\

const sklad = {
    goods: [],
    findGoodById: function (id) {
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].id === id) {
                return this.goods[i];
            }
        }
        return null;
    },
    addGoodL: function (good) {
        this.goods.push(good);
    },
    getWeightKg: function () {
        let totalWeight = 0;
        for (let i = 0; i < this.goods.length; i++) {
            if (this.goods[i].weight && this.goods[i].weight.kg) {
                totalWeight += this.goods[i].weight.kg;
            }
        }
        return totalWeight;
    }
}

const door = {
    id: 1,
    weight: {
        kg: 100
    },
    brand: 'Ikea'
}

const windows = {
    id: 2,
    weight: {
        kg: 10
    }
}

const paper = {
    id: 3,
    color: 'red'
}

// Додавання товарів на склад
sklad.addGoodL(door);
sklad.addGoodL(windows);
sklad.addGoodL(paper);

// Пошук товару за id
const foundGood = sklad.findGoodById(1);
console.log(foundGood); 

// Розрахунок загальної ваги всіх товарів на складі
const totalWeight = sklad.getWeightKg();
console.log(totalWeight); 