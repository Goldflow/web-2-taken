let objectVoorbeeld1 = { eigenSchap: "hallo", soort: "object 1" };
let objectVoorbeeld2 = { eigenSchap: "hi", soort: "object 2" };
let objectVoorbeeld3 = { eigenSchap: "hey", soort: "object 3" };
let lijstObjecten = [objectVoorbeeld1, objectVoorbeeld2, objectVoorbeeld3];

// voorbeeld van loop
// for (let i = 0; i < 5; i++) {
//    console.log(i);
// }

// print hier aantal elementen uit in je array
console.log(lijstObjecten.length);

// loop, die evenveel keer wordt uitgeprint als elementen in je lijst
// print het eerste element van de lijst uit
for (let i = 0; i < lijstObjecten.length; i++) {
    console.log(lijstObjecten[i]);    
}

// pas de loop aan zodat je elk element 1 keer uitprint

// schrijf een functie die elke eigenschap/property van je object zal uitprinten
// vb.

