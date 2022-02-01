// dus we maken een lijst van op zijn minst 3 mensen (artiesten, voetballers of filmsterren)
// elk object met 3 key's hebben (dus 3 verschillende relevante eigenschappen)
// bv naam, leeftijd, genre voor artiest, of naam, leeftijd, ploeg voor voetballer
// print elke artiest uit in de console
var objectVoorbeeld1 = { eigenSchap: "hallo", soort: "object" };
// als je verschillende objecten maakt, zorg dat elk een andere naam heeft
var objectVoorbeeld2 = { eigenSchap: "hallo", soort: "object" };
// lijst maken van alle objecten (maar moeten er 3 zijn dus dit is niet goed)
var lijstObjecten = [objectVoorbeeld1, objectVoorbeeld2];
// alle objecten uitprinten - druk op F12 om developer tools te zien,
for (let object of lijstObjecten) {
    // afhankelijk van als je artiest of voetballer hebt gekozen, kan je hier ofwel
    // let artiest of lijstArtiesten zetten of let voetballer of lijstVoetballers
    console.log(object);
}
// het woord object wil ik niet terugvinden in jullie code
