let message = 'hey! am a javascript developer.'
console.log(message);

// creating a random number

// let randomNumber = Math.random();
// let realint = Math.floor(randomNumber);
// console.log(realint);

let mylist = ['go', 'live', 'exhibit', 'funtion', 'dedicate'];

function pickRandomWord(arrayofwords){
    return arrayofwords[Math.floor(Math.random() * arrayofwords.length)]
}

// console.log (pickRandomWord(mylist));

function insult(){
let adjectives = ['smelling', 'Boring', 'Stupid'];
let bodyParts = ['face','Nose','Head'];
let randomNouns = ['Monkey', 'Fat Head', 'Elephant', 'pig', 'crack head']

let ourInsult = `Your ${pickRandomWord(bodyParts)} is like a ${pickRandomWord(adjectives)} ${pickRandomWord(randomNouns)}`;
// console.log(ourInsult);
document.getElementById('insult-box').innerHTML = ourInsult;
}

function closeWelcome() {
    document.getElementById('welcome').style.display = 'none'
    document.getElementById('app').style.display = 'block'
}
function closeApp() {
    document.getElementById('app').style.display = 'none';
    document.getElementById('welcome').style.display = 'block';
}