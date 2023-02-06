const url = new URL(window.location.href).searchParams;

const params = url.get("id");

fetch(`https://jsonplaceholder.typicode.com/users/${params}`).then((response) =>
  response.json()
).then((data)=> {
  const card = document.createElement('div');
  card.innerHTML = `
    <h2>${data.name}</h2>
    <p>${data.email}</p>
    <h1>${data.id}</h1>
  `
  document.body.append(card)
})
