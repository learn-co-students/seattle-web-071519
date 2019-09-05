class Pokemon{
  constructor(name, type, level){
    this.name = name
    this.type = type
    this.level = level
  }
}

class Trainer{

 constructor(profileImageUrl, name, experience, pokemons){
   this.profileImageUrl = profileImageUrl
   this.name = name
   this.experience = experience
   this.pokemons = []
 }

 static description(){
    console.log("This class takes in image url, name and experience")
 }

 sayName(){
   console.log(`My trainer name is ${this.name}`)
 }

 //figure out how to take the info from this class
 // render it properly into the DOM.
 render(){
   let trainerCard = `
        <div class="card">
          <img src="${this.image}"></img>
          <h1> Name: ${this.name}</h1>
          <h3> Experience: ${this.experience} </h3>
          <ul> Pokemons: </ul>
        </div>
   `
   return trainerCard;
 }

  renderPokemonList(){
   let card = document.querySelector(".card")
   console.log(card)
   this.pokemons.forEach( function(pokemon){
       let div = document.createElement("div")
       div.innerText = pokemon.name
       card.appendChild(div)
     })
 }

 addPokemon(pokemon){
   this.pokemons.push(pokemon)
 }

}

let helen = new Trainer("https://www.nicepng.com/png/full/349-3498211_pokemon-black-and-white-trainer-battle-sprites-pokemon.png", "Helen", 1000)
//console.log(helen.profileImage)
// helen.addPokemon(pikachu)
// console.log(helen.pokemons)
