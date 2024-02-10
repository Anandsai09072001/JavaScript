const myArr = new Array(1,2,3,4,5);

//to add the value we use push and to delete we use pop

//myArr.push(6);
//myArr.pop;

//unshift is to used to insert the element in first index
//myArr.unshift(9);

//myArr.includes(0)--> gives the value in boolean
// myarr.indexOf(3)--> gives index

// const newArr = myArr.join() ... this funtion will join two array and convert its type to tostring

// slice, splice 

//slice original array ko manipulate nahi karta or myArr.slice(1,3) is ka matlab index 1 aur 2 print hota
// splice me original array manipulate hota aur myarr.splice(1,3) means it will include elements from 1 to 3

const another_array = [1,2,3, [4,5,6], 7, 8,[9,10,11],12];

const real_another_array = another_array.flat(infinity);//in this we can add all this one single array and flat() in the we can give level to what extent

console.log(real_another_array);

// to convert string to array is we use Array.from("Anand");

//let s1=100; 
// let s2 =200;
//let s3= 300;

console.log(Array.of(s1,s2,s3));//we can make array from indiviual elements.

