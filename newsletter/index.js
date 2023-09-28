function validate() {
    var emailInput = document.forms["emailForm"]["email"].value;
    var errorElement = document.querySelector(".error");
  
    // Regular expression to check email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailInput.match(emailPattern)) {
      errorElement.textContent = "Invalid email format";
      return false; // Prevent form submission
    }
  
    errorElement.textContent = ""; // Clear error message
    return true; // Allow form submission
  }
  
  // Attach the validate function to the form's onsubmit event
  document.forms["emailForm"].onsubmit = validate;
  