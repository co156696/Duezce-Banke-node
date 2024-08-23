/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

'use strict';

const express = require('express');

// Constants
// die nweisungen werden von oben nach unten abgearbeitet. Der Wert 3000 wird von rechts nach links
// zugewiesen an die konstante namens PORT. Das einfache glecihheitszeichen lässt sich also übersetzen mit "...wird zugewiesen"
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

	// res ist die Antwort des Servers an den Browser 
	// send() ist die Anweisung etwas an den Browser zu senden 
	// `hello...´ ist der Wert , der an die Anweisung send() übergeben wird 
	// res.send('Hello remote world!\n');

	// das res objekt kann noch mehr als nur eine zeichenkette an den browser zu senden 
	// Das res Objekt kann mit der funktion render() eine HTML datei an der browser senden
	res.render("index.ejs", {});
});

// mit listen wird der server angewiesen, auf den angegebenen POST und PORT zu lauschen 
app.listen(PORT, HOST);

//mit der Anweisung console.log wird im server administrator auf der 
// Konsole angezeigt, was der server macht. der Programmierer schreibt dazu 
//in die runden klammern den ausdruck der auf  der Konsole angezeigt 
//werden soll. die werte der beiden konstanten HOSt und PORT werden in  den Ausdruck übergegeben
// Ein Verb mit anschließenden  runden  Klammern steht immer für eine Anweisung etwas zu tun  
console.log(`Running on http://${HOST}:${PORT}`);

//mit der funktion requie wir die datei in die klammern eingelesen
require ('./uebungen/boolean.js');
