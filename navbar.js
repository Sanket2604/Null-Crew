const nav = document.querySelector('.nav');
const topscroll = document.querySelector('.gototop');
window.onscroll = function() {
    var top = window.scrollY;
    if(top>=70){
        nav.classList.add('active');
    }
    else{
        nav.classList.remove('active');
    }

    if(top>=300){
        topscroll.classList.add('top');
    }
    else{
        topscroll.classList.remove('top');
    }
}