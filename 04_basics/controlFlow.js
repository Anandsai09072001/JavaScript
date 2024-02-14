// for of

const arr=[1,2,3,4,5];

for(const num of arr){
    console.log(num);
}

// Chaining

const myNumbers = [1,2,3,4,5,6,7,8,9,10];

const newNums = myNumbers
                        .map((num) => num*10)
                        .map((num) => num+1)
                        .filter((num) => num>=40)

console.log(newNums)