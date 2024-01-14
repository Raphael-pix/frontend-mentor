const mainImage = document.querySelector(".main img");
const main= document.querySelector("body")
const lightbox = document.querySelector(".box")
const product = document.querySelector(".product")
const close = document.querySelector(".close")
const cart = document.querySelector(".cart-top")
const cartcontent = document.querySelector(".cart-body");
const cartCount = document.getElementById("count");
const addCart=document.querySelector(".cart-button");
const amount = document.querySelector(".cartAmount")
const totalPrice = document.querySelector(".placeholder")
const holder = document.querySelector(".holder")
const emptyCartText = document.querySelector(".emptyCart")
const deleteEl = document.querySelector(".delete");
const notification = document.querySelector(".notification");
const menu = document.querySelector(".menu-icon");
const menuList = document.querySelector(".menu-list");


function addLightBox(){
  const viewport = window.innerWidth
  if(viewport < 620){
    return
  }
  lightbox.classList.add("lightbox")
  product.setAttribute("style", "opacity: 0.3; ");
}

function removeLightBox(){
  const viewport = window.innerWidth
  if(viewport < 620){
    return
  }
  lightbox.classList.remove("lightbox");
  product.style.cssText= "opacity: 1";
}

function checkViewPort(){
  const viewport = window.innerWidth
  if (viewport < 620) {
      return
  }
  mainImage.addEventListener("click", addLightBox)
  close.addEventListener("click" , removeLightBox)
}
window.addEventListener('resize', checkViewPort)
checkViewPort()


main.addEventListener('click', (e) => {
    if (e.target === main) {
      removeLightBox();
    }
  });


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("main-img");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



 let isVisible = false;
 cart.addEventListener("click", ()=>{
  if (isVisible){
    cartcontent.style.display = "none";
  }else{
    cartcontent.style.display = "block";
  }
  isVisible = !isVisible;
 })

 let count = cartCount.value;
 function increasreCount(){
  count ++;
  cartCount.value = count
 }
 function decreasreCount(){
  if (count >= 1){
    count --;
    cartCount.value = count
  }
 }

 let price = 125
 addCart.addEventListener("click",()=>{
  notification.innerHTML = count
  amount.textContent = count
  price *= count;
  count = 0;
  totalPrice.textContent = price;
  price = 125

  notification.style.display ="block"
  holder.style.display = "block"
  emptyCartText.style.display="none";

 cartCount.value = 0
 })

 deleteEl.addEventListener("click", ()=>{
  holder.style.display = "none"
  emptyCartText.style.display="block"
  notification.style.display ="none"
 })

 function toggleMenu(){
  menuList.classList.toggle("visible")
 }