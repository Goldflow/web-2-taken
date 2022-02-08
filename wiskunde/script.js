// alert gaat een popup tonen met een bericht
// ik wil in getal 1, het getal ztten dat de gebruik kiest voor getal 1
let getal1 = prompt('geef het eerste getal');
// ik wil in getal 2, het getal ztten dat de gebruik kiest voor getal 2
let getal2 = prompt('geef het 2e getal');
// getal1 en getal2 zijn een string geworden
// let som = (getal1*1) + (getal2*1); // de som van de getallen hierboven die we gekregen hebben van de gebruiker
// alert(som);

// we moeten getal1 en getal2 vergelijken
let isGetal1KleinerDanGetal2 = getal1 < getal2; //dit geeft als resultaat true or false
//bij 'if' we controleren of het juist of onjuist is
if (isGetal1KleinerDanGetal2) {
    // dit voeren we uit indien juist
    alert('Getal 1 is kleiner dan getal 2');
} else {
    // dit voeren we uit indien fout
    alert('Getal 1 is groter dan getal 2');
}
