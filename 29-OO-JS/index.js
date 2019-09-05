document.addEventListener("DOMContentLoaded", setupCode)

let cardColumn = document.querySelector('.card-columns')

function setupCode() {
    console.log('inside setup code')
    let formButton = document.querySelector('.form')
    formButton.addEventListener('submit', handleSubmit)
}

function handleSubmit(event) {
    event.preventDefault()
    let cardDiv = document.querySelector(".card-columns")
    console.log(event.target.name.value)
    let name = event.target.name.value
    let imageUrl = event.target.image.value
    let experience = event.target.experience.value
    let ash = new Trainer(imageUrl, name, experience)
    let pikachu = new Pokemon("pikachu", "electric", 10)
    // console.log(ash)
    ash.addPokemon(pikachu)
    cardDiv.innerHTML += ash.render()
    ash.renderPokemonList()
// //    console.log(helen)
//    cardDiv.innerHTML += helen.render()
}
