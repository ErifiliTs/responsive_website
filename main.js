const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');
const menu_item = document.querySelectorAll('.header .nav-list ul li a');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', () =>{
    var scroll = window.scrollY;
    if(scroll > 150){
        document.getElementById('header').style.backgroundColor = "#788278" 
    }
    else{
        document.getElementById('header').style.backgroundColor = "#0000002c";
    }
})

menu_item.forEach((item) => {
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

