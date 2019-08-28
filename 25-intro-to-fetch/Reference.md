```Javascript
function fetchBooks(){
  return fetch("http://localhost:3000/books/1")
              .then(response => response.json())
              .then(json => createBookCard(json))
}
```
