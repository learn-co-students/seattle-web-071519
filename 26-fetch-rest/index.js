  document.addEventListener("DOMContentLoaded", main)

function main(){
  let seedBtn = document.querySelector("#seed-data")
  seedBtn.addEventListener("click", handleButtonClick)
  let createBtn = document.querySelector("#book-form")
  createBtn.addEventListener("submit", handleCreateClick)
  // fetchBooks()
  // fetchSpecificBook(2)
  // fetchPost()
  // fetchUpdate(12)
  fetchDelete(12)
}

function handleButtonClick(e){
    books.forEach(function(book){
      createBookCard(book)
    })
}

function showBooks(bookList){
    bookList.forEach(function(book){
      createBookCard(book)
    })
}


function handleDeleteEvent(e){
  console.log(e.target.parentElement.remove())
}

function handleCreateClick(e){
  e.preventDefault()
  let book = {
    title: e.target.title.value,
    author: e.target.author.value,
    img: e.target.cover.value
  }

  fetch("http://localhost:3000/books", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id: 12,
      title: e.target.title.value,
      author: e.target.author.value,
      img: e.target.cover.value
    })
  }).catch(errors=> console.log(errors))
  .then(response => console.log(response))
  fetchBooks()
  // createBookCard(book)
}

function fetchBooks(){
  return fetch("http://localhost:3000/books")
  .then(resp => resp.json())
  .then(json => showBooks(json))
  // .then(json => json)
  // function(response){
  //   return response.json()
  // })
}

function fetchSpecificBook(bookNum){
  return fetch(`http://localhost:3000/books/${bookNum}`)
  .then(resp => resp.json())
  .then(json => createBookCard(json))
}

function fetchUpdate(bookNum){
  fetch(`http://localhost:3000/books/${bookNum}`, {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      img: "https://www.pambazuka.org/sites/default/files/styles/flexslider_full/public/field/image/EW_Harry-Potter_Featured.jpg?itok=XphMvnG2"
    })
  }).catch(errors=> console.log(errors))
  .then(response => console.log(response))
  fetchSpecificBook(bookNum)
}

function fetchDelete(bookNum){
  fetch(`http://localhost:3000/books/${bookNum}`,{
    method: "DELETE"
  })
  fetchBooks()
}

function createBookCard(book){
    const bookList = document.getElementById("book-list")

    let div = document.createElement("div")
    div.className = "card"

    let img = document.createElement("img")
    img.src = book.img

    let title = document.createElement("p")
    title.innerText = book.title

    let author = document.createElement("p")
    author.innerText = book.author

    let dltButton = document.createElement("button")
    dltButton.innerText = "Delete Book"
    dltButton.addEventListener("click", handleDeleteEvent)

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(dltButton)

    bookList.appendChild(div)
}
