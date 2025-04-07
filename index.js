var arr=[1,2,3];

/*
function cal(num1,num2,op) {
    if(op=='+') 
        return num1+num2;
    else if(op=='-') 
        return num1-num2;
    else if(op=='*') 
        return num1*num2;
    else if(op=='%') 
        return num1%num2;
    else if(op=='/') 
        return num1/num2;
}  

console.log("output =",cal(2,3,'*'));
*/

let arr2 = ["winter","summer","rainy"];
arr2.forEach(elemen => {
    console.log(elemen);
}); 

let newarr= arr.map(item => 2*item);
console.log(newarr);

