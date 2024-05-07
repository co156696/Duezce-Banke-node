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
console.log('das ergebnis der addition:' + a+b);

console.log('aufgabe 3');
console.log('gib das ergebnis der subtraktion, multipikation, division von a und b aus')

console.log("subtraktion:"+ (a - b));
console.log("multiplikation:"+ (a * b));
console.log("division:"+ (a / b));

console.log('aufgabe 4');
console.log('der wert c ei das ergebnis der addition a und b');

let c = a+b

console.log("c hat den wert : " +c);

console.log('aufgabe 5')
console.log('a und b sind die seitenlängender katheten eines rechtwinkligen dreiecks. bestimme die länge der hypotenuse c')

let cQuadrat = a*a + b*b;

c = Math.sqrt(cQuadrat);

console.log('die hypotenuse ist '+ c +' lang.');

console.log('aufgabe 6');
console.log('ein kunden legt 100 auf dem sparbuch an. jedes jahr bekommt er 10% zinsen. wie viel bekommt der kunde');
console.log('nach zwei jahren ausgezahlt. beachte den zinseszinseffekt')

// Anfangskapital
let p = 100; // Startkapital des Kunden

// Zinssatz
let r = 0.10; // 10%

// Anzahl der Jahre
let t = 2; 

let kapitalNachEinemJahr= startkapital * (1 + zinssatz);

// Ausgabe des Endbetrags
console.log("kapital nach einem Jahr: "+ KapitalNachEinemJahr + "EUR.");

let kapitalNachzweiJahr= KapitalNachEinemJahr * (1 + zinssatz);
