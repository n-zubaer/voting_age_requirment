// creating a voting requirment ages system

let userInput = prompt("Enter Your Age");
let age = +userInput;

if (age >= 0 && age <= 17) {
  alert("Not allowed for voting");
} else if (age >= 18 && age <= 75) {
  alert("Allowed for votting");
} else if (age >= 76 && age <= 100) {
  alert("Expired your votting ages");
} else {
  alert("Not accepted ");
}

