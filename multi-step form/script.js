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


const inputs = Array.from(document.getElementsByClassName("input"))
const error = document.querySelectorAll(".error")
const form =document.querySelector("#form")
console.log(form)
function checkRequired(){
    inputs.forEach(input=>{
        if(input.value === ""){
            error[i].textContent = "This field is required"
            input.classList.add("error")
        }else{
            error[i].textContent = ""
            input.classList.remove("error")
        }
        i++
    },i=0)
}

form.addEventListener("submit", function(e){
    e.preventDefault()
    if(checkRequired()){
        window.location.href = "plan.html"
    }
})