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