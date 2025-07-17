const users = {
  nom: "fodié",
  prenom: "diaouné",
};

const get = fetch("http://localhost:5550/", {
  method: "POST",
  body: JSON.stringify(users),
  headers: {
    "Content-Type": "application/json",
  },
});

get.then(async (response) => {
  const res = await response.json();
  console.log(res);
});
