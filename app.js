window.onload = function() {


const calcButtons = document.getElementsByTagName("button")
let values = document.getElementsByClassName("item").innerHTML

// calcButtons.addEventListener("click", function() {
//   console.log("hello world" + values);
  
// })

for(let i=0; i<calcButtons.length; i++) {
  if(calcButtons[i].matches('item-1')) {
    console.log("the " + calcButtons[i].textContent + ' is a number');
    
  }
}
}



var birds = document.getElementsByTagName('li');

for (var i = 0; i < birds.length; i++) {
  if (birds[i].matches('.endangered')) {
    console.log('The ' + birds[i].textContent + ' is endangered!');
  }
}