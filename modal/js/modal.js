function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/**
 * DOM Element
 */
const modalBody = document.getElementById('modal-body');
const modalSuccess = document.getElementById('success');
const modalBtnClose = [...document.getElementsByClassName("btnSuccess")];
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalClose = [...document.getElementsByClassName("close")];
const formData = document.querySelectorAll(".formData");
/**
 * launch modal event
 */
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
/**
 * launch modal form
 */
function launchModal() {
  modalbg.style.display = "block";
}
/**
 * fermer le modal avec le buton X
 */
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
function closeModal() {
  if(modalbg.style.display == "block"){
    modalbg.style.display = "none";
  }if (modalSuccess.style.visibility = "visible"){
    modalSuccess.style.visibility = 'hidden';
    document.forms[0].reset();
    modalBody.style.visibility = 'visible';
  }

}

/**
 * 
 */
let myForm = document.getElementsByClassName('content');
myForm[0].addEventListener('submit', function (e) {
  e.preventDefault();
  /**
   * validtion pour le Prénom
   */
  let myInput = document.getElementById('first');
  const isFirstNameValid = isFirstName(myInput.value);
  const parentElem = myInput.parentNode
  /**
   * envoie ou pas le message d'erreur
   */
  if (!isFirstNameValid) {
    parentElem.setAttribute("data-error", "Le champ Prénom doit comporter au moins 2 caractères.");
    parentElem.setAttribute("data-error-visible", true);
  } else {
    parentElem.setAttribute("data-error-visible", false);
  }
  /**
   * validation pour le Nom
   */
  let myInputLast = document.getElementById('last');
  const isLastNameValid = isLastName(myInputLast.value);
  const parentElemLast = myInputLast.parentNode;
  /**
   * envoie ou pas le message d'erreur
   */
  if (!isLastNameValid) {
    parentElemLast.setAttribute("data-error", "Le champ Nom doit comporter au moins 2 caractères.");
    parentElemLast.setAttribute("data-error-visible", true);
  } else {
    parentElemLast.setAttribute("data-error-visible", false);
  }
  /**
   * validation pour l'E-mail
   */
  let myInputEmail = document.getElementById('email');
  const isEmailValid = isEmail(myInputEmail.value);
  const parentElemEmail = myInputEmail.parentNode;
  /**
   * envoie ou pas le message d'erreur
   */
  if (!isEmailValid) {
    parentElemEmail.setAttribute("data-error", "L'email doit être conforme.");
    parentElemEmail.setAttribute("data-error-visible", true);
  } else {
    parentElemEmail.setAttribute("data-error-visible", false);
  }
  /**
   * validation pour la Date de naissance
   */
  let myInputBirthdate = document.getElementById('birthdate');
  const isBirthdateValid = isBirthdate(myInputBirthdate.value);
  const parentElemBirthdate = myInputBirthdate.parentNode;
  /**
   * envoie ou pas le message d'erreur
   */
  if (!isBirthdateValid) {
    parentElemBirthdate.setAttribute("data-error", "La Date de naissance DD/MM/YYYY doit être conforme.");
    parentElemBirthdate.setAttribute("data-error-visible", true);
  } else {
    parentElemBirthdate.setAttribute("data-error-visible", false);
  }
  /**
   * validation pour le nombre de tournois GameOn participé
   */
  let myInputQuantity = document.getElementById('quantity');
  const isQuantityValid = isQuantity(myInputQuantity.value);
  console.log (Number (myInputQuantity.value));
  const parentElemQuantity = myInputQuantity.parentNode;
  /**
   * envoie ou pas le message d'erreur
   */
  if (!isQuantityValid) {
    parentElemQuantity.setAttribute("data-error", "le champ doit continuer un nombre.");
    parentElemQuantity.setAttribute("data-error-visible", true);
  } else {
    parentElemQuantity.setAttribute("data-error-visible", false);
  }
  /**
   * validation pour la villes choisi
   */
  let myInputRadio = document.getElementsByName('location')
  const radioList = [...myInputRadio];
  const isRadioValid = isRadio(radioList);
  const parentElemRadio = myInputRadio[0].parentNode;
  /**
   * envoie ou pas le message d'erreur
   */
  if (!isRadioValid) {
    parentElemRadio.setAttribute("data-error", "sélectionner au moins un ville.");
    parentElemRadio.setAttribute("data-error-visible", true);
  } else {
    parentElemRadio.setAttribute("data-error-visible", false);
  }
  /**
   * checkbox pour les conditions d utilisation.
   */
  let myInputConditionsUtilisation = document.getElementById('checkbox1');
  const isConditionsUtilisationValid = isConditionsUtilisation(myInputConditionsUtilisation);
  const parentElemConditionsUtilisation = myInputConditionsUtilisation.parentNode;
  /**
   * envoie ou pas le message d'erreur
   */
  if (!isConditionsUtilisationValid) {
    parentElemConditionsUtilisation.setAttribute("data-error", "accepté les conditions d'utilisation.");
    parentElemConditionsUtilisation.setAttribute("data-error-visible", true);
  } else {
    parentElemConditionsUtilisation.setAttribute("data-error-visible", false);
  }

  /**
  * Fermer le modal sur l'écran de succès
  */
  modalBtnClose.forEach((btn) => btn.addEventListener("click", closeBtnModal));
  function closeBtnModal() {
    modalbg.style.display = "none";
  }
  /**
* affiche le message de succès 
*/
  if (isFirstNameValid && isLastNameValid && isEmailValid && isQuantityValid && isRadioValid && isBirthdateValid && isConditionsUtilisationValid) {
    modalBody.style.visibility = 'hidden';
    modalSuccess.style.visibility = 'visible';
  } else {
    modalBody.style.display = "block";
  }

})
/**
 * Reset le formulaire 
 */
document.getElementById("btnSuccess").addEventListener("click", function () {
  modalBody.style.visibility = 'visible';
  modalSuccess.style.visibility = 'hidden';
  document.forms[0].reset();
}
)

// Function
/**
* fonction pour le prénom
* @param {string} val 
* @returns {boolean} vrais ci le nombre de caracter et egale ou superieur a 2
*/
function isFirstName(val) {
  return val.trim().length >= 2
}
/**
* fonction pour le nom
* @param {string} val 
* @returns {boolean}vrais ci le nombre de caracter et egale ou superieur a 2
*/
function isLastName(val) {
  return val.trim().length >= 2
}
/**
 * fonction pour validé l'E-mail avec une regex
 * @param {string} email 
 * @returns {boolean}vrais si l'Email est en accord avec la regex test@test.test
 */
function isEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
/**
 * fonction pour validé la date d'anniversaire avec une date
 * @param {string} Birthdate 
 * @returns {boolean}vrais ci la date est inférieur a la date du jour JJ/MM/AAAA
 */
function isBirthdate(Birthdate) {
  const myDate = new Date();
  const inputDate = new Date(Birthdate);
  return inputDate < myDate
}
/**
 * fonction pour valdé le nombre de participation 
 * @param {string} val 
 * @returns {boolean}vrais si il y a un un chiffre comprise entre 0-9
 */
function isQuantity(val) {
  if(val === ''){
    return false
  }
  const qty = Number(val);
  return qty >= 0
}
/**
 * fonction pour validé les radio dans une list
 * @param {list} radioList 
 * @returns {boolean} vrais ci un buttons de la list est cocher  
 */
function isRadio(radioList) {
  let isChecked = false;
  for (let i = 0; i < radioList.length; i += 1) {
    if (radioList[i].checked) {
      isChecked = true;
    }
  }
  return isChecked;
}
/**
 * fonction pour validé les condition d'utilisation
 */
function isConditionsUtilisation(radio) {
  return radio.checked;
}