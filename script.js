var losNum = function(min,max){
    if(min<max){
        var liczba = Math.floor(Math.random()*max);
        if(liczba>min){
            return(liczba);
        }else{
            losNum(min,max);
        }
    }else{
        return(10000);
    }
}
console.log(losNum(3,10));