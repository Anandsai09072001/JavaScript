const user ={
    username: "Anand",
    loginCount : 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("we got data from data base");
        console.log(`username ${this.username}`); 
    }
}

console.log(user.username);
console.log(user.getUserDetails());

// createing function name truelength which will cut the extra space and return value

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`the length is : ${this.trim().length}`);
}

"Anand    ".trueLength();

// can we change the value of pi? why?

const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descripter);

// by this method we can know that why we cannot change the value.

// example 

const chai = {
    name: 'Masala chai',
    price: 25,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// see the thong is chai is object and name is its property so if you does not mention object and property then it will throw an error

/*Object.defineProperty(chai, 'name', {
   writable: false,
   enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(chai, "name"));*/
 
// getter's and setter's class based syntax

class User{
    constructor(email,password){
        this.email =email,
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }
}

const Anand = new User("Anand@g.com", "123");
console.log(Anand.password);


// using define property object based syntax

function User(email,password){
    this._email = email;
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase();
        },

        set: function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase();
        },

        set: function(value){
            this._password = value;
        }
    })
}

const chai1 = new User("chai@chai.com", "chai");

console.log(chai1.email);

   

