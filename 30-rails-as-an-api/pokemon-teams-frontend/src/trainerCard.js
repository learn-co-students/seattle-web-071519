class TrainerCard {
  constructor(trainer) {
    this.id = trainer.id;
    this.trainer = trainer;
    this.name = trainer.name;
    this.pokemons = trainer.pokemons;
  }

  displayTrainerCards = () => {
    let displayPane = document.getElementById("display-pane");
    let trainerCard = document.createElement("div");
    trainerCard.classList.add("card");

    let trainerName = document.createElement("p");
    trainerName.innerText = this.name;

    displayPane.appendChild(trainerCard);
    trainerCard.appendChild(trainerName);

    let addButton = document.createElement("button");
    addButton.innerText = "Add Pokemon";
    addButton.onclick = e => {
      this.addPokemon(trainerCard, pokemonList);
    };

    trainerCard.appendChild(addButton);

    let pokemonList = document.createElement("ul");
    pokemonList.id = "pokemon-list";

    trainerCard.appendChild(pokemonList);

    this.displayPokemonTeam(trainerCard, pokemonList, this.pokemons);
  };

  displayPokemonTeam = (trainerCard, pokemonList, pokemons) => {
    pokemons.forEach(pokemon => {
      this.displayPokemon(trainerCard, pokemonList, pokemon);
    });
  };

  displayPokemon = (trainerCard, pokemonList, pokemon) => {
    pokemonList.id = "pokemon-list";
    let li = document.createElement("li");
    li.innerText = `${pokemon.nickname} (${pokemon.species})`;

    trainerCard.appendChild(pokemonList);
    pokemonList.appendChild(li);

    let releaseButton = document.createElement("button");
    releaseButton.classList.add("release");
    releaseButton.innerText = "release";
    li.appendChild(releaseButton);
    releaseButton.onclick = e => {
      this.releasePokemon(e, pokemon);
    };
  };

  addPokemon = (trainerCard, pokemonList) => {
    fetch(`http://localhost:3000/pokemons`, {
      method: "POST",
      headers: {
        "Content-Type": "Application/json",
        Accept: "Application/json"
      },
      body: JSON.stringify({
        nickname: "",
        species: "",
        trainer_id: this.id
      })
    })
      .then(response => response.json())
      .then(results => this.displayPokemon(trainerCard, pokemonList, results));
  };

  releasePokemon = (e, pokemon) => {
    e.target.parentNode.remove();
    fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
      method: "DELETE"
    });
  };

  render() {
    this.displayTrainerCards();
  }
}
