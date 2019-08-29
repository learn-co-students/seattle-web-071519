```Javascript
function fetchBooks(){
  return fetch("http://localhost:3000/books/1")
              .then(response => response.json())
              .then(json => createBookCard(json))
}

fetch("http://localhost:3000/books", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
      id: 12,
      title: e.target.title.value,
      author: e.target.author.value,
      img: e.target.cover.value
    })
}).then(resp => console.log(resp))
```
