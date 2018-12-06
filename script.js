const lista = document.querySelectorAll('[data-key]');
let lastKey;

var losNum = function(min,max){
 return( Math.round(Math.random() * (max - min)) + min);
}

var losKey = function(){
    var index = Math.floor(Math.random() * lista.length);
    var key = lista[index];
    if (key === lastKey) {
        return losKey;
    }
    lastKey = key;
    return key
}
var fireKey = function(){
    var key = losKey();
    key.classList.add('fire-key');
    console.log(key.classList);
    
};
fireKey();