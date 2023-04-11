'use strict'
const shopList = [
    {
        name: 'apple',
        number: 5,
        buyIndex: 0,
        price: 5,
        sum() {
            return this.number * this.price;
        },
    },
    {
        name: 'meat',
        number: 1,
        buyIndex: 1,
        price: 10,
        sum() {
            return this.number * this.price;
        },
    },
    {
        name: 'tomato',
        number: 4,
        buyIndex: 0,
        price: 2,
        sum() {
            return this.number * this.price;
        },
    },
    {
        name: 'ketchup',
        number: 1,
        buyIndex: 0,
        price: 7,
        sum() {
            return this.number * this.price;
        },
    },
]

function sortList(){//Сортує список продуктів за тим куплений він чи ні
    shopList.sort(function(a, b){
        return a.buyIndex - b.buyIndex;
    })
}

function buyProduct(nameProduct){ //Передати імя для покупрки продукту
    const buy = shopList.find(product => product.name == nameProduct)
    if(buy){
        buy.buyIndex = 1;
        sortList();
        console.log('Успіх', shopList)
    }else{
        console.log('Не знайдено товар')
    }
}

function removeProduct(removeName){ //Передати імя продукту для видалиння з списку
    const remove =  shopList.findIndex(removeProduct => removeProduct.name === removeName)
    if(remove !== -1){
        shopList.splice(remove, 1);
        console.log('Ноивй масив' , shopList)
    }else{
        console.log('Такого продукту нема в списку')
    }
}

function addProduct(nameNewProduct, numberProduct = 1, buyIndexProduct = 0 , priceProduct = 0){//Додає новий елемент в список продуктів або додє кількість до вже існуючого продукту
    const add =  shopList.findIndex(addProduct => addProduct.name === nameNewProduct)
    if(add !== -1){
        shopList[add].number++
        console.log(shopList)
    }else{
        const newProduct = {
            name: nameNewProduct,
            number: numberProduct,
            buyIndex: buyIndexProduct,
            price: priceProduct,
            sum() {
                return this.number * this.price;
            },
        }
        shopList.push(newProduct)
        console.log(shopList)
    }
}

function sumAllProduct(){//Виводить кількість усіх товарів які потрібно купити
    const sumAllProduct = shopList.reduce(function(acc, obj){
        return acc + obj.number
    }, 0)
    console.log(sumAllProduct)
}

function sumUnpurchasedProducts(){//Виводить на екран кількість не куплених продуктів
    const unpurchasedProducts = shopList.filter(function(product){
        return product.buyIndex === 0;
    });
    const sumAllProduct = unpurchasedProducts.reduce(function(acc, obj){
        return acc + obj.number
    }, 0)
    console.log(sumAllProduct)
}

function ascendingAndDescendingSorting(sortIndex){ //Сортування за ціною якщо передати в функцію 1 за спаданням ціни а 0 за зростанням
    if(sortIndex === 0){
        shopList.sort(function(a, b){
            return a.price - b.price
        })
        console.log(shopList)
    }else if(sortIndex === 1){
        shopList.sort(function(a, b){
            return b.price - a.price
        })
        console.log(shopList)
    }
}


console.log(shopList)
