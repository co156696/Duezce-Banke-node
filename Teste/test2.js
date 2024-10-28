
console.log("Klausur 20240930")
// 
// Bearbeiten Sie alle Aufgaben nach Vorgabe. 
// Deklarieren Sie stets Objekte mit Eigenschaften und sprechenden Namen und geben Sie einen Antwortsatz auf der Konsole aus.


console.log("Aufgabe 1")
// 1a) 
// Es soll das Volumen eines Würfels in Quadratzentimeter (cm3) ausgegeben werden. Arbeiten Sie mit einem Objekt und sprechenden Eigenschaften.
// Geben Sie das Volumen in einem Antwortsatz auf der Konsole aus.

class Wuerfel{
     constructor(){
          this.seitenlage 
     }
    }

let wuerfel= new Wuerfel

wuerfel.seitenlage = 6
 
let volumen = wuerfel.seitenlage*wuerfel.seitenlage*wuerfel.seitenlage
console.log('das volumen des wuerfels mit der seitenlage' + wuerfel.seitenlage+ 'beträgt' + volumen + 'cm^3')

// 1b 
// Wenn das Volumen 1000 oder mehr Quadratzentimeter beträgt soll eine Meldung auf der Konsole ausgegeben werden, die besagt,
// dass das Volumen 1000 oder mehr Quadratzentimeter beträgt.

if(volumen){
    console.log(' das volumen des würfels beträgt 1000cm^3 oder mehr')
}else{
   console.log('') 
} 



// 1c) - Nur Klausurschreiber
// Nutzen Sie die Math-Bibliothek .sqrt(), um die Wurzel aus dem Volumen zu errechnen. Geben Sie die Kantenlänge in einem Antwortsatz aus.



console.log("Aufgabe 2")
// Sie werden beauftragt ein Schulverwaltungsprogramm für das BKB zu erstellen. Konkret sollen Sie sich in einem ersten Schritt
// die Zeugnisse vornehmen. Deklarieren, Instanziieren und Initialisieren Sie ein Zeugnisobjekt, 
// in dem Sie neben "Deutsch", "Mathe" und "Englisch" 5 weitere, geeignete Eigenschaften deklarieren. 
 



// 2a)
// Definieren Sie die class
// 2b)
// Deklarieren, Instanziieren und Initialisieren Sie ein Objekt von der Zeignisklasse.

class zeignisklasse{
      constructor()}
         this.Betriebswirtschaftslehre
         this.Volkswirtschaftslehre
         this.Wirtschaftsinformatik
         this.Speziellewirtschaft
         this.Biologie
    {
}

// 2c)
// Geben Sie die Eigenschaftswerte Ihres Objekts auf der Konsole aus.


//2e)
let lisaNote = 3;
let tomNote = 4;
let maxNote = 5;

// Vergleiche die Durchschnittsnote mit den Noten von Lisa, Tom und Max
let eigeneNote = zeugnis.durchschnittsnote;
let minNote = Math.min(lisaNote, tomNote, maxNote);

if (eigeneNote < lisaNote && eigeneNote < tomNote && eigeneNote < maxNote) {
    console.log("Ihre Durchschnittsnote ist besser als die von Lisa, Tom und Max.");
    zeugnis.klassenbeste = true; // Klassenbeste
} else if (eigeneNote > lisaNote && eigeneNote > tomNote && eigeneNote > maxNote) {
    console.log("Ihre Durchschnittsnote ist schlechter als die von Lisa, Tom und Max.");
} else {
    console.log("Ihre Durchschnittsnote liegt zwischen den Noten von Lisa, Tom und Max.");
}

// Ausgabe des Zeugnis-Objekts
console.log(zeugnis);


console.log("Aufgabe 3")
// Es gilt:
// Rabatt = Listenpreis · Rabatt-Prozentsatz : 100 %
// Netto-Rechnungsbetrag = Listenpreis – Rabatt
// MwSt = Netto-Rechnungsbetrag · MwSt-Prozentsatz : 100 %
// Brutto-Rechnungsbetrag = Netto-Rechnungsbetrag + MwSt
// Skonto = Brutto-Rechnungsbetrag · Skonto-Prozentsatz : 100 %
// Zahlungsbetrag = Brutto-Rechnungsbetrag – Skonto

// Der Netto-Rechnungsbetrag liegt bei 370,00 EUR.
// Die Mehrwertsteuer hängt von der Produktart ab: 
// * Lebensmittel, Zeitung und Buch: 7%
// * alles andere: 19%
// Dieses Produkt hat die Produktart "Zeitung"

// 3a)
// Deklarieren, Instanziieren Sie ein Objekt mit allen genannten Eigenschaften. 

class Zeitung{
    constructor()}
     this.Rabatt
     this.Nettorechnungsbetrag
     this.MwST
     this.MwSTprozentsatz
     this.Bruttorechnungsbetrag
     this.Skonto
     this.Zahlungsbetrag
     this.Skontosprozentatz
     this.Rabattprozentsatz
     this.Listenpreis
{
}

let zeitung = new Zeitung()
// 3b
// Initialisieren Sie Ihr Objekt mit den gegebenen Werten. 
// Geben Sie die einen Anwortsatz auf der Konsole aus.

//zeitung.Rabatt= listenpreis*Rabatt-Prozentsatz/ 100%
zeitung.Nettorechnungsbetrag = 370 EUR
//zeitung.MwST = Nettorechnungsbetrag*MwST-Prozentsatz/100%
//zeitung.Brutto = Nettorechnungsbetrag + MwST
//zeitung.Skonto = Bruttorechnungsbetrag* Skonto-Prozentsatz/ 100%
//zeitung.zahlungsbetrag = Bruttorechnungsbetrag - Skonto
zeitung.Art = "Zeitung"
if(zeitung.Art === "Zeitung" || zeitung.Art === "Lebensmittel" || zeitung.Art === "Buch"){
    zeitung.Mehrwertsteuersatz = 0.07

}else{

    zeitung.Mehrwertsteuersatz = 0.19

}

console.log("der mwst satz beträgt: " + zeitung.Mehrwertsteuersatz)
console.log("produktart: " + zeitung.Art)

// 3c)
// Berechnen Sie die MwSt in einer sprechenden Variablen. Geben Sie einen Anwortsatz auf der Konsole aus.

zeitung.Mehrwertsteuersatz= zeitung.Nettorechnungsbetrag * zeitung.Mehrwertsteuersatz
console.log("mehrwertsteuer: " + zeitung.Mehrwertsteuersatz)



// 3d)
// Berechnen Sie den Eigenschaftswert des Brutto-Rechnungsbetrags. 
// Wenn die Produktart sich ändert, muss Ihre Berechnung sich anpassen.
// Geben Sie den Wert in einen Anwortsatz auf der Konsole aus.

zeitung.Bruttorechnungsbetrag = zeitung.Nettorechnungsbetrag + zeitung.Mehrwertsteuersatz






