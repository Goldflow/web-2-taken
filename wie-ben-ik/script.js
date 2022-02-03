'use strict';
// typ "log" om automatisch console.log te laten genereren
// we gaan de h1 selecteren en dan de achtergrondkleur veranderen
// h1Element (camelCase notatie)
let h1Element = document.querySelector('.h1');
// we geven h1Element een nieuwe achtergrondkleur
h1Element.style.backgroundColor = 'blue';


// 1. we willen een lijst van alle elemnten van de gekozen klasse 
let klasseNaam = 'activiteit'; // naam van variabele mag zelfde blijven
// hier komt de naam van je rij, schrijf je tussen aanhalingstekens
// vb voor variablee derdeRij
let activiteiten = document.getElementsByClassName(klasseNaam);
// de lijst van elementen uitprinten
// console.log(activiteiten);
//
for (let element of activiteiten) {
    console.log(element);
    // we gaan achtergrondkleur voor elk element aanpassen
    element.style.backgroundColor = 'purple';
}

