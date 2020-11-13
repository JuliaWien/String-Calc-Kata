const { number } = require("yargs");

function stringCalc(numbers) {
    //Variablen

    var parts, number, result;
    var errText = '';

    //Wenn der String leer ist, liefere leer zurück
    if (numbers === '')
        return '';

    // Zerlegen des Strings per RegEx-Split in Teilwörter
    parts = numbers.split(/,|\n/);
    //console.log(parts)

    result = 0;
    //Aufgabe d mehrere Trennzeichen zulassen
    if (numbers.length >= 4 && numbers[0] === '/' && numbers[1] === '/' && numbers[3] === '\n') {
        var delim = numbers[2];
        parts = numbers.substring(4).split(delim);
    }

    //Teilwortfeld durchlaufen
    for (i = 0; i < parts.length; ++i) {
        if (parts[i] != '') {
            // Ignorieren von mehrfach aufeinanderfolgenden Delimitern
            //Der String wird in Zahl konvertiert.
            number = Number(parts[i]);
            //Aufgabe e bei negativen Zahlen soll eine Exception geworfen werden
            if (parts[i] < 0) {
                if (errText == '')   // Erste negative Zahl des Fehlerstrings
                    errText = parts[i];
                else                // Weitere negative Zahlen
                    errText += ', ' + parts[i]
            }
            //Aufgabe f Zahlen größer 1000 ignorieren 
            else if (number <= 1000) {  // nur Zahlen<=1000 addieren
                result += number;
            }
        }
    }
    if (errText != '')    // Wurden negative Zahlen gefunden?
        throw ('negatives not allowed: ' + errText)

    return result;
}


module.exports =
{
    stringCalc
}