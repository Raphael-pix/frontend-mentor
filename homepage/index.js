const body = document.querySelector("html");
const menu = document.querySelector(".menu");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close");

let isVisible = false;
function visibility(){
    if(isVisible){
        menu.style.display="none"
        closeIcon.style.display="none"
        menuIcon.style.display="block"
    }else{
        menu.style.display="block"
        closeIcon.style.display="block"
        menuIcon.style.display="none"
    }
    isVisible = !isVisible
}

menuIcon.addEventListener("click",visibility)
closeIcon.addEventListener("click",visibility)
