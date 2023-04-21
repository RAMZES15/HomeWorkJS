'use strict'

const search = document.getElementById('search')
const searchBtn = document.getElementById('search-btn')
const block = document.getElementById('block')

searchBtn.addEventListener('click', () => {
    let getName = String(search.value)
    search.value = ''
    getName = getName.trim().split(' ').join('+')
    let searchName = `t=${getName}&plot=full`
    getMovie(searchName)
})

function getMovie(searchName){
    fetch(`http://www.omdbapi.com/?apikey=5b88c3fb&${searchName}`)
        .catch(error => {
            console.error('Error:', error)
        }) 
        .then(movie => movie.json())
        .then(infoMovie => {
            block.innerHTML = ''
            for(let key in infoMovie){
                block.innerHTML += `
                <div>${key}: ${infoMovie[key]}</div>
                `
            }
        })  
}


