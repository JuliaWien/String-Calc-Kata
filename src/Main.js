const { stringCalc } = require("./sum")
// reguire läd die angegebene Datei Minute 38 Video TDD
// ohne {} wird das ganze Objekt als Funktion verwendet
// Man nimmt aus dem Objekt das Attribut stringCalc raus.
//The require() method is used to load and cache JavaScript modules.
//So, if you want to load a local, relative JavaScript module into a Node.js application, 
//you can simply use the require() method.


module.exports = {
    main: function (log, processObj) {
        // console.log("MAIN TEST")
        // console.log("ARGUMENTE an MAIN: " + processObj.argv)

        for (let i = 2; i < processObj.argv.length; i++) {
            log(stringCalc(processObj.argv[i]))
            //log('StrCalc(' + processObj.argv[i] + ') --> ' + stringCalc(processObj.argv[i]))

        }
    }
}


for (let i = 2; i < process.argv.length; i++) 
    console.log('StrCalc(' + process.argv[i] + ') --> ' + stringCalc(process.argv[i]))