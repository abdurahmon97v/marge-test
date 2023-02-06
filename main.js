const btn = document.querySelector(".btn");

fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
  response.json()
).then((data)=> {
  data.forEach((el)=> {
    let card = document.createElement('div');
    card.innerHTML = `
      <h2>${el.name}</h2>
      <button class="el" id="${el.id}">Show</button>
    `
    document.body.append(card)
  })
})

document.body.addEventListener("click", (e) => {
  const url = "http://127.0.0.1:5500/about.html?";
  let id;
  if(e.target.className == 'el'){
    id = e.target.id;
  };
  const params = new URLSearchParams({id});

  window.location.href = url + params;
});
