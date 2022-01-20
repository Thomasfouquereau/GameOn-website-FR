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


//


let myForm = document.getElementsByClassName('content');
myForm[0].addEventListener('submit', function (e) {
  e.preventDefault();


  //  First Name


  let myInput = document.getElementById('first');
  const isFirstNameValid = isFirstName(myInput.value);
  const parentElem = myInput.parentNode


  if (!isFirstNameValid) {
    parentElem.setAttribute("data-error", "Le champs Prénom est requis.");
    parentElem.setAttribute("data-error-visible", true);
  } else {
    parentElem.setAttribute("data-error-visible", false);
  }

  console.log(isFirstName(myInput.value))


  //  Last Name


  let myInputLast = document.getElementById('last');
  const isLastNameValid = isLastName(myInputLast.value);
  const parentElemLast = myInputLast.parentNode;


  if (!isLastNameValid) {
    parentElemLast.setAttribute("data-error", "Le champs Prénom est requis.");
    parentElemLast.setAttribute("data-error-visible", true);
  } else {
    parentElemLast.setAttribute("data-error-visible", false);
  }

  console.log(isLastName(myInputLast.value))


  //  E-mail


  let myInputEmail = document.getElementById('email');
  const isEmailValid = isEmail(myInputEmail.value);
  const parentElemEmail = myInputEmail.parentNode;


  if (!isEmailValid) {
    parentElemEmail.setAttribute("data-error", "Le champs email est requis.");
    parentElemEmail.setAttribute("data-error-visible", true);
  } else {
    parentElemEmail.setAttribute("data-error-visible", false);
  }
  console.log(isEmail(myInputEmail.value))


  //  Birthdate 

  const myDate = new Date;
  let myInputBirthdate = document.getElementById('birthdate');
  const isBirthdateValid = isBirthdate(myInputBirthdate.Date);
  const parentElemBirthdate = myInputBirthdate.parentNode;


  if (!isBirthdateValid) {
    parentElemBirthdate.setAttribute("data-error", "Le champs Date de naissance est requis.");
    parentElemBirthdate.setAttribute("data-error-visible", true);
  } else {
    parentElemBirthdate.setAttribute("data-error-visible", false);
  }
  console.log(isBirthdate(myInputBirthdate.Date))


  //  Quantity 

  let myInputQuantity = document.getElementById('quantity');
  const isQuantityValid = isQuantity(myInputQuantity.value);
  const parentElemQuantity = myInputQuantity.parentNode;


  if (!isQuantityValid) {
    parentElemQuantity.setAttribute("data-error", "Le champs tournois ne doit contenir que des chiffres .");
    parentElemQuantity.setAttribute("data-error-visible", true);
  } else {
    parentElemQuantity.setAttribute("data-error-visible", false);
  }
  console.log(isBirthdate(myInputQuantity.value))

  //  Radio 


  let myInputRadio = document.getElementsByName('location')
  const isRadioValid = isRadio(myInputRadio.checked);
  const parentElemRadio = myInputRadio.parentNode;


  if (!isRadioValid) {
    parentElemRadio.setAttribute("data-error", "Le champs Quelles villes est requis.");
    parentElemRadio.setAttribute("data-error-visible", true);
  } else {
    //parentElemRadio.setAttribute("data-error-visible", false);
  }
  console.log(isRadio(myInputRadio.checked))


  //checkbox1


  let myInputCheckbox1 = document.getElementById('checkbox1');
  const isCheckbox1Valid = isCheckbox1(myInputCheckbox1.checked);
  const parentElemCheckbox1 = myInputCheckbox1.parentNode;


  if (!isCheckbox1Valid) {
    parentElemCheckbox1.setAttribute("data-error", "accepté les conditions d'utilisation est requis.");
    parentElemCheckbox1.setAttribute("data-error-visible", true);
  } else {
    parentElemCheckbox1.setAttribute("data-error-visible", false);
  }
  console.log(isCheckbox1(myInputCheckbox1.checked))


  //  validation


  const modalBody = document.getElementById('modal-body');
  const modalSuccess = document.getElementById('success');
  const modalBtnClose = [...document.getElementsByClassName("btnSuccess")];

  modalBtnClose.forEach((btn) => btn.addEventListener("click", closeBtnModal));

  function closeBtnModal() {
    modalbg.style.display = "none";
  }


  if (isFirstNameValid && isLastNameValid && isEmailValid && isQuantityValid) {
    modalBody.style.visibility = 'hidden';
    modalSuccess.style.visibility = 'visible';
  } else {
    modalBody.style.display = "block";
  }


  // Function


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

  function isEmail(email) {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  }

  function isBirthdate(Birthdate) {
    if (Birthdate < myDate) {
      return true
    } else {
      return false
    }
  }

  function isQuantity(val) {
    const regex = /[0-9]/;
    return regex.test(val);
  }

  function isRadio(checked) {
    if (checked != null) {
      return false
    } else {
      return true
    }
  }

  function isCheckbox1(checked) {
    if (checked != null) {
      return false
    } else {
      return true
    }
  }


})
