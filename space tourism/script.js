const nav = document.querySelector(".nav-bar")
const links = document.querySelectorAll(".body-nav a")

function toggleMenu(){
    nav.classList.toggle("visible")
}


links.forEach(link=>{
    console.log(link)
})
console.log(window.location.href)
function underline(){
    links.forEach(link =>{
        if(link.href === window.location.href){
            link.classList.toggle("active")
        }
    })
}
window.addEventListener("load",underline())