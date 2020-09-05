const serv1 = document.querySelector('.servicestab');
const cont1 = document.querySelector('.contacttab');
window.addEventListener("scroll", function() {
    var top1 = window.scrollY;
    if(top1>=70){
        serv1.style.marginTop = "75px"; 
        cont1.style.marginTop = "75px"; 
    }
    else{
        serv1.style.marginTop = "85px"; 
        cont1.style.marginTop = "85px"; 
    }
});
