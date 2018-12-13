const buttonsKey = document.getElementsByClassName('key');
let lastKey;
let offGame = true;
let currentKey;
let score = 0;

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
        addClass(currentKey,'correct-key');
        score ++;
    }else {
        score --;
        addClass(currentKey,'wrong-key');
    }
}
peep();