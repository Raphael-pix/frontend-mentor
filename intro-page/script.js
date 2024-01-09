const nav = document.querySelector(".nav");
const menu = document.querySelector(".menu-icon")
const close = document.querySelector(".close-icon")
console.log(close);

menu.addEventListener("click", ()=>{
  nav.classList.add="active"
})
close.addEventListener("click", ()=>{
  nav.classList.remove="active"
 })