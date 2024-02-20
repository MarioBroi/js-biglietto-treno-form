//console.log("Console Test");

//- Collect of the client data Km and Age
const buttonElement = document.getElementById('btn')
buttonElement.addEventListener('click', function () {
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    console.log(km, age); //km and age
    //- Calculate of the standard price for the ticket (km * 0.21)
    const pricePerKm = 0.21;
    const discount20 = 0.2;
    const discount40 = 0.4;

    let ticketPrice = (km * pricePerKm);
    console.log(ticketPrice); //Price of the ticket
});



//- Client age verification
//    - IF the client is under 18 yh i will apply a 20% discount on the standard ticket price
//    - ELSE IF the client is over 65 yh i will apply a 40% discount on the standard ticket price
//    - ELSE the client will pay the satndard price
//- Print of the ticket price in the console