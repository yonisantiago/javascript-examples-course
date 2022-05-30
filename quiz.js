/* 
 Determina el nombre y tipo de dato para almacenar en variables la siguiente información:

Nombre - string
Apellido - string
Nombre de usuario en Platzi - string
Edad - number
Correo electrónico - string
Mayor de edad - boolean
Dinero ahorrado - number
Deudas - number

*/

let firstName = 'Juan';
let lastName = 'Perez';
let userName = 'juanperez';
let age = 25;
let email = 'juan@perez.com';
let isMajor = true;
let savings = 10000;
let debt = 1000;

let fullName = firstName + ' ' + lastName;
let totalMoney = savings - debt;
console.log(fullName + ' and i have this money saved: ' + totalMoney);



//Functions

// What is a function in JavaScript? 
// A function is a block of code that can be used multiple times.
//when should you use functions?
//when you want to reuse code.
//what is the difference between a parameter and arguments in JavaScript?
//parameters are the values that are passed into the function when it is called.

/* Convert this code into function
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
*/

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

 const myFunction = function(name, lastname, nickname) {
   return `my name is ${name} ${lastname} and my nickname is ${nickname}`;
}
console.log(myFunction('yoni', 'silvesrte', "tuco"));


//Conditionals  if, else, else if
//WHAT IS A CONDITIONAL STATEMENT?
//A conditional statement is a block of code that is used to perform different actions based on different conditions.
//Types of conditionals in JavaScript  and differences
//if, else if, else 
//can i combine functions and conditionals? 
//yes, you can.

//Do the same code that uses switch using if, else if, else
/* const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
 */

const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if( tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if( tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if( tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("No es un tipo de suscripción válida");
}


//using only if 
const tipoDeSuscripcion1 = "Basic";

if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if(tipoDeSuscripcion === "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if(tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if(tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
//using only one conditional and arrays
const subscriptions = ["Free", "Basic", "Expert", "ExpertPlus"];
const mySubscription = "Basic";
const responses = ['Solo puedes tomar cursos gratis', 'Puedes tomar casi todos los cursos de Platzi durante un mes', 'Puedes tomar casi todos los cursos de Platzi durante un año', 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año'];

if (subscriptions.indexOf(mySubscription) >= 0) {
    console.log(responses[subscriptions.indexOf(mySubscription)]);
} else {
    console.log("No es un tipo de suscripción válida");
}

//Cicles /
//What is a cicle in JavaScript?
//A cicle is a block of code that is used to repeat a set of instructions until a certain condition is met.
//Types of cicles in JavaScript
//for, while, do while
//what is an infinite cicle and why is a problem?
// an infinite cicle is a cicle that never ends. it is a problem because it can cause a stack overflow.
//how do i stop an infinite cicle?
//you can use a break statement.
//how do i get the number of times a cicle has been executed?
//you can use a counter variable.

//replicate the code that uses a for cicle using whiles 
/* for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
} */
i = 0;
while (i< 5) {
    console.log("El valor de i es: " + i);
    i++;
}

/*for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
} */
while(i>=2) {
    console.log("El valor de i es: " + i);
    i--;
}

// write a code in js asking the user the result of 2 +2 and congratulate them if they get it right.
const result = prompt("What is the result of 2 + 2?");
if (result === "4") {
    alert("Congratulations, you got it right!");
} else {
    alert("Sorry, you got it wrong.");
}

//Lists / Arrays / Objects / 
//What is a list in JavaScript?
//A list is a collection of items, in this case, strings.
//What is an array in JavaScript?
//An array is a list of items, in this case, strings.
//What is an object in JavaScript?
//An object is a list of key-value pairs, in this case, strings.

//create a function that receive any array as parameter and print the first element
const myArray = ["Juan", "David", "Castro", "Gallego"];
const printFirstElement = function(array){
    console.log(array[0]);
}
printFirstElement(myArray);

//function that prints all elements of an array one by one
const printArray = function(array){
    for(let i = 0; i<array.length; i++){
        console.log(array[i]);
    }
}
printArray([1,2,3,4,5]);

//function that prints all elements of an object one by one
const object = {
    name: "Juan",
    lastName: "Castro",
    age: 25
}

const printObject = function(object){
    for(let key in object){
        console.log(object[key]);
    }
}
printObject(object);