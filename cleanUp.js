// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1:
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion();
// // I added semicolons to the end of the console log and calling the condition to follow the convention/best practice
// // everything else looks okay

// // EX 2:

function addThreeNums(first, second, third) {
var sum = first + second + third; 
  console.log(sum);
  }

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);

//added semicolon after var sum to follow convention
//indented console.log for formatting 
// moved the bracket to the left for formatting 

// // EX 3:
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();

// completed the word function 
//added a space after the () and the { for formatting

// //  EX 4:
function average(num1, num2) {
    var sum = num1 + num2;
    var avg = sum / 2;

  console.log(`the average is: ${avg}.`);
  }

  //moved the { next to the end of the function for syntax
  // spaced the first var for formatting
  // moved the period into the back tick in console.log for syntax 
  //added semicolon to the end of console log for best practice
  // it should have no output because there were no numbers, but also give no error messages 