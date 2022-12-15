// // 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
// function printSimpleGreeting () {
//     console.log ("Hey, y'all.");
// }
// printSimpleGreeting ();
// printSimpleGreeting ();
// printSimpleGreeting (); 


// // 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
// function printGreeting(name) {
//     console.log(`Hola, ${name}!`);
// }
// printGreeting ("Aladdin"); 

// // 3: Write a function that has 3 parameters: a string and two numbers. The String will be the name of a company, and the numbers will represent the minimum and maximum of a pay range for a posted job. 
// // The function should print out a sentence that includes the name of the company and the range itself (if the numbers passed in are 90000 and 110000, the pay range is 20000).
// // name of company, minimum pay range, maximum pay range 

// function payRange(num1, num2) {
//     var sum =num1 + num2;
//     console.log(sum);
// } 
// payRange(1000, 4000)
// console.log('The pay range for the Human Fund is 5000.')

// function companyPayRange (num1, num2) {
//     var avg = num1 + num2
// }
//     companyPayRange(1000, 3000);
//     // console.log(`The pay range for the Human Fund is ${companyPayRange}`)

   
// // function companyPayRange(num1, num2) {
// // var avg = num1 + num2;
// //     return avg
// //     console.log(avg);
// // }

// // var num1 = 1000;
// // var num2 = 4000;
// // companyPayRange = avg( num1, num2);

// // console.log (`The pay range for the Human Fund is ${companyPayRange}.`); 



// 4: Write a function that satifies the following interaction pattern:
// function checkStock ()
//are the numbers correlated to the function or to determine if it's low in stock or not 
// Your checkStock function will only ever print running low for any productNum less
//  than or equal to 3. The last two statements, out of stock and the final 
//  running low will never run. Can you figure out why?
function checkStock(productNum, productName) {
if (productNum === 4) {
    console.log(`${productName} is stocked.`);
// } else if (productNum >= 3) {
//     console.log(`${productName} running LOW.`); 
} else if (productNum <= 1) {
    console.log(`${productName} - OUT of stock!`);
} else {
    console.log(`${productName} running LOW.`);
    }
}

// checkStock("coffee", "tortillas", "cheese");

checkStock(4, "Coffee"); 
// // => "Coffee is stocked"

checkStock(3, "Tortillas");
// // => "Tortillas - running LOW"

checkStock(0, "Cheese");
// // => "Cheese - OUT of stock!"

checkStock(2, "Salsa");
// // => "Salsa - running LOW"

