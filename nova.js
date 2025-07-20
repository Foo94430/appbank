// =====================
// Regex

// =====================
const maj = /^[A-Z]/;
const caraSpecial = /["@", "#", "$", "%", "&", "!", "?",]/;

// =====================
// Elements du DOM
// =====================
const container = document.querySelector(".container");
const signIn = document.querySelector(".signIn");
const signUp = document.querySelector(".signUp");

// =====================
// Pages dynamiques
// =====================
const signInPage = document.createElement("div");
signInPage.classList.add("signInPage", "container");

const signUpPage = document.createElement("div");
signUpPage.classList.add("signUpPage", "container");

// =====================
// Page Connexion (Sign In)
// =====================
signInPage.innerHTML = `
  <h1 class="title"> Connexion </h1>
  <form> 
    <input placeholder="Identifiant" class="signInInput id" type="text">
    <input placeholder="Mot de passe" class="signInInput" type="text"> 
    <button> C'est parti ! </button>
  <form>
`;

signIn.addEventListener("click", () => {
  container.replaceWith(signInPage);
});

const form = signInPage.querySelector("form");
const inputId = signInPage.querySelector(".id");

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

// =====================
// Page Inscription (Sign Up)
// =====================
signUpPage.innerHTML = `
  <h1 class="title"> Créer votre compte </h1>
  <form> 
    <input placeholder="Nom" class="signInInput name" type="text">
    <input placeholder="Prénom" class="signInInput firstname" type="text"> 
    <input placeholder="Créer un mot de passe" class="signInInput password" type="text"> 
    <input placeholder="Retaper votre mot de passe" class="signInInput retype" type="text"> 
    <button> C'est parti ! </button>
  <form>
`;

signUp.addEventListener("click", () => {
  container.replaceWith(signUpPage);
});

const password = signUpPage.querySelector(".password");
const retype = signUpPage.querySelector(".retype");
const nam = signUpPage.querySelector(".name");
const firstName = signUpPage.querySelector(".firstname");
const formSignUpPage = signUpPage.querySelector("form");

// =====================
// Affichage règles mot de passe
// =====================
const passwordRules = document.createElement("div");
passwordRules.innerHTML = `
  <p class="characteres"><span class=''></span> Le mot de passe doit contenir au moins 8 caractères. <p>
  <p class="maj"><span class=" "></span>Doit contenir au moins une lettre majuscule (A–Z). <p>
  <p class="special"><span class=""></span> Doit inclure au moins un caractère spécial (ex. @, #, $, %, &, !, ?, etc.).<p>
  <p class="space"><span class=""></span> Ne doit pas contenir d'espace<p>
`;

password.addEventListener("click", () => {
  passwordRules.classList.add("passwordrules");
  signUpPage.append(passwordRules);
  signUpPage.style.height = "700px";
});

// =====================
// Vérification mot de passe en temps réel
// =====================
password.addEventListener("input", (event) => {
  const value = password.value;
  const characteresSpan = passwordRules.querySelector(".characteres > span");
  const majSpan = passwordRules.querySelector(".maj > span");
  const specialSpan = passwordRules.querySelector(".special > span");
  const spaceSpan = passwordRules.querySelector(".space > span");

  password.classList.add("error");

  if (value.length >= 8) {
    characteresSpan.classList.add("done");
  } else {
    characteresSpan.classList.remove("done");
  }

  if (maj.test(value)) {
    majSpan.classList.add("done");
  } else {
    majSpan.classList.remove("done");
  }

  if (caraSpecial.test(value)) {
    specialSpan.classList.add("done");
  } else {
    specialSpan.classList.remove("done");
  }

  if (!/\s/.test(value)) {
    spaceSpan.classList.add("done");
  } else {
    spaceSpan.classList.remove("done");
  }
});

// =====================
// Soumission du formulaire inscription
// =====================
formSignUpPage.addEventListener("submit", (event) => {
  event.preventDefault();

  const value = password.value;

  const valueLength = value.length >= 8;
  const valueMaj = maj.test(value);
  const valueSpecial = caraSpecial.test(value);
  const valueSpace = !/\s/.test(value);

  const valid = valueLength && valueMaj && valueSpecial && valueSpace;
  const formIsvalid =
    retype.value && nam.value && firstName.value && password.value;

  if (formIsvalid === "") {
    console.error("Veuillez remplir les champs vides");
  } else {
    if (!valid) {
      console.error("Le champs n'est pas rempli ! ");
    } else {
      if (retype.value !== value) {
        console.error(
          " Les mots de passe ne correspondent pas. Veuillez réessayer."
        );
      } else {
        const post = fetch("http://localhost:5550/", {
          method: "POST",
          body: JSON.stringify({
            nam: nam.value,
            firstname: firstName.value,
            password: value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        post.then(async (response) => {
          const res = await response.json();
          console.log(res);
        });
      }
    }
  }
});
