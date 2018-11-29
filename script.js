var losNum = function(min,max){
    var minimal = min;
    var maximal = max;
    console.log(minimal);
    if(min<max){
        var liczba = Math.floor(Math.random()*max);
        if(liczba>min){
            return(liczba);
        }else{
            losNum(minimal,maximal);
        }
    }else{
        return(10000);
    }
}
console.log(losNum(3,10));