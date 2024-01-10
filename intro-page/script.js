
function toggleMenu(menuType) {
  const menu = document.getElementById(`${menuType}-menu`);
  const arrowIcon = document.getElementById(`${menuType}-arrow-icon`);
  menu.classList.toggle("show");
  
  if(menu.classList.contains("show")){
    arrowIcon.src="images/icon-arrow-up.svg"
  }else{
    arrowIcon.src="images/icon-arrow-down.svg"
  }
}
window.onclick = function(event) {
  if (!event.target.matches('.arrow-icon')) {
    let dropdowns = document.getElementsByClassName("dropdown-menu");
    let arrowIcons = document.getElementsByClassName("arrow-icon");
    for (let i = 0; i < dropdowns.length; i++) {
      if (dropdowns[i].classList.contains('show')) {
        dropdowns[i].classList.remove('show');
        arrowIcons[i].src="images/icon-arrow-down.svg"
      }
    }
  }
}