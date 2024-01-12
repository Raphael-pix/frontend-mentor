const form = document.getElementById("form")
function validate() {
    let emailInput = document.getElementById("email")
    let errorElement = document.querySelector(".error");
  
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailInput.value.match(emailPattern)) {
      errorElement.textContent = "valid email required";
      emailInput.setAttribute("style","background-color:#ff625756;;border:1px solid #ff6257;")
      return false; 
    }
  
    errorElement.textContent = ""; 
    emailInput.setAttribute("style","background-color:white;;border: 1px solid rgb(128, 128, 128);")
    window.location.href = "success.html";
    return true;
  }
  document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener("submit", function(e){
      validate()
      e.preventDefault()
    })
  });

  function dismiss(){
    window.location.href = "index.html";
  }