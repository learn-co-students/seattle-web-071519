const BASE_URL = "http://localhost:3000";
const TRAINERS_URL = `${BASE_URL}/trainers`;
const POKEMONS_URL = `${BASE_URL}/pokemons`;

document.addEventListener("DOMContentLoaded", main);

function main() {
  getTrainers();
}

getTrainers = () => {
  fetch(TRAINERS_URL)
    .then(response => response.json())
    .then(trainers => displayTrainers(trainers));
};

displayTrainers = trainers => {
  trainers.forEach(trainer => {
    console.log("trainer before DOM creation", trainer);
    let newTrainer = new TrainerCard(trainer);
    newTrainer.render();
  });
};
