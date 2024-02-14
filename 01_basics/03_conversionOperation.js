let score = "33abc";

//some times value comes from front end so we don't know the type eg: we got 33 as value but it can be string ...etc so to know we are checking typeof

console.log(typeof score);
console.log(typeof(score));
// both the methods are correct

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);//in this case "33abc" while using conversion it get converted but actual value is NAN(not a number)

//"33"=>33
//"33abc"=>NAN
// true=> 1,false => 0

/************************operations**************************************/

// +,-,*,**,/,% operators

//console.log("1"+2+2) => 122 first string is taken so it will consider all elements as string
//console.log(1+2+"2") => 32  

//Premitives 

// 7 types: String,Number, Boolean, null, undefined, Symbol, BigInt

