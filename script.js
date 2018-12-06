var losNum = function(min,max){
 return( Math.floor(Math.random() * (max - (min + 1) + min)));
}
console.log(losNum(3,10));