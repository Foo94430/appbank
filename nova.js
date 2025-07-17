const maj = /[A-Z]/;

const container = document.querySelector(".container");
const signIn = document.querySelector(".signIn");
const signUp = document.querySelector(".signUp");
const signInPage = document.createElement("div");
signInPage.classList.add("signInPage", "container");
const signUpPage = document.createElement("div");
signUpPage.classList.add("signUpPage", "container");

signIn.addEventListener("click", () => {
  container.replaceWith(signInPage);
});

signInPage.innerHTML = `
<h1 class="title"> Connexion </h1>
<form > 
<input  placeholder="Identifiant" class="signInInput id" type="text">
<input  placeholder="Mot de passe"  class="signInInput" type="text"> 
<button> C'est parti ! </button>
<form>

`;

const form = signInPage.querySelector("form");
const inputId = signInPage.querySelector(" .id");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = inputId.value;
  localStorage.setItem("id", `${userAccount}`);

  if (value !== localStorage.getItem("id")) {
    console.error("erreur");
  } else {
    console.log(true);
  }
});

signUp.addEventListener("click", () => {
  container.replaceWith(signUpPage);
});

signUpPage.innerHTML = `
<h1 class="title"> Créer votre compte </h1>
<form > 
<input  placeholder="Nom" class="signInInput" type="text">
<input  placeholder="Prénom"  class="signInInput" type="text"> 
<input  placeholder="Créer un mot de passe"  class="signInInput password" type="text"> 
<input  placeholder="Retaper votre mot de passe"  class="signInInput" type="text"> 
<button> C'est parti ! </button>
<form>

`;

const password = signUpPage.querySelector(".password");

const passwordRules = document.createElement("div");

password.addEventListener("click", () => {
  passwordRules.classList.add("passwordrules");
  signUpPage.append(passwordRules);
  signUpPage.style.height = "700px";
});

passwordRules.innerHTML = `
   
<p> <span class='' >
</span>  Le mot de passe doit contenir au moins 8 caractères. 
 <p>
<p> <span class=" ">
</span>Doit contenir au moins une lettre majuscule (A–Z). 
<p>
<p><span class="">
</span> Doit inclure au moins un caractère spécial (ex. @, #, $, %, &, !, ?, etc.).
<p>
<p><span class="">
</span> Doit contenir une majuscules 
<p>
`;

/* v.forEach((el) => {
  el.addEventListener("click", () => {
   
    if (w) {
  
    }
  });
})*/

password.addEventListener("input", (event) => {
  const v = passwordRules.querySelectorAll("p");
  const w = passwordRules.querySelector("span");
  password.classList.add("error");
  const value = password.value;
  if (value.length >= 8) {
    w.classList.add("done");
    password.classList.replace("error", "succes");
  } else {
    w.classList.remove("done");
    password.classList.replace("succes", "error");
  }
});
