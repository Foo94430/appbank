const users = {
  nom: "fodié",
  prenom: "diaouné",
};

const button = document.querySelector(".post")
const get = document.querySelector(".get")




button.addEventListener("click", () => {
const post = fetch("http://localhost:5550/", {
  method: "POST",
  body: JSON.stringify(users),
  headers: {
    "Content-Type": "application/json",
  },
});

post.then(async (response) => {
  const res = await response.json();
  console.log(res);
});
})

get.addEventListener('click', () => {
  const getUsers = fetch("http://localhost:5550/")
  getUsers.then(async (response) => {
    const v = await response.json()
    console.log(v)
  })
})