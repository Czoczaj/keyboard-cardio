const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let offGame = true;
let currentKey;
let score = 0;
let endScore = 2;

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getRandomKey() {
    index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index];
    if (key === lastKey) {
        console.log('The same key!!!')
        return getRandomKey()
    }
    lastKey = key;
    return key;
};


console.log(getRandomKey());
function peep(){
    lastKey.classList.remove('fire-key');
    const time = getRandomNumber(1000,2000);
    const key = getRandomKey();
    currentKey = key;
    key.classList.add('fire-key');
    //setTimeout(peep, time);
    setTimeout(() => {
        if(!offGame)
        {peep()}}, time);
}
function endGame(){
    offGame = true;
    peep();
}
function startGame(){
    window.addEventListener('keydown',checkKey);
    showScore();
    offGame = false;
    peep();
}
function addClass(key,klasa){
    key.classList.add(klasa);
    setTimeout(() => {key.classList.remove(klasa),500})
}
function checkKey(event){
    console.log(event.keyCode);
    currentKey.classList.remove('fire-key');

    if(currentKey.attributes[0].value == event.keyCode){ 
        console.log(score);
        currentKey.classList.add('correct-key');
        score ++;
    menu.innerHTML = `<div class='scoreBoard'>score: ${score}</div>`;

    if(score >= endScore){
            offGame = true;
        }
    }else {
        score --;
    menu.innerHTML = `<div class='scoreBoard'>score: ${score}</div>`;
        console.log(event);
        let wrongKey = document.querySelector('div[data-key="${e.keyCode}"]'); 
        wrongKey.classList.add('wrong-key');
    }
}
function showScore(){
    menu = document.querySelector('.game-menu');
    menu.innerHTML = `<div class='scoreBoard'>score: ${score}</div>`;
}
