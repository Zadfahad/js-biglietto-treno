//Ask about the distance in km,
const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km, typeof(km));

//Ask the age of the Passenger,
const age = parseInt(prompt("quanti anni hai?"));
console.log(age, typeof(age));

//discount if possible,
let price = 0.21;
console.log(price); 

let finalprice;

finalprice = price * km;

if (age <=18) {
    finalprice = finalprice - (finalprice * 20 / 100);
}   else if (age >=65) {
    finalprice = finalprice - (finalprice * 40 / 100);
}   else {
    cost = price * km;
}
//final price
document.getElementById('price').innerHTML = finalprice;