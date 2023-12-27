const input = document.getElementsByClassName("form-input")
const name = document.getElementById("cardName")
const number = document.getElementById("cardNo")
const month = document.getElementById("month")
const year = document.getElementById("year")
const cvc = document.getElementById("cvc")
const err = document.getElementsByClassName("error")
const form= document.querySelector(".form")
const cName = document.getElementById("detailsName")
const cMonth = document.getElementById("detailsMonth")
const cYear = document.getElementById("detailsYear")
const cHead = document.getElementById("cardHeader")
const cCvc = document.querySelector(".bCVC")


function checkDate(){
    if(month.value === "" || year.value === ""){
        err[1].innerHTML="can't be blank"
        if(year.value === ""){
            year.setAttribute("style", "border: 1.3px solid red;")
        }else if(month.value === ""){
            month.setAttribute("style", "border: 1.3px solid red;")
        }
    }else{
        err[1].innerHTML=""
        month.setAttribute("style", "border: 1.3px solid black;")
        year.setAttribute("style", "border: 1.3px solid black;")
    }

}

function checkCvc(){
    if(cvc.value === ""){
        err[2].innerHTML="can't be blank"
        cvc.setAttribute("style", "border: 1.3px solid red;")
    }else{
        err[2].innerHTML=""
        cvc.setAttribute("style", "border: 1.3px solid black;")
    }
}

function addSpaceEvery4Characters(inputString) {
    const characters = inputString.split('');

    for (let i = 4; i < characters.length; i += 5) {
      characters.splice(i, 0, ' ');
    }
  
    const resultString = characters.join('');
  
    return resultString;
  }

  
  function checkCardNo(inputString) {
    if(/^\d+$/.test(inputString)){
        err[0].innerHTML=""
        number.setAttribute("style", "border: 1.3px solid black;")
        return true;
    }else{
        err[0].innerHTML="wrong formart, numbers only"
        number.setAttribute("style", "border: 1.3px solid red;")
        return false
    }
  }


form.addEventListener("submit", function(e){
    e.preventDefault()
    if(checkCardNo(number.value)){
        cHead.innerHTML = addSpaceEvery4Characters(number.value)
        cName.innerHTML = name.value
        cMonth.innerHTML = month.value
        cYear.innerHTML = year.value
        cCvc.innerHTML = cvc.value
    }
    checkDate()
    checkCvc()
    checkCardNo(number.value)
})
