// function with default values
let myCheckFunction1 = (number1:number =12,number2:number = 13):number => {
    console.log(number1);
    
    return number1+number2
}
// Functional with optional values
let myCheckFunction = (number1:number =12,number2?:number):number => {
    console.log(number1);
    
    return number1+number2
}

//Rest Parameters
let mycheckFunction3 = (name:String,...nextData:string[]):String =>{
    return name+" "+nextData.join(" ");
}
console.log(mycheckFunction3("aa","bb","cc","dd"));
