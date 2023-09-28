function validate() {
    let day = parseInt(document.forms["dateInput"]["Day"].value);
    let month = parseInt(document.forms["dateInput"]["Month"].value);
    let year = parseInt(document.forms["dateInput"]["Year"].value);
  
    let errorElements = document.getElementsByClassName("error");
    for (let i = 0; i < errorElements.length; i++) {
      errorElements[i].innerHTML = "";
    }
  
    let valid = true;
  
    if (isNaN(day) || day < 1 || day > 31) {
      document.querySelector(".form:nth-child(1) .error").innerHTML = "Must be a valid day";
      valid = false;
    }
  
    if (isNaN(month) || month < 1 || month > 12) {
      document.querySelector(".form:nth-child(2) .error").innerHTML = "Must be a valid month";
      valid = false;
    }
  
    if (isNaN(year)) {
      document.querySelector(".form:nth-child(3) .error").innerHTML = "Must be a valid year";
      valid = false;
    }
  
    if (!valid) {
      return false;
    }
  
    let currentDate = new Date();
    let birthDate = new Date(year, month - 1, day);
    let ageInMilliseconds = currentDate - birthDate;
    let ageDate = new Date(ageInMilliseconds);
  
    let years = ageDate.getUTCFullYear() - 1970;
    let months = ageDate.getUTCMonth();
    let days = ageDate.getUTCDate() - 1;
  
    document.querySelector(".years span").textContent = years;
    document.querySelector(".months span").textContent = months;
    document.querySelector(".days span").textContent = days;
  
    return false;
  }
  