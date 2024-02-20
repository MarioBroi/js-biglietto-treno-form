//console.log("Console Test");

//- Collect of the client data Km and Age
const buttonElement = document.getElementById('btn')
buttonElement.addEventListener('click', function () {
    const km = document.getElementById('km').value;
    const age = document.getElementById('age').value;
    const name = document.getElementById('cName').value;
    console.log(km, age); //km and age
    //- Calculate of the standard price for the ticket (km * 0.21)
    const pricePerKm = 0.21;
    const discount20 = 0.2;
    const discount40 = 0.4;
    let ticketPrice = (km * pricePerKm);
    console.log(ticketPrice); //Price of the ticket

    //- Client age verification
    if (age < 18) {
        //- IF the client is under 18 yh i will apply a 20% discount on the standard ticket price
        ticketPrice = ticketPrice - ticketPrice * discount20;
    } else if (age > 65) {
        //- ELSE IF the client is over 65 yh i will apply a 40% discount on the standard ticket price
        ticketPrice = ticketPrice - ticketPrice * discount40;
    }
    //- ELSE the client will pay the standard price
    const finalPrice = ticketPrice.toFixed(2);
    //- Print of the ticket price in the console
    console.log(`Your final ticket price is: ${finalPrice}`); //Final ticket
    document.getElementById('pName').innerHTML = name;
    document.getElementById('fTicket').innerHTML = finalPrice;
});