const caseView = document.querySelector('#loc--case--viewAll'),
    openButton = document.querySelector('#open'),
    closeButton = document.querySelector('#close');

openButton.addEventListener('click', function(){
    caseView.classList.remove('hidden')
    this.classList.add('hidden')
    closeButton.classList.remove('hidden')
});
closeButton.addEventListener('click', function(){
    caseView.classList.add('hidden')
    this.classList.add('hidden')
    openButton.classList.remove('hidden')
});
////////////////
const openBurger = document.querySelector('#open--burger'),
    closeBurger = document.querySelector('#close--burger'),
    headerMenu = document.querySelector('.header--case__menu'),
    selectBody = document.querySelector('body');

openBurger.addEventListener('click', function(){
    headerMenu.classList.remove('hidden')
    selectBody.style.overflow = "hidden";
});
closeBurger.addEventListener('click', function(){
    headerMenu.classList.add('hidden')
    selectBody.style.overflow = "auto";
});
//////////////////