const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click',() => {
    if(menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
    }
    else {        
        menuBtn.classList.add('open');
    }
});