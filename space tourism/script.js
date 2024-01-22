const nav = document.querySelector(".nav-bar")
const links = document.querySelectorAll("a")

function toggleMenu(){
    nav.classList.toggle("visible")
}
function active(){
    links.forEach(link =>{
        if(link.href === window.location.href){
            link.classList.toggle("active")
        }
    })
}
window.addEventListener("load",active())