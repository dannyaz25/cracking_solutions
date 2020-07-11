var array1=[4,5,7,8];
var array2=[1,4,7,10];
var target=13;
function parSum(array1,array2,target){
let i=0,j=array2.length-1;
let par =[];
while(i<array1.length && j>=0){
    let v1=array1[i];
    let v2=array2[j];
    let c=v1+v2-target;
    console.log(c);
    if(estaCerca(c)){
        par[0]=v1;
        par[1]=v2;
        return par;
    }
    if(c >=0) i++;
    else  j--;
}
}

function estaCerca(n){
    if(n ===0 || n ===1 || n ===-1) return true;
    return false;
}


let result=parSum(array1,array2,target);
console.log(result);