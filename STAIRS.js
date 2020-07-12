var array =[];
var number=10;
function numberOfPossibilities(n) {
    if(n ===1 || n===2) return 1;
    a=1;
    b=2;
    for(let i=n ;i>2 ;i--){
        let s= a+b;
        a=b;
        b=s;

    }
    return b;
}

console.log(numberOfPossibilities(number));