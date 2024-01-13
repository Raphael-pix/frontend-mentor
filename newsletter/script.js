const form = document.getElementById("form")
function validate() {
    const emailInput = document.getElementById("email")
    const errorElement = document.querySelector(".error");
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    let emailValue = emailInput.value
  
    if (!emailValue.match(emailPattern)) {
      errorElement.textContent = "valid email required";
      emailInput.setAttribute("style","background-color:#ff625756;;border:1px solid #ff6257;")
      return false; 
    }
  
    errorElement.textContent = ""; 
    emailInput.setAttribute("style","background-color:white;;border: 1px solid rgb(128, 128, 128);")
    window.location.href = "success.html?emailValue="+encodeURIComponent(emailValue);
    return true;
  }
  document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener("submit", function(e){
      validate()
      e.preventDefault()
    })
  });

  document.addEventListener("DOMContentLoaded",function(){
      let urlParams = new URLSearchParams(window.location.search);
      let email = urlParams.get("emailValue");

      let successEmail = document.getElementById("successEmail");
      successEmail.innerHTML =  decodeURIComponent(email);
  })
  function dismiss(){
    window.location.href = "index.html";
  }