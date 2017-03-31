//first assignment - create buttons

//first button that says "I'm Right"
function buttonLog(event) {
  var rightMessage = document.getElementById("rightmessage");
  rightMessage.textContent="I'm Right!";
  console.log("I'm Right!");
  console.log(event);
};
var button = document.getElementById("right-button");
console.log(button)

button.addEventListener("click", buttonLog);

//second button that says "No I'm right!"
function noButtonLog(event) {
var noMessage = document.getElementById("nomessage");
  noMessage.textContent="No I'm Right!";
  console.log("No I'm Right!");
  console.log(event);
};
var nobutton = document.getElementById("no-button");

nobutton.addEventListener("click", noButtonLog);

//second assignment = "Do Not Hover Me"
