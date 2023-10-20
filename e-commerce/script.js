const container = document.querySelector(".container");
const mainImage = document.querySelector(".main > img");
const images = document.querySelector(".product-images")
const main= document.querySelector("body")
const lightbox = document.querySelector(".box")
const product = document.querySelector(".product")
const close = document.querySelector(".close")
const cart = document.querySelector(".cart-top")
const cartcontent = document.querySelector(".cart-body");
const cartCount = document.querySelector(".count");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const addCart=document.querySelector(".addToCart");
const amount = document.querySelector(".cartAmount")
const totalPrice = document.querySelector(".placeholder")
const holder = document.querySelector(".holder")
const emptyCartText = document.querySelector(".emptyCart")
const deleteEl = document.querySelector(".delete");

mainImage.addEventListener("click", ()=>{
    lightbox.classList.add("lightbox")
    product.setAttribute("style", "opacity: 0.6; ");
})

close.addEventListener("click", ()=>{
    lightbox.classList.remove("lightbox");
    product.style.cssText= "opacity: 1";
}) 
main.addEventListener('click', (e) => {
    if (e.target === main) {
      lightbox.style.display = 'none';
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
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
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

 let count = 0;
 function increasreCount(){
  count ++;
  cartCount.textContent = count;
  console.log(count)
 }
 function decreasreCount(){
  if (count >= 1){
    count --;
  cartCount.textContent = count;
  console.log(count)
  }
 }

 let price = 125
 addCart.addEventListener("click",()=>{
  cartCount.textContent = 0
  amount.textContent = count
  price *= count;
  count = 0;
  totalPrice.textContent = price;
  price = 125

  holder.style.display = "block"
  emptyCartText.style.display="none";

  

 })

 deleteEl.addEventListener("click", ()=>{
  holder.style.display = "none"
  emptyCartText.style.display="block"
 })