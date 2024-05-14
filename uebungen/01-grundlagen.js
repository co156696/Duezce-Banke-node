console.log("grundlagen");
console.log("==========");

console.log("Aufgabe 1");
console.log("erstelle zwei variablen namens a und b. initialisiere mit den werten 1 und 2.");


// der wert 1 wird zugewiesen (=) an eine variable namens a.
let a = 1; 
let b = 2; 

// mit dem + operator findet eine string verkettung statt. ein string ist eine zeichenkette, eingerahmt mit hochkommas
console.log('der wert der variablen a ist:'+a );

console.log("Aufgabe 2");
console.log("gib das ergebnis der addition von a und b aus.");

console.log(a+b);
console.log('das ergebnis der addition:' + (a+b));

console.log('aufgabe 3');
console.log('gib das ergebnis der subtraktion, multipikation, division von a und b aus');

console.log("subtraktion:"+ (a - b));
console.log("multiplikation:"+ (a * b));
console.log("division:"+ (a / b));

console.log('aufgabe 4');
console.log('der wert c ei das ergebnis der addition a und b');

let c = a+b;

console.log("c hat den wert : " +c);

console.log('aufgabe 5')
console.log('a und b sind die seitenlängender katheten eines rechtwinkligen dreiecks. bestimme die länge der hypotenuse c')

 let cQuadrat = a*a + b*b;

c = Math.sqrt(cQuadrat);

console.log('die hypotenuse ist '+ c +' lang.');

console.log('aufgabe 6');
console.log('ein kunden legt 100 auf dem sparbuch an. jedes jahr bekommt er 10% zinsen. wie viel bekommt der kunde');
console.log('nach zwei jahren ausgezahlt. beachte den zinseszinseffekt')

console.log("Grundlagen");
console.log("==========");
 
console.log("Aufgabe 1");
console.log("Erstelle zwei Variablen namens a und b. Initialisiere mit den Werten 1 und2")
 
// Der Wert 1 wird zugewiesen (=) an eine Variable namens a.
 a = 1;
 b = 2;
 
// MIt dem Plus-operator findet eine String-Verkettung statt. Ein String ist eine zeichenkette, eingerahmt mit hochkommas.
console.log("Der wert der Variablen a ist:" +a);
 
console.log("Aufgabe 2");
console.log("Gib das Ergebnis der Addition von a und b aus.")
 
// wenn links oder rechts vom Plusoperator ein Sttring steht wird verkettet.
//Wenn links und rechts Zahlen stehen, wird addiert.
console.log(a+b);
console.log("Das ergebnis der addition:"+(a+b));
 
console.log("Aufgabe 3");
console.log("Gib das Ergebniss der Subtraktion, Multiplikation, Division von a und b aus.");
 
console.log("Subtraktion:"+(a-b));
console.log("Multiplikation:"+(a*b));
console.log("Division:"+(a/b));
 
console.log("Aufgabe 4");
console.log("c ist das Ergebnis der Addition von a und b.");
 
c =a + b;
console.log("Der Wert von c ist:" +c);
 
 
 
 
 
console.log("Aufgabe5")
console.log(" a und b sind die Seitenlängen der Katheten eines rechtwinkligen Dtreiecks. Bestimme die Länge der Hypotenuse c")
 
// cQuadrat ist in Kamelhöcker-Notation geschrieben. Das heisst: zuerst ein Kleinbuschtabe. Verbundene Wörter beginnen groß.
cQuadrat= a*a+b*b;
 
//Javascript kiennt eine Bibliothek namens Math in der Bibliothek gibt es eine Funktion namens sqrt. Als Parameter in den runden Klammern erwartet sqrt eine Zahl, aus der dann die Wurzel gezogen wird.
c= Math.sqrt(cQuadrat);
 
console.log("Die Hypotenuse ist" +c+" lang.");
 
console.log('Aufgabe 6');
console.log('Ein Kunde legt 100 Euro auf dem Sparbuch an. Jedes Jahr bekommt er 10% Zinsen. Wie viel bekommt der Kunde');
console.log('nach zwei Jahren ausgezahlt. Beachte den Zinseszinseffekt.');
 
let laufzeit = 2;
let startkapital = 100;
let zinssatz = 0.1;   /* Das Komma ist zur Entwicklungszeit ein Punkt. */
 
let kapitalNachEinemJahr = startkapital * (1 + zinssatz);
 
console.log("Kapital nach einem Jahr: " + kapitalNachEinemJahr + " EUR.");
 
let kapitalNachZweiJahren = kapitalNachEinemJahr * (1 + zinssatz);
 
console.log("Kapital nach zwei Jahren: " + kapitalNachZweiJahren + " EUR.");
 
//let endkapital = Math.pow((startkapital * zinssatz) , laufzeit);
 
let endkapital = startkapital * Math.pow(1 + zinssatz, laufzeit);
 
console.log("Endkapital nach " + laufzeit + " Jahren: " + endkapital + " EUR.");
 
console.log('Aufgabe 7');
console.log('Die Reihe aus der vorherigen aufgabe werden als REihe dargestellt');
 
//
 endkapitalzubeginn = startkapital;
console.log( 'endkapital');
//
endkapitalNachEinemJahr = startkapital * (1 + zinssatz);
console.log ('endkapitalNachEinemJahr');
//
 endkapitalNachZweiJahren = startkapital * (1 + zinssatz);
console.log ('endkapitalNachZweiJahren');


console.log('aufgabe 8')
console.log('in aufgabe 7 wurde die anweisung endkapital.. mehrfach wiederholt')
console.log('um sich tipparbeit zu sparen und die wiederholung der anweisung in der gewümschten häufigkeit durchzuführen nutzt der progarmmierer eine schleife')

starkapital= 100;
endkapital=startkapital;
zinssatz= 0.1;
laufzeit= 3;


for (let i = 0; i < laufzeit; i++) {
    startkapital = endkapital * (1+zinssatz);
    console.log(endkapital);
  }


console.log('aufgabe 9')
console.log('wenn der artikel lebensmittel ist, dannist die MwSt 7%, ansonsten 19%')
console.log('in excel würde das so aussehen: =wenn( A1= lebensmittel;7:19)')

let artikel = 'lebensmittel';
let Mwst = (artikel === "lebensmittel")? 7 : 19;

// der ausdruck ist vergleichbar it excel. in den runden klammern findet die prüfung
// auf wahr oder falsch statt. wenn article === "lebensmittel" wahr ist wird der
//wert vor dem doppelpunkt zurückgegeben. ansonsten der wert hinter doppelpunkt 
// ander als in excelist das einfache gleichheitszeichen 

console.log ('der mehrwertsteuersatz für den artikel ' + artikel + ' beträgt ' + mwstSatz + '%');


console.log('Aufgabe 10');
console.log('Rabattberechnung:');
console.log('Wenn der Gesamtbetrag des Einkaufs größer oder gleich 100 Euro ist, beträgt der Rabatt 20%.');
console.log('Wenn der Gesamtbetrag des Einkaufs zwischen 50 und 99 Euro liegt, beträgt der Rabatt 10%.');
console.log('Ansonsten gibt es keinen Rabatt.');

let purchaseAmount = 120;
let discount;

if (purchaseAmount >= 100) {
    discount = 20;
} else if (purchaseAmount >= 50 && purchaseAmount <= 99) {
    discount = 10;
} else {
    discount = 0;
}

console.log('Der Rabatt beträgt:', discount + '%');
