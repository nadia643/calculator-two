window.onload = function() {


const calcButtons = document.getElementById("calcButtons")
let values = document.getElementsByClassName("item").innerHTML

calcButtons.addEventListener("click", function() {
  console.log("hello world" + values);
  
})
}