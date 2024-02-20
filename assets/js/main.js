//console.log("Console Test");

//- Collect of the client data Km and Age
const km = document.getElementById('km');
const age = document.getElementById('age');
console.log(km, age); //km and age

//- Calculate of the standard price for the ticket (km * 0.21)
//- Client age verification
//    - IF the client is under 18 yh i will apply a 20% discount on the standard ticket price
//    - ELSE IF the client is over 65 yh i will apply a 40% discount on the standard ticket price
//    - ELSE the client will pay the satndard price
//- Print of the ticket price in the console