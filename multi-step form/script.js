const links = document.querySelectorAll(".number")
console.log(links)

function active(){
    links.forEach(link =>{
        if(link.href === window.location.href){
            link.classList.toggle("active")
        }
    })
}
window.addEventListener("load",active())