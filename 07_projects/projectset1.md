# projects related to DOM

## Project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1

```javascript
console.log("Anand");
// the project is about we need to select the color which ever looks good to make background color as of that.

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

// events kya rehate boletoh browser ke ander bohat saara events rehata hai jaise ki cursor ko move karna tab ko band karna ....bohat sare rehate events

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target)

    if(e.target.id === 'grey'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.background =e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'purple'){
      body.style.background = e.target.id;
    }
    if(e.target.id === 'lightblue'){
      body.style.background = e.target.id;
    }
  })


});


```
### project 2 solution 

```javascript

const form = document.querySelector('form');
//this will give you blank value because you need to take value after adding form.addEventListener('submit',function(e))
//const height = parseInt(document.querySelector('#height').value);


form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if(height ===''||height<0 || isNaN(height)){
    results.innerHTML = `please give a valid height ${height}`;
  }else if(weight ===''||weight<0 || isNaN(weight)){
    results.innerHTML = `please give a valid weight ${weight}`;
  }else{
   const bmi = (weight/((height*height)/10000)).toFixed(2);

   //show the results

   results.innerHTML =`<span>${bmi}</span>`
  }

  

})
```

### project 3 solution
```javascript 

const clock = document.getElementById('clock');
// can do by query selector also const clock = document.querySelector('#clock)



setInterval(function(){
  let date = new Date();
 // console.log(date.toLocaleTimeString());
 clock.innerHTML = date.toLocaleTimeString();
},1000)
```

### project 4 solution

```javascript



```