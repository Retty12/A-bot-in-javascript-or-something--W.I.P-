function startUp() {
  var start = window.prompt("wanna start me up?");

  if (start === "no") {
    window.alert("I'm not starting then have a great day.");
  } 
  
  if (start === "yes") {
    window.alert("Okay starting up!");
    var answer = window.prompt("Okay then! Wanna do math, science, and history?");
  }

  if (answer === "math") {
    var number1 = Math.floor(Math.random() * 200);
    var number2 = Math.floor(Math.random() * 19);
    var mathAnswer = window.prompt("Okay then! what is " + number1 + " + " + number2);
  } 

  if (mathAnswer === number1 || number2) {
    window.alert("Correct :D");
  }

  // I don't know how to make a if for an incorrect answer if you now please help :(
}
startUp();
