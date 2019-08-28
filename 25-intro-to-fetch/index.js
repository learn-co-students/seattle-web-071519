  document.addEventListener("DOMContentLoaded", main)

function main(){
  let seedBtn = document.querySelector("#seed-data")
  seedBtn.addEventListener("click", handleButtonClick)
  let createBtn = document.querySelector("#book-form")
  createBtn.addEventListener("submit", handleCreateClick)
  let books = fetchBooks()
  fetchSpecificBook(2)
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
  createBookCard(book)
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
  .then(function(json){
           json.forEach(function(book){
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
    })
})
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
