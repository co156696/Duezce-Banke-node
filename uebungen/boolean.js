console.log("booleans")
console.log("========")
console.log("boolsche werte sind warheitswerte, die wahr oder falsch annehmen")

//warheitswerte kennen wir bereits aus der wenn funktion 

console.log("aufgabe 01")

if(true){
    console.log("der ausdruck ist wahr")
}else{
    console.log("der asudruck ist falsch")
}

console.log("aufgabe 02")

//in der aufgabe 2 soll der ausdruck dynamisch entweder true oder false sein

let a = 5 

if(a>6){
    console.log("das ist wahr")
}else{
    console.log("Das ist falsch")
}

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

