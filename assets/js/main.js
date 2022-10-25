/* 
*Snack1*
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).
*Snack2*
Generatore di “nomi cognomi” casuali del grande gatsby:
Abbiamo una lista di nomi e una lista di cognomi, e da queste vogliamo generare una "falsa" lista di invitati, dove ogni invitato nella lista, è l'unione di un "nome" e un "cognome" delle liste precedentemente dette, scelti in modo casuale.
*Snack3*
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione (indice) dispari
*Snack4 (Bonus)*
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro. */

/* Snack-1/ */

/* et numero = parseInt(prompt("Inserici un nemero"));

if(numero % 2 === 0){

    console.log(numero);

}else{

    numero += 1
    console.log(numero);

}
 */

/* Snack-2/ */

/* 
const nomi = ["Edoardo", "Marco","Massimo","Silvio"];

const cognomi = ["Rossi","Verdi","Bianchi","Neri"];

console.log(nomi[parseInt(Math.random() * nomi.length)])

let nomeRandom = "";

let cognomeRandom = "";

let nomiCognomiRandom = []

for(let i = 0; i < 10; i++){

    nomeRandom = nomi[parseInt(Math.random() * nomi.length)]

    cognomeRandom = cognomi[parseInt(Math.random() * cognomi.length)]

    let nomeCompleto = `${nomeRandom} ${cognomeRandom}`

    nomiCognomiRandom.push(nomeCompleto)

    console.log(nomiCognomiRandom)

}
 */

/* Snack-3 */
/* 
let numeriInteri = [1 , 2 , 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

let somma = 0

for(let i = 0; i < numeriInteri.length; i++){

    if(numeriInteri[i] % 2 === 0) {

    console.log("Ciao sono un numero pari")
    
    }else{

        somma += numeriInteri[i]

        console.log( somma )

    }
    
} */

/* Snack-4 */

























