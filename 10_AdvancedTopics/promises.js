const promiseone = new  Promise(function(resolve,reject){
//Do an async task
//DB calls, cryptography, Network

setTimeout(function(){
console.log('Async task is complete ');
resolve()
},1000)

})

// promise is created and now we need to consume

promiseone.then(function(){
    console.log("promise is consumed");
})

// you can do this in one part only

new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved");
})

// promise 3

const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@gmail.com"})
    },1000)
})

promisethree.then(function(user){
    console.log(user);
})

// promise 4

const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username : "Anand",password:"123"})
        }else{
            reject('ERROR: Something went wrong ');
        }
    },2000)
})

const username = promisefour.then(user => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

console.log(username)

// promise five

const promiseFive = new Promise(function(reject,resolve){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript", password:"123"})
        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
   const response = await promiseFive
   console.log(response);
}

consumePromiseFive();

async function getAllUsers(){
    try{
        const response = fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
    }catch(error){
        console.log("E: ", error);
    }
}

getAllUsers();