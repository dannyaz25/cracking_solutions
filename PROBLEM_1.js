var array=[10,15,3,7];
array.sort((a,b)=>a-b);
var k=19;
function sumExists(){
    let i=0,j=array.length-1;
    while (i<j){
        if(array[i]+array[j]>k) j--;
        if(array[i]+array[j]<k) i++;
        if(array[i]+array[j]===k) return true;
        
    }
    return false;
}
console.log(sumExists());