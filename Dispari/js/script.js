/*L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo se l'utente ha vinto.*/

//prompt di scelta tra pari o dispari
var sceltaPariDispari = prompt("inserire pari o dispari");

//primpt di scelta da 1 a 5
var scelta1a5 = parseInt( prompt("Inserire un numero da 1 a 5") );

//genero un numero random da 1 a 5
var numeroRandom5 = numeroRandom(5);

// console.log(numeroRandom5);

//sommo il numero utente con quello random
var somma = scelta1a5 + numeroRandom5;

if (sceltaPariDispari != "pari" && sceltaPariDispari != "dispari") {
    alert("errore inserire la parola pari o dispari");
    alert("Ritenti?");
    location.reload();
} else {
    //definisco una variabile se è pari o dispari
    var pariDispari;
    console.log(somma);
    if (numeroDispari(somma) == true) {
        pariDispari = "dispari";
        alert("La somma dei numeri è: " + somma + " che è dispari");
    } else {
        pariDispari = "pari";
        alert("La somma dei numeri è: " + somma + " che è pari");
    }

    //confronto il risultato con quello dell'utente
    if (sceltaPariDispari == pariDispari) {
        alert("Hai vinto");
    } else {
        alert("Hai perso");
    }
}



//creo una funzione che genera un numero N random
function numeroRandom (n) {
    return Math.floor( Math.random()*n +1);
}
//creo una funzione che verifica se un numero è dispari
function numeroDispari (n) {
    if ( (n%2) !=0) {
        return true;
    } else {
        return false;
    }
}