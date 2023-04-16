'use strict'

const editingBlok = document.getElementById('editing');
const editingIntut = document.createElement('textarea');
editingIntut.classList.add('editing__itput');
const editingBody = document.getElementById('editingBody');
const editingSizeBtn = document.getElementById('sizeBtn')

editingIntut.value = editingBlok.innerText
editingIntut.style.height = `${editingBlok.scrollHeight}px`
editingIntut.style.width = `${editingBlok.clientWidth}px`;
editingIntut.addEventListener('input', function () {   
    this.style.height = 'auto';
    this.style.height = `${this.scrollHeight + 7}px`;
});


document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.code === 'KeyE') {
        e.preventDefault();
        editingIntut.style.height = `${editingBlok.scrollHeight}px`;
        editingIntut.style.width = `${editingBlok.clientWidth}px`;
        editingBody.replaceChild(editingIntut, editingBlok);
        editingIntut.value = editingBlok.innerText

    } else if (e.ctrlKey && e.code === 'KeyS') { //Є баг якщо натиснути Ctrl + S без режиму редагування зникає блок для зміни розміру контейнера
        e.preventDefault();
        editingBlok.innerText = editingIntut.value;
        editingBody.replaceChild(editingBlok, editingIntut);
        editingBlok.appendChild(editingSizeBtn);
        editingBlok.style.height = `${editingBlok.scrollHeight}px`; 
    }
})

let isClick = false;
let initialX = 0;
let initialY = 0;
let initialWidth = 0;
let initialHeight = 0;

editingSizeBtn.addEventListener('mousedown', function (e) {
    if (e.button === 0) {
        isClick = true;
        initialX = (e.clientX * 2);
        initialY = e.clientY;
        initialWidth = editingBlok.offsetWidth;
        initialHeight = editingBlok.offsetHeight;
        e.preventDefault();
    }
});

document.addEventListener('mousemove', function (e) {
    if (isClick) {
        const dx = (e.clientX * 2) - initialX;
        const dy = e.clientY - initialY;
        const newWidth = initialWidth + dx;
        const newHeight = initialHeight + dy;
        editingBlok.style.width = newWidth + 'px';
        editingBlok.style.height = newHeight + 'px';
    }
});

document.addEventListener('mouseup', function () {
    if (isClick) {
        isClick = false;
    }
});


//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\



