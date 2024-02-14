const accountId=123456;
let accountEmail="anand@gmail.com";
var accountPassword="124578";
accountCity="bidar";

//accountId=123489;
// first we are checking wheather we can change const or not by the result we got to know that we cannot
/*
important point to note that do not prefer var to use beacause of issue in block scope and funtional scope
 */
//for delivering the output we use console.log(""); but if we want to print many at one shot then we use console,table([accountId,accountPassword])
console.table([accountId,accountEmail,accountCity]);
//in java script if we declare a variable  and does not allocate its value and try to print it then it will shoe undifined
