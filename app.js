// import functions and grab DOM elements
const shedButton = document.getElementById('shed-button');
const treeButton = document.getElementById('tree-button');
const boulderButton = document.getElementById('boulder-button');

const shedContainer = document.getElementById('shed-container');
const treeContainer = document.getElementById('tree-container');
const boulderContainer = document.getElementById('boulder-container');

const totalEl = document.getElementById('total');
const lossesEl = document.getElementById('losses');
const winsEl = document.getElementById('wins');


let correctGuesses = 0;
let totalGuesses = 0;

shedButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    handleGuess('shed', correctSpot);
    const correctSpot = getRandomHidingSpot();

    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

treeButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    handleGuess('tree', correctSpot);
    const correctSpot = getRandomHidingSpot();


    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});

boulderButton.addEventListener('click', () => {
    // get a random item to call the 'correct spot'
    handleGuess('boulder', correctSpot);
    const correctSpot = getRandomHidingSpot();
    // call the handleGuess function with the correct parameters (the user's guess and the "correct" hiding place) to do DOM work
});


function getRandomHidingSpot() {
    // initialize state
    const hidingPlaces = [
        'tree',
        'shed',
        'boulder'
    ];

    const index = Math.floor(Math.random() * hidingPlaces.length);

    // use the random index above and the array of hidingPlaces to get a random hiding place string
    return hidingPlaces[index];
    // return that random hiding place string
}

function handleGuess(userGuess, correctSpot) {
    // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face

}