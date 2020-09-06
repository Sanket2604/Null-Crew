function toggleSideBar(){
    document.querySelector('.sidebar').classList.toggle('slide');
    document.querySelector('.backdrop').classList.toggle('back');
}
function sideBarClose(){
    document.querySelector('.sidebar').classList.remove('slide');
    document.querySelector('.menu-btn').classList.remove('open');
    document.querySelector('.backdrop').classList.remove('back');
}
document.querySelector('.backdrop').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.remove('slide');
    document.querySelector('.menu-btn').classList.remove('open');
    document.querySelector('.backdrop').classList.remove('back');
});
function showdropdown(){
    document.querySelector('.dropdown').classList.toggle('drop');
    document.querySelector('.company1').classList.toggle('fa-chevron-down');
    document.querySelector('.company1').classList.toggle('fa-chevron-up');
}
function showdropdown1(){
    document.querySelector('.dropdown1').classList.toggle('drop');
    document.querySelector('.services').classList.toggle('fa-chevron-down');
    document.querySelector('.services').classList.toggle('fa-chevron-up');
}
function showdropdown2(){
    document.querySelector('.dropdown2').classList.toggle('drop');
    document.querySelector('.webdevelop').classList.toggle('fa-chevron-down');
    document.querySelector('.webdevelop').classList.toggle('fa-chevron-up');
}
function showdropdown3(){
    document.querySelector('.dropdown3').classList.toggle('drop');
    document.querySelector('.mobdev').classList.toggle('fa-chevron-down');
    document.querySelector('.mobdev').classList.toggle('fa-chevron-up');
}
function showdropdown4(){
    document.querySelector('.dropdown4').classList.toggle('drop');
    document.querySelector('.digimar').classList.toggle('fa-chevron-down');
    document.querySelector('.digimar').classList.toggle('fa-chevron-up');
}
function showdropdown5(){
    document.querySelector('.dropdown5').classList.toggle('drop');
    document.querySelector('.grade').classList.toggle('fa-chevron-down');
    document.querySelector('.grade').classList.toggle('fa-chevron-up');
}