//numeri di chilometri che l utente vuole percorrere,
const km = parseInt(prompt("Quanti chilometri vuoi percorrere?"));
console.log(km, typeof(km));

//eta del passegero,
const age = parseInt(prompt("quanti anni hai?"));
console.log(age, typeof(age));

//controllo se viene applivato lo sconto,
const price = 0.21;
const pricenotdiscounted = (price * km);    

if (age < 18){
     
    const discount = (pricenotdiscounted * 20) / 100;
    
    const discountedprice = pricenotdiscounted - discount;

    console.log(discountedprice);
}

if (age > 65){
     
    const discount = (pricenotdiscounted * 40) / 100;
    
    const discountedprice = pricenotdiscounted - discount;

    console.log(discountedprice);
}