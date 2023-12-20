const arrow = document.querySelector(".arrow1");
console.log(arrow);
const dropdown = document.querySelector(".dropdown-menu-features")
console.log(dropdown);



 let isVisible = false;
 arrow.addEventListener("click", ()=>{
  if (isVisible){
    dropdown.style.display = "none";
  }else{
    dropdown.style.display = "block";
  }
  isVisible = !isVisible;
  console.log(isVisible)
 })