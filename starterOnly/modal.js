function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = [...document.getElementsByClassName("close")];
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

modalClose.forEach((btn) => btn.addEventListener("click", closeModal));

function closeModal() {
  modalbg.style.display = "none";
}



let myForm = document.getElementsByClassName('content');
myForm[0].addEventListener('submit', function (e) {
  e.preventDefault();


  let myInput = document.getElementById('first');
  let myRegex = /^[a-zA-Z-\s]+$/;

 
  const isFirstNameValid = isFirstName(myInput.value);
  const parentElem = myInput.parentNode

  //  First Name


  if (!isFirstNameValid) {
    parentElem.setAttribute("data-error", "Le champs Prénom est requis.");
    parentElem.setAttribute("data-error-visible", true);
  } else {
    parentElem.setAttribute("data-error-visible", false);
  }

  console.log(isFirstName(myInput.value))


  //  Last Name


  let myInputLast = document.getElementById('Last');
  const isLastNameValid = isLastName(myInputLast.value);
  
  if (!isLastNameValid) {
    parentElem.setAttribute("data-error", "Le champs Nom est requis.");
    parentElem.setAttribute("data-error-visible", true);
  } else; {
    parentElem.setAttribute("data-error-visible", false);
  }

  console.log(isLastName(myInputLast.value))



  //  E-mail Name

  let myInputEmail = document.getElementById('email')

  if (myInputEmail.value.trim() == "") {
    e.preventDefault();
    const parentElem = myInputEmail.parentNode;
    parentElem.setAttribute("data-error", "Le champs email est requis.");
    parentElem.setAttribute("data-error-visible", true);
  } else (myRegex.test(myInputEmail.value) == false); {
    e.preventDefault();
  }
  console.log(isEmail(myInputEmail.value))

  //  Birthdate Name

  let myInputBirthdate = document.getElementById('birthdate')
  let dateRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

  if (myInputBirthdate.value.match(dateRegex)) {
    e.preventDefault();
    const parentElem = myInputBirthdate.parentNode;
    parentElem.setAttribute("data-error", "Le champs Date de naissance est requis.");
    parentElem.setAttribute("data-error-visible", true);
  } else (dateRegex.test(myInputBirthdate.value) == false); {
    e.preventDefault();
  }
  console.log(isEmail(myInputBirthdate.value))

  //  Quantity Name

  let myInputQuantity = document.getElementById('quantity')

  console.log(typeof myInputQuantity.value)
  if (Number(myInputQuantity.value) < 0) {
    e.preventDefault();
    const parentElem = myInputQuantity.parentNode;
    parentElem.setAttribute("data-error", "Le champs combien de tournois est requis.");
    parentElem.setAttribute("data-error-visible", true);
  } else {
    parentElem.setAttribute("data-error-visible", false);
  }
  console.log(isEmail(myInputQuantity.value))

  //  validation


  if (isFirstNameValid && isLastNameValid ) {
    alert("YES")
  } else {
    alert("NO")
  }

  // Function

  function isPositive(num) {
    if (num > 0) return true
    return false
  }

  isPositive()

  function isFirstName(val) {
    if (val.trim().length >= 2) {
      return true
    } else {
      return false
    }
  }
  function isLastName(val) {
    if (val.trim().length >= 2) {
      return true
    } else {
      return false
    }
  }
  function isEmail(valE) {
    if (valE.length >= 2) {
      return true
    } else {
      return false
    }
  }


})
