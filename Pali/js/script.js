/*Chiedere all'utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

//prompt per inserire la parola
var parolaUt = prompt("Inserire parola palindroma");
console.log(parolaUt);

//verifico che la parola sia palindroma
if (palindroma(parolaUt) == true) {
    alert("La parola è palindroma");
} else {
    alert("La parola non è palindroma");
}

/*creo una funzione per confrontare le lettere 
e verificare che la parola sia palindroma*/
function palindroma(parola) {
    var caratteri = parola.length;
    for (var i=0; i<Math.floor(caratteri/2); i++) {
        if (parola.charAt(i) == parola.charAt(caratteri -1 -i)) {
            return true;
        } else {
            return false;
        }
    }
}