console.log("A");
console.log("n");
console.log("a");
console.log("n");
console.log("d");
// to print and i have written like this but what i want to write this 100 times ...it will take a lot of time 
// so to make things easy we use funtion we code things one time and use as many times we need

//Syntax
/*function sayMyName(){

}*/
function sayMyName(){
    console.log("A");
    console.log("n");
    console.log("a");
    console.log("n");
    console.log("d");
}

sayMyName();//sayMyName is reference and ()..is a scope

/*function addTwoNumbers(number1, number2){//(number1, number2)...parameters
    console.log(number1+number2);
}*/

function addTwoNumbers(number1, number2){

    let result=number1+number2;
    return result;
}

addTwoNumbers(3,7);//(3,7) .. are called arguments
//console.log(addTwoNumbers(3,7));

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Anand"));

//SHOPING CART

function calculateCartPrice(...number1){ //   ... this dot dot dot which is used in the function is called rest operator and also spread operator but depending on the situation
    return number1;
}

// how to pass object

const user = {
    username: "Anand",
    prices: 200
}
 
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user);

