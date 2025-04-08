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
    else 
        return "invalid operator";
}  

console.log("output =",cal(2,3,'*'));
