var array=[1,2,3,4,5];
function multiplica(){
    let array2 = [];
   for(let i=0;i<array.length;i++){
       let m=1;
    for(let j=0;j<array.length;j++){
    if(i!=j) m=m*array[j];
    } 
    array2[i]=m;
    }
    return array2;
}
console.log(multiplica());