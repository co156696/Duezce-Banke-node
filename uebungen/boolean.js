console.log("booleans")
console.log("========")
console.log("boolsche werte sind warheitswerte, die wahr oder falsch annehmen")

//warheitswerte kennen wir bereits aus der wenn funktion 

console.log("aufgabe 01")

if(true){
 console.log("der asudruck ist falsch")
}else{
    console.log("der ausdruck ist wahr")
}
   
//wiel in deiser prüfung die übung immer wahr ist wird immer die anweisung hinter if ausgeführt die anweisung else wird niemals ausgeführt 
console.log("aufgabe 02")

//in der aufgabe 2 soll der ausdruck dynamisch entweder true oder false sein

let a = 5 

if(a>6){
    console.log("das ist wahr")
}else{
    console.log("Das ist falsch")
}
// hier wird geprüft ob wahr ode falsch ist 
// größer als
//kleiner als
// größer oder gleich
//kleiner oder gleich 

console.log("aufgabe 03")

//wenn die schülerin 16 oder jünger ist,muss sie "fahrradfahren"
//wenn sie 17 ist, darf sie "begleitet fahren"
//wenn sie 18 ist darf sie "fahren"
//vorraussetzung für das autofahren ist der führerschein 
//oder bedeutet ||
let alter = 18 
let fuehrerschein= true 

let alter = 16 
if(alter<=16 || fuehrerschein === false ){ //wenn die schülerin 16 ist oder keinen führerschein hatoder beides,  dann fahrrad
    console.log("fahrradfahren")
}

if (alter=== 17 && fuehrerschein === true){ // wennn 17 und führerschein dann begleitetes fahren 
    console.log("begleitet fahren")
}

if(alter >17 && fuehrerschein === true ){    // wenn über 17 und führerschein (18,19,20....) dann fahren 
    console.log("fahren")
}

// andere lösung 

if(fuehrerschein){     // fuehrerschein isz bereits true oder false es bedarf keines vergleichopertaors

    if(alter ===17){
        console.log("begleitet fahren")
    }

}else{
console.log ("fahrradfahren")

}

console.log( Aufgabe 4)

let zahl = 0

if(true){
    console.log("die zahl" + zahl + nimmt dne boolischen wert false an )
   }else{
       console.log("die zahl" " + zahl + " nimmt den boolischen wert false an)
   }

   //pos zahlen sind true 
   //die ziffer 0 ist false
   //negative zahlen sind true

   console.log ('aufgabe 5')
   // auf einem sparkonto soll bei einem positiven kontostand auf der console stehen: "zinsen berechnen" wenn kein guthaben existiert :"kein angaben"

   function ueberpruefeKontostand(kontostand) {
    if (typeof kontostand !== 'number' || isNaN(kontostand)) {
        console.log("Ungültiger Wert");
    } else if (kontostand > 0) {
        console.log("Zinsen berechnen");
    } else {
        console.log("Keine Angaben");
    }
}

 console.log(' aufgabe 6')
 // Wenn punkte zwischen 90 und 100 liegt (einschließlich), gib "Ausgezeichnet" aus.
//Wenn punkte zwischen 70 und 89 liegt (einschließlich), gib "Gut" aus.
//Wenn punkte zwischen 50 und 69 liegt (einschließlich), gib "Befriedigend" aus.
//Wenn punkte zwischen 30 und 49 liegt (einschließlich), gib "Ausreichend" aus.
//Wenn punkte unter 30 liegt, gib "Nicht bestanden" aus.
//Falls punkte kein gültiger Wert ist (d.h. keine Zahl oder eine negative Zahl), gib "Ungültiger Wert" aus.

function bewertePruefung(punkte) {
    if (typeof punkte !== 'number' || isNaN(punkte) || punkte < 0) {
        console.log("Ungültiger Wert");
    } else if (punkte >= 90 && punkte <= 100) {
        console.log("Ausgezeichnet");
    } else if (punkte >= 70 && punkte < 90) {
        console.log("Gut");
    } else if (punkte >= 50 && punkte < 70) {
        console.log("Befriedigend");
    } else if (punkte >= 30 && punkte < 50) {
        console.log("Ausreichend");
    } else {
        console.log("Nicht bestanden");
    }
}
 // Tests
bewertePruefung(95);  // Ausgabe: Ausgezeichnet
bewertePruefung(85);  // Ausgabe: Gut
bewertePruefung(65);  // Ausgabe: Befriedigend
bewertePruefung(45);  // Ausgabe: Ausreichend
bewertePruefung(25);  // Ausgabe: Nicht bestanden
bewertePruefung("Test");  // Ausgabe: Ungültiger Wert
bewertePruefung(-10);  // Ausgabe: Ungültiger Wert