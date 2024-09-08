
let menu = document.getElementById("mymenu");


function toggleMenu(){
    if (menu.style.maxWidth === '0px' || menu.style.maxWidth === ''){
        menu.style.maxWidth = '250px';
    } else{
        menu.style.maxWidth = '0px';
    };
}

function closeMenu(){
    menu.style.maxWidth = '0';
}
