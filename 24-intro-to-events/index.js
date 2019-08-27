  document.addEventListener("DOMContentLoaded", main)

function main(){
  // createBookCard()
  let seedBtn = document.querySelector("#seed-data")
  seedBtn.addEventListener("click", handleButtonClick)
  let createBtn = document.querySelector("#book-form")
  createBtn.addEventListener("submit", handleCreateClick)
}

function handleButtonClick(e){
  // console.log(e)
    books.forEach(function(book){
      createBookCard(book)
    })
}

function handleDeleteEvent(e){
  console.log(e.target.parentElement.remove())
}

function handleCreateClick(e){
  // console.log(e.target.title.value)
  // console.log(e.target.author.value)
  // console.log(e.target.cover.value)
  e.preventDefault()
  let book = {
    title: e.target.title.value,
    author: e.target.author.value,
    img: e.target.cover.value
  }
  createBookCard(book)
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
    // dltButton.value = "Delete Book"

    div.appendChild(img)
    div.appendChild(title)
    div.appendChild(author)
    div.appendChild(dltButton)

    //Appending to DOM
    bookList.appendChild(div)
}
